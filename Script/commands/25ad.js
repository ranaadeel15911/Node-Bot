module.exports.config = {
	name: "botadmin",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/X7tTy1P0/FB-IMG-1663695881848.jpg", 
            
            "https://i.postimg.cc/pdrGGD4B/Pics-Art-09-19-10-08-36.jpg", 
            
            "https://i.postimg.cc/zDhJ2W15/Pics-Art-08-17-01-37-39.jpg",
            
            "https://i.postimg.cc/T3zLFxHH/Pics-Art-09-01-08-16-59.jpg"];
  
var callback = () => api.sendMessage({body:`ADMIN AND BOT INFORMATION 

BOT NAME : ${global.config.BOTNAME}

💝BOT ADMIN💝 : 『ZEESHAN ALTAF』 

💩YOUTUBE💩 : https://youtube.com/@zeeshanaltaftricks184

🤍WHATSAPP GROUP LINK🤍 :
https://chat.whatsapp.com/Fsqap9xsh9bES7blJirvPD

🖤WHATSAPP GROUP LINK 2🖤 :
https://chat.whatsapp.com/EhJPkz5wMpD796d5bQXGSx

🌸FACEBOOK ID LINK🌸 :
https://www.facebook.com/zeeshanofficial01?mibextid=ZbWKwL

🌀FACEBOOK PAGE LINK🌀 :
https://www.facebook.com/profile.php?id=100084918883783&mibextid=ZbWKwL

🐰 INSTAGRAM LINK🐰 :
https://www.instagram.com/zeeshanaltafofficial

BOT PREFIX : ${global.config.PREFIX}

🥰BOT OWNER🥰 : 『ZEESHAN ALTAF』 

➟ UPTIME

TODAY IS TIME : ${juswa} 

BOT IS RUNNING ${hours}:${minutes}:${seconds}.

THANKS FOR USING ${global.config.BOTNAME} 『🙅🖤』`,attachment: 
  
SUBSCRIBE ME ON SOCIAL LINKS MY ALL TRICKS ARE FREE OF COAST😘 
  
fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };