const fs = require("fs");

module.exports.config = {
	name: "😂😂",
		version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "😂😂",
		cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID, body } = event;

	let messageBody;
	let attachmentPath;

	if (body.indexOf("🎵babysong") === 0 || body.indexOf("Amogus") === 0 || body.indexOf("🤣") === 0 || body.indexOf("😂") === 0) {
		messageBody = "Baby I Love Your Smile 🙈🥀";
		attachmentPath = __dirname + `/noprefix/les.mp3`;
	} else if (body.indexOf("🎵 hai dil ye mera") === 0 || body.indexOf("🎵Hai dil ye mera") === 0 || body.indexOf("🎵 Hai dil ye mera") === 0 || body.indexOf("🎵hai dil ye mera") === 0) {
		messageBody = "Hai Dil Ye mera Mujhay Har Dum Ya Poochta...🥀";
		attachmentPath = __dirname + `/noprefix/hai dil ye mera.mp3`;
	} else {
		// Exit if none of the conditions match
		return;
	}

	// Send the message with the appropriate attachment
	var msg = {
		body: messageBody,
		attachment: fs.createReadStream(attachmentPath)
	};
	api.sendMessage(msg, threadID, messageID);

	// Set a reaction to the original message
	api.setMessageReaction("😹", messageID, (err) => {}, true);
};

module.exports.run = function({ api, event, client, __GLOBAL }) {
	// This function can be left empty as it is not used for no prefix commands
};
