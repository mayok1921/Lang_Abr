const DATA = {
  hiragana: {
    language:"ja", name:"Hiragana", category:"writing",
    lessons:[
      {title:"A Row",cards:[["あ","a"],["い","i"],["う","u"],["え","e"],["お","o"]]},
      {title:"K Row",cards:[["か","ka"],["き","ki"],["く","ku"],["け","ke"],["こ","ko"]]},
      {title:"S Row",cards:[["さ","sa"],["し","shi"],["す","su"],["せ","se"],["そ","so"]]},
      {title:"T Row",cards:[["た","ta"],["ち","chi"],["つ","tsu"],["て","te"],["と","to"]]},
      {title:"N Row",cards:[["な","na"],["に","ni"],["ぬ","nu"],["ね","ne"],["の","no"]]},
      {title:"H Row",cards:[["は","ha"],["ひ","hi"],["ふ","fu"],["へ","he"],["ほ","ho"]]},
      {title:"M Row",cards:[["ま","ma"],["み","mi"],["む","mu"],["め","me"],["も","mo"]]},
      {title:"Y Row",cards:[["や","ya"],["ゆ","yu"],["よ","yo"]]},
      {title:"R Row",cards:[["ら","ra"],["り","ri"],["る","ru"],["れ","re"],["ろ","ro"]]},
      {title:"W + N",cards:[["わ","wa"],["を","wo / o"],["ん","n"]]}
    ]
  },
  katakana: {
    language:"ja", name:"Katakana", category:"writing",
    lessons:[
      {title:"A Row",cards:[["ア","a"],["イ","i"],["ウ","u"],["エ","e"],["オ","o"]]},
      {title:"K Row",cards:[["カ","ka"],["キ","ki"],["ク","ku"],["ケ","ke"],["コ","ko"]]},
      {title:"S Row",cards:[["サ","sa"],["シ","shi"],["ス","su"],["セ","se"],["ソ","so"]]},
      {title:"T Row",cards:[["タ","ta"],["チ","chi"],["ツ","tsu"],["テ","te"],["ト","to"]]}
    ]
  },
  japanese_basics: {
    language:"ja", name:"Japanese Basics", category:"conversation",
    lessons:[
      {title:"Greetings",cards:[["こんにちは","Hello"],["ありがとう","Thank you"],["すみません","Excuse me / Sorry"],["おはよう","Good morning"],["こんばんは","Good evening"]]},
      {title:"Introductions",cards:[["はじめまして","Nice to meet you"],["わたしは___です","I am ___"],["よろしくおねがいします","Nice to meet you / Please treat me well"],["アメリカからきました","I came from the USA"],["わかりません","I don't understand"]]},
      {title:"Useful Phrases",cards:[["はい","Yes"],["いいえ","No"],["おねがいします","Please"],["だいじょうぶです","I'm okay / It's fine"],["もういちどおねがいします","One more time, please"]]}
    ]
  },
  kanji: {
    language:"ja", name:"Kanji", category:"reading",
    lessons:[
      {title:"N5 Set 1",cards:[["日","sun / day"],["月","moon / month"],["火","fire"],["水","water"],["木","tree / wood"]]},
      {title:"N5 Set 2",cards:[["金","gold / money"],["土","earth / soil"],["人","person"],["口","mouth"],["目","eye"]]}
    ]
  },
  polish_pronunciation: {
    language:"pl", name:"Polish Pronunciation", category:"reading",
    lessons:[
      {title:"Special Letters",cards:[["ą","nasal 'on' sound"],["ę","nasal 'en' sound"],["ł","sounds like English w"],["ó","sounds like u"],["ż","zh sound"]]},
      {title:"Common Sound Pairs",cards:[["cz","ch sound"],["sz","sh sound"],["rz","zh sound"],["ci","soft ch / ć-like sound"],["si","soft sh / ś-like sound"]]}
    ]
  },
  polish_basics: {
    language:"pl", name:"Polish Basics", category:"conversation",
    lessons:[
      {title:"Greetings",cards:[["Cześć","Hi / Hello"],["Dzień dobry","Good day / Hello"],["Dobry wieczór","Good evening"],["Do widzenia","Goodbye"],["Dziękuję","Thank you"]]},
      {title:"Useful Words",cards:[["Tak","Yes"],["Nie","No"],["Proszę","Please / You're welcome"],["Przepraszam","Excuse me / Sorry"],["Dobrze","Good / Okay"]]},
      {title:"Introductions",cards:[["Jak masz na imię?","What is your name?"],["Mam na imię...","My name is..."],["Miło mi","Nice to meet you"],["Jestem z USA","I am from the USA"],["Nie rozumiem","I don't understand"]]}
    ]
  },
  polish_travel: {
    language:"pl", name:"Travel Polish", category:"travel",
    lessons:[
      {title:"Getting Around",cards:[["Gdzie jest...?","Where is...?"],["Dworzec","Train station"],["Lotnisko","Airport"],["Bilet","Ticket"],["Pociąg","Train"]]},
      {title:"Food & Cafés",cards:[["Kawa","Coffee"],["Woda","Water"],["Poproszę...","I would like..."],["Ile to kosztuje?","How much does it cost?"],["Rachunek, proszę","The bill, please"]]},
      {title:"Everyday Needs",cards:[["Pomocy!","Help!"],["Łazienka","Bathroom"],["Sklep","Store"],["Otwarte","Open"],["Zamknięte","Closed"]]}
    ]
  },
  polish_foundations: {
    language:"pl", name:"Polish Foundations", category:"grammar",
    lessons:[
      {title:"Pronouns + To Be",cards:[["Ja","I"],["Ty","You"],["On","He"],["Ona","She"],["Jestem","I am"]]},
      {title:"Common Verbs",cards:[["Mam","I have"],["Chcę","I want"],["Lubię","I like"],["Idę","I am going"],["Mówię","I speak"]]},
      {title:"Simple Sentences",cards:[["Mam kawę","I have coffee"],["Chcę wodę","I want water"],["Lubię Kraków","I like Kraków"],["Mówię trochę po polsku","I speak a little Polish"],["Nie wiem","I don't know"]]},
      {title:"Gender Patterns",cards:[["kobieta","woman — usually feminine"],["miasto","city — neuter"],["student","student — masculine"],["książka","book — feminine"],["okno","window — neuter"]]},
      {title:"Accusative Patterns",cards:[["Mam kawę","I have coffee"],["Czytam książkę","I am reading a book"],["Lubię Warszawę","I like Warsaw"],["Widzę kobietę","I see a woman"],["Mam bilet","I have a ticket"]]}
    ]
  },
  polish_school: {
    language:"pl", name:"School & Everyday Life", category:"school_work",
    lessons:[
      {title:"University",cards:[["Uniwersytet","University"],["Zajęcia","Class / classes"],["Profesor","Professor"],["Student","Student"],["Projekt","Project"]]},
      {title:"Daily Life",cards:[["Mieszkanie","Apartment"],["Zakupy","Shopping"],["Praca","Work"],["Dzisiaj","Today"],["Jutro","Tomorrow"]]}
    ]
  }
};

const INPUT = {
  hiragana:[["あお","blue"],["ここ","here"],["すし","sushi"],["ねこ","cat"],["そら","sky"]],
  katakana:[["アイス","ice cream"],["コーヒー","coffee"],["ホテル","hotel"],["バス","bus"]],
  japanese_basics:[["こんにちは。わたしは学生です。","Hello. I am a student."],["すみません。もういちどおねがいします。","Excuse me. One more time, please."],["はじめまして。よろしくおねがいします。","Nice to meet you."]],
  kanji:[["日 月 火 水 木","sun/day, moon/month, fire, water, tree"],["人 口 目","person, mouth, eye"]],
  polish_pronunciation:[["Cześć","Hi"],["Dziękuję","Thank you"],["Przepraszam","Sorry / Excuse me"]],
  polish_basics:[["Cześć! Mam na imię Kevin.","Hi! My name is Kevin."],["Dzień dobry. Dziękuję.","Good day. Thank you."],["Nie rozumiem. Przepraszam.","I don't understand. Sorry."]],
  polish_travel:[["Poproszę kawę i wodę.","I would like coffee and water."],["Gdzie jest dworzec?","Where is the train station?"],["Rachunek, proszę.","The bill, please."]],
  polish_foundations:[["Mam kawę.","I have coffee."],["Chcę wodę.","I want water."],["Mówię trochę po polsku.","I speak a little Polish."]],
  polish_school:[["Jestem studentem.","I am a student."],["Mam zajęcia dzisiaj.","I have class today."],["To jest mój projekt.","This is my project."]]
};

const SUBJECTS = {
  ja:[
    ["hiragana","あ Hiragana","Learn and trace the basic Japanese syllabary."],
    ["katakana","カ Katakana","Learn the script used heavily for loanwords."],
    ["japanese_basics","💬 Japanese Basics","Greetings, introductions, and useful phrases."],
    ["kanji","日 Kanji","Build basic recognition and meaning."]
  ],
  pl:[
    ["polish_pronunciation","🔤 Polish Pronunciation","Special letters and common sound patterns."],
    ["polish_basics","💬 Polish Basics","Greetings, introductions, and useful words."],
    ["polish_travel","🚆 Travel Polish","Transportation, food, and everyday needs."],
    ["polish_foundations","📘 Polish Foundations","Common verbs, sentence patterns, and gentle grammar."],
    ["polish_school","🎓 School & Everyday Life","Useful vocabulary for university and daily life."]
  ]
};

const PLACEMENT = {
  ja:[
    {q:"What sound is あ?",choices:["a","i","u","e"],answer:"a"},
    {q:"What does ありがとう mean?",choices:["Goodbye","Thank you","Hello","Sorry"],answer:"Thank you"},
    {q:"Which is katakana?",choices:["あ","カ","日","水"],answer:"カ"},
    {q:"What does 人 mean?",choices:["person","water","day","mouth"],answer:"person"},
    {q:"What does わかりません mean?",choices:["I understand","I don't understand","Thank you","Please"],answer:"I don't understand"}
  ],
  pl:[
    {q:"What does Cześć mean?",choices:["Hello","Goodbye","Please","Water"],answer:"Hello"},
    {q:"What does Dziękuję mean?",choices:["Sorry","Thank you","Train","Today"],answer:"Thank you"},
    {q:"What does Gdzie jest...? mean?",choices:["How much?","Where is...?","I want...","Who is...?"],answer:"Where is...?"},
    {q:"What does Mam mean?",choices:["I have","I like","I go","I speak"],answer:"I have"},
    {q:"What does Nie rozumiem mean?",choices:["I don't understand","I am hungry","I don't know","I am a student"],answer:"I don't understand"}
  ]
};

const SETTINGS_KEY = "keonSettingsV2";
const STATS_KEY = "keonStatsV2";
const MASTERY_KEY = "keonMasteryV2";
const MISSED_KEY = "keonMissedV2";

let settings = JSON.parse(localStorage.getItem(SETTINGS_KEY) || "null") || {
  languages:["ja"], activeLanguage:"ja", levels:{ja:"none"}, goals:["conversation"]
};
let stats = JSON.parse(localStorage.getItem(STATS_KEY) || "{}");
let mastery = JSON.parse(localStorage.getItem(MASTERY_KEY) || "{}");
let missed = JSON.parse(localStorage.getItem(MISSED_KEY) || "[]");

let setupLanguages = [...(settings.languages || ["ja"])];
let setupLevels = {...(settings.levels || {ja:"none"})};
let setupGoals = [...(settings.goals || ["conversation"])];
let activeLanguage = settings.activeLanguage || setupLanguages[0] || "ja";

let subject = activeLanguage === "ja" ? "hiragana" : "polish_pronunciation";
let lessonType = "new";
let selected = {subject,title:"",cards:[]};
let session = [], sessionIndex = 0, currentMode = "flash", revealed = false;
let inputDeck = [], inputIndex = 0;
let drawing = false, drawContext = null, traceVisible = false;

let placementLanguage = null, placementIndex = 0, placementScore = 0;

function save(){
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  localStorage.setItem(MASTERY_KEY, JSON.stringify(mastery));
  localStorage.setItem(MISSED_KEY, JSON.stringify(missed));
}

function show(id){
  document.querySelectorAll(".screen").forEach(x=>x.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  if(id==="home") renderHome();
}

function cardKey(card, s=selected.subject){
  return `${s}|${card[0]}|${card[1]}`;
}
function masteryOf(card, s=selected.subject){
  return mastery[cardKey(card,s)] ?? 30;
}
function updateMastery(card, correct){
  const k=cardKey(card);
  const modeBonus = correct && currentMode==="draw" ? 4 : 0;
  mastery[k] = Math.max(0, Math.min(100, (mastery[k] ?? 30) + (correct ? 8 + modeBonus : -15)));
}
function allCards(s=subject, through=null){
  const d=DATA[s];
  if(!d) return [];
  let cards=[];
  d.lessons.forEach((lesson,i)=>{
    if(through===null || i<=through) cards=cards.concat(lesson.cards);
  });
  return cards;
}
function averageMastery(cards, s=subject){
  if(!cards.length) return 0;
  return Math.round(cards.reduce((sum,c)=>sum+masteryOf(c,s),0)/cards.length);
}

function toggleSetupLanguage(lang){
  if(setupLanguages.includes(lang)){
    if(setupLanguages.length===1) return;
    setupLanguages=setupLanguages.filter(x=>x!==lang);
  }else{
    setupLanguages.push(lang);
    if(!setupLevels[lang]) setupLevels[lang]="none";
  }
  renderSetup();
}
function setSetupLevel(lang,level){
  setupLevels[lang]=level;
  renderSetup();
}
function toggleGoal(goal){
  if(setupGoals.includes(goal)){
    if(setupGoals.length===1) return;
    setupGoals=setupGoals.filter(x=>x!==goal);
  }else setupGoals.push(goal);
  renderSetup();
}
function renderSetup(){
  document.getElementById("langJa").classList.toggle("selected",setupLanguages.includes("ja"));
  document.getElementById("langPl").classList.toggle("selected",setupLanguages.includes("pl"));

  document.querySelectorAll(".goalChip").forEach(btn=>{
    btn.classList.toggle("active",setupGoals.includes(btn.dataset.goal));
  });

  const box=document.getElementById("levelSetup");
  box.innerHTML="";
  setupLanguages.forEach(lang=>{
    const label=lang==="ja"?"Japanese":"Polish";
    const wrap=document.createElement("div");
    wrap.className="levelGroup";
    wrap.innerHTML=`<h2>${label} level</h2><p class="muted">Choose your starting point or take a quick placement test.</p>`;
    [
      ["none","No prior knowledge"],
      ["very_little","Very little"],
      ["beginner","Beginner"],
      ["intermediate","Intermediate"],
      ["advanced","Advanced"]
    ].forEach(([value,text])=>{
      const b=document.createElement("button");
      b.className="choice"+(setupLevels[lang]===value?" selected":"");
      b.textContent=text;
      b.onclick=()=>setSetupLevel(lang,value);
      wrap.appendChild(b);
    });
    const test=document.createElement("button");
    test.className="btn secondary";
    test.textContent="Test me";
    test.onclick=()=>startPlacement(lang);
    wrap.appendChild(test);
    box.appendChild(wrap);
  });
}
function finishSetup(){
  settings={
    languages:[...setupLanguages],
    activeLanguage:setupLanguages.includes(activeLanguage)?activeLanguage:setupLanguages[0],
    levels:{...setupLevels},
    goals:[...setupGoals]
  };
  activeLanguage=settings.activeLanguage;
  subject=activeLanguage==="ja"?"hiragana":"polish_pronunciation";
  save();
  renderSubjects();
  show("home");
}
function editSetup(){
  setupLanguages=[...settings.languages];
  setupLevels={...settings.levels};
  setupGoals=[...settings.goals];
  renderSetup();
  show("setup");
}

function startPlacement(lang){
  placementLanguage=lang;
  placementIndex=0;
  placementScore=0;
  renderPlacement();
  show("placement");
}
function renderPlacement(){
  const item=PLACEMENT[placementLanguage][placementIndex];
  document.getElementById("placementTitle").textContent=(placementLanguage==="ja"?"Japanese":"Polish")+" Placement Test";
  document.getElementById("placementProgress").textContent=`Question ${placementIndex+1} of ${PLACEMENT[placementLanguage].length}`;
  document.getElementById("placementQuestion").textContent=item.q;
  const choices=document.getElementById("placementChoices");
  choices.innerHTML="";
  item.choices.forEach(choice=>{
    const b=document.createElement("button");
    b.className="mcChoice";
    b.textContent=choice;
    b.onclick=()=>answerPlacement(choice);
    choices.appendChild(b);
  });
}
function answerPlacement(choice){
  const item=PLACEMENT[placementLanguage][placementIndex];
  if(choice===item.answer) placementScore++;
  placementIndex++;
  if(placementIndex>=PLACEMENT[placementLanguage].length){
    const pct=placementScore/PLACEMENT[placementLanguage].length;
    let level="none";
    if(pct>=.9) level="advanced";
    else if(pct>=.7) level="intermediate";
    else if(pct>=.5) level="beginner";
    else if(pct>=.2) level="very_little";
    setupLevels[placementLanguage]=level;
    alert(`Placement complete. Suggested level: ${level.replace("_"," ")}`);
    renderSetup();
    show("setup");
  }else renderPlacement();
}
function cancelPlacement(){
  renderSetup();
  show("setup");
}

function switchLanguage(lang){
  if(!settings.languages.includes(lang)) return;
  activeLanguage=lang;
  settings.activeLanguage=lang;
  subject=lang==="ja"?"hiragana":"polish_pronunciation";
  save();
  renderSubjects();
  show("home");
}
function renderHome(){
  const row=document.getElementById("homeLanguages");
  row.innerHTML="";
  settings.languages.forEach(lang=>{
    const b=document.createElement("button");
    b.className="chip"+(lang===activeLanguage?" active":"");
    b.textContent=lang==="ja"?"🇯🇵 Japanese":"🇵🇱 Polish";
    b.onclick=()=>switchLanguage(lang);
    row.appendChild(b);
  });
  const rec=getRecommendation();
  document.getElementById("recommendTitle").textContent=rec.title;
  document.getElementById("recommendReason").textContent=rec.reason;
}
function renderSubjects(){
  document.getElementById("subjectsHeading").textContent=activeLanguage==="ja"?"Japanese Learning Path":"Polish Learning Path";
  const grid=document.getElementById("subjectGrid");
  grid.innerHTML="";
  SUBJECTS[activeLanguage].forEach(([key,title,desc])=>{
    const tile=document.createElement("div");
    tile.className="tile";
    tile.innerHTML=`<h3>${title}</h3><p>${desc}</p>`;
    tile.onclick=()=>openSubject(key);
    grid.appendChild(tile);
  });
  const missedTile=document.createElement("div");
  missedTile.className="tile";
  missedTile.innerHTML="<h3>🔥 Missed Cards</h3><p>Review cards you have struggled with.</p>";
  missedTile.onclick=openMissed;
  grid.appendChild(missedTile);
}

function openSubject(key){
  subject=key;
  lessonType="new";
  renderLessons();
  show("lessons");
}
function openMissed(){
  const languageMissed=missed.filter(x=>DATA[x.subject]?.language===activeLanguage);
  selected={
    subject:languageMissed[0]?.subject || (activeLanguage==="ja"?"hiragana":"polish_basics"),
    title:"Missed Cards",
    cards:languageMissed.map(x=>[x.front,x.back])
  };
  openPreview();
}
function setLessonType(type){
  lessonType=type;
  renderLessons();
}
function renderLessons(){
  const data=DATA[subject];
  document.getElementById("subjectTitle").textContent=data.name;
  document.getElementById("tabLessons").classList.toggle("activeTab",lessonType==="new");
  document.getElementById("tabReview").classList.toggle("activeTab",lessonType==="cumulative");
  document.getElementById("tabInput").classList.toggle("activeTab",lessonType==="input");
  const list=document.getElementById("lessonList");
  list.innerHTML="";

  if(lessonType==="input"){
    (INPUT[subject]||[]).forEach((item,i)=>{
      const row=document.createElement("div");
      row.className="panel lesson";
      row.innerHTML=`<div>📖</div><div><strong>Input ${i+1}</strong><p>${item[0]}</p></div><div>Read</div>`;
      row.onclick=()=>{
        selected={subject,title:`Input ${i+1}`,cards:allCards(subject)};
        inputDeck=[item];
        startInputSession();
      };
      list.appendChild(row);
    });
    return;
  }

  data.lessons.forEach((lesson,i)=>{
    const cards=lessonType==="new"?lesson.cards:allCards(subject,i);
    const avg=averageMastery(cards,subject);
    const row=document.createElement("div");
    row.className="panel lesson";
    row.innerHTML=`
      <div>${avg>=90?"✅":avg>=70?"🟣":"⭕"}</div>
      <div>
        <strong>${lessonType==="new"?lesson.title:`Review through ${lesson.title}`}</strong>
        <p>${cards.map(c=>c[0]).join(" • ")}</p>
        <div class="bar"><div class="fill" style="width:${avg}%"></div></div>
      </div>
      <div>${avg}%</div>`;
    row.onclick=()=>{
      selected={subject,title:lessonType==="new"?lesson.title:`Review through ${lesson.title}`,cards};
      openPreview();
    };
    list.appendChild(row);
  });
}
function openPreview(){
  document.getElementById("previewTitle").textContent=selected.title;
  document.getElementById("previewText").textContent=`${selected.cards.length} cards. Practice adapts by repeating lower-mastery cards more often.`;
  const cards=document.getElementById("previewCards");
  cards.innerHTML="";
  if(!selected.cards.length){
    cards.innerHTML="<p>No cards here yet.</p>";
  }else{
    selected.cards.forEach(card=>{
      const div=document.createElement("div");
      div.className="previewCard";
      div.innerHTML=`<div class="previewMain">${card[0]}</div><div>${card[1]}</div><div class="small">${masteryOf(card,selected.subject)}%</div>`;
      cards.appendChild(div);
    });
  }
  show("preview");
}

function getRecommendation(){
  const level=settings.levels?.[activeLanguage] || "none";
  const goals=settings.goals || ["conversation"];
  const options=SUBJECTS[activeLanguage].map(([key])=>key);

  let priority;
  if(activeLanguage==="ja"){
    if(level==="none"||level==="very_little") priority=["hiragana","japanese_basics","katakana","kanji"];
    else if(level==="beginner") priority=["japanese_basics","katakana","hiragana","kanji"];
    else priority=["japanese_basics","kanji","katakana","hiragana"];
    if(goals.includes("reading")) priority=["hiragana","katakana","kanji","japanese_basics"];
    if(goals.includes("conversation")) priority=["japanese_basics",...priority.filter(x=>x!=="japanese_basics")];
  }else{
    if(level==="none"||level==="very_little") priority=["polish_pronunciation","polish_basics","polish_travel","polish_foundations","polish_school"];
    else if(level==="beginner") priority=["polish_basics","polish_foundations","polish_travel","polish_pronunciation","polish_school"];
    else priority=["polish_foundations","polish_school","polish_travel","polish_basics","polish_pronunciation"];
    if(goals.includes("travel")) priority=["polish_travel","polish_basics",...priority.filter(x=>!["polish_travel","polish_basics"].includes(x))];
    if(goals.includes("school_work")) priority=["polish_school","polish_foundations",...priority.filter(x=>!["polish_school","polish_foundations"].includes(x))];
    if(goals.includes("conversation")) priority=["polish_basics","polish_foundations",...priority.filter(x=>!["polish_basics","polish_foundations"].includes(x))];
  }

  priority=priority.filter((x,i,a)=>a.indexOf(x)===i && options.includes(x));

  let bestSubject=priority[0];
  let bestLesson=0;
  outer:
  for(const s of priority){
    for(let i=0;i<DATA[s].lessons.length;i++){
      if(averageMastery(DATA[s].lessons[i].cards,s)<75){
        bestSubject=s;bestLesson=i;break outer;
      }
    }
  }
  const lesson=DATA[bestSubject].lessons[bestLesson];
  const avg=averageMastery(lesson.cards,bestSubject);
  return {
    subject:bestSubject,
    lessonIndex:bestLesson,
    title:`${DATA[bestSubject].name}: ${lesson.title}`,
    reason:avg<50
      ? "This is an early or weaker area, so Keon is keeping it in your path."
      : "This fits your current level, goals, and recent mastery."
  };
}
function startRecommended(){
  const rec=getRecommendation();
  subject=rec.subject;
  const lesson=DATA[subject].lessons[rec.lessonIndex];
  selected={subject,title:rec.title,cards:lesson.cards};
  openPreview();
}

function isJapaneseWriting(){
  return activeLanguage==="ja" && ["hiragana","katakana","kanji"].includes(selected.subject);
}
function buildSession(cards){
  const result=[];
  cards.forEach(card=>{
    const m=masteryOf(card,selected.subject);
    const repeats=m<50?3:m<80?2:1;
    const modes=isJapaneseWriting()?["flash","multi","draw"]:["flash","multi"];
    for(let i=0;i<repeats;i++) result.push({card,mode:modes[i%modes.length]});
  });
  return result.sort(()=>Math.random()-.5);
}
function startMixedSession(){
  if(!selected.cards.length) return alert("No cards in this lesson.");
  session=buildSession(selected.cards);
  sessionIndex=0;
  revealed=false;
  show("study");
  renderStudy();
}
function renderStudy(){
  if(!session.length) return;
  const item=session[sessionIndex];
  const card=item.card;
  currentMode=item.mode;

  document.getElementById("studyTitle").textContent=selected.title;
  document.getElementById("sessionType").textContent=currentMode==="flash"?"🎴 Flashcard":currentMode==="multi"?"🎯 Multiple Choice":"✍️ Writing";
  document.getElementById("flashArea").style.display=currentMode==="flash"?"block":"none";
  document.getElementById("multiArea").style.display=currentMode==="multi"?"block":"none";
  document.getElementById("drawArea").style.display=currentMode==="draw"?"block":"none";

  if(currentMode==="flash"){
    document.getElementById("front").textContent=card[0];
    document.getElementById("back").textContent=card[1];
    document.getElementById("back").style.display=revealed?"block":"none";
  }else if(currentMode==="multi"){
    buildMultipleChoice(card);
  }else{
    traceVisible=false;
    document.getElementById("drawTarget").textContent=`Draw: ${card[1]}`;
    document.getElementById("drawAnswer").textContent=`Answer: ${card[0]}`;
    document.getElementById("drawAnswer").style.display="none";
    document.getElementById("traceChar").textContent=card[0];
    document.getElementById("traceChar").style.display="none";
    document.getElementById("traceBtn").textContent="Show Trace Guide";
    setTimeout(()=>{setupCanvas();clearCanvas();},30);
  }
  document.getElementById("studyProgress").textContent=`Step ${sessionIndex+1} of ${session.length} • Mastery ${masteryOf(card,selected.subject)}%`;
}
function flipCard(){
  revealed=!revealed;
  document.getElementById("back").style.display=revealed?"block":"none";
}
function nextCard(){
  if(!session.length) return;
  sessionIndex=(sessionIndex+1)%session.length;
  revealed=false;
  renderStudy();
}
function previousCard(){
  if(!session.length) return;
  sessionIndex=(sessionIndex-1+session.length)%session.length;
  revealed=false;
  renderStudy();
}
function shuffleSession(){
  session.sort(()=>Math.random()-.5);
  sessionIndex=0;
  revealed=false;
  renderStudy();
}
function recordAnswer(card, correct){
  const k=cardKey(card);
  if(!stats[k]) stats[k]={seen:0,correct:0,missed:0};
  stats[k].seen++;
  if(correct) stats[k].correct++;
  else stats[k].missed++;

  updateMastery(card,correct);

  if(!correct && !missed.some(x=>x.key===k)){
    missed.push({key:k,front:card[0],back:card[1],subject:selected.subject});
  }
  if(correct && masteryOf(card,selected.subject)>=75){
    missed=missed.filter(x=>x.key!==k);
  }
  save();
}
function grade(correct){
  recordAnswer(session[sessionIndex].card,correct);
  nextCard();
}
function buildMultipleChoice(card){
  const q=document.getElementById("mcQuestion");
  const choices=document.getElementById("mcChoices");
  const feedback=document.getElementById("mcFeedback");
  q.textContent=card[0];
  feedback.textContent="";
  choices.innerHTML="";

  let pool=allCards(selected.subject).filter(c=>c[0]!==card[0]);
  let options=[card];
  while(options.length<4 && pool.length){
    const i=Math.floor(Math.random()*pool.length);
    options.push(pool.splice(i,1)[0]);
  }
  options.sort(()=>Math.random()-.5);

  options.forEach(option=>{
    const b=document.createElement("button");
    b.className="mcChoice";
    b.textContent=option[1];
    b.onclick=()=>{
      const correct=option[1]===card[1];
      recordAnswer(card,correct);
      document.querySelectorAll(".mcChoice").forEach(btn=>{
        if(btn.textContent===card[1]) btn.classList.add("correct");
      });
      if(!correct) b.classList.add("wrong");
      feedback.textContent=correct?"Correct.":`${card[0]} = ${card[1]}`;
      setTimeout(nextCard,850);
    };
    choices.appendChild(b);
  });
}

function setupCanvas(){
  const canvas=document.getElementById("drawCanvas");
  const rect=canvas.getBoundingClientRect();
  canvas.width=rect.width*devicePixelRatio;
  canvas.height=rect.height*devicePixelRatio;
  drawContext=canvas.getContext("2d");
  drawContext.scale(devicePixelRatio,devicePixelRatio);
  drawContext.lineWidth=8;
  drawContext.lineCap="round";
  drawContext.strokeStyle="#6d28d9";

  canvas.onpointerdown=e=>{
    drawing=true;
    drawContext.beginPath();
    drawContext.moveTo(e.offsetX,e.offsetY);
  };
  canvas.onpointermove=e=>{
    if(!drawing) return;
    drawContext.lineTo(e.offsetX,e.offsetY);
    drawContext.stroke();
  };
  canvas.onpointerup=()=>drawing=false;
  canvas.onpointerleave=()=>drawing=false;
}
function clearCanvas(){
  const canvas=document.getElementById("drawCanvas");
  if(drawContext) drawContext.clearRect(0,0,canvas.width,canvas.height);
}
function toggleTrace(){
  traceVisible=!traceVisible;
  document.getElementById("traceChar").style.display=traceVisible?"flex":"none";
  document.getElementById("traceBtn").textContent=traceVisible?"Hide Trace Guide":"Show Trace Guide";
}
function toggleDrawAnswer(){
  const el=document.getElementById("drawAnswer");
  el.style.display=el.style.display==="none"?"block":"none";
}

function startInputSession(){
  if(!inputDeck.length) inputDeck=INPUT[selected.subject] || INPUT[subject] || [];
  if(!inputDeck.length) return alert("No input examples here yet.");
  inputIndex=0;
  renderInput();
  show("input");
}
function renderInput(){
  const item=inputDeck[inputIndex];
  document.getElementById("inputText").textContent=item[0];
  document.getElementById("inputMeaning").textContent=item[1];
  document.getElementById("inputMeaning").style.display="none";
  document.getElementById("inputNote").textContent="Try to understand the whole message before revealing the meaning.";
}
function showMeaning(){
  document.getElementById("inputMeaning").style.display="block";
}
function nextInput(understood){
  inputIndex=(inputIndex+1)%inputDeck.length;
  renderInput();
}

function showDashboard(){
  const subjects=SUBJECTS[activeLanguage].map(x=>x[0]);
  const cards=subjects.flatMap(s=>allCards(s).map(c=>({card:c,subject:s})));

  let total=0,correct=0;
  cards.forEach(({card,subject})=>{
    const s=stats[cardKey(card,subject)] || {seen:0,correct:0};
    total+=s.seen;
    correct+=s.correct;
  });

  document.getElementById("totalQuestions").textContent=total;
  document.getElementById("accuracy").textContent=total?Math.round(correct/total*100)+"%":"0%";
  const allMasteries=cards.map(({card,subject})=>masteryOf(card,subject));
  document.getElementById("averageMastery").textContent=allMasteries.length?Math.round(allMasteries.reduce((a,b)=>a+b,0)/allMasteries.length)+"%":"0%";
  document.getElementById("missedCount").textContent=missed.filter(x=>DATA[x.subject]?.language===activeLanguage).length;

  const weak=cards
    .map(x=>({...x,m:masteryOf(x.card,x.subject)}))
    .filter(x=>x.m<60)
    .sort((a,b)=>a.m-b.m);

  const rec=getRecommendation();
  document.getElementById("guideAnalysis").textContent=
    weak.length
      ? `Your weakest items are being kept in review. Recommended next: ${rec.title}.`
      : `No major weak areas yet. Recommended next: ${rec.title}.`;

  const weakBox=document.getElementById("weakCards");
  weakBox.innerHTML="";
  weak.slice(0,10).forEach(x=>{
    const p=document.createElement("span");
    p.className="pill";
    p.textContent=`${x.card[0]} — ${x.m}%`;
    weakBox.appendChild(p);
  });

  const list=document.getElementById("masteryList");
  list.innerHTML="";
  cards.slice().sort((a,b)=>masteryOf(a.card,a.subject)-masteryOf(b.card,b.subject)).slice(0,35).forEach(x=>{
    const m=masteryOf(x.card,x.subject);
    const row=document.createElement("div");
    row.className="masteryItem";
    row.innerHTML=`<strong>${x.card[0]}</strong><div class="bar"><div class="fill" style="width:${m}%"></div></div><span>${m}%</span>`;
    list.appendChild(row);
  });
  show("dashboard");
}
function resetProgress(){
  if(!confirm("Reset all Keon progress? Your language and goal settings will stay.")) return;
  stats={};mastery={};missed=[];
  save();
  showDashboard();
}

renderSetup();
renderSubjects();
if(localStorage.getItem(SETTINGS_KEY)){
  activeLanguage=settings.activeLanguage || settings.languages[0];
  renderSubjects();
  show("home");
}else{
  show("setup");
}

if("serviceWorker" in navigator){
  navigator.serviceWorker.register("service-worker.js");
}
