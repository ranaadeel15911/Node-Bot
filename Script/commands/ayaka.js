module.exports.config = {
  name: "ayaka",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Teri",
  description: "Random photos ayaka",
  commandCategory: "Random-IMG",
  usages: "ayaka",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/DLgGh7f.jpeg",
           "https://i.imgur.com/XBwVS2v.jpeg",
           "https://i.imgur.com/uRfVDB6.jpeg",
           "https://i.imgur.com/Y8RvNib.jpeg",
           "https://i.imgur.com/V033QS6.jpeg",         
  ];
  var max = 
Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() 
* 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 0) api.sendMessage("Do you need $100 to see the photo?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 0})
   var callback = () => api.sendMessage({body:`Photo Ayaka Hey 💞 ${link.length}\n-100 usd!`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };
 