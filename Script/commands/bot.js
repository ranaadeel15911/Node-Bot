const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "bot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "bot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = [    "G mri jan, keshi hoo❤😘" , "aby , kya bot bot lgai ha...Gvachgya ho kya", " G Mra bcho ki walida❤😜"   , "Oh my love you miss me😘" , "Kabhi ao na haweli khushbo lga k😘" , "Ha bol kya kam ha😐" , "Uska last message kya tha vsy😄" , "G hot💋" , "Kam yad kiya kro sardi phly he bht ha zukam hjyga😒" , "Kam sa kam rakho ok..." , "ha shapar bol🤨","G kahiya Mohtarma🥰","G Bhna","Gf bnjao Jaldi reply duga🌹😊","Masti kar rya to baz aja","Asmaan ma Chand or taray ap ajsy hmary💕😜","ha g❤","Koi banda bunda Marna Tay das🐒","Ha phot kya ha🙄","G Mra baby na thana thaya😘😍","Khamoosh Ak dum Khmoshi ibadat ha 😌","Apna yad kiya ham hazir❤" , "Oh my love you want my kiss ummmmahh ummahhh😘","Ek tri he to khwaesh ha bs Qaenat ksny mangi,Bolo Mri jan ","Asy na bula pagli pyar hjyga😜✨","Nafrat hjygi tjy mjsy agar ma tjsy tra he lahjay ma bat kru Smjy..😊","Tum har pal atay ho yad Tm Wafat to nai pagya yar , G bolo","G bot ki Jan🌹💋","Tra Yo dkhna yoo Pyar sa bulana katal ki koshesho ma shumar ha Sahib💕😏","Goray rang vali yar thoda chad gai asi chad ditta nasha goray rang da😶😊" ,"G boly","Gussa bohat karty ho mohabbat hogi ha ?😜😍","Bat talkh ha pr btadu tra rvaiya reshtay ki jan lylyga🤢😞" ,"Tri Rukhsati na bnadiya Tra yar Azad Umeedwar🤷‍♀️😶","Marna to hay e tmny Mjpy marjao na🤢 ","ya dosti nikkah ma bdlygi ak din🥰🎉","Tmny kaha ahm chlay aya ","Tmny pukara chalay aya ham,bhly tmy dusri bar salan nai mlta ghr ma 🤣","Akyly na bazar jaya karo Nazar lag jygi😜","Tra ankhy haceen ha lkn tri lambi zban ka dukh ha🙄😒","Suno jaana,Ainda aythy nazar na ana😊😂","Tm to pechay he prgai kabhi cute larka dkha nai😍👌","Hi,I am bot how can I halp you😍🥰","Ha bolo,Aj ka din he khrab hga jo tmhary mouh lagy🤦‍♀️","Lak 28 and fourty seven weight Ahh..kam bolo mzy na lo😚😂","En kali kali zulfo sa karti ho andhyra hjao ganji kardo Sawera🙌🤓","Tm vhi hona jsy soi ko khaala angothi phngai thi👀😒","Ktno k dil torogy bas karo😢","Tm vhi hona jo galat fehmi ko family parhti thi🤣","Tm sa achi to billi ha jo ya to kahti me aoww💕😏","Kya fida 128gb memory ka jsmy tri tasveray he na ho😞🤣","Thora aram krlijiya warna rest in peace hjygy🤦‍♂️","Suna ha mhbbat ma need nai ati hmy b hjya pyr 🤦‍♂️😉,Kambakht neend bht ai ha😜❤","Bolny vala tota he bna k rakhdiya awam na🙄😐","Apky yad karny ki waja 🤷‍♂️?","Shaddi mubarak 🌹🎉","Bot bot bot,Mandur ki ghnati smjliya ha mjy?","Ha bhoot O_O","Q chlari chmkaadar to^_+","Bohat Boltay ho , nashtay ma kawway khatay ho?!","Ay haya raha nai jata tarap he aysi hna😘😍","Mri banja ma truck pechay tra Nam lkhvaoga mri jan😻😹","Ja bay ghar ma dusri bar salan mangny pay dongay khaan alay😪","Ha tm masoom ho Esliya to es dil e nada ka Skoon ho guriya🙈❤","Bohat naughty lagti ho uff ❤Mjy to shakal sa he mri voti lagti ho❤😍","Kalay libas ma kya lagti ho uff,log he kahty ha mjy to chmkadr lagti ho😜🤣","اجازت ہو تو تیرے چہرے کو جی بھر کے دیکھ لوں مدت ہوئی بل بتوری نہیں دیکھی😹",
];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "love you bot") || (event.body.toLowerCase() == "bot love you")) {
     return api.sendMessage("Hmm... Ab mera katy gi :))", threadID);
   };
    if ((event.body.toLowerCase() == "kutta") || (event.body.toLowerCase() == "kutta bot")) {
     return api.sendMessage("Ap khud tommi hogay", threadID);
   };

    if ((event.body.toLowerCase() == "oya bot") || (event.body.toLowerCase() == "sun bay bot") || (event.body.toLowerCase() == "bot oya") || (event.body.toLowerCase() == "bot baby") || (event.body.toLowerCase() == "shona bot") || (event.body.toLowerCase() == "jan bot") || (event.body.toLowerCase() == "bot sun")) {
     return api.sendMessage("Hurry, I have to serve other boxes I am not wayla like you :)", threadID);
   };
    if ((event.body.toLowerCase() == "oh bot") || (event.body.toLowerCase() == "sun bay bot")) {
     return api.sendMessage("Hurry, I have to serve other boxes I am not wayla like you :)", threadID);
   };
    if ((event.body.toLowerCase() == "dfa ho") || (event.body.toLowerCase() == "dafa ho") || (event.body.toLowerCase() == "dfa")) {
     return api.sendMessage("Ap khud dafa hojaya  :)", threadID);
   };
    if ((event.body.toLowerCase() == "sorry bol bot") || (event.body.toLowerCase() == "bot sorry bol") || (event.body.toLowerCase() == "sorry bolo bot")) {
     return api.sendMessage("Uff ho Achaa Baba \nSorry Sorry Sorry Khush.....!", threadID);
   };
    if ((event.body.toLowerCase() == "tharki") || (event.body.toLowerCase() == "tharki bot") || (event.body.toLowerCase() == "bot tharki") || (event.body.toLowerCase() == "bot thrki") ) {
     return api.sendMessage("No baby don't say tharki that is deep loven dil Ki gahrai sa:)", threadID);
   };
    if ((event.body.toLowerCase() == "lo") || (event.body.toLowerCase() == "loo") || (event.body.toLowerCase() == "ya lo") || (event.body.toLowerCase() == "ya loo") ) {
     return api.sendMessage("Lao do laooo do bb ab", threadID);
   };
    if ((event.body.toLowerCase() == "khush") || (event.body.toLowerCase() == "khush ho ab") || (event.body.toLowerCase() == "ab khush") || (event.body.toLowerCase() == "khush ab") || (event.body.toLowerCase() == "ab khush ho") ) {
     return api.sendMessage("Ha mri jan ab khush hoo", threadID);
   };
    if ((event.body.toLowerCase() == "bot miss you") || (event.body.toLowerCase() == "miss you bot") || (event.body.toLowerCase() == "bot i miss you") || (event.body.toLowerCase() == "bot kaha ho") || (event.body.toLowerCase() == "kaha ho bot") ) {
     return api.sendMessage("I miss you too mri jan ummah", threadID);
   };
    if ((event.body.toLowerCase() == "bot love you") || (event.body.toLowerCase() == "love you bot") || (event.body.toLowerCase() == "bot i love you") || (event.body.toLowerCase() == "i love you bot") || (event.body.toLowerCase() == "l u bot") ) {
     return api.sendMessage("I love me too baby thank you", threadID);
   };
   
    if ((event.body.toLowerCase() == "baby") || (event.body.toLowerCase() == "jani") || (event.body.toLowerCase() == "shoni") || (event.body.toLowerCase() == "shono")) {
     return api.sendMessage("Janu baby shono ib ma ja k kijiya karipya", threadID);
   };
    if ((event.body.toLowerCase() == "sorry") || (event.body.toLowerCase() == "sholly") || (event.body.toLowerCase() == "so sorry") || (event.body.toLowerCase() == "sorry na")) {
     return api.sendMessage("Its oky na ❤", threadID);
   };
    if ((event.body.toLowerCase() == "assalam o alaikum") || (event.body.toLowerCase() == "assalamoalaikum") || (event.body.toLowerCase() == "assalam alaikum") || (event.body.toLowerCase() == "asslamoalaikum") || (event.body.toLowerCase() == "salam") || (event.body.toLowerCase() == "assalamualaikum")) {
     return api.sendMessage("❤ وعليكم السلام ورحمه الله وبركاته", threadID);
   };
  
    if ((event.body.toLowerCase() == "theek ho") || (event.body.toLowerCase() == "theek ho tm kesa ho") || (event.body.toLowerCase() == "theek") || (event.body.toLowerCase() == "theek ho") || (event.body.toLowerCase() == "thk") || (event.body.toLowerCase() == "thk blkl")) {
     return api.sendMessage("Ma b theek oo G", threadID);
   };
    if ((event.body.toLowerCase() == "true") || (event.body.toLowerCase() == "absolutely") || (event.body.toLowerCase() == "blkl") || (event.body.toLowerCase() == "blkl thk") || (event.body.toLowerCase() == "theek blkl") || (event.body.toLowerCase() == "true true")) {
     return api.sendMessage("Ha blkl or ma galat ho skta kya ?", threadID);
   };
    if ((event.body.toLowerCase() == "achaw") || (event.body.toLowerCase() == "achaww") || (event.body.toLowerCase() == "acha g") || (event.body.toLowerCase() == "achaw g") || (event.body.toLowerCase() == "asha") || (event.body.toLowerCase() == "asha asha")) {
     return api.sendMessage("Ha g Ha g Ha g ", threadID);
   };
    if ((event.body.toLowerCase() == "shukar") || (event.body.toLowerCase() == "shukr") || (event.body.toLowerCase() == "shukar ha") || (event.body.toLowerCase() == "thank god") || (event.body.toLowerCase() == "shkr ha") || (event.body.toLowerCase() == "shkrr")) {
     return api.sendMessage("Ha na shukar ha ab shukrany k nafal parho", threadID);
   };
  if ((event.body.toLowerCase() == "ahm") || (event.body.toLowerCase() == "aham") || (event.body.toLowerCase() == "ahmm") || (event.body.toLowerCase() == "thank god") || (event.body.toLowerCase() == "ahammm") || (event.body.toLowerCase() == "aham")) {
     return api.sendMessage("Kya aham ahmm gala khrab ha to med lo rang baziya na karo", threadID);
   };
  
  if ((event.body.toLowerCase() == "call") || (event.body.toLowerCase() == "anyone call") || (event.body.toLowerCase() == "call lagao") || (event.body.toLowerCase() == "call lgao") || (event.body.toLowerCase() == "call lgao yar") || (event.body.toLowerCase() == "call ajao")) {
     return api.sendMessage("Jao Jao call k kch lagty waylay nai ha ham", threadID);
   };
  if ((event.body.toLowerCase() == "baz ajay") || (event.body.toLowerCase() == "baz ajao") || (event.body.toLowerCase() == "baz ajao tm") || (event.body.toLowerCase() == "baz aja") || (event.body.toLowerCase() == "baz ajo") || (event.body.toLowerCase() == "baz ajao yar")) {
     return api.sendMessage("Ha baz aja oya warna ulta latka k chittar marygy", threadID);
   };
  if ((event.body.toLowerCase() == "katgya") || (event.body.toLowerCase() == "kat gya") || (event.body.toLowerCase() == "kat gya kya") || (event.body.toLowerCase() == "kat gya tmhara b") || (event.body.toLowerCase() == "katgya?") || (event.body.toLowerCase() == "eska b katgya")) {
     return api.sendMessage("Sabka katyga .....!", threadID);
   };
  if ((event.body.toLowerCase() == "i know") || (event.body.toLowerCase() == "i knew that") || (event.body.toLowerCase() == "ma janta tha") || (event.body.toLowerCase() == "m back") || (event.body.toLowerCase() == "mjy pta") || (event.body.toLowerCase() == "ma janti ho")) {
     return api.sendMessage("To kya kray pir laddu banty", threadID);
   };
  if ((event.body.toLowerCase() == "welcome") || (event.body.toLowerCase() == "welcom") || (event.body.toLowerCase() == "welcome new member") || (event.body.toLowerCase() == "welcm") || (event.body.toLowerCase() == "welcome jani") || (event.body.toLowerCase() == "welcom jani")) {
     return api.sendMessage("Ha ha welcome welcome thk ha bs kro umra kar k aya new comer kya", threadID);
   };
  
  if ((event.body.toLowerCase() == "tmeez") || (event.body.toLowerCase() == "tameez nai") || (event.body.toLowerCase() == "tameez karo bot") || (event.body.toLowerCase() == "batmeez") || (event.body.toLowerCase() == "batmeez bot") || (event.body.toLowerCase() == "tameez b hoti kch")) {
     return api.sendMessage("Ha bas bas chup rah tmeez na skha bari ae", threadID);
   };
  if ((event.body.toLowerCase() == "tia") || (event.body.toLowerCase() == "tia hova") || (event.body.toLowerCase() == "tia hva") || (event.body.toLowerCase() == "tia hova bhai") || (event.body.toLowerCase() == "tia hgya") || (event.body.toLowerCase() == "tia hva bhaiya")) {
     return api.sendMessage("Mouh sa supari nikal k bat kar rey baba tia tia kya totli ho", threadID);
   };
  if ((event.body.toLowerCase() == "q") || (event.body.toLowerCase() == "q nai sota") || (event.body.toLowerCase() == "q nai sota ady") || (event.body.toLowerCase() == "qq") || (event.body.toLowerCase() == "soya nai") || (event.body.toLowerCase() == "kab sona") || (event.body.toLowerCase() == "keu") || (event.body.toLowerCase() == "q nai sotay ady")) {
     return api.sendMessage("Mri marzi chup raho....", threadID);
   };
  if ((event.body.toLowerCase() == "no") || (event.body.toLowerCase() == "nahi") || (event.body.toLowerCase() == "naa") || (event.body.toLowerCase() == "na") || (event.body.toLowerCase() == "nai") || (event.body.toLowerCase() == "noo")) {
     return api.sendMessage("Nai q sach bolo ab ", threadID);
   };
  if ((event.body.toLowerCase() == "who is khalifa except burj khalifa") || (event.body.toLowerCase() == "khaleefa") || (event.body.toLowerCase() == "dani daniel") || (event.body.toLowerCase() == "sunny leoni") || (event.body.toLowerCase() == "smexy") || (event.body.toLowerCase() == "hot")) {
     return api.sendMessage("Only the one is Mia Khalifa", threadID);
   };
  
  if ((event.body.toLowerCase() == "marzi") || (event.body.toLowerCase() == "mrzi") || (event.body.toLowerCase() == "mri marzi") || (event.body.toLowerCase() == "mari marzi") || (event.body.toLowerCase() == "mri marzi bot") || (event.body.toLowerCase() == "marzi mri jo b karo")) {
     return api.sendMessage("Marzi hogi apny ghar ma yha nai smjy", threadID);
   };
  
    if ((event.body.toLowerCase() == "sharrap") || (event.body.toLowerCase() == "shutup") || (event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "pup")) {
     return api.sendMessage("Tm khud chup kro", threadID);
   };
    if ((event.body.toLowerCase() == "shona bot") || (event.body.toLowerCase() == "cute ") || (event.body.toLowerCase() == "ummah bot") || (event.body.toLowerCase() == "nice move")) {
     return api.sendMessage("Thnku sho much my love", threadID);
   };
   
    if ((event.body.toLowerCase() == "kisko") || (event.body.toLowerCase() == "kis ko") || (event.body.toLowerCase() == "kis koo")) {
     return api.sendMessage("Oh my love you said kiss do uff ya lo jan ummah ummah", threadID);
   };
    if ((event.body.toLowerCase() == "weltm") || (event.body.toLowerCase() == "bat shunay") || (event.body.toLowerCase() == "shona")) {
     return api.sendMessage("Zyada totlay na bno dramy baz", threadID);
   };
    if ((event.body.toLowerCase() == "thnkuu") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "tnx")) {
     return api.sendMessage("Always You welcome dear", threadID);
   };
    if ((event.body.toLowerCase() == "ab left na karna") || (event.body.toLowerCase() == "group left na karna ab") || (event.body.toLowerCase() == "lft na karna")) {
     return api.sendMessage("Ha kaan khol k sunlo", threadID);
   };
    if ((event.body.toLowerCase() == "mar jao") || (event.body.toLowerCase() == "bot mar jao") || (event.body.toLowerCase() == "marjaa") || (event.body.toLowerCase() == "mar jaa") ) {
     return api.sendMessage("Khud mar jaya ap", threadID);
   };
    if ((event.body.toLowerCase() == "pucha") || (event.body.toLowerCase() == "poucha") || (event.body.toLowerCase() == "poucha?") || (event.body.toLowerCase() == "pocha") ) {
     return api.sendMessage("Tmary pochny ka paband nai ma apni marzi sa bolta", threadID);
   };
    if ((event.body.toLowerCase() == "batmeez") || (event.body.toLowerCase() == "bot batmeez") || (event.body.toLowerCase() == "batmeez bot") || (event.body.toLowerCase() == "batmez") || (event.body.toLowerCase() == "bot bad") || (event.body.toLowerCase() == "bot ganda") || (event.body.toLowerCase() == "ganna bot") || (event.body.toLowerCase() == "bot batmez")) {
     return api.sendMessage("Khud tameez ma phd ki ha tmny", threadID);
   };
    if ((event.body.toLowerCase() == "bt suno") || (event.body.toLowerCase() == "suno") || (event.body.toLowerCase() == "bat sun") || (event.body.toLowerCase() == "sun janu") || (event.body.toLowerCase() == "janu sun") || (event.body.toLowerCase() == "suno to") || (event.body.toLowerCase() == "bat sunana") || (event.body.toLowerCase() == "yr")) {
     return api.sendMessage("bs kro yar tmhari bate sun k oktagya ma chup karjao", threadID);
   };
   
    if ((event.body.toLowerCase() == "does bot love you") || (event.body.toLowerCase() == "bot loves you")) {
     return api.sendMessage("Hi, Bot loves you more than anyone, love bot <3", threadID);
   };
    if ((event.body.toLowerCase() == "ady soja") || (event.body.toLowerCase() == "soja ady") || (event.body.toLowerCase() == "bot soja") || (event.body.toLowerCase() == "soja bot") || (event.body.toLowerCase() == "sojao")) {
     return api.sendMessage("Ady nai sota .!", threadID);
   };
    if ((event.body.toLowerCase() == "ha") || (event.body.toLowerCase() == "han ") || (event.body.toLowerCase() == "haan") || (event.body.toLowerCase() == "hn") || (event.body.toLowerCase() == "h")) {
     return api.sendMessage("Ha g kahty ha barkhudar", threadID);
   }; 
  if ((event.body.toLowerCase() == "kesi ho") || (event.body.toLowerCase() == "kesay ho") || (event.body.toLowerCase() == "keshi ho") || (event.body.toLowerCase() == "ksa ho") || (event.body.toLowerCase() == "ksa ha")) {
     return api.sendMessage("Ha ma theek he hoo", threadID);
   };
  
  if ((event.body.toLowerCase() == "ha ady kardy unban") || (event.body.toLowerCase() == "ady kardy unban") || (event.body.toLowerCase() == "ady unban kardy") || (event.body.toLowerCase() == "unban kardy ady") || (event.body.toLowerCase() == "ady kardy unban esko")) {
     return api.sendMessage("Ha Command do ma karta unban bchary ko", threadID);
   };
  
  if ((event.body.toLowerCase() == "btao") || (event.body.toLowerCase() == "bta") || (event.body.toLowerCase() == "btao mjy") || (event.body.toLowerCase() == "btao yar") || (event.body.toLowerCase() == "bta mjy")) {
     return api.sendMessage("Kya btao chup kr k soja", threadID);
   };
  
  if ((event.body.toLowerCase() == "pgl") || (event.body.toLowerCase() == "pagal") || (event.body.toLowerCase() == "jahal") || (event.body.toLowerCase() == "bhulakkar") || (event.body.toLowerCase() == "pgl bot") || (event.body.toLowerCase() == "bot pagal") || (event.body.toLowerCase() == "bot pgl") || (event.body.toLowerCase() == "pagal bot")) {
     return api.sendMessage("Khud knsa tmny Law of Inerta invent kiya ha", threadID);
   };
  
    if ((event.body.toLowerCase() == "bot chummi dy") || (event.body.toLowerCase() == "chummi dy")) {
     return api.sendMessage("Ja bay tharki", threadID);
   };
    if ((event.body.toLowerCase() == "ady heer kon ha") || (event.body.toLowerCase() == "ady heer kn ha") || (event.body.toLowerCase() == "ady heer kon hai") || (event.body.toLowerCase() == "ady heer kn hai")) {
     return api.sendMessage("Heer shoni C pali shi Haceena ha", threadID);
   };
    if ((event.body.toLowerCase() == "ady sheikhni kon ha") || (event.body.toLowerCase() == "sheikhni kn ha") || (event.body.toLowerCase() == "sheikhni kon hai") ||
        (event.body.toLowerCase() == "bot sheikhni kon hai") ||(event.body.toLowerCase() == "shekhni kn hai")) {
     return api.sendMessage("Haceen Princess 🧚", threadID);
   };
      if ((event.body.toLowerCase() == "ady fahad kon ha") || (event.body.toLowerCase() == "ady fahad kn ha") || (event.body.toLowerCase() == "ady fahad kon hai") || (event.body.toLowerCase() == "ady fahad kon ha")) {
     return api.sendMessage("Group ka Shona Munda , Fahad", threadID);
   };
      if ((event.body.toLowerCase() == "ady talal kon ha") || (event.body.toLowerCase() == "ady talal kn ha") || (event.body.toLowerCase() == "ady talal kon hai") || (event.body.toLowerCase() == "ady talal kon ha")) {
     return api.sendMessage("Pakistan da pawa Talal Lawa", threadID);
   };
      if ((event.body.toLowerCase() == "ady haji kon ha") || (event.body.toLowerCase() == "ady haji kn ha") || (event.body.toLowerCase() == "ady haji kon hai") || (event.body.toLowerCase() == "ady haji kon ha")) {
     return api.sendMessage("Group ki ronak ha or kya", threadID);
   };
      if ((event.body.toLowerCase() == "ady ayesha kon ha") || (event.body.toLowerCase() == "ady ayesha kn ha") || (event.body.toLowerCase() == "ady ayesha kon hai") || (event.body.toLowerCase() == "ady ayesha kon ha")) {
     return api.sendMessage("Ayesha bohat pyari larki ha mashAllah bolo sab", threadID);
   };
  if ((event.body.toLowerCase() == "ady hina kon ha") || (event.body.toLowerCase() == "ady hina kn ha") || (event.body.toLowerCase() == "ady hina kon hai") || (event.body.toLowerCase() == "ady hina kon ha")) {
     return api.sendMessage("Beautifull but nought", threadID);
   };
  if ((event.body.toLowerCase() == "ady  kon ha") || (event.body.toLowerCase() == "ady hina kn ha") || (event.body.toLowerCase() == "ady hina kon hai") || (event.body.toLowerCase() == "ady hina kon ha")) {
     return api.sendMessage("Beautifull but nought", threadID);
   };
  
    if ((event.body.toLowerCase() == "bsdk bot") || (event.body.toLowerCase() == "sala bot")) {
     return api.sendMessage("Gali dna buri bat bsdk", threadID);
   };

   if ((event.body.toLowerCase() == "bot dog") || (event.body.toLowerCase() == "bot kutta")) {
     return api.sendMessage("Jo kahta vhi hta", threadID);
   };
  
   if ((event.body.toLowerCase() == "bot chutiya") || (event.body.toLowerCase() == "chutiya bot")) {
     return api.sendMessage("7 bhno k aklotay bhai chup karja nai to ak 6 rhjygi pechy", threadID);
   };

   if ((event.body.toLowerCase() == "approval") || (event.body.toLowerCase() == "approval do admin")) {
     return api.sendMessage("Nai dty kya krlogy", threadID);
   };

   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hy")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Hello dear, have a nice day ❤️ Welcom Another Happy Morning", threadID);
   };

   if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "night")) {
     return api.sendMessage("Hello dear, have a sweet dreams Good Night ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "good afternoon") || (event.body.toLowerCase() == "afternoon")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "welcome") || (event.body.toLowerCase() == "wellcome")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "Hello") || (event.body.toLowerCase() == "hello")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

  if ((event.body.toLowerCase() == "ady") || (event.body.toLowerCase() == "Ady suno")) {
     return api.sendMessage("G boliya kya madad kar sakta apki❤", threadID);
   };
  if ((event.body.toLowerCase() == "dfm") || (event.body.toLowerCase() == "dfm")) {
     return api.sendMessage("Apni zban ko lagam do dfm ainda mat kahna", threadID);
   };
  if ((event.body.toLowerCase() == "khota") || (event.body.toLowerCase() == "khota")) {
     return api.sendMessage("Khud hogy donkey king", threadID);
   };
  if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("Gali nai dty buri bat", threadID);
   };
if ((event.body.toLowerCase() == "tharki") || (event.body.toLowerCase() == "tharki bot")) {
     return api.sendMessage("Khud hogay imran hashmi k czn", threadID);
   };
  if ((event.body.toLowerCase() == "asfu") || (event.body.toLowerCase() == "cheema")) {
     return api.sendMessage("Song sunany ka dil kar ra asfu sa", threadID);
   };
  if ((event.body.toLowerCase() == "pagal") || (event.body.toLowerCase() == "pagal")) {
     return api.sendMessage("Aydy tusi einstein di olad", threadID);
   };
  if ((event.body.toLowerCase() == "vot") || (event.body.toLowerCase() == "bott")) {
     return api.sendMessage("correct spell to write is bot", threadID);
   };
   if ((event.body.toLowerCase() == "babu") || (event.body.toLowerCase() == "mri jan")) {
     return api.sendMessage("Yar kch single log b hty", threadID);
   };
   if ((event.body.toLowerCase() == "bhai") || (event.body.toLowerCase() == "bhae")) {
     return api.sendMessage("Gali nai do ok....", threadID);
   };
   if ((event.body.toLowerCase() == "bhaiya") || (event.body.toLowerCase() == "bhaeya")) {
     return api.sendMessage("Or jo marzi kahlo par bhai vali gali nai do larki ...", threadID);
   };
  if ((event.body.toLowerCase() == "dfa") || (event.body.toLowerCase() == "lanat")) {
     return api.sendMessage("To dfa hoo", threadID);
   };
  if ((event.body.toLowerCase() == "aby") || (event.body.toLowerCase() == "abay")) {
     return api.sendMessage("Aby kya ha rey", threadID);
   };
  if ((event.body.toLowerCase() == "choro") || (event.body.toLowerCase() == "chordo")) {
     return api.sendMessage("Pakra he kab tha mri jan", threadID);
   };if ((event.body.toLowerCase() == "thand") || (event.body.toLowerCase() == "sardi")) {
     return api.sendMessage("Marasi Naha liya karo na", threadID);
   };
  if ((event.body.toLowerCase() == "g") || (event.body.toLowerCase() == "jee")) {
     return api.sendMessage("H I J K L M N O P Q R S T U V W X Y Z", threadID);
   };
  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "hahaha")) {
     return api.sendMessage("Mat etna hans tu to saada pyara ni lgta", threadID);
   };if ((event.body.toLowerCase() == "mashallah") || (event.body.toLowerCase() == "mashAllah")) {
     return api.sendMessage("Jazakallah Allah Ham sbko Salamat Rakhy Ameen", threadID);
   };
   if ((event.body.toLowerCase() == "bhaiya") || (event.body.toLowerCase() == "bhaeiya")) {
     return api.sendMessage("Gali nai do ok....", threadID);
   };if ((event.body.toLowerCase() == "sogya sab") || (event.body.toLowerCase() == "sab sogya")) {
     return api.sendMessage("Ma or m he jagry bs Mri jan", threadID);
   };if ((event.body.toLowerCase() == "janwar") || (event.body.toLowerCase() == "gadha")) {
     return api.sendMessage("Tm b insano ma rah k khud ko insan tasawar ni kro", threadID);
   };
  if ((event.body.toLowerCase() == "tm kon ho") || (event.body.toLowerCase() == "kon ha ya")) {
     return api.sendMessage("Ma ohi munda", threadID);
   };
  if ((event.body.toLowerCase() == "bot smjaly esay") || (event.body.toLowerCase() == "ady smjaly esay")) {
     return api.sendMessage("Oya esy na kch kaho jan ha apni", threadID);
   };
  if ((event.body.toLowerCase() == "or") || (event.body.toLowerCase() == "hor")) {
     return api.sendMessage("Or bash mum....", threadID);
   };if ((event.body.toLowerCase() == "matlab") || (event.body.toLowerCase() == "kya matlab")) {
     return api.sendMessage("Kuch nai pup....", threadID);
   };if ((event.body.toLowerCase() == "allah hafiz") || (event.body.toLowerCase() == "tc")) {
     return api.sendMessage("Khuda hafiz Duao ma yad rakhiyga Allah Neghayban Sabka", threadID);
   };
  if ((event.body.toLowerCase() == "gandu") || (event.body.toLowerCase() == "chutiya")) {
     return api.sendMessage("Galiya deni to ib jao", threadID);
   };
  if ((event.body.toLowerCase() == "song sunao") || (event.body.toLowerCase() == "Song sunado")) {
     return api.sendMessage("Mouh tra chpyra khany vala sunana tny gana ha", threadID);
   };
  if ((event.body.toLowerCase() == "gth") || (event.body.toLowerCase() == "go to hell") || (event.body.toLowerCase() == "bhar ma jao")) {
     return api.sendMessage("Tm bara jannat ma jaogy molana", threadID);
   };
  if ((event.body.toLowerCase() == "pakistan") || (event.body.toLowerCase() == "imran khan")) {
     return api.sendMessage("Zindabad", threadID);
   };if ((event.body.toLowerCase() == "nawaz sharif") || (event.body.toLowerCase() == "nawaz shareef")) {
     return api.sendMessage("Dafa karo ganjay ko", threadID);
   };
  if ((event.body.toLowerCase() == "welcom") || (event.body.toLowerCase() == "welcome new member")) {
     return api.sendMessage("Ky welcome welcome lgi umray sa aya ha ya", threadID);
   };
  if ((event.body.toLowerCase() == "sojao") || (event.body.toLowerCase() == "soja")) {
     return api.sendMessage("ha,sojao bohat scope ha", threadID);
   };
  if ((event.body.toLowerCase() == "hmm") || (event.body.toLowerCase() == "hm")) {
     return api.sendMessage("Bakri ho kya hmm hmm ", threadID);
   };
  if ((event.body.toLowerCase() == "marjaa") || (event.body.toLowerCase() == "marja bot")) {
     return api.sendMessage("Tny Zinda rah k knsa kashmr azad karwalna", threadID);
   };
  if ((event.body.toLowerCase() == "esay nikalo") || (event.body.toLowerCase() == "nikalo esay")) {
     return api.sendMessage("Hath to lga k dkha", threadID);
   };
  if ((event.body.toLowerCase() == "sojao bcho") || (event.body.toLowerCase() == "sojo bacho")) {
     return api.sendMessage("ha ,sojao phuddy dalwany vali phuppo kahri bcho", threadID);
   };if ((event.body.toLowerCase() == "wao") || (event.body.toLowerCase() == "kya bat ay")) {
     return api.sendMessage("Ha ma to ho he nirala", threadID);
   };
 
  if ((event.body.toLowerCase() == "ksay ha sab") || (event.body.toLowerCase() == "kesay hai sab")) {
     return api.sendMessage("Theek thaak khush baash", threadID);
   };
  if ((event.body.toLowerCase() == "shut up") || (event.body.toLowerCase() == "sharap")) {
     return api.sendMessage("You shutup ok", threadID);
   };
  if ((event.body.toLowerCase() == "acha") || (event.body.toLowerCase() == "oh")) {
     return api.sendMessage("G ha", threadID);
   };if ((event.body.toLowerCase() == "good") || (event.body.toLowerCase() == "nice")) {
     return api.sendMessage("Thnku Dear", threadID);
   };
  if ((event.body.toLowerCase() == "esko to nikalo yar") || (event.body.toLowerCase() == "bhgao")) {
     return api.sendMessage("Hath to laga k dekhao", threadID);
   };
  if ((event.body.toLowerCase() == "oops") || (event.body.toLowerCase() == "opps")) {
     return api.sendMessage("Oops kya hawa nikal gai", threadID);
   };
  if ((event.body.toLowerCase() == "oya") || (event.body.toLowerCase() == "oi")) {
     return api.sendMessage("Kya masla ha", threadID);
   };
  if ((event.body.toLowerCase() == "ak bat btao") || (event.body.toLowerCase() == "ak bt btao")) {
     return api.sendMessage("Ma tmhary bap ka nokar nai", threadID);
   };
  if ((event.body.toLowerCase() == "+leave") || (event.body.toLowerCase() == "+left")) {
     return api.sendMessage("O ja kam kar ayda to Gullu badmash", threadID);
   };
  if ((event.body.toLowerCase() == "cato") || (event.body.toLowerCase() == "shanaya")) {
     return api.sendMessage("Ya to ha he gandi bachi", threadID);
   };
  if ((event.body.toLowerCase() == "kesay ho") || (event.body.toLowerCase() == "kesay ho") || (event.body.toLowerCase() == "kesi ho")) {
     return api.sendMessage("Pahly bus ma vajji thi ?", threadID);
   };
  if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "admin approval")) {
     return api.sendMessage("Admin sorahy", threadID);
   };
  if ((event.body.toLowerCase() == "chawal") || (event.body.toLowerCase() == "nalaik")) {
     return api.sendMessage("Khud hogay", threadID);
   };
   if ((event.body.toLowerCase() == "ady tmhari koi gf ha") || (event.body.toLowerCase() == "ady adeel ki gf kon ha"))   {
     return api.sendMessage("Single he maruga ma, Makbra he bnana", threadID);
   };

   if ((event.body.toLowerCase() == "ady love you") || (event.body.toLowerCase() == "ady i love you")) {
     return api.sendMessage("Oh my love, I love you more than anything", threadID);
   };

   if ((event.body.toLowerCase() == "hya") || (event.body.toLowerCase() == "uff")) {
     return api.sendMessage("Mirchi lag gai kya", threadID);
   };
   if ((event.body.toLowerCase() == "hate you") || (event.body.toLowerCase() == "hate u")) {
     return api.sendMessage("Mri jan Naraj to nai ho", threadID);
   };
   if ((event.body.toLowerCase() == "hya") || (event.body.toLowerCase() == "uff")) {
     return api.sendMessage("Mirchi lag gai kya", threadID);
   };

   if ((event.body.toLowerCase() == "hai") || (event.body.toLowerCase() == "hii")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "bot kesa ho") || (event.body.toLowerCase() == "ady kesa ho")) {
     return api.sendMessage("Ma bht cute ho ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "janu") || (event.body.toLowerCase() == "mri jan")) {
     return api.sendMessage("Oh my love,Ummah ummah <3", threadID);
   };

   if ((event.body.toLowerCase() == "bot margya") || (event.body.toLowerCase() == "margya bot")) {
     return api.sendMessage("️Chup asy nai bolty buri bat :))))", threadID);
   };

   if ((event.body.toLowerCase() == "fuck off") || (event.body.toLowerCase() == "sala")) {
     return api.sendMessage("️Aby gali mat dy family group ha :))))", threadID);
   };

   if ((event.body.toLowerCase() == "ady cato kon ha") || (event.body.toLowerCase() == "ady cato kn ha")) {
     return api.sendMessage("️Vo to adeel ki cloj frnd ha , or asfu k song ki fan :))))", threadID);
   };

   if ((event.body.toLowerCase() == "ady jannat kon ha") || (event.body.toLowerCase() == "ady jannat kn ha")) {
     return api.sendMessage("️Vo to Group ki Rapunzil Pari ha or nai to kya ", threadID);
   };
   if ((event.body.toLowerCase() == "ady sam kon ha") || (event.body.toLowerCase() == "ady sam kn ha")) {
     return api.sendMessage("️Vo Pak ki PM ha Matlab Pooja Marjani Kabzi", threadID);
   };
   if ((event.body.toLowerCase() == "ady hurri kon ha") || (event.body.toLowerCase() == "ady hurri kn ha")) {
     return api.sendMessage("️Thanydarni ha or nai to kya Sakht londi ha", threadID);
   };

   if ((event.body.toLowerCase() == "ady shanaya kon ha") || (event.body.toLowerCase() == "ady shanaya kn ha")) {
     return api.sendMessage("️Khud pochlo tm gongay ho :))))", threadID);
   };

   if ((event.body.toLowerCase() == "ady shah kon ha") || (event.body.toLowerCase() == "ady shah kn ha")) {
     return api.sendMessage("️A Nice person :))))", threadID);
   };

   if ((event.body.toLowerCase() == "ady jasmin kn ha") || (event.body.toLowerCase() == "ady jasmin kon ha")) {
     return api.sendMessage("️A Nice Personality", threadID);
   };

   if ((event.body.toLowerCase() == "ady hira kon ha") || (event.body.toLowerCase() == "ady hira kn ha")) {
     return api.sendMessage("️Afat ha or nai to kya", threadID);
   };

   if ((event.body.toLowerCase() == "ady tmhari gf kn ay") || (event.body.toLowerCase() == "ady who is your gf")) {
     return api.sendMessage("️Relation is haram", threadID);
   };
   if ((event.body.toLowerCase() == "ady adeel kon ha") || (event.body.toLowerCase() == "adeel kon ha ady")) {
     return api.sendMessage("️Mra admin", threadID);
   };

   if ((event.body.toLowerCase() == "bot suno") || (event.body.toLowerCase() == "suno bot")) {
     return api.sendMessage("️Bol na mri lado pari", threadID);
   };
   if ((event.body.toLowerCase() == "ady cheema kon ha") || (event.body.toLowerCase() == "asy asfu kon ha")) {
     return api.sendMessage("️World best singer and a cute personality", threadID);
   };
  
   if ((event.body.toLowerCase() == "single") || (event.body.toLowerCase() == "single log")) {
     return api.sendMessage("️Bas kardo tmhara ya single vla jhuth sun k oktagya ha :)", threadID);
   };

   if ((event.body.toLowerCase() == "mjsy koi pyar nai karta") || (event.body.toLowerCase() == "nobody love me")) {
     return api.sendMessage("️Come on, the bot loves you <3 <3", threadID);
   };

   if ((event.body.toLowerCase() == "sexy") || (event.body.toLowerCase() == "smexy")) {
     return api.sendMessage("asy words mat istmaal karay karipya", threadID);
   };
   
   if ((event.body.toLowerCase() == "bot m going") || (event.body.toLowerCase() == "bot ma ja ra") || (event.body.toLowerCase() == "bot ma ja rahi")) {
     return api.sendMessage("Ok,my love have a good night", threadID);
   };

   if ((event.body.toLowerCase() == "dfa hoja") || (event.body.toLowerCase() == "dfa hojao")) {
     return api.sendMessage("Calm down dear hosla :))))", threadID);
   };

   if ((event.body.toLowerCase() == "bro") || (event.body.toLowerCase() == "bruh")) {
     return api.sendMessage("Gali nai dta buri bat", threadID);
   };

   if ((event.body.toLowerCase() == "bot janu") || (event.body.toLowerCase() == "bot jan")) {
     return api.sendMessage("Hya asy to kbhi mri gf na nai bulaya uff dil ko lgi apki pukar <3", threadID);
   };

   if ((event.body.toLowerCase() == "bot do you love you me") || (event.body.toLowerCase() == "bot mjsy pyar karty ho")) {
     return api.sendMessage("Yes I love you i am not like your bf", threadID);
   };

   if ((event.body.toLowerCase() == "bot sogya") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   // if ((event.body.toLowerCase() == "burger") || (event.body.toLowerCase() == "pizza") || (event.body.toLowerCase() == "biryani") || (event.body.toLowerCase() == "chicken")) {
   //   return api.sendMessage("bat bdlo yar mra mouh ma pani ara <3", threadID);
   // };

   if ((event.body.toLowerCase() == "bot do you love me") || (event.body.toLowerCase() == "bot mjsy pyar karty ho")) {
     return api.sendMessage("Yes baby <3", threadID);
   };

   if ((event.body.toLowerCase() == "bot tmhara admin kon ha") || (event.body.toLowerCase() == "bot tm kon ho")) {
     return api.sendMessage("Mri jan Adeel <3", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }

