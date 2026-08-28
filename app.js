const DATA={
hiragana:{language:"ja",name:"Hiragana",lessons:[
{title:"A Row",cards:[["あ","a"],["い","i"],["う","u"],["え","e"],["お","o"]]},
{title:"K Row",cards:[["か","ka"],["き","ki"],["く","ku"],["け","ke"],["こ","ko"]]},
{title:"S Row",cards:[["さ","sa"],["し","shi"],["す","su"],["せ","se"],["そ","so"]]},
{title:"T Row",cards:[["た","ta"],["ち","chi"],["つ","tsu"],["て","te"],["と","to"]]},
{title:"N Row",cards:[["な","na"],["に","ni"],["ぬ","nu"],["ね","ne"],["の","no"]]},
{title:"H Row",cards:[["は","ha"],["ひ","hi"],["ふ","fu"],["へ","he"],["ほ","ho"]]},
{title:"M Row",cards:[["ま","ma"],["み","mi"],["む","mu"],["め","me"],["も","mo"]]},
{title:"Y Row",cards:[["や","ya"],["ゆ","yu"],["よ","yo"]]},
{title:"R Row",cards:[["ら","ra"],["り","ri"],["る","ru"],["れ","re"],["ろ","ro"]]},
{title:"W + N",cards:[["わ","wa"],["を","wo/o"],["ん","n"]]}]},

katakana:{language:"ja",name:"Katakana",lessons:[
{title:"A Row",cards:[["ア","a"],["イ","i"],["ウ","u"],["エ","e"],["オ","o"]]},
{title:"K Row",cards:[["カ","ka"],["キ","ki"],["ク","ku"],["ケ","ke"],["コ","ko"]]},
{title:"S Row",cards:[["サ","sa"],["シ","shi"],["ス","su"],["セ","se"],["ソ","so"]]},
{title:"T Row",cards:[["タ","ta"],["チ","chi"],["ツ","tsu"],["テ","te"],["ト","to"]]}]},

kanji:{language:"ja",name:"Kanji",lessons:[
{title:"N5 Set 1",cards:[["日","sun/day"],["月","moon/month"],["火","fire"],["水","water"],["木","tree/wood"]]},
{title:"N5 Set 2",cards:[["金","gold/money"],["土","earth/soil"],["人","person"],["口","mouth"],["目","eye"]]}]},

polish_basics:{language:"pl",name:"Polish Basics",lessons:[
{title:"Greetings",cards:[["Cześć","Hi / Hello"],["Dzień dobry","Good morning / Good day"],["Dobry wieczór","Good evening"],["Do widzenia","Goodbye"],["Dziękuję","Thank you"]]},
{title:"Useful Words",cards:[["Tak","Yes"],["Nie","No"],["Proszę","Please / You're welcome"],["Przepraszam","Excuse me / Sorry"],["Dobrze","Good / Okay"]]},
{title:"Introductions",cards:[["Jak masz na imię?","What is your name?"],["Mam na imię...","My name is..."],["Miło mi","Nice to meet you"],["Jestem z USA","I am from the USA"],["Nie rozumiem","I don't understand"]]}]},

polish_travel:{language:"pl",name:"Travel Polish",lessons:[
{title:"Getting Around",cards:[["Gdzie jest...?","Where is...?"],["Dworzec","Train station"],["Lotnisko","Airport"],["Bilet","Ticket"],["Pociąg","Train"]]},
{title:"Food & Cafés",cards:[["Kawa","Coffee"],["Woda","Water"],["Poproszę...","I would like..."],["Ile to kosztuje?","How much does it cost?"],["Rachunek, proszę","The bill, please"]]},
{title:"Everyday Needs",cards:[["Pomocy!","Help!"],["Łazienka","Bathroom"],["Sklep","Store"],["Otwarte","Open"],["Zamknięte","Closed"]]}]},

polish_foundations:{language:"pl",name:"Polish Foundations",lessons:[
{title:"Pronouns + To Be",cards:[["Ja","I"],["Ty","You"],["On","He"],["Ona","She"],["Jestem","I am"]]},
{title:"Common Verbs",cards:[["Mam","I have"],["Chcę","I want"],["Lubię","I like"],["Idę","I am going"],["Mówię","I speak"]]},
{title:"Simple Sentences",cards:[["Mam kawę","I have coffee"],["Chcę wodę","I want water"],["Lubię Kraków","I like Kraków"],["Mówię trochę po polsku","I speak a little Polish"],["Nie wiem","I don't know"]]}]}
};

const INPUT={
hiragana:[["あお","blue"],["ここ","here"],["すし","sushi"],["ねこ","cat"],["はな","flower/nose"],["ゆめ","dream"],["そら","sky"]],
katakana:[["アイス","ice cream"],["ココア","cocoa"],["スシ","sushi"],["トマト","tomato"]],
kanji:[["日 月 火 水 木","sun, moon, fire, water, tree"],["人 口 目","person, mouth, eye"]],
polish_basics:[["Cześć! Mam na imię Kevin.","Hi! My name is Kevin."],["Dzień dobry. Dziękuję.","Good day. Thank you."],["Nie rozumiem. Przepraszam.","I don't understand. Sorry."]],
polish_travel:[["Poproszę kawę i wodę.","I would like coffee and water."],["Gdzie jest dworzec?","Where is the train station?"],["Rachunek, proszę.","The bill, please."]],
polish_foundations:[["Mam kawę.","I have coffee."],["Chcę wodę.","I want water."],["Mówię trochę po polsku.","I speak a little Polish."]]
};

const SUBJECTS={
ja:[
["hiragana","あ Hiragana","Lessons + cumulative review + input."],
["katakana","カ Katakana","Separate sets + input."],
["kanji","日 Kanji","Meaning, reading, and examples."]
],
pl:[
["polish_basics","🇵🇱 Polish Basics","Greetings, introductions, and useful words."],
["polish_travel","🚆 Travel Polish","Food, transportation, and everyday needs."],
["polish_foundations","📘 Polish Foundations","Common verbs and simple sentence patterns."]
]
};

let settings=JSON.parse(localStorage.getItem("keonSettings")||"null");
let setupLanguage=settings?.language||"ja";
let setupLevel=settings?.level||"none";
let language=settings?.language||"ja";

let subject=language==="ja"?"hiragana":"polish_basics",
lessonType="new",
selected={subject,title:"",cards:[]},
deck=[],idx=0,mode="flash",revealed=false,answered=false,traceOn=false,inputDeck=[],inputIdx=0;

let stats=JSON.parse(localStorage.getItem("stats")||"{}"),
mastery=JSON.parse(localStorage.getItem("mastery")||"{}"),
missed=JSON.parse(localStorage.getItem("missed")||"[]");

let drawing=false,ctx=null;

function id(c,s=selected.subject){return s+"|"+c[0]+"|"+c[1]}
function save(){
localStorage.setItem("stats",JSON.stringify(stats));
localStorage.setItem("mastery",JSON.stringify(mastery));
localStorage.setItem("missed",JSON.stringify(missed));
}

function show(x){
document.querySelectorAll(".screen").forEach(e=>e.classList.remove("active"));
document.getElementById(x).classList.add("active");
if(x==="home"){
languageBadge.textContent=language==="ja"?"🇯🇵 Japanese":"🇵🇱 Polish";
coachText.textContent=coach();
}
}

function chooseSetupLanguage(l){
setupLanguage=l;
document.getElementById("setupJa").classList.toggle("selected",l==="ja");
document.getElementById("setupPl").classList.toggle("selected",l==="pl");
}

function chooseLevel(level){
setupLevel=level;
document.querySelectorAll(".levelBtn").forEach(b=>b.classList.toggle("selected",b.dataset.level===level));
}

function finishSetup(){
language=setupLanguage;
settings={language,level:setupLevel};
localStorage.setItem("keonSettings",JSON.stringify(settings));
subject=language==="ja"?"hiragana":"polish_basics";
selected={subject,title:"",cards:[]};
renderSubjects();
show("home");
}

function changeLanguage(){
setupLanguage=language;
setupLevel=settings?.level||"none";
chooseSetupLanguage(setupLanguage);
chooseLevel(setupLevel);
show("setup");
}

function getM(c,s=selected.subject){return mastery[id(c,s)]??30}

function setM(c,ok){
let k=id(c),d=ok?8:-15;
if(ok&&mode==="draw")d+=5;
if(ok&&mode==="multi")d+=2;
mastery[k]=Math.max(0,Math.min(100,(mastery[k]??30)+d));
save();
}

function allCards(s=subject,n=null){
let a=[];
(DATA[s]?.lessons||[]).forEach((l,i)=>{if(n===null||i<=n)a=a.concat(l.cards)});
return a;
}

function renderSubjects(){
subjectsHeading.textContent=language==="ja"?"Choose Japanese Subject":"Choose Polish Subject";
subjectGrid.innerHTML="";
SUBJECTS[language].forEach(([key,title,desc])=>{
let div=document.createElement("div");
div.className="tile";
div.onclick=()=>selectSubject(key);
div.innerHTML=`<h3>${title}</h3><p>${desc}</p>`;
subjectGrid.appendChild(div);
});
let missedTile=document.createElement("div");
missedTile.className="tile";
missedTile.onclick=()=>selectSubject("missed");
missedTile.innerHTML="<h3>🔥 Global Missed Set</h3><p>Everything you missed.</p>";
subjectGrid.appendChild(missedTile);
}

function selectSubject(s){
if(s==="missed"){
let filtered=missed.filter(x=>DATA[x.s]?.language===language);
selected={subject:"missed",title:"Global Missed Set",cards:filtered.map(x=>[x.f,x.b])};
openPreview();
return;
}
subject=s;lessonType="new";renderLessons();show("lessons");
}

function showLessonType(t){lessonType=t;renderLessons()}
function avg(cards,s=subject){return cards.length?Math.round(cards.map(c=>getM(c,s)).reduce((a,b)=>a+b,0)/cards.length):0}

function renderLessons(){
subjectTitle.textContent=DATA[subject].name+" Learning Path";
tabNew.classList.toggle("activeTab",lessonType==="new");
tabCum.classList.toggle("activeTab",lessonType==="cumulative");
tabInput.classList.toggle("activeTab",lessonType==="input");
lessonList.innerHTML="";

if(lessonType==="input"){
(INPUT[subject]||[]).forEach((x,i)=>{
let div=document.createElement("div");
div.className="panel lesson";
div.onclick=()=>{
selected={subject,title:"Input "+(i+1),cards:allCards(subject)};
inputDeck=[x];
startInputSession()
};
div.innerHTML=`<div>📖</div><div><strong>Input ${i+1}</strong><p>${x[0]} — ${x[1]}</p></div><div>Read</div>`;
lessonList.appendChild(div)
});
return;
}

DATA[subject].lessons.forEach((l,i)=>{
let cards=lessonType==="new"?l.cards:allCards(subject,i),m=avg(cards,subject);
let div=document.createElement("div");
div.className="panel lesson";
div.onclick=()=>{
selected={subject,title:(lessonType==="new"?l.title:"Cumulative through "+l.title),cards};
openPreview()
};
div.innerHTML=`<div>${m>=90?"✅":m>=70?"🟣":"⭕"}</div><div><strong>Lesson ${i+1}: ${lessonType==="new"?l.title:"Review 1-"+(i+1)}</strong><p>${cards.map(c=>c[0]).join(" • ")}</p><div class="bar"><div class="fill" style="width:${m}%"></div></div></div><div>${m}%</div>`;
lessonList.appendChild(div)
});
}

function openPreview(){
previewTitle.textContent=selected.title;
previewText.textContent=`This set has ${selected.cards.length} cards. Keon adapts review based on your mastery.`;
previewCards.innerHTML="";
if(!selected.cards.length){
previewCards.innerHTML="<p>No missed cards for this language yet.</p>";
show("preview");return;
}
selected.cards.forEach(c=>{
let d=document.createElement("div");
d.innerHTML=`<div class="kana">${c[0]}</div><div>${c[1]}</div><div class="small">${getM(c,selected.subject)}%</div>`;
previewCards.appendChild(d)
});
show("preview");
}

function isPolish(s=selected.subject){return DATA[s]?.language==="pl"}

function buildMixedDeck(cards){
let s=[];
cards.forEach(c=>{
let m=getM(c,selected.subject),r=m<50?3:m<80?2:1;
for(let i=0;i<r;i++){
let modes=isPolish() ? ["flash","multi"] : ["flash","multi","draw"];
s.push({card:c,mode:modes[i%modes.length]})
}
});
return s.sort(()=>Math.random()-.5);
}

function startDragoSession(){
if(!selected.cards.length)return alert("There are no cards in this set yet.");
deck=buildMixedDeck(selected.cards);idx=0;revealed=false;show("study");update()
}

function recommendedSubject(){
if(language==="pl") return "polish_basics";
let level=settings?.level||"none";
if(level==="intermediate"||level==="advanced") return "kanji";
if(level==="beginner") return "katakana";
return "hiragana";
}

function startRecommended(){
subject=recommendedSubject();
let lessons=DATA[subject].lessons;
let bestIndex=0;
for(let i=0;i<lessons.length;i++){
if(avg(lessons[i].cards,subject)<75){bestIndex=i;break}
bestIndex=i;
}
selected={subject,title:"Recommended: "+lessons[bestIndex].title,cards:lessons[bestIndex].cards};
startDragoSession();
}

function update(){
if(!deck.length)return;
let it=deck[idx],c=it.card;mode=it.mode;
studyTitle.textContent=selected.title+" - Keon Session";
sessionType.textContent=mode==="flash"?"🎴 Flashcard":mode==="multi"?"🎯 Multiple Choice":"✍️ Trace / Draw";
flashArea.style.display=mode==="flash"?"block":"none";
multiArea.style.display=mode==="multi"?"block":"none";
drawArea.style.display=mode==="draw"?"block":"none";

if(mode==="flash"){
front.textContent=c[0];back.textContent=c[1];back.style.display=revealed?"block":"none"
}else if(mode==="multi"){
buildMC(c)
}else{
traceOn=false;
drawTarget.textContent="Draw: "+c[1].split("|")[0].trim();
drawAnswer.textContent="Answer: "+c[0];
traceChar.textContent=c[0];
traceChar.style.display="none";
traceBtn.textContent="Show Trace Guide";
drawAnswer.style.display="none";
setTimeout(()=>{setupCanvas();clearCanvas()},50)
}
progress.textContent=`Step ${idx+1} of ${deck.length} | Mastery ${getM(c,selected.subject)}%`
}

function flip(){revealed=!revealed;update()}
function next(){idx=(idx+1)%deck.length;revealed=false;answered=false;update()}
function prev(){idx=(idx-1+deck.length)%deck.length;revealed=false;answered=false;update()}
function shuffleDeck(){deck.sort(()=>Math.random()-.5);idx=0;update()}

function record(c,ok){
let k=id(c);
if(!stats[k])stats[k]={seen:0,correct:0,missed:0};
stats[k].seen++;
ok?stats[k].correct++:stats[k].missed++;
setM(c,ok);
if(!ok&&!missed.some(x=>x.k===k))missed.push({k,f:c[0],b:c[1],s:selected.subject});
if(ok&&getM(c,selected.subject)>=75)missed=missed.filter(x=>x.k!==k);
save();
}

function grade(ok){record(deck[idx].card,ok);next()}

function buildMC(c){
mcQ.textContent=c[0];mcFeed.textContent="";
let sourceSubject=selected.subject==="missed"?recommendedSubject():selected.subject;
let pool=allCards(sourceSubject).filter(x=>x[0]!==c[0]),choices=[c];
while(choices.length<4&&pool.length)choices.push(pool.splice(Math.floor(Math.random()*pool.length),1)[0]);
choices.sort(()=>Math.random()-.5);
let box=document.getElementById("choices");box.innerHTML="";
choices.forEach(ch=>{
let b=document.createElement("button");
b.className="choice";b.textContent=ch[1];
b.onclick=()=>answerMC(b,ch,c);
box.appendChild(b)
})
}

function answerMC(b,ch,c){
let ok=ch[1]===c[1];record(c,ok);
document.querySelectorAll(".choice").forEach(x=>{if(x.textContent===c[1])x.classList.add("correct")});
if(!ok)b.classList.add("wrong");
mcFeed.textContent=ok?"Correct.":`Missed it. ${c[0]} = ${c[1]}`;
setTimeout(next,900)
}

function setupCanvas(){
let canvas=drawCanvas,rect=canvas.getBoundingClientRect();
canvas.width=rect.width*devicePixelRatio;canvas.height=rect.height*devicePixelRatio;
ctx=canvas.getContext("2d");ctx.scale(devicePixelRatio,devicePixelRatio);
ctx.lineWidth=8;ctx.lineCap="round";ctx.strokeStyle="#7c3aed";
canvas.onpointerdown=e=>{drawing=true;ctx.beginPath();ctx.moveTo(e.offsetX,e.offsetY)};
canvas.onpointermove=e=>{if(drawing){ctx.lineTo(e.offsetX,e.offsetY);ctx.stroke()}};
canvas.onpointerup=()=>drawing=false;canvas.onpointerleave=()=>drawing=false
}
function clearCanvas(){if(ctx)ctx.clearRect(0,0,drawCanvas.width,drawCanvas.height)}
function toggleTrace(){traceOn=!traceOn;traceChar.style.display=traceOn?"flex":"none";traceBtn.textContent=traceOn?"Hide Trace Guide":"Show Trace Guide"}
function toggleDrawAnswer(){drawAnswer.style.display=drawAnswer.style.display==="none"?"block":"none"}

function startInputSession(){
if(!inputDeck.length)inputDeck=(INPUT[subject]||[]);
if(!inputDeck.length)return alert("No input examples for this section yet.");
inputIdx=0;showInput()
}
function showInput(){
let x=inputDeck[inputIdx];inputText.textContent=x[0];inputMeaning.textContent=x[1];
inputMeaning.style.display="none";
inputNote.textContent="Read what you can. The goal is understanding, not perfection.";
show("input")
}
function showMeaning(){inputMeaning.style.display="block"}
function nextInput(ok){inputIdx=(inputIdx+1)%inputDeck.length;showInput()}

function showDash(){
let cards=selected.cards.length?selected.cards:allCards(subject),
ss=selected.subject||subject,total=0,correct=0;
cards.forEach(c=>{
let s=stats[id(c,ss)]||{seen:0,correct:0};total+=s.seen;correct+=s.correct
});
dashTitle.textContent=(selected.title||DATA[subject]?.name||"Language")+" Dashboard";
totalQ.textContent=total;
acc.textContent=total?Math.round(correct/total*100)+"%":"0%";
avgM.textContent=avg(cards,ss)+"%";
missedN.textContent=missed.filter(x=>DATA[x.s]?.language===language).length;
let weakCards=cards.filter(c=>getM(c,ss)<70);
analysis.textContent=weakCards.length?`Keon says: focus on ${weakCards.slice(0,3).map(c=>c[0]).join(", ")}.`:"Keon says: strong set. Try input.";
weak.innerHTML="";
weakCards.slice(0,10).forEach(c=>{
let p=document.createElement("span");p.className="pill";
p.textContent=`${c[0]} = ${c[1]} (${getM(c,ss)}%)`;weak.appendChild(p)
});
masteryList.innerHTML="";
cards.forEach(c=>{
let m=getM(c,ss),r=document.createElement("div");r.className="mastery-item";
r.innerHTML=`<strong>${c[0]}</strong><div class="bar"><div class="fill" style="width:${m}%"></div></div><span>${m}%</span>`;
masteryList.appendChild(r)
});
show("dashboard")
}

function coach(){
let level=settings?.level||"none";
if(language==="pl"){
if(level==="none"||level==="very_little")return"Start with Polish Basics. Focus on greetings and useful phrases before grammar.";
if(level==="beginner")return"Review Polish Basics, then move into travel phrases and simple sentence patterns.";
return"Use Polish Foundations and input practice, while reviewing weak vocabulary.";
}
if(level==="none"||level==="very_little")return"Start with Hiragana, then use simple input once the characters feel familiar.";
if(level==="beginner")return"Build Katakana while continuing Hiragana review and simple input.";
return"Focus on Kanji, mixed review, and comprehensible input.";
}

function resetAll(){
if(confirm("Reset all learning progress?")){
stats={};mastery={};missed=[];save();showDash()
}
}

renderSubjects();
if(settings){
languageBadge.textContent=language==="ja"?"🇯🇵 Japanese":"🇵🇱 Polish";
coachText.textContent=coach();
show("home");
}else{
chooseSetupLanguage(setupLanguage);
chooseLevel(setupLevel);
show("setup");
}

if("serviceWorker"in navigator)navigator.serviceWorker.register("service-worker.js");
