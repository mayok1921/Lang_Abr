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
      {title:"Greetings",cards:[
        ["こんにちは","konnichiwa","hello / good afternoon","こんにちは、元気？","Hi, how are you?"],
        ["ありがとう","arigatou","thank you","ありがとう！助かった。","Thanks! That helped a lot."],
        ["すみません","sumimasen","excuse me / sorry","すみません、駅はどこですか？","Excuse me, where is the station?"],
        ["おはよう","ohayou","good morning","おはよう！よく寝た？","Morning! Did you sleep well?"],
        ["こんばんは","konbanwa","good evening","こんばんは。今日は寒いね。","Good evening. It is cold today, huh?"]
      ]},
      {title:"Introductions",cards:[
        ["はじめまして","hajimemashite","nice to meet you","はじめまして。ケビンです。","Nice to meet you. I am Kevin."],
        ["わたしは___です","watashi wa ___ desu","I am ___","わたしは学生です。","I am a student."],
        ["よろしくおねがいします","yoroshiku onegaishimasu","a polite phrase used when meeting or asking for cooperation","はじめまして。よろしくおねがいします。","Nice to meet you. I look forward to getting along with you."],
        ["アメリカからきました","amerika kara kimashita","I came from the USA","アメリカからきました。今は東京にいます。","I came from the USA. I am in Tokyo now."],
        ["わかりません","wakarimasen","I don't understand","すみません、ちょっとわかりません。","Sorry, I do not really understand."]
      ]},
      {title:"Useful Phrases",cards:[
        ["はい","hai","yes","はい、そうです。","Yes, that is right."],
        ["いいえ","iie","no","いいえ、大丈夫です。","No, I am okay."],
        ["おねがいします","onegaishimasu","please / a polite request","これをおねがいします。","This one, please."],
        ["だいじょうぶです","daijoubu desu","I am okay / it is fine","ありがとう。でも大丈夫です。","Thanks, but I am okay."],
        ["もういちどおねがいします","mou ichido onegaishimasu","one more time, please","すみません、もういちどおねがいします。","Sorry, one more time, please."]
      ]}
    ]
  },
  japanese_natural: {
    language:"ja", name:"Natural Japanese & Slang", category:"conversation",
    lessons:[
      {title:"Everyday Reactions",cards:[
        ["やばい","yabai","crazy / intense / amazing / bad — meaning depends on context","このラーメン、やばい！","This ramen is insanely good!"],
        ["まじで？","maji de?","seriously? / really?","まじで？知らなかった。","Seriously? I did not know."],
        ["すごい","sugoi","amazing / impressive","それ、すごいね。","That is amazing."],
        ["めっちゃ","meccha","really / super / very","今日、めっちゃ暑い。","It is super hot today."],
        ["うそ！","uso!","no way! / you are kidding!","うそ！本当に？","No way! Really?"]
      ]},
      {title:"Casual Conversation",cards:[
        ["どうした？","doushita?","what happened? / what is wrong?","どうした？大丈夫？","What happened? Are you okay?"],
        ["いいじゃん","ii jan","that is good / sounds good","その服、いいじゃん。","That outfit looks good."],
        ["しょうがない","shouganai","it cannot be helped","雨なら、しょうがないね。","If it is raining, it cannot be helped."],
        ["ちょっと待って","chotto matte","wait a second","ちょっと待って、今行く。","Wait a second, I am coming."],
        ["おつかれ","otsukare","good work / thanks for your effort","今日もおつかれ！","Good work today!"]
      ]}
    ]
  },
  kanji: {
    language:"ja", name:"Kanji", category:"reading",
    lessons:[
      {title:"N5 Set 1",cards:[["日","にち / ひ","day / sun","今日は日曜日です。","Today is Sunday."],["月","げつ / つき","month / moon","月がきれいです。","The moon is beautiful."],["火","か / ひ","fire","火をつけます。","I light a fire."],["水","すい / みず","water","水をください。","Water, please."],["木","もく / き","tree / wood","大きい木があります。","There is a big tree."]]},
      {title:"N5 Set 2",cards:[["金","きん / かね","gold / money","お金があります。","I have money."],["土","ど / つち","earth / soil","土はぬれています。","The soil is wet."],["人","じん / ひと","person","あの人は先生です。","That person is a teacher."],["口","こう / くち","mouth","口をあけてください。","Please open your mouth."],["目","もく / め","eye","目がいたいです。","My eye hurts."]]}
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
      {title:"Greetings",cards:[["Cześć","","hi / hello","Cześć! Co tam?","Hi! What is up?"],["Dzień dobry","","good morning / good day / polite hello","Dzień dobry, poproszę kawę.","Good morning, I would like a coffee."],["Dobry wieczór","","good evening","Dobry wieczór, jak się masz?","Good evening, how are you?"],["Do widzenia","","goodbye","Dziękuję. Do widzenia!","Thank you. Goodbye!"],["Dziękuję","","thank you","Dziękuję za pomoc.","Thank you for the help."]]},
      {title:"Useful Words",cards:[["Tak","","yes","Tak, jasne.","Yes, of course."],["Nie","","no","Nie, dzięki.","No, thanks."],["Proszę","","please / you are welcome","Poproszę wodę, proszę.","I would like water, please."],["Przepraszam","","excuse me / sorry","Przepraszam, gdzie jest dworzec?","Excuse me, where is the station?"],["Dobrze","","good / okay","Dobrze, idziemy.","Okay, let us go."]]},
      {title:"Introductions",cards:[["Jak masz na imię?","","what is your name?","Cześć! Jak masz na imię?","Hi! What is your name?"],["Mam na imię...","","my name is...","Mam na imię Kevin.","My name is Kevin."],["Miło mi","","nice to meet you","Miło mi cię poznać.","Nice to meet you."],["Jestem z USA","","I am from the USA","Jestem z USA, ale mieszkam teraz w Polsce.","I am from the USA, but I live in Poland now."],["Nie rozumiem","","I do not understand","Przepraszam, nie rozumiem.","Sorry, I do not understand."]]}
    ]
  },
  polish_travel: {
    language:"pl", name:"Travel Polish", category:"travel",
    lessons:[
      {title:"Getting Around",cards:[["Gdzie jest...?","","where is...?","Gdzie jest dworzec?","Where is the train station?"],["Dworzec","","train station","Dworzec jest blisko.","The train station is nearby."],["Lotnisko","","airport","Jak dojechać na lotnisko?","How do I get to the airport?"],["Bilet","","ticket","Poproszę jeden bilet.","One ticket, please."],["Pociąg","","train","Pociąg jest spóźniony.","The train is delayed."]]},
      {title:"Food & Cafés",cards:[["Kawa","","coffee","Poproszę kawę.","I would like a coffee."],["Woda","","water","Czy mogę prosić o wodę?","Could I have some water?"],["Poproszę...","","I would like... / ...please","Poproszę pierogi.","Pierogi, please."],["Ile to kosztuje?","","how much does it cost?","Przepraszam, ile to kosztuje?","Excuse me, how much does this cost?"],["Rachunek, proszę","","the bill, please","Rachunek, proszę. Dziękuję.","The bill, please. Thank you."]]},
      {title:"Everyday Needs",cards:[["Pomocy!","","help!","Pomocy! Proszę zadzwonić po policję.","Help! Please call the police."],["Łazienka","","bathroom","Gdzie jest łazienka?","Where is the bathroom?"],["Sklep","","store / shop","Ten sklep jest otwarty.","This store is open."],["Otwarte","","open","Czy jest jeszcze otwarte?","Is it still open?"],["Zamknięte","","closed","Niestety, jest zamknięte.","Unfortunately, it is closed."]]}
    ]
  },
  polish_foundations: {
    language:"pl", name:"Polish Foundations", category:"grammar",
    lessons:[
      {title:"Pronouns + To Be",cards:[["Ja","","I","Ja jestem studentem.","I am a student."],["Ty","","you","Ty też?","You too?"],["On","","he","On jest moim kolegą.","He is my friend/classmate."],["Ona","","she","Ona jest studentką.","She is a student."],["Jestem","","I am","Jestem zmęczony.","I am tired."]]},
      {title:"Common Verbs",cards:[["Mam","","I have","Mam kawę.","I have coffee."],["Chcę","","I want","Chcę wodę.","I want water."],["Lubię","","I like","Lubię Kraków.","I like Kraków."],["Idę","","I am going","Idę do sklepu.","I am going to the store."],["Mówię","","I speak","Mówię trochę po polsku.","I speak a little Polish."]]},
      {title:"Simple Sentences",cards:[["Mam kawę","","I have coffee","Mam kawę, ale nie mam mleka.","I have coffee, but I do not have milk."],["Chcę wodę","","I want water","Chcę wodę bez gazu.","I want still water."],["Lubię Kraków","","I like Kraków","Bardzo lubię Kraków.","I really like Kraków."],["Mówię trochę po polsku","","I speak a little Polish","Mówię trochę po polsku, ale jeszcze się uczę.","I speak a little Polish, but I am still learning."],["Nie wiem","","I do not know","Nie wiem, może jutro.","I do not know, maybe tomorrow."]]},
      {title:"Gender Patterns",cards:[["kobieta","woman — usually feminine"],["miasto","city — neuter"],["student","student — masculine"],["książka","book — feminine"],["okno","window — neuter"]]},
      {title:"Accusative Patterns",cards:[["Mam kawę","","I have coffee","Mam kawę, ale nie mam mleka.","I have coffee, but I do not have milk."],["Czytam książkę","I am reading a book"],["Lubię Warszawę","I like Warsaw"],["Widzę kobietę","I see a woman"],["Mam bilet","I have a ticket"]]}
    ]
  },
  polish_natural: {
    language:"pl", name:"Natural Polish & Slang", category:"conversation",
    lessons:[
      {title:"Everyday Reactions",cards:[
        ["Spoko","","cool / okay / no problem","Spoko, nie ma problemu.","Cool, no problem."],
        ["No jasne","","yeah, of course / obviously","No jasne, możemy iść.","Yeah, of course, we can go."],
        ["Serio?","","seriously? / really?","Serio? Nie wiedziałem.","Seriously? I did not know."],
        ["Masakra","","a disaster / crazy / rough","Ale masakra, jaki korek.","This is crazy, what a traffic jam."],
        ["Mega","","super / really / awesome","To było mega dobre.","That was really good."]
      ]},
      {title:"Casual Conversation",cards:[
        ["Co tam?","","what is up? / how is it going?","Hej, co tam?","Hey, what is up?"],
        ["Daj spokój","","come on / give it a rest","Daj spokój, będzie dobrze.","Come on, it will be fine."],
        ["Luz","","relax / no worries / chill","Luz, mamy czas.","No worries, we have time."],
        ["Nie ogarniam","","I do not get it / I cannot keep up","Nie ogarniam tego zadania.","I do not get this assignment."],
        ["Dobra","","okay / alright","Dobra, idziemy.","Alright, let us go."]
      ]}
    ]
  },
  polish_school: {
    language:"pl", name:"School & Everyday Life", category:"school_work",
    lessons:[
      {title:"University",cards:[["Uniwersytet","","university","Mój uniwersytet jest duży.","My university is big."],["Zajęcia","","class / classes","Mam dziś zajęcia.","I have class today."],["Profesor","","professor","Profesor jest bardzo pomocny.","The professor is very helpful."],["Student","","student","Jestem studentem.","I am a student."],["Projekt","","project","Pracuję nad projektem.","I am working on a project."]]},
      {title:"Daily Life",cards:[["Mieszkanie","","apartment","Mam małe mieszkanie.","I have a small apartment."],["Zakupy","","shopping / groceries","Idę na zakupy.","I am going shopping."],["Praca","","work / job","Mam dużo pracy.","I have a lot of work."],["Dzisiaj","","today","Dzisiaj mam zajęcia.","I have class today."],["Jutro","","tomorrow","Jutro mam wolne.","I am free tomorrow."]]}
    ]
  },
  spanish_pronunciation: {
    language:"es", name:"Mexican Spanish Pronunciation", category:"reading",
    lessons:[
      {title:"Core Sounds",cards:[
        ["j","sounds like a strong English h","","Jalisco","Jalisco"],
        ["ll","often sounds like y","","llave","key"],
        ["ñ","ny sound","","niño","boy / child"],
        ["r","single tapped r","","pero","but"],
        ["rr","rolled / trilled r","","perro","dog"]
      ]},
      {title:"Everyday Rhythm",cards:[
        ["¿Qué?","","what?","¿Qué pasó?","What happened?"],
        ["porque","","because","No fui porque estaba cansado.","I did not go because I was tired."],
        ["ahorita","","right now / in a little while, depending on context","Ahorita voy.","I am coming / going in a moment."],
        ["pues","","well / so","Pues, no sé.","Well, I do not know."],
        ["mande","","yes? / pardon? — common polite response in Mexico","¿Mande? No escuché.","Pardon? I did not hear."]
      ]}
    ]
  },
  spanish_basics: {
    language:"es", name:"Mexican Spanish Basics", category:"conversation",
    lessons:[
      {title:"Greetings",cards:[
        ["Hola","","hello","Hola, ¿cómo estás?","Hi, how are you?"],
        ["Buenos días","","good morning","Buenos días, ¿cómo amaneciste?","Good morning, how are you this morning?"],
        ["Buenas tardes","","good afternoon","Buenas tardes, ¿todo bien?","Good afternoon, everything good?"],
        ["Buenas noches","","good evening / good night","Buenas noches, nos vemos mañana.","Good night, see you tomorrow."],
        ["Mucho gusto","","nice to meet you","Mucho gusto, soy Kevin.","Nice to meet you, I am Kevin."]
      ]},
      {title:"Useful Phrases",cards:[
        ["Gracias","","thank you","Gracias por ayudarme.","Thanks for helping me."],
        ["Por favor","","please","Una botella de agua, por favor.","A bottle of water, please."],
        ["Perdón","","sorry / excuse me","Perdón, ¿puedo pasar?","Excuse me, can I get through?"],
        ["No entiendo","","I do not understand","Perdón, no entiendo.","Sorry, I do not understand."],
        ["¿Puedes repetir?","","can you repeat that?","¿Puedes repetir más despacio?","Can you repeat that more slowly?"]
      ]}
    ]
  },
  spanish_everyday: {
    language:"es", name:"Everyday Mexican Spanish", category:"conversation",
    lessons:[
      {title:"Daily Life",cards:[
        ["Tengo hambre","","I am hungry","Tengo hambre, vamos por tacos.","I am hungry, let us get tacos."],
        ["Tengo sueño","","I am sleepy","Tengo mucho sueño hoy.","I am really sleepy today."],
        ["Ya voy","","I am coming / on my way","Ya voy, espérame.","I am coming, wait for me."],
        ["Ahorita","","right now / soon / in a bit, depending on context","Ahorita termino.","I will finish in a bit."],
        ["Está bien","","it is okay / alright","Está bien, no pasa nada.","It is okay, no worries."]
      ]},
      {title:"Making Plans",cards:[
        ["¿Qué haces?","","what are you doing?","¿Qué haces al rato?","What are you doing later?"],
        ["¿Vamos?","","shall we go?","¿Vamos por comida?","Want to go get food?"],
        ["Al rato","","later / in a while","Te veo al rato.","I will see you later."],
        ["Nos vemos","","see you","Nos vemos mañana.","See you tomorrow."],
        ["Me avisas","","let me know","Me avisas cuando llegues.","Let me know when you arrive."]
      ]}
    ]
  },
  spanish_natural: {
    language:"es", name:"Mexican Slang & Natural Speech", category:"conversation",
    lessons:[
      {title:"Common Mexican Expressions",cards:[
        ["¿Qué onda?","","what is up?","¿Qué onda, güey? ¿Todo bien?","What is up, dude? Everything good?"],
        ["No manches","","no way / come on","¡No manches! ¿En serio?","No way! Seriously?"],
        ["Está chido","","it is cool","Ese lugar está chido.","That place is cool."],
        ["Órale","","wow / okay / come on / let us go — depends on context","¡Órale, vámonos!","Alright, let us go!"],
        ["Ni modo","","oh well / nothing you can do","Ni modo, será para la próxima.","Oh well, maybe next time."]
      ]},
      {title:"Casual Mexican Speech",cards:[
        ["Güey","","dude / bro; can be friendly or rude depending on tone","Güey, mira esto.","Dude, look at this."],
        ["Qué padre","","how cool / awesome","¡Qué padre está tu carro!","Your car is so cool!"],
        ["Me late","","I like it / sounds good to me","Sí, me late esa idea.","Yeah, I like that idea."],
        ["Está cañón","","it is tough / intense / crazy","El examen estuvo cañón.","The exam was really tough."],
        ["Chale","","dang / that sucks / disappointment","Chale, perdí el camión.","Dang, I missed the bus."]
      ]}
    ]
  },
  spanish_travel: {
    language:"es", name:"Mexico Travel & Real Life", category:"travel",
    lessons:[
      {title:"Food & Ordering",cards:[
        ["¿Me da...?","","can you give me...? / I will have...","¿Me da dos tacos al pastor?","Can I get two tacos al pastor?"],
        ["¿Cuánto cuesta?","","how much does it cost?","¿Cuánto cuesta esta agua?","How much is this water?"],
        ["La cuenta, por favor","","the bill, please","La cuenta, por favor.","The bill, please."],
        ["Sin cebolla","","without onion","Dos tacos sin cebolla, por favor.","Two tacos without onion, please."],
        ["Para llevar","","to go / takeaway","Es para llevar.","It is to go."]
      ]},
      {title:"Getting Around",cards:[
        ["¿Dónde está...?","","where is...?","¿Dónde está el metro?","Where is the metro?"],
        ["¿Cómo llego a...?","","how do I get to...?","¿Cómo llego al centro?","How do I get downtown?"],
        ["Camión","","bus — common Mexican usage","¿Qué camión me lleva al centro?","Which bus takes me downtown?"],
        ["Una parada más","","one more stop","Me bajo en una parada más.","I get off in one more stop."],
        ["Aquí está bien","","here is fine","Aquí está bien, gracias.","Here is fine, thanks."]
      ]}
    ]
  },
  spanish_foundations: {
    language:"es", name:"Mexican Spanish Foundations", category:"grammar",
    lessons:[
      {title:"Core Verbs",cards:[
        ["Tengo","","I have","Tengo clase hoy.","I have class today."],
        ["Quiero","","I want","Quiero comer algo.","I want to eat something."],
        ["Voy","","I go / I am going","Voy a la tienda.","I am going to the store."],
        ["Puedo","","I can / may I","¿Puedo pasar?","Can I get through?"],
        ["Necesito","","I need","Necesito ayuda.","I need help."]
      ]},
      {title:"Natural Sentence Building",cards:[
        ["Tengo que...","","I have to...","Tengo que estudiar.","I have to study."],
        ["Voy a...","","I am going to...","Voy a salir al rato.","I am going out later."],
        ["Quiero...","","I want...","Quiero aprender más.","I want to learn more."],
        ["No sé","","I do not know","No sé, déjame ver.","I do not know, let me see."],
        ["Creo que...","","I think that...","Creo que sí.","I think so."]
      ]}
    ]
  }
};

const INPUT = {
  spanish_pronunciation:[["¿Mande? No escuché.","Pardon? I did not hear."],["Ahorita voy.","I am coming in a moment."],["¿Qué pasó?","What happened?"]],
  spanish_basics:[["Hola, mucho gusto. Soy Kevin.","Hi, nice to meet you. I am Kevin."],["Perdón, no entiendo. ¿Puedes repetir?","Sorry, I do not understand. Can you repeat that?"],["Gracias. Nos vemos mañana.","Thanks. See you tomorrow."]],
  spanish_everyday:[["Tengo hambre. ¿Vamos por tacos?","I am hungry. Want to go get tacos?"],["Ahorita termino y te aviso.","I will finish in a bit and let you know."],["¿Qué haces al rato?","What are you doing later?"]],
  spanish_natural:[["¿Qué onda, güey? ¿Todo bien?","What is up, dude? Everything good?"],["¡No manches! Está bien chido.","No way! It is really cool."],["Chale, ni modo.","Dang. Oh well."]],
  spanish_travel:[["¿Me da dos tacos al pastor, por favor?","Can I get two tacos al pastor, please?"],["¿Qué camión me lleva al centro?","Which bus takes me downtown?"],["Aquí está bien, gracias.","Here is fine, thanks."]],
  spanish_foundations:[["Tengo que estudiar hoy.","I have to study today."],["Voy a salir al rato.","I am going out later."],["Creo que sí, pero no sé.","I think so, but I do not know."]],
  hiragana:[["あお","blue"],["ここ","here"],["すし","sushi"],["ねこ","cat"],["そら","sky"]],
  katakana:[["アイス","ice cream"],["コーヒー","coffee"],["ホテル","hotel"],["バス","bus"]],
  japanese_basics:[["こんにちは。わたしは学生です。","Hello. I am a student."],["すみません。もういちどおねがいします。","Excuse me. One more time, please."],["はじめまして。よろしくおねがいします。","Nice to meet you."]],
  japanese_natural:[["このラーメン、やばい！","This ramen is insanely good!"],["まじで？知らなかった。","Seriously? I did not know."],["今日、めっちゃ暑い。","It is super hot today."]],
  kanji:[["日 月 火 水 木","sun/day, moon/month, fire, water, tree"],["人 口 目","person, mouth, eye"]],
  polish_pronunciation:[["Cześć","Hi"],["Dziękuję","","thank you","Dziękuję za pomoc.","Thank you for the help."],["Przepraszam","Sorry / Excuse me"]],
  polish_basics:[["Cześć! Mam na imię Kevin.","Hi! My name is Kevin."],["Dzień dobry. Dziękuję.","Good day. Thank you."],["Nie rozumiem. Przepraszam.","I don't understand. Sorry."]],
  polish_travel:[["Poproszę kawę i wodę.","I would like coffee and water."],["Gdzie jest dworzec?","Where is the train station?"],["Rachunek, proszę.","The bill, please."]],
  polish_foundations:[["Mam kawę.","I have coffee."],["Chcę wodę.","I want water."],["Mówię trochę po polsku.","I speak a little Polish."]],
  polish_natural:[["Hej, co tam?","Hey, what is up?"],["Spoko, nie ma problemu.","Cool, no problem."],["Nie ogarniam tego zadania.","I do not get this assignment."]],
  polish_school:[["Jestem studentem.","I am a student."],["Mam zajęcia dzisiaj.","I have class today."],["To jest mój projekt.","This is my project."]]
};

const SUBJECTS = {
  ja:[
    ["hiragana","あ Hiragana","Learn and trace the basic Japanese syllabary."],
    ["katakana","カ Katakana","Learn the script used heavily for loanwords."],
    ["japanese_basics","💬 Japanese Basics","Greetings, introductions, and useful phrases."],
    ["japanese_natural","🗣️ Natural Japanese","Everyday expressions, reactions, and slang in context."],
    ["kanji","日 Kanji","Build reading, recognition, meaning, and context."]
  ],
  pl:[
    ["polish_pronunciation","🔤 Polish Pronunciation","Special letters and common sound patterns."],
    ["polish_basics","💬 Polish Basics","Greetings, introductions, and useful words."],
    ["polish_travel","🚆 Travel Polish","Transportation, food, and everyday needs."],
    ["polish_foundations","📘 Polish Foundations","Common verbs, sentence patterns, and gentle grammar."],
    ["polish_natural","🗣️ Natural Polish","Everyday casual Polish and slang in context."],
    ["polish_school","🎓 School & Everyday Life","Useful vocabulary for university and daily life."]
  ],
  es:[
    ["spanish_pronunciation","🔤 Mexican Pronunciation","Useful sound patterns and Mexican speech habits."],
    ["spanish_basics","💬 Mexican Spanish Basics","Greetings and high-frequency everyday phrases."],
    ["spanish_everyday","🏠 Everyday Mexican Spanish","Daily conversation and making plans naturally."],
    ["spanish_natural","🗣️ Mexican Slang","Common Mexican wording, reactions, and slang in context."],
    ["spanish_travel","🌮 Mexico Travel & Real Life","Food, transportation, ordering, and getting around."],
    ["spanish_foundations","📘 Spanish Foundations","Core verbs and natural sentence building."]
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
  ],
  es:[
    {q:"What does ¿Qué onda? mean in casual Mexican Spanish?",choices:["What is up?","How much?","Where is it?","Good night"],answer:"What is up?"},
    {q:"What does No manches usually express?",choices:["Surprise / disbelief","A formal greeting","A food order","A direction"],answer:"Surprise / disbelief"},
    {q:"What does ahorita mean?",choices:["Only right this second","Only tomorrow","Right now or in a bit, depending on context","Never"],answer:"Right now or in a bit, depending on context"},
    {q:"What does ¿Me da dos tacos? mean?",choices:["Can I get two tacos?","Where are the tacos?","I made two tacos","The tacos are bad"],answer:"Can I get two tacos?"},
    {q:"What does me avisas mean?",choices:["Let me know","Leave now","Help me","Call the police"],answer:"Let me know"}
  ]
};


const LANGUAGE_META = {
  ja:{label:"Japanese",home:"🇯🇵 Japanese",defaultSubject:"hiragana"},
  pl:{label:"Polish",home:"🇵🇱 Polish",defaultSubject:"polish_pronunciation"},
  es:{label:"Mexican Spanish",home:"🇲🇽 Mexican Spanish",defaultSubject:"spanish_basics"}
};
function languageLabel(lang){ return LANGUAGE_META[lang]?.label || lang; }
function languageHomeLabel(lang){ return LANGUAGE_META[lang]?.home || lang; }
function defaultSubjectForLanguage(lang){ return LANGUAGE_META[lang]?.defaultSubject || SUBJECTS[lang]?.[0]?.[0]; }

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

let subject = defaultSubjectForLanguage(activeLanguage);
let lessonType = "new";
let selected = {subject,title:"",cards:[]};
let session = [], sessionIndex = 0, currentMode = "flash", revealed = false;
let inputDeck = [], inputIndex = 0;
let drawing = false, drawContext = null, traceVisible = false;

let placementLanguage = null, placementIndex = 0, placementScore = 0;


const HOME_ACTIONS = {
  es: [
    { key: "spanish_basics", eyebrow: "Start here", title: "Mexican Spanish Basics", desc: "Learn high-frequency phrases in context." },
    { key: "spanish_everyday", eyebrow: "Everyday speech", title: "Real Conversation", desc: "Daily life and natural Mexican wording." },
    { key: "spanish_natural", eyebrow: "Natural Mexican Spanish", title: "Slang & Expressions", desc: "Learn phrases like qué onda, no manches, and órale in context." },
    { key: "recommended", eyebrow: "Not sure?", title: "Recommend for me", desc: "Let Keon choose your next lesson." }
  ],
  ja: [
    { key: "hiragana", eyebrow: "Recommended for beginners", title: "Start with Hiragana", desc: "Learn the main Japanese characters first." },
    { key: "katakana", eyebrow: "Writing system", title: "Start with Katakana", desc: "Good for loanwords and signs." },
    { key: "japanese_basics", eyebrow: "Useful Japanese", title: "Basic Phrases", desc: "Greetings, introductions, and useful phrases." },
    { key: "recommended", eyebrow: "Not sure?", title: "Recommend for me", desc: "Let Keon choose your next lesson." }
  ],
  pl: [
    { key: "polish_pronunciation", eyebrow: "Recommended for beginners", title: "Pronunciation First", desc: "Start with letters and sound patterns." },
    { key: "polish_basics", eyebrow: "Useful Polish", title: "Basic Phrases", desc: "Greetings and everyday words." },
    { key: "polish_travel", eyebrow: "Travel", title: "Travel Polish", desc: "Food, stations, tickets, and getting around." },
    { key: "recommended", eyebrow: "Not sure?", title: "Recommend for me", desc: "Let Keon choose your next lesson." }
  ]
};

function getLanguageSubjects(lang){
  return SUBJECTS[lang].map(x=>x[0]);
}
function getLanguageCards(lang){
  return getLanguageSubjects(lang).flatMap(s => allCards(s).map(card => ({card, subject:s})));
}
function getLanguageStats(lang){
  const cards = getLanguageCards(lang);
  let masteryValues = [];
  cards.forEach(({card, subject})=> masteryValues.push(masteryOf(card, subject)));
  return {
    completed: cards.filter(({card, subject}) => masteryOf(card, subject) >= 85).length,
    avgMastery: masteryValues.length ? Math.round(masteryValues.reduce((a,b)=>a+b,0)/masteryValues.length) : 0,
    missed: missed.filter(x=>DATA[x.subject]?.language===lang).length
  };
}
function openHomeAction(actionKey){
  if(actionKey === "recommended"){ startRecommended(); return; }
  openSubject(actionKey);
}

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


function cardReading(card){
  return card[1] || "";
}
function cardMeaning(card){
  return card[2] || "";
}
function cardExample(card){
  return card[3] || "";
}
function cardExampleMeaning(card){
  return card[4] || "";
}
function cardPrimaryAnswer(card, s=selected.subject){
  // Native-first: pronunciation/reading when present; otherwise meaning.
  return cardReading(card) || cardMeaning(card);
}
function cardHelpMeaning(card){
  return cardMeaning(card);
}

function cardKey(card, s=selected.subject){
  return `${s}|${card[0]}|${card[1]||""}|${card[2]||""}|${card[3]||""}|${card[4]||""}`;
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
  document.getElementById("langEs").classList.toggle("selected",setupLanguages.includes("es"));

  document.querySelectorAll(".goalChip").forEach(btn=>{
    btn.classList.toggle("active",setupGoals.includes(btn.dataset.goal));
  });

  const box=document.getElementById("levelSetup");
  box.innerHTML="";
  setupLanguages.forEach(lang=>{
    const label=languageLabel(lang);
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
  subject=defaultSubjectForLanguage(activeLanguage);
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
  document.getElementById("placementTitle").textContent=languageLabel(placementLanguage)+" Placement Test";
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
  subject=defaultSubjectForLanguage(lang);
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
    b.textContent=languageHomeLabel(lang);
    b.onclick=()=>switchLanguage(lang);
    row.appendChild(b);
  });

  const rec=getRecommendation();
  document.getElementById("recommendTitle").textContent=rec.title;
  document.getElementById("recommendReason").textContent=rec.reason;

  const lessonCards = DATA[rec.subject].lessons[rec.lessonIndex].cards;
  const recAvg = averageMastery(lessonCards, rec.subject);
  const ring = document.getElementById("continueRing");
  ring.style.setProperty("--value", recAvg + "%");
  document.getElementById("continueRingText").textContent = recAvg + "%";

  const langStats = getLanguageStats(activeLanguage);
  document.getElementById("homeCompleted").textContent = langStats.completed;
  document.getElementById("homeAvgMastery").textContent = langStats.avgMastery + "%";
  document.getElementById("homeMissed").textContent = langStats.missed;

  const actions = document.getElementById("homeActions");
  actions.innerHTML = "";
  HOME_ACTIONS[activeLanguage].forEach(action=>{
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.innerHTML = `
      <div class="eyebrow">${action.eyebrow}</div>
      <h3>${action.title}</h3>
      <p>${action.desc}</p>
    `;
    tile.onclick = ()=>openHomeAction(action.key);
    actions.appendChild(tile);
  });
}
function renderSubjects(){
  document.getElementById("subjectsHeading").textContent=languageLabel(activeLanguage)+" Learning Path";
  const grid=document.getElementById("subjectGrid");
  grid.innerHTML="";
  SUBJECTS[activeLanguage].forEach(([key,title,desc])=>{
    const tile=document.createElement("div");
    tile.className="tile";
    tile.innerHTML=`<div class="eyebrow">Path</div><h3>${title}</h3><p>${desc}</p>`;
    tile.onclick=()=>openSubject(key);
    grid.appendChild(tile);
  });
  const missedTile=document.createElement("div");
  missedTile.className="tile";
  missedTile.innerHTML="<div class='eyebrow'>Review</div><h3>🔥 Missed Cards</h3><p>Review cards you have struggled with.</p>";
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
    subject:languageMissed[0]?.subject || defaultSubjectForLanguage(activeLanguage),
    title:"Missed Cards",
    cards:languageMissed.map(x=>[x.front,x.back||"",x.meaning||"",x.example||"",x.exampleMeaning||""])
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
      row.className="lessonCard";
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
    row.className="lessonCard";
    row.innerHTML=`
      <div class="statusDot">${avg>=90?"✅":avg>=70?"🟣":"⭕"}</div>
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
      div.innerHTML=`
        <div class="previewMain">${card[0]}</div>
        <div class="small">Try to read or understand it first.</div>
        <div class="previewReveal" style="display:none">
          ${cardReading(card)?`<div class="readingLine">${cardReading(card)}</div>`:""}
          ${cardMeaning(card)?`<div class="small meaningHint">${cardMeaning(card)}</div>`:""}
          ${cardExample(card)?`<div class="exampleBox"><strong>${cardExample(card)}</strong>${cardExampleMeaning(card)?`<div class="small">${cardExampleMeaning(card)}</div>`:""}</div>`:""}
        </div>
      `;
      const reveal=document.createElement("button");
      reveal.className="miniMeaningButton";
      reveal.textContent="Reveal";
      reveal.onclick=(event)=>{
        event.stopPropagation();
        const details=div.querySelector(".previewReveal");
        const hidden=details.style.display==="none";
        details.style.display=hidden?"block":"none";
        reveal.textContent=hidden?"Hide":"Reveal";
      };
      div.appendChild(reveal);
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
    if(level==="none"||level==="very_little") priority=["hiragana","japanese_basics","japanese_natural","katakana","kanji"];
    else if(level==="beginner") priority=["japanese_basics","japanese_natural","katakana","hiragana","kanji"];
    else priority=["japanese_natural","japanese_basics","kanji","katakana","hiragana"];
    if(goals.includes("reading")) priority=["hiragana","katakana","kanji","japanese_basics","japanese_natural"];
    if(goals.includes("conversation")) priority=["japanese_basics","japanese_natural",...priority.filter(x=>!["japanese_basics","japanese_natural"].includes(x))];
  }else if(activeLanguage==="pl"){
    if(level==="none"||level==="very_little") priority=["polish_pronunciation","polish_basics","polish_natural","polish_travel","polish_foundations","polish_school"];
    else if(level==="beginner") priority=["polish_basics","polish_natural","polish_foundations","polish_travel","polish_pronunciation","polish_school"];
    else priority=["polish_natural","polish_foundations","polish_school","polish_travel","polish_basics","polish_pronunciation"];
    if(goals.includes("travel")) priority=["polish_travel","polish_basics",...priority.filter(x=>!["polish_travel","polish_basics"].includes(x))];
    if(goals.includes("school_work")) priority=["polish_school","polish_foundations",...priority.filter(x=>!["polish_school","polish_foundations"].includes(x))];
    if(goals.includes("conversation")) priority=["polish_basics","polish_natural","polish_foundations",...priority.filter(x=>!["polish_basics","polish_natural","polish_foundations"].includes(x))];
  }else{
    if(level==="none"||level==="very_little") priority=["spanish_basics","spanish_everyday","spanish_pronunciation","spanish_natural","spanish_travel","spanish_foundations"];
    else if(level==="beginner") priority=["spanish_everyday","spanish_basics","spanish_natural","spanish_foundations","spanish_travel","spanish_pronunciation"];
    else priority=["spanish_natural","spanish_everyday","spanish_foundations","spanish_travel","spanish_basics","spanish_pronunciation"];
    if(goals.includes("travel")) priority=["spanish_travel","spanish_everyday",...priority.filter(x=>!["spanish_travel","spanish_everyday"].includes(x))];
    if(goals.includes("conversation")) priority=["spanish_everyday","spanish_natural","spanish_basics",...priority.filter(x=>!["spanish_everyday","spanish_natural","spanish_basics"].includes(x))];
    if(goals.includes("school_work")) priority=["spanish_foundations","spanish_everyday",...priority.filter(x=>!["spanish_foundations","spanish_everyday"].includes(x))];
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
    reason:avg<20
      ? "This is a strong place to start based on your current language, level, and goals."
      : avg<50
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
    const back=document.getElementById("back");
    back.textContent=cardReading(card) || cardMeaning(card);
    back.style.display=revealed?"block":"none";

    const meaningBox=document.getElementById("flashMeaning");
    const meaningBtn=document.getElementById("flashMeaningBtn");
    const exampleBox=document.getElementById("flashExample");
    const exampleBtn=document.getElementById("flashExampleBtn");

    if(cardMeaning(card) && cardMeaning(card)!==back.textContent){
      meaningBox.textContent=cardMeaning(card);
      meaningBox.style.display="none";
      meaningBtn.style.display=revealed?"inline-block":"none";
    }else{
      meaningBox.textContent="";
      meaningBox.style.display="none";
      meaningBtn.style.display="none";
    }

    if(cardExample(card)){
      exampleBox.innerHTML=`<strong>${cardExample(card)}</strong>${cardExampleMeaning(card)?`<div class="small">${cardExampleMeaning(card)}</div>`:""}`;
      exampleBox.style.display="none";
      exampleBtn.style.display=revealed?"inline-block":"none";
    }else{
      exampleBox.innerHTML="";
      exampleBox.style.display="none";
      exampleBtn.style.display="none";
    }
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
    resetDrawingScore();
    setTimeout(()=>{setupCanvas();clearCanvas();},30);
  }
  document.getElementById("studyProgress").textContent=`Step ${sessionIndex+1} of ${session.length} • Mastery ${masteryOf(card,selected.subject)}%`;
}

function toggleFlashExample(){
  const box=document.getElementById("flashExample");
  if(!box || !box.innerHTML) return;
  box.style.display=box.style.display==="none"?"block":"none";
}

function toggleFlashMeaning(){
  const box=document.getElementById("flashMeaning");
  if(!box || !box.textContent) return;
  box.style.display=box.style.display==="none"?"block":"none";
}

function flipCard(){
  revealed=!revealed;
  const card=session[sessionIndex]?.card;
  document.getElementById("back").style.display=revealed?"block":"none";
  if(card){
    const meaningBtn=document.getElementById("flashMeaningBtn");
    const exampleBtn=document.getElementById("flashExampleBtn");
    meaningBtn.style.display=(revealed && cardMeaning(card) && cardMeaning(card)!==document.getElementById("back").textContent)?"inline-block":"none";
    exampleBtn.style.display=(revealed && cardExample(card))?"inline-block":"none";
    if(!revealed){
      document.getElementById("flashMeaning").style.display="none";
      document.getElementById("flashExample").style.display="none";
    }
  }
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
    missed.push({key:k,front:card[0],back:card[1]||"",meaning:card[2]||"",example:card[3]||"",exampleMeaning:card[4]||"",subject:selected.subject});
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
    b.textContent=cardPrimaryAnswer(option, selected.subject);
    b.onclick=()=>{
      const correct=cardPrimaryAnswer(option, selected.subject)===cardPrimaryAnswer(card, selected.subject);
      recordAnswer(card,correct);
      document.querySelectorAll(".mcChoice").forEach(btn=>{
        if(btn.textContent===cardPrimaryAnswer(card, selected.subject)) btn.classList.add("correct");
      });
      if(!correct) b.classList.add("wrong");
      feedback.textContent=correct?"Correct.":`${card[0]} → ${cardPrimaryAnswer(card, selected.subject)}`;
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
  resetDrawingScore();
}

function resetDrawingScore(){
  const scoreBox=document.getElementById("drawScore");
  const checkBtn=document.getElementById("checkDrawingBtn");
  if(scoreBox){
    scoreBox.style.display="none";
    scoreBox.className="drawScore";
    scoreBox.textContent="";
  }
  if(checkBtn){
    checkBtn.disabled=false;
    checkBtn.textContent="Check Drawing";
  }
}

function getInkBounds(canvas){
  const ctx=canvas.getContext("2d");
  const image=ctx.getImageData(0,0,canvas.width,canvas.height);
  const data=image.data;
  let minX=canvas.width, minY=canvas.height, maxX=-1, maxY=-1, count=0;

  for(let y=0;y<canvas.height;y++){
    for(let x=0;x<canvas.width;x++){
      const a=data[(y*canvas.width+x)*4+3];
      if(a>20){
        count++;
        if(x<minX)minX=x;
        if(x>maxX)maxX=x;
        if(y<minY)minY=y;
        if(y>maxY)maxY=y;
      }
    }
  }

  if(!count) return null;
  return {minX,minY,maxX,maxY,width:maxX-minX+1,height:maxY-minY+1,count};
}

function normalizeCanvasSource(sourceCanvas, size=256, padding=30){
  const bounds=getInkBounds(sourceCanvas);
  if(!bounds) return null;

  const target=document.createElement("canvas");
  target.width=size;
  target.height=size;
  const tctx=target.getContext("2d");

  const maxDim=size-padding*2;
  const scale=Math.min(maxDim/bounds.width,maxDim/bounds.height);
  const drawW=bounds.width*scale;
  const drawH=bounds.height*scale;
  const dx=(size-drawW)/2;
  const dy=(size-drawH)/2;

  tctx.drawImage(
    sourceCanvas,
    bounds.minX,bounds.minY,bounds.width,bounds.height,
    dx,dy,drawW,drawH
  );
  return target;
}

function createReferenceCanvas(character, size=256){
  const raw=document.createElement("canvas");
  raw.width=size;
  raw.height=size;
  const ctx=raw.getContext("2d");
  ctx.clearRect(0,0,size,size);
  ctx.fillStyle="#000";
  ctx.textAlign="center";
  ctx.textBaseline="middle";
  ctx.font=`800 ${Math.round(size*0.72)}px "Hiragino Sans","Yu Gothic","YuGothic","Noto Sans JP",sans-serif`;
  ctx.fillText(character,size/2,size/2+size*0.015);

  return normalizeCanvasSource(raw,size,28);
}

function canvasMask(canvas){
  const ctx=canvas.getContext("2d");
  const data=ctx.getImageData(0,0,canvas.width,canvas.height).data;
  const mask=new Uint8Array(canvas.width*canvas.height);

  for(let i=0;i<mask.length;i++){
    const a=data[i*4+3];
    if(a>25) mask[i]=1;
  }
  return mask;
}

function buildIntegral(mask,width,height){
  const stride=width+1;
  const integral=new Uint32Array((width+1)*(height+1));

  for(let y=1;y<=height;y++){
    let row=0;
    for(let x=1;x<=width;x++){
      row+=mask[(y-1)*width+(x-1)];
      integral[y*stride+x]=integral[(y-1)*stride+x]+row;
    }
  }
  return integral;
}

function hasInkNearby(integral,width,height,x,y,radius){
  const stride=width+1;
  const x1=Math.max(0,x-radius);
  const y1=Math.max(0,y-radius);
  const x2=Math.min(width-1,x+radius);
  const y2=Math.min(height-1,y+radius);

  const sum=
    integral[(y2+1)*stride+(x2+1)]
    -integral[y1*stride+(x2+1)]
    -integral[(y2+1)*stride+x1]
    +integral[y1*stride+x1];

  return sum>0;
}

function tolerantCoverage(sourceMask,targetIntegral,width,height,radius){
  let sourceCount=0, matched=0;

  for(let y=0;y<height;y++){
    for(let x=0;x<width;x++){
      if(!sourceMask[y*width+x]) continue;
      sourceCount++;
      if(hasInkNearby(targetIntegral,width,height,x,y,radius)) matched++;
    }
  }
  return sourceCount ? matched/sourceCount : 0;
}

function scoreDrawing(character){
  const source=document.getElementById("drawCanvas");
  const userNormalized=normalizeCanvasSource(source,256,30);
  if(!userNormalized) return {score:0,empty:true};

  const reference=createReferenceCanvas(character,256);
  if(!reference) return {score:0,empty:false};

  const userMask=canvasMask(userNormalized);
  const refMask=canvasMask(reference);
  const width=256,height=256;

  const userIntegral=buildIntegral(userMask,width,height);
  const refIntegral=buildIntegral(refMask,width,height);

  // 14px tolerance after normalization is intentionally forgiving for finger input.
  const tolerance=14;

  // Precision: how much of the user's ink belongs near the target character.
  const precision=tolerantCoverage(userMask,refIntegral,width,height,tolerance);

  // Recall: how much of the target character is represented by the user's ink.
  const recall=tolerantCoverage(refMask,userIntegral,width,height,tolerance);

  let f1=(precision+recall)
    ? (2*precision*recall)/(precision+recall)
    : 0;

  // Mildly penalize very large scribbles or extremely sparse marks.
  const userPixels=userMask.reduce((a,b)=>a+b,0);
  const refPixels=refMask.reduce((a,b)=>a+b,0);
  const inkRatio=refPixels ? userPixels/refPixels : 1;

  let inkPenalty=1;
  if(inkRatio>2.1) inkPenalty=Math.max(.72,1-(inkRatio-2.1)*.10);
  if(inkRatio<.28) inkPenalty=Math.max(.65,inkRatio/.28);

  const score=Math.max(0,Math.min(100,Math.round(f1*inkPenalty*100)));

  return {
    score,
    empty:false,
    precision:Math.round(precision*100),
    recall:Math.round(recall*100)
  };
}

function checkDrawing(){
  if(currentMode!=="draw" || !session.length) return;

  const card=session[sessionIndex].card;
  const result=scoreDrawing(card[0]);
  const scoreBox=document.getElementById("drawScore");
  const checkBtn=document.getElementById("checkDrawingBtn");

  scoreBox.style.display="block";

  if(result.empty){
    scoreBox.className="drawScore retry";
    scoreBox.textContent="Draw the character first.";
    return;
  }

  if(result.score>=85){
    scoreBox.className="drawScore pass";
    scoreBox.textContent=`${result.score}% — Great! ✓`;
    checkBtn.disabled=true;
    checkBtn.textContent="Passed";
    recordAnswer(card,true);
    setTimeout(nextCard,1000);
  }else if(result.score>=70){
    scoreBox.className="drawScore close";
    scoreBox.textContent=`${result.score}% — Close. Adjust the shape and try again.`;
  }else{
    scoreBox.className="drawScore retry";
    scoreBox.textContent=`${result.score}% — Try again. Use the trace guide if needed.`;
  }
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
