module.exports.config = {
	name: "cato",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Clarence DK",
	description: "",
	commandCategory: "0",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const u = Date.parse("March 21, 2025 00:00:00") - Date.parse(new Date());
    const saconds = Math.floor( (u/1000) % 60 );
    const menutes = Math.floor( (u/1000/60) % 60 );
    const huurs = Math.floor( (u/(1000*60*60)) % 24 );
    const deys = Math.floor( u/(1000*60*60*24) );

    return api.sendMessage(`ミ★ 𝘉𝘪𝘳𝘵𝘩𝘥𝘢𝘺 𝘈𝘯𝘯𝘰𝘶𝘯𝘤𝘦𝘮𝘦𝘯𝘵 ★ミ \n✎Cato, 𝐘𝐎𝐔𝐑 𝐁𝐈𝐑𝐓𝐇𝐃𝐀𝐘 𝐃𝐀𝐓𝐄 𝐈𝐒 March 21¡!\n⏰Time Remaining For ❤ - ☬𝓒𝓪𝓽𝓸 𝓑𝓲𝓻𝓽𝓱𝓭𝓪𝔂☬ - 🎂\n» ${deys} days✨ ${huurs} hours❤️ ${menutes} minutes🔥 ${saconds} seconds🎄«\n💗ミ★ 𝘉𝘦𝘴𝘵 𝘞𝘪𝘴𝘩𝘦𝘴 𝘍𝘰𝘳 𝘠𝘰𝘶𝘳 𝘉𝘪𝘳𝘵𝘩𝘥𝘢𝘺 ★彡 😍\n`, event.threadID, event.messageID);
}