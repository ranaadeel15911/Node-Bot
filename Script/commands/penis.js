module.exports.config = {
	name: "eid",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "( ͡° ͜ʖ ͡°)",
	commandCategory: "random-text",
	cooldowns: 1
};

module.exports.run = function ({ event, api }) {
    const t = Date.parse("April 23, 2023 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );
    
    return api.sendMessage(`Time remaining until 𝙀𝙞𝙙 𝙖𝙡 𝙁𝙞𝙩𝙧\n» ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds«\n𝐁𝐞𝐬𝐭 𝐖𝐢𝐬𝐡𝐞𝐬 𝐅𝐨𝐫 𝐀𝐥𝐥 𝐌𝐲 𝐌𝐮𝐬𝐥𝐢𝐦 𝐁𝐫𝐨𝐭𝐡𝐞𝐫𝐬!`, event.threadID, event.messageID);
}