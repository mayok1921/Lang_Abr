// Keon Firebase Authentication configuration
// 1) Create a Firebase Web App.
// 2) Paste the firebaseConfig values below.
// 3) Replace the placeholder in allowedEmails with your Google email.
//
// Firebase Web API keys/config values are identifiers and are expected to be
// present in client-side web apps. Do not put service-account keys or other
// private server credentials in this file.

window.KEON_AUTH_CONFIG = {
  firebaseConfig: {
    apiKey: "AIzaSyAeWaOEC1KQCS9mO7koyOgPuv0uzibDPIc",
    authDomain: "lang-abr.firebaseapp.com",
    projectId: "lang-abr",
    storageBucket: "lang-abr.firebasestorage.app",
    messagingSenderId: "738142768804",
    appId: "1:738142768804:web:406296ec0a705aa6ca2031"
  },

  // Start with only your Google account. Add testers later if you want.
  allowedEmails: [
    "mayok1921@gmail.com"
  ]
};
