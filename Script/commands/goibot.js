const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "+shyr",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "+shyr",
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

  var tl = ["hello friend, I'm Hai's bot", "what are you asking me to do?", "I love you shoulder lon", "Love you <3", "Hi, hello baby wife :3", "My wife called for a job.  what?", "Use callad to contact admin!", "You're the cutest bot on the planet", "What are you talking about pig", "It's me~~~~"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    
  
  if (event.body.indexOf("+shyr") == 0 || (event.body.indexOf("+Shyr") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
