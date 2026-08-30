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


Object.assign(DATA, {"ja_n5_course":{"language":"ja","name":"Japanese I — JLPT N5","category":"course","lessons":[{"title":"Unit 1 — Classroom & Core Nouns","cards":[["学生","がくせい","student","わたしは大学の学生です。","I am a university student."],["先生","せんせい","teacher","田中先生は日本語の先生です。","Professor Tanaka is a Japanese teacher."],["学校","がっこう","school","毎朝、学校へ行きます。","I go to school every morning."],["本","ほん","book","この本はおもしろいです。","This book is interesting."],["友達","ともだち","friend","友達と昼ご飯を食べます。","I eat lunch with a friend."],["日本語","にほんご","Japanese language","日本語を勉強しています。","I am studying Japanese."]]},{"title":"Unit 2 — Particles & Identification","cards":[["〜は〜です","wa / desu","marks the topic and identifies/describes it","これはわたしの本です。","This is my book."],["〜がいます","ga imasu","there is / are (living things)","教室に学生がいます。","There are students in the classroom."],["〜があります","ga arimasu","there is / are (things)","机の上に本があります。","There is a book on the desk."],["〜の〜","no","links nouns; possession or description","これは日本語の本です。","This is a Japanese-language book."],["〜も","mo","also / too","わたしも学生です。","I am a student too."],["〜か","ka","question marker","これはあなたのかばんですか。","Is this your bag?"]]},{"title":"Unit 3 — Time & Daily Routine","cards":[["今日","きょう","today","今日は月曜日です。","Today is Monday."],["明日","あした","tomorrow","明日は学校へ行きます。","I will go to school tomorrow."],["毎日","まいにち","every day","毎日、日本語を勉強します。","I study Japanese every day."],["起きる","おきる","to wake up","毎朝七時に起きます。","I wake up at seven every morning."],["食べる","たべる","to eat","八時に朝ご飯を食べます。","I eat breakfast at eight."],["行く","いく","to go","電車で学校へ行きます。","I go to school by train."]]},{"title":"Unit 4 — Requests, Likes & Basic Verbs","cards":[["ください","kudasai","please give me / please","水をください。","Water, please."],["〜てください","te kudasai","please do...","もう一度言ってください。","Please say it one more time."],["好き","すき","to like / favorite","日本の音楽が好きです。","I like Japanese music."],["見る","みる","to see / watch","夜、映画を見ます。","I watch a movie at night."],["聞く","きく","to listen / ask","音楽を聞きます。","I listen to music."],["話す","はなす","to speak / talk","友達と日本語で話します。","I speak Japanese with a friend."]]},{"title":"Unit 5 — Adjectives & Existence","cards":[["大きい","おおきい","big","東京は大きい町です。","Tokyo is a big city."],["小さい","ちいさい","small","小さいカフェに入りました。","I entered a small café."],["おいしい","oishii","delicious","このラーメンはおいしいです。","This ramen is delicious."],["静か","しずか","quiet","図書館は静かです。","The library is quiet."],["便利","べんり","convenient","この駅はとても便利です。","This station is very convenient."],["どこ","doko","where","トイレはどこですか。","Where is the bathroom?"]]},{"title":"Unit 6 — Past, Plans & N5 Reading","cards":[["〜ました","mashita","polite past tense","昨日、映画を見ました。","I watched a movie yesterday."],["〜ませんでした","masen deshita","polite negative past","昨日は勉強しませんでした。","I did not study yesterday."],["〜たい","tai","want to do...","日本へ行きたいです。","I want to go to Japan."],["週末","しゅうまつ","weekend","週末に友達と会います。","I meet friends on the weekend."],["昨日","きのう","yesterday","昨日は雨でした。","It was rainy yesterday."],["読む","よむ","to read","毎晩、本を少し読みます。","I read a little every night."]]}]},"ja_n4_course":{"language":"ja","name":"Japanese II — JLPT N4","category":"course","lessons":[{"title":"Unit 1 — Te-form & Permission","cards":[["〜てもいい","te mo ii","may / it is okay to","ここに座ってもいいですか。","May I sit here?"],["〜てはいけない","te wa ikenai","must not","ここで写真を撮ってはいけません。","You must not take photos here."],["〜ている","te iru","ongoing action / current state","今、日本語を勉強しています。","I am studying Japanese now."],["〜てから","te kara","after doing...","ご飯を食べてから勉強します。","I study after eating."],["〜ながら","nagara","while doing...","音楽を聞きながら歩きます。","I walk while listening to music."],["〜ないでください","naide kudasai","please do not...","ここで走らないでください。","Please do not run here."]]},{"title":"Unit 2 — Ability & Experience","cards":[["〜ことができる","koto ga dekiru","can / be able to","日本語を少し話すことができます。","I can speak a little Japanese."],["〜たことがある","ta koto ga aru","have experienced doing...","京都へ行ったことがあります。","I have been to Kyoto."],["できる","dekiru","can / be possible","今日は料理ができます。","I can cook today."],["上手","じょうず","skillful / good at","姉は絵が上手です。","My older sister is good at drawing."],["下手","へた","not good at","わたしは歌が下手です。","I am not good at singing."],["練習","れんしゅう","practice","毎日、会話を練習します。","I practice conversation every day."]]},{"title":"Unit 3 — Giving, Receiving & Help","cards":[["あげる","ageru","to give","友達に本をあげました。","I gave a book to my friend."],["くれる","kureru","to give to me/us","友達が写真をくれました。","My friend gave me a photo."],["もらう","morau","to receive","先生から辞書をもらいました。","I received a dictionary from my teacher."],["〜てあげる","te ageru","do something for someone","弟に宿題を手伝ってあげました。","I helped my younger brother with homework."],["〜てくれる","te kureru","someone does something for me","友達が駅まで送ってくれました。","My friend took me to the station."],["〜てもらう","te morau","have someone do something for me","先生に作文を直してもらいました。","I had my teacher correct my essay."]]},{"title":"Unit 4 — Conditions & Plans","cards":[["〜たら","tara","if / when","時間があったら、映画を見ます。","If I have time, I will watch a movie."],["〜なら","nara","if it is / if you mean...","東京なら、電車が便利です。","If you mean Tokyo, trains are convenient."],["〜と思う","to omou","I think...","明日は晴れると思います。","I think it will be sunny tomorrow."],["〜つもり","tsumori","intend to","来年、日本へ行くつもりです。","I intend to go to Japan next year."],["予定","よてい","plan / schedule","週末の予定はありますか。","Do you have plans for the weekend?"],["準備","じゅんび","preparation","旅行の準備をしています。","I am preparing for the trip."]]},{"title":"Unit 5 — Relative Clauses & Description","cards":[["昨日買った本","きのうかったほん","the book I bought yesterday","昨日買った本を読んでいます。","I am reading the book I bought yesterday."],["日本に住んでいる友達","にほんにすんでいるともだち","a friend who lives in Japan","日本に住んでいる友達に会いました。","I met a friend who lives in Japan."],["使いやすい","つかいやすい","easy to use","このアプリは使いやすいです。","This app is easy to use."],["食べにくい","たべにくい","difficult to eat","この肉は少し食べにくいです。","This meat is a little difficult to eat."],["必要","ひつよう","necessary","パスポートが必要です。","A passport is necessary."],["説明","せつめい","explanation","先生の説明は分かりやすいです。","The teacher's explanation is easy to understand."]]},{"title":"Unit 6 — N4 Reading & Natural Speech","cards":[["そうなんだ","sou nanda","oh, I see / really","来月引っ越すの？そうなんだ。","You are moving next month? Oh, I see."],["たぶん","tabun","probably","たぶん明日は雨です。","It will probably rain tomorrow."],["けっこう","kekkou","quite / enough / no thank you depending on context","この店はけっこう安いです。","This shop is quite cheap."],["最近","さいきん","recently","最近、よく日本語の動画を見ます。","Recently I often watch Japanese videos."],["例えば","たとえば","for example","例えば、東京や大阪へ行きたいです。","For example, I want to go to Tokyo or Osaka."],["理由","りゆう","reason","日本語を勉強する理由は何ですか。","What is your reason for studying Japanese?"]]}]},"ja_n3_course":{"language":"ja","name":"Japanese III — JLPT N3","category":"course","lessons":[{"title":"Unit 1 — Change, Results & Nuance","cards":[["〜ようになる","you ni naru","come to be able to / come to do","日本語のニュースが少し分かるようになりました。","I have become able to understand some Japanese news."],["〜ことになる","koto ni naru","it has been decided that...","来月、大阪へ出張することになりました。","It has been decided that I will go to Osaka on business next month."],["〜ことにする","koto ni suru","decide to...","毎日三十分読むことにしました。","I decided to read thirty minutes every day."],["〜てしまう","te shimau","finish completely / unfortunately do","電車で寝てしまいました。","I accidentally fell asleep on the train."],["〜ばかり","bakari","just did / only","昼ご飯を食べたばかりです。","I just ate lunch."],["結果","けっか","result","試験の結果が出ました。","The test results came out."]]},{"title":"Unit 2 — Evidence, Appearance & Hearsay","cards":[["〜そうだ","sou da","looks like / seems","雨が降りそうです。","It looks like it is going to rain."],["〜らしい","rashii","apparently / seems typical of","田中さんは来ないらしいです。","Apparently Tanaka is not coming."],["〜ようだ","you da","seems / appears","外は静かなようです。","It seems quiet outside."],["〜みたい","mitai","seems like; conversational","彼は疲れているみたい。","He seems tired."],["によると","ni yoru to","according to...","天気予報によると、明日は雪です。","According to the forecast, it will snow tomorrow."],["確か","たしか","if I remember correctly / certain","確か、会議は三時からです。","If I remember correctly, the meeting starts at three."]]},{"title":"Unit 3 — Passive, Causative & Perspective","cards":[["〜られる","rareru","passive form","わたしは先生にほめられました。","I was praised by my teacher."],["〜させる","saseru","causative; make/let someone do","母は子どもに野菜を食べさせました。","The mother made the child eat vegetables."],["〜させられる","saserareru","causative-passive; be made to do","残業させられました。","I was made to work overtime."],["によって","ni yotte","by / depending on / due to","文化によって考え方が違います。","Ways of thinking differ depending on culture."],["立場","たちば","position / standpoint","相手の立場で考えてみます。","I will try thinking from the other person's standpoint."],["影響","えいきょう","influence / effect","天気は気分に影響します。","Weather affects mood."]]},{"title":"Unit 4 — Connections & Argument","cards":[["〜ために","tame ni","for the purpose of / because of","健康のために毎日歩いています。","I walk every day for my health."],["〜ので","node","because; explanatory and softer","電車が遅れたので、遅刻しました。","I was late because the train was delayed."],["〜のに","noni","although / even though","勉強したのに、忘れてしまいました。","Even though I studied, I forgot."],["一方で","いっぽうで","on the other hand","便利な一方で、値段が高いです。","It is convenient, but on the other hand it is expensive."],["そのため","sono tame","therefore / for that reason","雨でした。そのため、試合は中止になりました。","It rained. Therefore, the game was canceled."],["つまり","tsumari","in other words","つまり、今日は休みということです。","In other words, today is a day off."]]},{"title":"Unit 5 — Work, School & Abstract Vocabulary","cards":[["経験","けいけん","experience","海外で働いた経験があります。","I have experience working abroad."],["能力","のうりょく","ability","問題を解決する能力が必要です。","Problem-solving ability is necessary."],["関係","かんけい","relationship / connection","この問題は環境と関係があります。","This issue is related to the environment."],["状況","じょうきょう","situation","現在の状況を説明してください。","Please explain the current situation."],["意見","いけん","opinion","みんなの意見を聞きたいです。","I want to hear everyone's opinion."],["提案","ていあん","proposal / suggestion","新しい方法を提案しました。","I proposed a new method."]]},{"title":"Unit 6 — N3 Reading & Conversation","cards":[["なるほど","naruhodo","I see / that makes sense","なるほど、そういう意味なんですね。","I see, so that is what it means."],["別に","べつに","not particularly; nothing really","別に怒ってないよ。","I am not particularly angry."],["せっかく","sekkaku","with effort / since we have the chance","せっかく日本に来たから、いろいろ食べたい。","Since I made it to Japan, I want to try many foods."],["意外","いがい","unexpected / surprising","この問題は意外に簡単でした。","This problem was surprisingly easy."],["実際","じっさい","actually / in practice","実際に使ってみると便利です。","When you actually use it, it is convenient."],["特に","とくに","especially","日本料理では、特に寿司が好きです。","Among Japanese food, I especially like sushi."]]}]},"ja_n2_course":{"language":"ja","name":"Japanese IV — JLPT N2","category":"course","lessons":[{"title":"Unit 1 — N2 Grammar: Qualification & Logic","cards":[["〜わけではない","wake dewa nai","it does not mean that / not necessarily","高いものが全部いいわけではありません。","Expensive things are not necessarily all good."],["〜わけがない","wake ga nai","there is no way that...","彼がそんなことをするわけがない。","There is no way he would do such a thing."],["〜に違いない","ni chigai nai","must surely be","電気が消えている。もう寝たに違いない。","The lights are off. They must have gone to bed."],["〜とは限らない","to wa kagiranai","not necessarily / not always","有名だからおいしいとは限らない。","Being famous does not necessarily mean it is delicious."],["〜ものの","mono no","although / even though","買ったものの、まだ使っていません。","Although I bought it, I have not used it yet."],["〜にもかかわらず","nimo kakawarazu","despite / in spite of","雨にもかかわらず、多くの人が来ました。","Despite the rain, many people came."]]},{"title":"Unit 2 — N2 Grammar: Change & Response","cards":[["〜に伴って","ni tomonatte","along with / as... changes","人口の増加に伴って、交通量も増えました。","As the population increased, traffic also increased."],["〜に応じて","ni oujite","according to / in response to","経験に応じて仕事を任せます。","We assign work according to experience."],["〜につれて","ni tsurete","as / in proportion as","日本語が上達するにつれて、読むのが楽しくなりました。","As my Japanese improved, reading became more enjoyable."],["〜にしたがって","ni shitagatte","as / in accordance with","技術の発展にしたがって、生活も変わります。","As technology develops, life changes too."],["〜を通じて","o tsuujite","through / throughout","留学を通じて多くのことを学びました。","I learned many things through studying abroad."],["〜に基づいて","ni motozuite","based on","データに基づいて判断します。","We make decisions based on data."]]},{"title":"Unit 3 — N2 Grammar: Obligation & Risk","cards":[["〜ざるを得ない","zaru o enai","have no choice but to","電車が止まり、歩かざるを得ませんでした。","The train stopped, so I had no choice but to walk."],["〜かねない","kanenai","might; risk of an undesirable result","その言い方は誤解を招きかねません。","That way of saying it could cause misunderstanding."],["〜かねる","kaneru","cannot / difficult to do (formal)","その質問にはお答えしかねます。","I am unable to answer that question."],["〜べきだ","beki da","should / ought to","約束は守るべきです。","You should keep promises."],["〜ことはない","koto wa nai","there is no need to...","そんなに心配することはありません。","There is no need to worry that much."],["〜ないことには","nai koto ni wa","unless...","実際に見ないことには判断できません。","I cannot judge unless I actually see it."]]},{"title":"Unit 4 — N2 Academic & Workplace Vocabulary","cards":[["傾向","けいこう","trend / tendency","若者の読書量は減少する傾向があります。","Young people's reading volume tends to decrease."],["課題","かだい","issue / task / challenge","この研究にはまだ多くの課題があります。","This research still has many challenges."],["効率","こうりつ","efficiency","作業の効率を上げる必要があります。","We need to improve work efficiency."],["適切","てきせつ","appropriate","状況に応じて適切な方法を選びます。","We choose an appropriate method according to the situation."],["維持","いじ","maintenance / preservation","品質を維持することが重要です。","It is important to maintain quality."],["改善","かいぜん","improvement","工程を改善して時間を短縮しました。","We improved the process and shortened the time."]]},{"title":"Unit 5 — Media, Society & Abstract Reading","cards":[["普及","ふきゅう","spread / diffusion / adoption","スマートフォンの普及で生活が変わりました。","Life changed with the spread of smartphones."],["制度","せいど","system / institution","新しい制度が来月から始まります。","A new system starts next month."],["環境","かんきょう","environment","働きやすい環境を作ることが大切です。","It is important to create an easy-to-work-in environment."],["認識","にんしき","recognition / understanding","問題への認識を共有する必要があります。","We need to share an understanding of the problem."],["対象","たいしょう","target / subject","この調査は大学生を対象にしています。","This survey targets university students."],["要因","よういん","factor / cause","成功には複数の要因があります。","There are multiple factors behind success."]]},{"title":"Unit 6 — N2 Reading, Register & Natural Nuance","cards":[["〜ことから","koto kara","from the fact that / because","駅に近いことから、この地域は人気があります。","Because it is close to the station, this area is popular."],["〜上で","ue de","when / after / in the process of","内容を確認した上で、契約してください。","Please sign the contract after checking the contents."],["〜にあたって","ni atatte","on the occasion of / when undertaking","留学するにあたって、目標を決めました。","When preparing to study abroad, I set goals."],["あくまで","akumade","strictly / merely / to the end","これはあくまで個人の意見です。","This is merely my personal opinion."],["むしろ","mushiro","rather / instead","車より、むしろ電車のほうが便利です。","Rather than a car, the train is more convenient."],["一応","いちおう","for now / just in case / more or less","一応、資料を確認しておきます。","I will check the materials just in case."]]}]},"pl_a1_course":{"language":"pl","name":"Polish I — A1","category":"course","lessons":[{"title":"Unit 1 — Introductions & Identity","cards":[["Mam na imię...","","my name is...","Mam na imię Kevin.","My name is Kevin."],["Jestem studentem.","","I am a student (male speaker).","Jestem studentem na uniwersytecie.","I am a university student."],["Jestem studentką.","","I am a student (female speaker).","Jestem studentką w Krakowie.","I am a student in Kraków."],["Skąd jesteś?","","where are you from?","Skąd jesteś? Jestem z USA.","Where are you from? I am from the USA."],["Mieszkam w...","","I live in...","Mieszkam w Krakowie.","I live in Kraków."],["Miło mi.","","nice to meet you","Miło mi cię poznać.","Nice to meet you."]]},{"title":"Unit 2 — Present Tense & Daily Life","cards":[["robię","","I do / make","Co robisz? Robię obiad.","What are you doing? I am making dinner."],["pracuję","","I work","Pracuję od poniedziałku do piątku.","I work Monday through Friday."],["studiuję","","I study at university","Studiuję inżynierię.","I study engineering."],["mieszkam","","I live","Mieszkam blisko centrum.","I live near downtown."],["lubię","","I like","Lubię polską kuchnię.","I like Polish cuisine."],["mam","","I have","Mam dziś dużo zajęć.","I have many classes today."]]},{"title":"Unit 3 — Accusative & Ordering","cards":[["Poproszę kawę.","","I would like a coffee.","Poproszę dużą kawę.","I would like a large coffee."],["Mam książkę.","","I have a book.","Mam nową książkę.","I have a new book."],["Lubię muzykę.","","I like music.","Bardzo lubię polską muzykę.","I really like Polish music."],["Widzę kolegę.","","I see my male friend/classmate.","Widzę kolegę przy wejściu.","I see my friend by the entrance."],["Kupuję bilet.","","I am buying a ticket.","Kupuję bilet do Warszawy.","I am buying a ticket to Warsaw."],["Chcę wodę.","","I want water.","Chcę wodę bez gazu.","I want still water."]]},{"title":"Unit 4 — Numbers, Time & Schedule","cards":[["Która godzina?","","what time is it?","Przepraszam, która godzina?","Excuse me, what time is it?"],["o ósmej","","at eight o'clock","Zajęcia zaczynają się o ósmej.","Class starts at eight."],["dzisiaj","","today","Dzisiaj mam laboratorium.","I have lab today."],["jutro","","tomorrow","Jutro nie mam zajęć.","I do not have class tomorrow."],["w poniedziałek","","on Monday","W poniedziałek pracuję.","I work on Monday."],["za godzinę","","in an hour","Spotkamy się za godzinę.","We will meet in an hour."]]},{"title":"Unit 5 — Genitive Basics & Negation","cards":[["Nie mam czasu.","","I do not have time.","Dzisiaj nie mam czasu.","I do not have time today."],["Nie ma mleka.","","there is no milk.","W lodówce nie ma mleka.","There is no milk in the refrigerator."],["Potrzebuję pomocy.","","I need help.","Potrzebuję twojej pomocy.","I need your help."],["Szukam dworca.","","I am looking for the station.","Szukam dworca kolejowego.","I am looking for the train station."],["dużo pracy","","a lot of work","Mam dużo pracy.","I have a lot of work."],["trochę czasu","","a little time","Mam trochę czasu po zajęciach.","I have a little time after class."]]},{"title":"Unit 6 — A1 Real-life Conversation","cards":[["Co tam?","","what is up?","Hej, co tam?","Hey, what is up?"],["Dobra.","","okay / alright","Dobra, idziemy.","Alright, let us go."],["Spoko.","","cool / no problem","Spoko, mam czas.","No problem, I have time."],["Nie rozumiem.","","I do not understand.","Przepraszam, nie rozumiem.","Sorry, I do not understand."],["Proszę powtórzyć.","","please repeat.","Proszę powtórzyć wolniej.","Please repeat more slowly."],["Do zobaczenia.","","see you","Do zobaczenia jutro!","See you tomorrow!"]]}]},"pl_a2_course":{"language":"pl","name":"Polish II — A2","category":"course","lessons":[{"title":"Unit 1 — Past Tense","cards":[["byłem / byłam","","I was (male / female)","Wczoraj byłem w bibliotece.","Yesterday I was at the library."],["robiłem / robiłam","","I did / was doing","Wieczorem robiłem zadanie.","In the evening I was doing an assignment."],["poszedłem / poszłam","","I went (on foot)","Po zajęciach poszedłem do sklepu.","After class I went to the store."],["widziałem / widziałam","","I saw","Widziałem ten film wczoraj.","I saw that movie yesterday."],["miałem / miałam","","I had","Miałem dużo pracy.","I had a lot of work."],["uczyłem się / uczyłam się","","I studied / learned","Uczyłem się polskiego przez dwie godziny.","I studied Polish for two hours."]]},{"title":"Unit 2 — Future & Plans","cards":[["będę pracować","","I will work","Jutro będę pracować w domu.","Tomorrow I will work at home."],["będę się uczyć","","I will study / learn","Wieczorem będę się uczyć.","I will study in the evening."],["pojadę","","I will go by vehicle","W weekend pojadę do Warszawy.","I will go to Warsaw on the weekend."],["zrobię","","I will do / make (completed)","Zrobię to jutro.","I will do it tomorrow."],["zamierzam","","I intend to","Zamierzam zostać w Polsce rok.","I intend to stay in Poland for a year."],["planuję","","I am planning","Planuję podróż po Europie.","I am planning a trip around Europe."]]},{"title":"Unit 3 — Instrumental & Describing Roles","cards":[["Jestem inżynierem.","","I am an engineer.","Jestem inżynierem mechanicznym.","I am a mechanical engineer."],["Interesuję się...","","I am interested in...","Interesuję się robotyką.","I am interested in robotics."],["z kolegą","","with a male friend/classmate","Pracuję nad projektem z kolegą.","I am working on a project with a friend."],["z rodziną","","with family","Spędzam weekend z rodziną.","I spend the weekend with family."],["dobrym studentem","","a good student (instrumental)","On jest dobrym studentem.","He is a good student."],["ważnym problemem","","an important problem (instrumental)","To jest ważnym problemem dla zespołu.","This is an important problem for the team."]]},{"title":"Unit 4 — Locative & Places","cards":[["w Polsce","","in Poland","Studiuję w Polsce.","I study in Poland."],["w Krakowie","","in Kraków","Mieszkam w Krakowie.","I live in Kraków."],["na uczelni","","at university","Jestem teraz na uczelni.","I am at the university now."],["o projekcie","","about the project","Rozmawiamy o projekcie.","We are talking about the project."],["na spotkaniu","","at a meeting","Byłem na spotkaniu rano.","I was at a meeting in the morning."],["po pracy","","after work","Po pracy idę na siłownię.","After work I go to the gym."]]},{"title":"Unit 5 — Aspect Introduction","cards":[["robić / zrobić","","to do: imperfective / perfective","Muszę zrobić zadanie do jutra.","I have to finish the assignment by tomorrow."],["czytać / przeczytać","","to read / read through completely","Chcę przeczytać tę książkę.","I want to finish reading this book."],["pisać / napisać","","to write / write to completion","Muszę napisać e-mail.","I need to write an email."],["kupować / kupić","","to buy habitually / buy once","Chcę kupić bilet.","I want to buy a ticket."],["uczyć się / nauczyć się","","to learn / succeed in learning","Chcę nauczyć się mówić naturalnie.","I want to learn to speak naturally."],["jeść / zjeść","","to eat / eat up","Zjem obiad po zajęciach.","I will eat lunch after class."]]},{"title":"Unit 6 — A2 Natural Polish","cards":[["Serio?","","seriously?","Serio? Naprawdę to zrobiłeś?","Seriously? You really did that?"],["No jasne.","","yeah, of course","No jasne, pomogę ci.","Yeah, of course, I will help you."],["Nie ma sprawy.","","no problem","Dzięki! — Nie ma sprawy.","Thanks! — No problem."],["Daj spokój.","","come on / give it a rest","Daj spokój, nie martw się.","Come on, do not worry."],["Mam ochotę na...","","I feel like / want...","Mam ochotę na pierogi.","I feel like having pierogi."],["Zobaczymy.","","we will see","Może jutro. Zobaczymy.","Maybe tomorrow. We will see."]]}]},"pl_b1_course":{"language":"pl","name":"Polish III — B1","category":"course","lessons":[{"title":"Unit 1 — Aspect in Real Context","cards":[["Kiedy robiłem..., zadzwonił...","","while I was doing..., someone called...","Kiedy robiłem obiad, zadzwonił kolega.","While I was making dinner, a friend called."],["Już zrobiłem.","","I have already finished it.","Już zrobiłem raport.","I already finished the report."],["Jeszcze nie zrobiłem.","","I have not done it yet.","Jeszcze nie zrobiłem zadania.","I have not done the assignment yet."],["często kupuję","","I buy often / habitually","Często kupuję warzywa na targu.","I often buy vegetables at the market."],["kupiłem raz","","I bought once / completed","Wczoraj kupiłem nowy plecak.","Yesterday I bought a new backpack."],["udało mi się","","I managed to","Udało mi się skończyć projekt.","I managed to finish the project."]]},{"title":"Unit 2 — Conditional & Polite Hypotheticals","cards":[["chciałbym / chciałabym","","I would like","Chciałbym zamówić kawę.","I would like to order coffee."],["gdybym miał...","","if I had...","Gdybym miał więcej czasu, częściej bym czytał.","If I had more time, I would read more often."],["mógłbyś / mogłabyś","","could you...","Mógłbyś mi pomóc?","Could you help me?"],["powinienem / powinnam","","I should","Powinienem więcej ćwiczyć.","I should practice more."],["na twoim miejscu","","in your place / if I were you","Na twoim miejscu zapytałbym profesora.","If I were you, I would ask the professor."],["warto","","it is worth","Warto zobaczyć to muzeum.","It is worth seeing this museum."]]},{"title":"Unit 3 — Relative & Complex Sentences","cards":[["który / która / które","","who / which / that","To jest książka, którą kupiłem wczoraj.","This is the book that I bought yesterday."],["dlatego że","","because","Zostałem w domu, dlatego że byłem chory.","I stayed home because I was sick."],["mimo że","","even though","Mimo że padało, poszliśmy na spacer.","Even though it was raining, we went for a walk."],["chociaż","","although","Chociaż jestem zmęczony, muszę skończyć pracę.","Although I am tired, I must finish the work."],["zanim","","before","Sprawdzę wszystko, zanim wyślę raport.","I will check everything before I send the report."],["podczas gdy","","while / whereas","Ja gotowałem, podczas gdy on sprzątał.","I cooked while he cleaned."]]},{"title":"Unit 4 — University & Professional Polish","cards":[["badania","","research","Prowadzimy badania nad nowym materiałem.","We are conducting research on a new material."],["wyniki","","results","Wyniki eksperymentu są obiecujące.","The experiment results are promising."],["wniosek","","conclusion","Jaki jest główny wniosek z tych danych?","What is the main conclusion from these data?"],["rozwiązanie","","solution","Musimy znaleźć lepsze rozwiązanie.","We need to find a better solution."],["wymagania","","requirements","Projekt musi spełnić wszystkie wymagania.","The project must meet all requirements."],["termin","","deadline / date","Termin oddania raportu jest w piątek.","The report deadline is Friday."]]},{"title":"Unit 5 — Opinions & Discussion","cards":[["Moim zdaniem...","","in my opinion...","Moim zdaniem to najlepsze rozwiązanie.","In my opinion, this is the best solution."],["Zgadzam się.","","I agree.","Zgadzam się z twoim argumentem.","I agree with your argument."],["Nie do końca się zgadzam.","","I do not entirely agree.","Nie do końca się zgadzam z tym wnioskiem.","I do not entirely agree with that conclusion."],["Z jednej strony... z drugiej...","","on one hand... on the other...","Z jednej strony jest tanio, z drugiej daleko.","On one hand it is cheap, on the other it is far."],["wydaje mi się","","it seems to me","Wydaje mi się, że mamy problem.","It seems to me that we have a problem."],["według mnie","","according to me / in my view","Według mnie warto spróbować.","In my view, it is worth trying."]]},{"title":"Unit 6 — B1 Natural Speech","cards":[["Nie ogarniam.","","I do not get it / cannot keep up","Nie ogarniam tego planu zajęć.","I cannot make sense of this class schedule."],["Ale masakra.","","what a mess / this is rough","Ale masakra, znowu korek.","What a mess, traffic again."],["Mega dobrze.","","really good / awesome","Ten koncert był mega dobry.","That concert was really good."],["W sumie...","","actually / all things considered","W sumie masz rację.","Actually, you are right."],["No właśnie.","","exactly / that is the point","No właśnie, o tym mówię.","Exactly, that is what I am talking about."],["Bez sensu.","","makes no sense","Ten przepis jest bez sensu.","This rule makes no sense."]]}]},"pl_b2_course":{"language":"pl","name":"Polish IV — B2","category":"course","lessons":[{"title":"Unit 1 — Formal Argument & Register","cards":[["należy podkreślić, że...","","it should be emphasized that...","Należy podkreślić, że wyniki są wstępne.","It should be emphasized that the results are preliminary."],["z punktu widzenia...","","from the point of view of...","Z punktu widzenia kosztów to dobre rozwiązanie.","From a cost perspective, this is a good solution."],["w związku z tym","","therefore / in connection with this","Dane są niepełne, w związku z tym potrzebne są dalsze badania.","The data are incomplete, therefore further research is needed."],["co więcej","","moreover","Metoda jest szybsza, co więcej, zużywa mniej energii.","The method is faster; moreover, it uses less energy."],["niemniej jednak","","nevertheless","Wyniki są dobre, niemniej jednak należy zachować ostrożność.","The results are good; nevertheless, caution is needed."],["biorąc pod uwagę","","taking into account","Biorąc pod uwagę koszt, wybraliśmy prostszą opcję.","Taking cost into account, we chose the simpler option."]]},{"title":"Unit 2 — Participles & Dense Written Polish","cards":[["pracujący student","","a student who is working","Pracujący student musi dobrze planować czas.","A working student must manage time well."],["wykonane zadanie","","completed task","Wykonane zadanie zostało sprawdzone.","The completed task was checked."],["analizując dane","","while analyzing the data","Analizując dane, zauważyliśmy nietypowy trend.","While analyzing the data, we noticed an unusual trend."],["oparty na...","","based on...","Model jest oparty na danych eksperymentalnych.","The model is based on experimental data."],["dotyczący","","concerning / regarding","Przeczytałem artykuł dotyczący energetyki.","I read an article concerning energy."],["wynikający z","","resulting from","Błąd wynikający z pomiaru był niewielki.","The error resulting from measurement was small."]]},{"title":"Unit 3 — Nuance, Emphasis & Word Order","cards":[["właśnie","","exactly / just / precisely","Właśnie o to mi chodzi.","That is exactly what I mean."],["dopiero","","only then / not until","Dopiero wieczorem miałem czas.","I did not have time until the evening."],["nawet","","even","Nawet profesor nie znał odpowiedzi.","Even the professor did not know the answer."],["przecież","","after all / you know","Przecież mówiłem, że będę później.","I told you I would be later, remember."],["chyba","","probably / I think","Chyba zostanę dziś w domu.","I think I will stay home today."],["raczej","","rather / probably","Raczej nie zdążymy na ten pociąg.","We probably will not make that train."]]},{"title":"Unit 4 — Society, News & Abstract Vocabulary","cards":[["zjawisko","","phenomenon","To zjawisko jest coraz częstsze.","This phenomenon is becoming more common."],["wpływ","","influence / impact","Technologia ma duży wpływ na edukację.","Technology has a large impact on education."],["podejście","","approach","Potrzebujemy nowego podejścia do problemu.","We need a new approach to the problem."],["zakres","","scope / range","Zakres projektu został rozszerzony.","The scope of the project was expanded."],["założenie","","assumption / premise","To założenie nie zawsze jest prawdziwe.","This assumption is not always true."],["świadomość","","awareness","Rośnie świadomość problemów środowiskowych.","Awareness of environmental problems is growing."]]},{"title":"Unit 5 — Idiomatic & Natural B2 Polish","cards":[["mieć coś na głowie","","to have a lot to deal with","Mam teraz dużo na głowie.","I have a lot on my plate right now."],["dać sobie radę","","to manage / cope","Spokojnie, dam sobie radę.","Do not worry, I will manage."],["wyjść na jaw","","to come to light","Prawda w końcu wyszła na jaw.","The truth finally came to light."],["brać coś pod uwagę","","to take something into account","Musimy brać koszty pod uwagę.","We must take costs into account."],["nie mieć pojęcia","","to have no idea","Nie mam pojęcia, gdzie on jest.","I have no idea where he is."],["trzymać kciuki","","to keep one's fingers crossed","Trzymam kciuki za twój egzamin.","I am keeping my fingers crossed for your exam."]]},{"title":"Unit 6 — B2 Reading & Synthesis","cards":[["podsumowując","","to summarize","Podsumowując, projekt osiągnął większość celów.","To summarize, the project achieved most goals."],["wynika z tego, że...","","it follows that...","Z danych wynika, że metoda jest skuteczna.","The data show that the method is effective."],["można zauważyć, że...","","one can observe that...","Można zauważyć, że trend się zmienia.","One can observe that the trend is changing."],["w przeciwieństwie do...","","in contrast to...","W przeciwieństwie do starej metody, ta jest szybsza.","In contrast to the old method, this one is faster."],["ze względu na...","","due to / because of","Spotkanie odwołano ze względu na pogodę.","The meeting was canceled due to the weather."],["o ile...","","provided that / insofar as","Plan zadziała, o ile wszyscy będą współpracować.","The plan will work provided everyone cooperates."]]}]},"es_a1_course":{"language":"es","name":"Mexican Spanish I — A1","category":"course","lessons":[{"title":"Unit 1 — Introductions & Everyday Identity","cards":[["Me llamo...","","my name is...","Me llamo Kevin. Mucho gusto.","My name is Kevin. Nice to meet you."],["Soy estudiante.","","I am a student.","Soy estudiante de ingeniería.","I am an engineering student."],["¿De dónde eres?","","where are you from?","¿De dónde eres? Soy de Estados Unidos.","Where are you from? I am from the United States."],["Vivo en...","","I live in...","Vivo cerca de la universidad.","I live near the university."],["¿Cómo estás?","","how are you?","Hola, ¿cómo estás?","Hi, how are you?"],["Todo bien.","","everything is good / all good","Todo bien, gracias.","All good, thanks."]]},{"title":"Unit 2 — Ser, Estar & Hay","cards":[["soy","","I am; identity","Soy mexicano.","I am Mexican."],["estoy","","I am; state/location","Estoy cansado hoy.","I am tired today."],["es","","is; identity/description","La clase es difícil.","The class is difficult."],["está","","is; state/location","La tienda está abierta.","The store is open."],["hay","","there is / there are","Hay una cafetería aquí.","There is a café here."],["¿Dónde está...?","","where is...?","¿Dónde está el baño?","Where is the bathroom?"]]},{"title":"Unit 3 — Present Tense & Daily Routine","cards":[["trabajo","","I work","Trabajo por la mañana.","I work in the morning."],["estudio","","I study","Estudio español todos los días.","I study Spanish every day."],["como","","I eat","Como a las dos.","I eat at two."],["vivo","","I live","Vivo con dos amigos.","I live with two friends."],["voy","","I go","Voy a la escuela en carro.","I go to school by car."],["tengo","","I have","Tengo clase a las nueve.","I have class at nine."]]},{"title":"Unit 4 — Questions, Food & Ordering","cards":[["¿Qué?","","what?","¿Qué quieres comer?","What do you want to eat?"],["¿Cuánto?","","how much?","¿Cuánto cuesta?","How much does it cost?"],["¿Me da...?","","can I get...?; common polite ordering in Mexico","¿Me da dos tacos, por favor?","Can I get two tacos, please?"],["Quiero...","","I want...","Quiero una agua, por favor.","I want a water, please."],["La cuenta, por favor.","","the bill, please","La cuenta, por favor. Gracias.","The bill, please. Thanks."],["Para llevar.","","to go / takeaway","Es para llevar.","It is to go."]]},{"title":"Unit 5 — Gustar, Family & Preferences","cards":[["Me gusta...","","I like...","Me gusta la música.","I like music."],["Me gustan...","","I like... plural","Me gustan los tacos.","I like tacos."],["No me gusta...","","I do not like...","No me gusta levantarme temprano.","I do not like waking up early."],["mi familia","","my family","Mi familia vive lejos.","My family lives far away."],["mi hermano / hermana","","my brother / sister","Mi hermana estudia medicina.","My sister studies medicine."],["prefiero","","I prefer","Prefiero café sin azúcar.","I prefer coffee without sugar."]]},{"title":"Unit 6 — A1 Mexican Conversation","cards":[["¿Qué onda?","","what is up?","¿Qué onda? ¿Todo bien?","What is up? Everything good?"],["Ahorita voy.","","I am coming / going in a moment","Ahorita voy, espérame.","I am coming in a moment, wait for me."],["Mande.","","yes? / pardon?; common polite Mexican response","¿Mande? No escuché.","Pardon? I did not hear."],["Nos vemos.","","see you","Nos vemos mañana.","See you tomorrow."],["Me avisas.","","let me know","Me avisas cuando llegues.","Let me know when you arrive."],["Está bien.","","it is okay / alright","Está bien, no pasa nada.","It is okay, no worries."]]}]},"es_a2_course":{"language":"es","name":"Mexican Spanish II — A2","category":"course","lessons":[{"title":"Unit 1 — Preterite: Completed Past","cards":[["fui","","I went / I was","Ayer fui al centro.","Yesterday I went downtown."],["comí","","I ate","Comí tacos anoche.","I ate tacos last night."],["hice","","I did / made","Hice la tarea temprano.","I did the homework early."],["tuve","","I had","Tuve un examen ayer.","I had an exam yesterday."],["llegué","","I arrived","Llegué a casa a las diez.","I arrived home at ten."],["compré","","I bought","Compré un boleto de autobús.","I bought a bus ticket."]]},{"title":"Unit 2 — Imperfect: Background & Habit","cards":[["era","","was; background/description","Cuando era niño, vivía en un pueblo pequeño.","When I was a child, I lived in a small town."],["estaba","","was; state/location","Estaba cansado después del trabajo.","I was tired after work."],["iba","","used to go / was going","Iba al gimnasio cada tarde.","I used to go to the gym every afternoon."],["tenía","","used to have / had","Tenía más tiempo antes.","I used to have more time before."],["hacía","","used to do / weather was","Hacía mucho calor.","It was very hot."],["siempre","","always","Siempre estudiaba por la noche.","I always studied at night."]]},{"title":"Unit 3 — Direct & Indirect Objects","cards":[["lo veo","","I see it/him","Lo veo todos los días.","I see him every day."],["la conozco","","I know her","La conozco de la universidad.","I know her from the university."],["le dije","","I told him/her","Le dije la verdad.","I told him/her the truth."],["me dio","","he/she gave me","Mi amigo me dio un consejo.","My friend gave me advice."],["te mando","","I send you","Te mando la dirección.","I will send you the address."],["se lo doy","","I give it to him/her","Se lo doy mañana.","I will give it to him/her tomorrow."]]},{"title":"Unit 4 — Commands & Practical Mexico","cards":[["Dime.","","tell me","Dime qué pasó.","Tell me what happened."],["Espérame.","","wait for me","Espérame aquí.","Wait for me here."],["Pásale.","","come in / go ahead; common in Mexico","¡Pásale! La puerta está abierta.","Come in! The door is open."],["Fíjate.","","look / notice / imagine; common discourse marker","Fíjate que mañana no hay clase.","You know, there is no class tomorrow."],["Ten cuidado.","","be careful","Ten cuidado al cruzar.","Be careful when crossing."],["No te preocupes.","","do not worry","No te preocupes, yo lo hago.","Do not worry, I will do it."]]},{"title":"Unit 5 — Future Plans & Comparisons","cards":[["Voy a...","","I am going to...","Voy a estudiar en la tarde.","I am going to study in the afternoon."],["más que","","more than","Este examen es más difícil que el otro.","This exam is harder than the other one."],["menos que","","less than","Duermo menos que antes.","I sleep less than before."],["tan... como","","as... as","Este lugar es tan bueno como el otro.","This place is as good as the other one."],["mejor","","better","Este método funciona mejor.","This method works better."],["peor","","worse","El tráfico está peor hoy.","Traffic is worse today."]]},{"title":"Unit 6 — A2 Mexican Natural Speech","cards":[["No manches.","","no way / come on","¡No manches! ¿En serio?","No way! Seriously?"],["Órale.","","wow / okay / come on / let's go depending on context","Órale, vámonos.","Alright, let us go."],["Qué padre.","","how cool / awesome","Qué padre está este lugar.","This place is so cool."],["Me late.","","I like it / sounds good to me","Sí, me late esa idea.","Yeah, I like that idea."],["Al rato.","","later / in a while","Te marco al rato.","I will call you later."],["Ni modo.","","oh well / nothing you can do","Ni modo, será para la próxima.","Oh well, maybe next time."]]}]},"es_b1_course":{"language":"es","name":"Mexican Spanish III — B1","category":"course","lessons":[{"title":"Unit 1 — Present Subjunctive","cards":[["Quiero que vengas.","","I want you to come.","Quiero que vengas a la reunión.","I want you to come to the meeting."],["Es importante que...","","it is important that...","Es importante que estudies con constancia.","It is important that you study consistently."],["Espero que...","","I hope that...","Espero que todo salga bien.","I hope everything goes well."],["No creo que...","","I do not think that...","No creo que sea tan difícil.","I do not think it is that difficult."],["Cuando tengas tiempo...","","when you have time... future/uncertain","Cuando tengas tiempo, márcame.","When you have time, call me."],["para que","","so that","Te lo explico para que entiendas.","I will explain it so that you understand."]]},{"title":"Unit 2 — Por, Para & Cause/Purpose","cards":[["por eso","","that is why","Estaba cansado, por eso me fui temprano.","I was tired, that is why I left early."],["para mí","","for me / in my opinion","Para mí, esta opción es mejor.","For me, this option is better."],["por trabajo","","for work / because of work","Estoy en Monterrey por trabajo.","I am in Monterrey for work."],["para mañana","","for tomorrow / by tomorrow","Necesito el reporte para mañana.","I need the report by tomorrow."],["por dos horas","","for two hours","Estudié por dos horas.","I studied for two hours."],["para aprender","","in order to learn","Practico todos los días para aprender más rápido.","I practice every day to learn faster."]]},{"title":"Unit 3 — Se & Natural Impersonal Speech","cards":[["se vende","","for sale / is sold","Aquí se vende comida casera.","Homemade food is sold here."],["se puede","","one can / it is possible","¿Se puede pagar con tarjeta?","Can you pay by card?"],["se necesita","","needed / one needs","Se necesita experiencia para el puesto.","Experience is needed for the position."],["se me olvidó","","I forgot it (it slipped my mind)","Se me olvidó traer la tarea.","I forgot to bring the homework."],["se me cayó","","I dropped it / it fell on me","Se me cayó el celular.","I dropped my phone."],["se dice","","one says / it is said","¿Cómo se dice esto en español?","How do you say this in Spanish?"]]},{"title":"Unit 4 — Narration & Past Contrast","cards":[["Mientras...","","while...","Mientras estudiaba, me llamó mi amigo.","While I was studying, my friend called me."],["De repente...","","suddenly...","De repente empezó a llover.","Suddenly it started to rain."],["Ya había...","","had already...","Cuando llegué, ya habían comido.","When I arrived, they had already eaten."],["Antes solía...","","I used to...","Antes solía salir más seguido.","I used to go out more often."],["al final","","in the end","Al final decidimos quedarnos.","In the end we decided to stay."],["resulta que","","it turns out that","Resulta que la tienda estaba cerrada.","It turns out the store was closed."]]},{"title":"Unit 5 — Opinion, Work & University","cards":[["Desde mi punto de vista...","","from my point of view...","Desde mi punto de vista, falta información.","From my point of view, information is missing."],["Estoy de acuerdo.","","I agree.","Estoy de acuerdo con esa conclusión.","I agree with that conclusion."],["No estoy tan de acuerdo.","","I do not agree that much.","No estoy tan de acuerdo con esa idea.","I do not agree with that idea very much."],["investigación","","research","Estoy trabajando en una investigación.","I am working on a research project."],["resultados","","results","Los resultados fueron mejores de lo esperado.","The results were better than expected."],["fecha límite","","deadline","La fecha límite es el viernes.","The deadline is Friday."]]},{"title":"Unit 6 — B1 Mexican Conversation","cards":[["Está cañón.","","it is tough / intense / crazy","El examen estuvo cañón.","The exam was really tough."],["Chale.","","dang / that sucks","Chale, perdí el camión.","Dang, I missed the bus."],["La neta...","","honestly / the truth is...; very Mexican informal","La neta, sí me gustó.","Honestly, I did like it."],["Aguas.","","watch out / careful; Mexican","¡Aguas! Viene un carro.","Watch out! A car is coming."],["Qué flojera.","","what a drag / I cannot be bothered","Qué flojera hacer todo eso hoy.","What a drag to do all that today."],["Está buenísimo.","","it is extremely good","Este lugar está buenísimo.","This place is really good."]]}]},"es_b2_course":{"language":"es","name":"Mexican Spanish IV — B2","category":"course","lessons":[{"title":"Unit 1 — Advanced Subjunctive & Hypothesis","cards":[["Si tuviera...","","if I had...","Si tuviera más tiempo, estudiaría otro idioma.","If I had more time, I would study another language."],["Aunque fuera...","","even if it were...","Aunque fuera difícil, lo intentaría.","Even if it were difficult, I would try."],["Ojalá hubiera...","","I wish there had...","Ojalá hubiera sabido antes.","I wish I had known earlier."],["No pensé que fuera...","","I did not think it would be...","No pensé que fuera tan complicado.","I did not think it would be so complicated."],["como si","","as if","Habla como si supiera todo.","He talks as if he knew everything."],["a menos que","","unless","No iremos a menos que deje de llover.","We will not go unless it stops raining."]]},{"title":"Unit 2 — Conditional, Reported Speech & Nuance","cards":[["Habría hecho...","","I would have done...","Habría ido, pero tuve que trabajar.","I would have gone, but I had to work."],["Dijo que vendría.","","he/she said that he/she would come.","Dijo que vendría más tarde.","He said he would come later."],["Me comentó que...","","he/she mentioned to me that...","Me comentó que el proyecto cambió.","She told me the project changed."],["Según...","","according to...","Según el reporte, los costos bajaron.","According to the report, costs decreased."],["Al parecer...","","apparently...","Al parecer, van a cambiar el horario.","Apparently, they are going to change the schedule."],["Por lo visto...","","apparently / from what it looks like","Por lo visto, ya resolvieron el problema.","Apparently, they already solved the problem."]]},{"title":"Unit 3 — Complex Connections & Formal Argument","cards":[["sin embargo","","however","El método es rápido; sin embargo, cuesta más.","The method is fast; however, it costs more."],["por lo tanto","","therefore","Los datos son claros; por lo tanto, podemos continuar.","The data are clear; therefore, we can continue."],["a pesar de que","","despite the fact that","A pesar de que llovía, fuimos.","Even though it was raining, we went."],["debido a","","due to","El vuelo se retrasó debido al clima.","The flight was delayed due to weather."],["con tal de que","","provided that","Puedes usarlo con tal de que lo cuides.","You can use it provided that you take care of it."],["en cuanto a","","regarding / as for","En cuanto al costo, falta revisarlo.","Regarding the cost, it still needs review."]]},{"title":"Unit 4 — Professional & Academic Vocabulary","cards":[["enfoque","","approach","Necesitamos un enfoque distinto.","We need a different approach."],["hallazgo","","finding / discovery","El principal hallazgo fue inesperado.","The main finding was unexpected."],["alcance","","scope / reach","El alcance del proyecto aumentó.","The scope of the project increased."],["supuesto","","assumption","Ese supuesto debe comprobarse.","That assumption must be verified."],["desempeño","","performance","El desempeño del sistema mejoró.","The system's performance improved."],["viabilidad","","feasibility","Estamos evaluando la viabilidad del diseño.","We are evaluating the feasibility of the design."]]},{"title":"Unit 5 — Mexican Register, Idioms & Real Speech","cards":[["echarle ganas","","to give it your best / put in effort; Mexican","Échale ganas al examen.","Give the exam your best effort."],["ponerse las pilas","","to get moving / get serious","Hay que ponerse las pilas con el proyecto.","We need to get serious about the project."],["sacar la chamba","","to get the job/work done; Mexican informal","Entre todos sacamos la chamba.","Together we got the work done."],["de plano","","really / completely / flat-out; Mexican","De plano no pude ir.","I really could not go."],["ni de chiste","","no way / not a chance; Mexican","Ni de chiste pago tanto.","No way am I paying that much."],["me cae que...","","I swear / I really think...; Mexican informal","Me cae que sí funciona.","I swear it really works."]]},{"title":"Unit 6 — B2 Reading & Synthesis","cards":[["en resumen","","in summary","En resumen, los resultados apoyan la hipótesis.","In summary, the results support the hypothesis."],["se puede concluir que...","","it can be concluded that...","Se puede concluir que el cambio fue positivo.","It can be concluded that the change was positive."],["cabe señalar que...","","it is worth noting that...","Cabe señalar que la muestra fue pequeña.","It is worth noting that the sample was small."],["a diferencia de...","","unlike / in contrast to","A diferencia del modelo anterior, este consume menos energía.","Unlike the previous model, this one uses less energy."],["tomando en cuenta...","","taking into account...","Tomando en cuenta el costo, elegimos otra opción.","Taking cost into account, we chose another option."],["hasta cierto punto","","to a certain extent","Estoy de acuerdo hasta cierto punto.","I agree to a certain extent."]]}]}});

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

Object.assign(INPUT, {"ja_n5_course":[["今日は大学へ行きます。九時から日本語の授業があります。","Today I am going to university. I have Japanese class from nine."],["昨日、友達とラーメンを食べました。とてもおいしかったです。","Yesterday I ate ramen with a friend. It was very delicious."]],"ja_n4_course":[["時間があったら、駅の近くの本屋へ行くつもりです。","If I have time, I plan to go to the bookstore near the station."],["先生に作文を直してもらったので、間違いがよく分かりました。","I had my teacher correct my essay, so I understood my mistakes well."]],"ja_n3_course":[["最近、日本語のニュースが少し分かるようになりました。一方で、速い会話はまだ難しいです。","Recently I have become able to understand some Japanese news. On the other hand, fast conversation is still difficult."],["天気予報によると、明日は雨らしいです。そのため、イベントは中止になるかもしれません。","According to the forecast, apparently it will rain tomorrow. Therefore, the event may be canceled."]],"ja_n2_course":[["技術の発展に伴って働き方も変化している。しかし、便利になったからといって、すべての問題が解決するわけではない。","As technology develops, ways of working are also changing. However, becoming more convenient does not mean every problem is solved."],["調査結果に基づいて判断する必要があるものの、数字だけでは分からない要因も考慮すべきだ。","Although decisions need to be based on survey results, factors that numbers alone cannot reveal should also be considered."]],"pl_a1_course":[["Mam dziś zajęcia o dziewiątej. Po zajęciach idę do biblioteki.","I have class at nine today. After class I am going to the library."],["Poproszę kawę i wodę. Ile to kosztuje?","I would like coffee and water. How much does it cost?"]],"pl_a2_course":[["Wczoraj byłem na uczelni do późna, bo musiałem skończyć projekt.","Yesterday I was at university until late because I had to finish a project."],["W weekend pojadę do Warszawy i spotkam się z kolegą.","On the weekend I will go to Warsaw and meet a friend."]],"pl_b1_course":[["Mimo że projekt był trudny, udało nam się skończyć go przed terminem.","Although the project was difficult, we managed to finish it before the deadline."],["Moim zdaniem to rozwiązanie jest dobre, ale nie do końca zgadzam się z założeniami.","In my opinion this solution is good, but I do not entirely agree with the assumptions."]],"pl_b2_course":[["Biorąc pod uwagę wyniki badań, można zauważyć, że nowe podejście poprawiło efektywność.","Taking the research results into account, one can observe that the new approach improved efficiency."],["Należy podkreślić, że są to wyniki wstępne; niemniej jednak wskazują one wyraźny trend.","It should be emphasized that these are preliminary results; nevertheless, they indicate a clear trend."]],"es_a1_course":[["Hoy tengo clase a las nueve. Después voy por unos tacos con un amigo.","Today I have class at nine. Afterwards I am going to get some tacos with a friend."],["¿Me da una botella de agua, por favor? Es para llevar.","Can I get a bottle of water, please? It is to go."]],"es_a2_course":[["Ayer fui al centro y compré un boleto. Había mucha gente y hacía calor.","Yesterday I went downtown and bought a ticket. There were many people and it was hot."],["Al rato voy a estudiar. Ahorita estoy terminando de comer.","Later I am going to study. Right now I am finishing eating."]],"es_b1_course":[["Aunque estaba cansado, terminé el reporte para que mi equipo pudiera revisarlo.","Although I was tired, I finished the report so my team could review it."],["La neta, pensé que el examen iba a estar más fácil, pero estuvo cañón.","Honestly, I thought the exam was going to be easier, but it was really tough."]],"es_b2_course":[["Tomando en cuenta el costo y el desempeño, se puede concluir que la segunda opción es más viable.","Taking cost and performance into account, it can be concluded that the second option is more feasible."],["A pesar de que los resultados son prometedores, cabe señalar que todavía falta validar el método.","Although the results are promising, it is worth noting that the method still needs to be validated."]]});

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


const COURSE_CATALOG = {"ja":[{"id":"ja1","subject":"ja_n5_course","title":"Japanese I","level":"JLPT N5","weeks":"12 weeks","hours":"6–8 hrs/week","prereq":"Learn Hiragana early; Katakana is introduced alongside the course.","description":"Foundational Japanese: core grammar, high-frequency vocabulary, reading, conversation, and kana reinforcement."},{"id":"ja2","subject":"ja_n4_course","title":"Japanese II","level":"JLPT N4","weeks":"12 weeks","hours":"7–9 hrs/week","prereq":"Japanese I / N5 foundation.","description":"Te-form, ability, experience, giving/receiving, conditionals, relative clauses, and longer reading."},{"id":"ja3","subject":"ja_n3_course","title":"Japanese III","level":"JLPT N3","weeks":"14 weeks","hours":"8–10 hrs/week","prereq":"Japanese II / N4 foundation.","description":"Intermediate grammar, passive/causative, argument structure, abstract vocabulary, natural conversation, and sustained reading."},{"id":"ja4","subject":"ja_n2_course","title":"Japanese IV","level":"JLPT N2","weeks":"16 weeks","hours":"10–12 hrs/week","prereq":"Japanese III / strong N3 foundation.","description":"N2 grammar and vocabulary, academic/workplace register, nuanced reading, abstract arguments, and natural Japanese."}],"pl":[{"id":"pl1","subject":"pl_a1_course","title":"Polish I","level":"A1","weeks":"12 weeks","hours":"5–7 hrs/week","prereq":"None.","description":"Pronunciation, present tense, core cases, ordering, time, and everyday conversation."},{"id":"pl2","subject":"pl_a2_course","title":"Polish II","level":"A2","weeks":"12 weeks","hours":"6–8 hrs/week","prereq":"Polish I / A1.","description":"Past and future, instrumental and locative, aspect foundations, and natural everyday Polish."},{"id":"pl3","subject":"pl_b1_course","title":"Polish III","level":"B1","weeks":"14 weeks","hours":"7–9 hrs/week","prereq":"Polish II / A2.","description":"Aspect in context, conditionals, complex sentences, university/work language, argument, and natural speech."},{"id":"pl4","subject":"pl_b2_course","title":"Polish IV","level":"B2","weeks":"16 weeks","hours":"8–10 hrs/week","prereq":"Polish III / B1.","description":"Formal argument, participles, abstract vocabulary, idioms, nuanced discourse, and advanced reading."}],"es":[{"id":"es1","subject":"es_a1_course","title":"Mexican Spanish I","level":"A1","weeks":"12 weeks","hours":"5–7 hrs/week","prereq":"None.","description":"Core present tense, ser/estar, daily life, ordering, preferences, and real Mexican conversation."},{"id":"es2","subject":"es_a2_course","title":"Mexican Spanish II","level":"A2","weeks":"12 weeks","hours":"6–8 hrs/week","prereq":"Mexican Spanish I / A1.","description":"Past tenses, objects, commands, plans, comparisons, and common Mexican expressions."},{"id":"es3","subject":"es_b1_course","title":"Mexican Spanish III","level":"B1","weeks":"14 weeks","hours":"7–9 hrs/week","prereq":"Mexican Spanish II / A2.","description":"Subjunctive, por/para, se, narration, university/work discussion, and natural Mexican speech."},{"id":"es4","subject":"es_b2_course","title":"Mexican Spanish IV","level":"B2","weeks":"16 weeks","hours":"8–10 hrs/week","prereq":"Mexican Spanish III / B1.","description":"Advanced subjunctive, reported speech, formal argument, academic vocabulary, idioms, and synthesis."}]};

const LANGUAGE_META = {
  ja:{label:"Japanese",home:"🇯🇵 Japanese",defaultSubject:"hiragana"},
  pl:{label:"Polish",home:"🇵🇱 Polish",defaultSubject:"polish_pronunciation"},
  es:{label:"Mexican Spanish",home:"🇲🇽 Mexican Spanish",defaultSubject:"spanish_basics"}
};
function languageLabel(lang){ return LANGUAGE_META[lang]?.label || lang; }
function languageHomeLabel(lang){ return LANGUAGE_META[lang]?.home || lang; }
function defaultSubjectForLanguage(lang){ return LANGUAGE_META[lang]?.defaultSubject || SUBJECTS[lang]?.[0]?.[0]; }

function courseSubjectKeys(lang){
  return (COURSE_CATALOG[lang]||[]).map(c=>c.subject);
}
function allLanguageSubjectKeys(lang){
  return [...new Set([
    ...(SUBJECTS[lang]||[]).map(x=>x[0]),
    ...courseSubjectKeys(lang)
  ])];
}
function normalizedCourseProgress(subjectKey){
  const cards=allCards(subjectKey);
  if(!cards.length) return 0;
  const values=cards.map(card=>{
    const m=masteryOf(card,subjectKey);
    return Math.max(0,Math.min(100,Math.round((m-30)/70*100)));
  });
  return Math.round(values.reduce((a,b)=>a+b,0)/values.length);
}
function courseSeenStats(subjectKey){
  const cards=allCards(subjectKey);
  let seen=0,correct=0;
  cards.forEach(card=>{
    const s=stats[cardKey(card,subjectKey)] || {seen:0,correct:0};
    seen+=s.seen; correct+=s.correct;
  });
  return {seen,correct,accuracy:seen?Math.round(correct/seen*100):0};
}
function courseLetterGrade(subjectKey){
  const s=courseSeenStats(subjectKey);
  if(!s.seen) return "Not started";
  const m=averageMastery(allCards(subjectKey),subjectKey);
  if(m>=90) return "A";
  if(m>=80) return "B";
  if(m>=70) return "C";
  if(m>=60) return "D";
  return "Needs review";
}


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
    { key: "courses", eyebrow: "College track", title: "Course Catalog", desc: "Follow a structured semester-by-semester path with units, midterms, and finals." },
    { key: "spanish_basics", eyebrow: "Start here", title: "Mexican Spanish Basics", desc: "Learn high-frequency phrases in context." },
    { key: "spanish_everyday", eyebrow: "Everyday speech", title: "Real Conversation", desc: "Daily life and natural Mexican wording." },
    { key: "spanish_natural", eyebrow: "Natural Mexican Spanish", title: "Slang & Expressions", desc: "Learn phrases like qué onda, no manches, and órale in context." },
    { key: "recommended", eyebrow: "Not sure?", title: "Recommend for me", desc: "Let Keon choose your next lesson." }
  ],
  ja: [
    { key: "courses", eyebrow: "College track", title: "Course Catalog", desc: "Follow a structured semester-by-semester path with units, midterms, and finals." },
    { key: "hiragana", eyebrow: "Recommended for beginners", title: "Start with Hiragana", desc: "Learn the main Japanese characters first." },
    { key: "katakana", eyebrow: "Writing system", title: "Start with Katakana", desc: "Good for loanwords and signs." },
    { key: "japanese_basics", eyebrow: "Useful Japanese", title: "Basic Phrases", desc: "Greetings, introductions, and useful phrases." },
    { key: "recommended", eyebrow: "Not sure?", title: "Recommend for me", desc: "Let Keon choose your next lesson." }
  ],
  pl: [
    { key: "courses", eyebrow: "College track", title: "Course Catalog", desc: "Follow a structured semester-by-semester path with units, midterms, and finals." },
    { key: "polish_pronunciation", eyebrow: "Recommended for beginners", title: "Pronunciation First", desc: "Start with letters and sound patterns." },
    { key: "polish_basics", eyebrow: "Useful Polish", title: "Basic Phrases", desc: "Greetings and everyday words." },
    { key: "polish_travel", eyebrow: "Travel", title: "Travel Polish", desc: "Food, stations, tickets, and getting around." },
    { key: "recommended", eyebrow: "Not sure?", title: "Recommend for me", desc: "Let Keon choose your next lesson." }
  ]
};

function getLanguageSubjects(lang){ return allLanguageSubjectKeys(lang); }
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
  if(actionKey === "courses"){ showCourseCatalog(); return; }
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

let activeCourseId=null;

function showCourseCatalog(){
  renderCourseCatalog();
  show("courseCatalog");
}
function renderCourseCatalog(){
  document.getElementById("courseCatalogTitle").textContent=languageLabel(activeLanguage)+" — College Track";
  document.getElementById("courseCatalogIntro").textContent=
    activeLanguage==="ja"
      ? "A structured Japanese sequence from foundation through JLPT N2. Treat each course like a semester: work through units in order, use cumulative reviews, then take the midterm and final checkpoints."
      : `A structured ${languageLabel(activeLanguage)} sequence from beginner through B2. Work through each course like a college semester.`;

  const box=document.getElementById("courseCatalogList");
  box.innerHTML="";
  (COURSE_CATALOG[activeLanguage]||[]).forEach((course,index)=>{
    const progress=normalizedCourseProgress(course.subject);
    const seen=courseSeenStats(course.subject);
    const card=document.createElement("div");
    card.className="courseCard";
    card.innerHTML=`
      <div class="courseTop">
        <div>
          <div class="courseNumber">COURSE ${index+1}</div>
          <h3>${course.title} <span class="courseLevel">${course.level}</span></h3>
        </div>
        <div class="coursePercent">${progress}%</div>
      </div>
      <p>${course.description}</p>
      <div class="courseMeta">
        <span>📅 ${course.weeks}</span>
        <span>📚 ${course.hours}</span>
        <span>🎓 ${courseLetterGrade(course.subject)}</span>
        ${seen.seen?`<span>🎯 ${seen.accuracy}% practice accuracy</span>`:""}
      </div>
      <div class="bar"><div class="fill" style="width:${progress}%"></div></div>
      <p class="small"><strong>Prerequisite:</strong> ${course.prereq}</p>
      <button class="btn full courseOpenButton">Open Course</button>
    `;
    card.querySelector(".courseOpenButton").onclick=()=>openCourse(course.id);
    box.appendChild(card);
  });
}
function getCourseById(id){
  return Object.values(COURSE_CATALOG).flat().find(c=>c.id===id);
}
function openCourse(id){
  activeCourseId=id;
  renderCourseDetail();
  show("courseDetail");
}
function renderCourseDetail(){
  const course=getCourseById(activeCourseId);
  if(!course) return showCourseCatalog();
  const data=DATA[course.subject];
  const progress=normalizedCourseProgress(course.subject);
  const seen=courseSeenStats(course.subject);

  document.getElementById("courseDetailTitle").textContent=`${course.title} — ${course.level}`;
  document.getElementById("courseDetailDesc").textContent=course.description;
  document.getElementById("courseDetailProgress").textContent=`${progress}% complete`;
  document.getElementById("courseDetailGrade").textContent=courseLetterGrade(course.subject);
  document.getElementById("courseDetailAccuracy").textContent=seen.seen?`${seen.accuracy}%`:"—";
  document.getElementById("courseDetailHours").textContent=course.hours;
  document.getElementById("coursePrereq").textContent=course.prereq;

  const units=document.getElementById("courseUnits");
  units.innerHTML="";
  data.lessons.forEach((lesson,i)=>{
    const avg=averageMastery(lesson.cards,course.subject);
    const pct=Math.max(0,Math.min(100,Math.round((avg-30)/70*100)));
    const item=document.createElement("div");
    item.className="courseUnit";
    const weekStart=i*2+1;
    const weekEnd=Math.min(weekStart+1,parseInt(course.weeks)||12);
    item.innerHTML=`
      <div class="unitHeader">
        <div>
          <div class="courseNumber">WEEKS ${weekStart}–${weekEnd}</div>
          <h3>${lesson.title}</h3>
        </div>
        <strong>${pct}%</strong>
      </div>
      <p class="small">Objective: recognize and use the vocabulary, structures, and context in this unit without relying on immediate translation.</p>
      <div class="bar"><div class="fill" style="width:${pct}%"></div></div>
      <div class="unitActions">
        <button class="btn unitStudy">Study Unit</button>
        <button class="btn secondary unitInput">Reading / Context</button>
      </div>`;
    item.querySelector(".unitStudy").onclick=()=>{
      subject=course.subject;
      selected={subject:course.subject,title:`${course.title}: ${lesson.title}`,cards:lesson.cards};
      openPreview();
    };
    item.querySelector(".unitInput").onclick=()=>{
      subject=course.subject;
      selected={subject:course.subject,title:`${course.title}: ${lesson.title}`,cards:lesson.cards};
      inputDeck=INPUT[course.subject]||[];
      startInputSession();
    };
    units.appendChild(item);
  });
}
function startCourseCheckpoint(kind){
  const course=getCourseById(activeCourseId);
  if(!course) return;
  subject=course.subject;
  const lessons=DATA[course.subject].lessons;
  const midpoint=Math.ceil(lessons.length/2);
  let cards, label;
  if(kind==="midterm"){
    cards=lessons.slice(0,midpoint).flatMap(x=>x.cards);
    label=`${course.title} Midterm Review`;
  }else{
    cards=lessons.flatMap(x=>x.cards);
    label=`${course.title} Final Review`;
  }
  selected={subject:course.subject,title:label,cards};
  openPreview();
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
function backFromPreview(){
  if(courseSubjectKeys(activeLanguage).includes(selected.subject) && activeCourseId){
    renderCourseDetail(); show("courseDetail");
  }else{
    show("lessons");
  }
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
  const subjects=allLanguageSubjectKeys(activeLanguage);
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
