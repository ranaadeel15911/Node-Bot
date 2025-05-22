module.exports.config = {
	name: "helpv2",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "Zeeshan Altaf",
	description: "Beginner's Guide",
	commandCategory: "system",
	usages: "[Tên module]",
	cooldowns: 5,
	envConfig: {
		autoUnsend: false,
		delayUnsend: 0
	}
};

module.exports.run = async function({ api, args, Users, event}) {
 var mention = Object.keys(event.mentions)[0];
    
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("★【𝐁𝐨𝐭 𝐖𝐨𝐫𝐤𝐢𝐧𝐠 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬】★ 📣 \n(51)+hug with tag\n(52)+hitler\n(53)+fbsearch with username or grp or fb page\n(54)+fbpost with content\n(55)+fact with content\n(56)+facepalm\n(57)+emoji en with alphabet (+emoji en abcdef)\n(58)+egg\n(59)+listadmin\n(60)+drake with content like (+drake abc | def ) \n(61)+droof with content \n(62)+dictionery with name\n(63)+delete with tag or single\n(64)+couple with tag\n(65)+covid with country\n(66)+say with content\n(67)+cheems\n(68)+box chart\n(69)+cardinfov2\n(70)+cardinfov3\n(71)+groupimage (first send image in group and than reply this pic with command +groupimage than bot will auto set your group dp) \n(72)+board with content\n(73)+uff\n(73)+bed\n(74)+beautiffull\n(75)+banneranime with name\n(76)+bannertet with name\n(77)+bang with content \n(78)+alert with content \n(79)+uid with tag\n(80)+advice\n(81)+hack\n(82)+pair with tag\n(83)+engage with tag\n(84)+newton with content\n(85)+setgroupname with name to change\n(86)+setname with tag and name to change (+set @ahmad prince)\n(87)+setall with name to set all group member name with one command (+setall Idiots)\n+(88)dead with tag or single\n(89)hold with tag\n(90)+eid\n(91)+ramzan\n(92)+point with tag or single\n(93)+green with text\n(94)+pencil with text\n(95)+thunder with text\n(96)+group info 📣\n𝐮𝐬𝐞 +𝐡𝐞𝐥𝐩 𝐓𝐨 𝐒𝐞𝐞 𝐏𝐫𝐞𝐯𝐢𝐨𝐮𝐬 𝟓𝟎 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬\n( ﾟ∀ﾟ)ﾉ【𝘊𝘰𝘥𝘦𝘥 𝘉𝘺 𝐎𝐰𝐧𝐞𝐫】:-々ƦαηΑ Α𝐃ཇཇɭ ッ");
      }