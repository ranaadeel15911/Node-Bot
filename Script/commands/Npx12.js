const fs = require("fs");
module.exports.config = {
	name: "🙄🙄",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🙄🙄",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("amogus")==0 || event.body.indexOf("Amogus")==0 || event.body.indexOf("🙄")==0 || event.body.indexOf("🙄")==0) {
		var msg = {
				body: "Tera dehan kdr ha rey tra hero edhr ha😜🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/upre[1].jpg`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙄", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }