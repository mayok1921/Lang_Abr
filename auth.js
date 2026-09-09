import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

const cfg=window.KEON_AUTH_CONFIG || {};
const firebaseConfig=cfg.firebaseConfig || {};
const allowedEmails=(cfg.allowedEmails || []).map(x=>String(x).trim().toLowerCase()).filter(Boolean);
const placeholderConfig=Object.values(firebaseConfig).some(v=>!v || String(v).includes("PASTE_"));
const placeholderAllowlist=allowedEmails.some(v=>v.includes("your_google_email"));

const authError=document.getElementById("authError");
const authStatus=document.getElementById("authStatus");
const signInButton=document.getElementById("googleSignInBtn");

function showAuthError(message){
  if(authError){
    authError.textContent=message;
    authError.style.display="block";
  }
}

function clearAuthError(){
  if(authError){
    authError.textContent="";
    authError.style.display="none";
  }
}

function renderAccount(user){
  const badge=document.getElementById("accountBadge");
  const avatar=document.getElementById("accountAvatar");
  const name=document.getElementById("accountName");
  if(!badge) return;
  badge.style.display="flex";
  if(avatar){
    avatar.src=user.photoURL || "icon-192.png";
    avatar.alt=user.displayName ? `${user.displayName} profile photo` : "Google profile photo";
  }
  if(name) name.textContent=user.displayName || user.email || "Keon user";
}

function isApproved(user){
  const email=(user?.email || "").trim().toLowerCase();
  return !!email && allowedEmails.includes(email);
}

if(placeholderConfig || placeholderAllowlist){
  if(signInButton) signInButton.disabled=true;
  if(authStatus) authStatus.textContent="Firebase setup is required before Google sign-in can be used.";
  showAuthError("Open auth-config.js and add your Firebase Web App configuration plus your Google email.");
}else{
  const app=initializeApp(firebaseConfig);
  const auth=getAuth(app);
  const provider=new GoogleAuthProvider();
  provider.setCustomParameters({prompt:"select_account"});

  try{
    await setPersistence(auth,browserLocalPersistence);
  }catch(error){
    console.warn("Keon could not set local auth persistence:",error);
  }

  window.keonGoogleSignIn=async function(){
    clearAuthError();
    if(signInButton){
      signInButton.disabled=true;
      signInButton.textContent="Signing in…";
    }
    try{
      const result=await signInWithPopup(auth,provider);
      if(!isApproved(result.user)){
        await signOut(auth);
        showAuthError("This Google account is not approved for Keon yet.");
      }
    }catch(error){
      if(error?.code!=="auth/popup-closed-by-user") {
        showAuthError(error?.message || "Google sign-in failed. Please try again.");
      }
    }finally{
      if(signInButton){
        signInButton.disabled=false;
        signInButton.innerHTML='<span class="googleMark">G</span> Continue with Google';
      }
    }
  };

  window.keonSignOut=async function(){
    await signOut(auth);
  };

  onAuthStateChanged(auth,async user=>{
    clearAuthError();
    if(user && isApproved(user)){
      renderAccount(user);
      if(authStatus) authStatus.textContent="Signed in.";
      window.startKeonApp?.();
      return;
    }

    if(user && !isApproved(user)){
      await signOut(auth);
      showAuthError("This Google account is not approved for Keon yet.");
    }

    const badge=document.getElementById("accountBadge");
    if(badge) badge.style.display="none";
    window.lockKeonApp?.();
  });
}

// Keep inline onclick attributes safe before Firebase finishes loading.
window.keonGoogleSignIn=window.keonGoogleSignIn || function(){
  showAuthError("Authentication is still loading. Try again in a moment.");
};
window.keonSignOut=window.keonSignOut || function(){};
