module.exports.config = {
	name: "help",
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
a("★【𝐁𝐨𝐭 𝐖𝐨𝐫𝐤𝐢𝐧𝐠 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬】★ 📣 \n(1)+rainbow 7 (for changing theme color of group)\n(2)+teach (first add question in msg reply than add answer)\n(3)+ (for showing girl dp)\n(4)+yes with some text\n(5)+wiki with text you wants to cehck about (e.g wiki animal)\n(6)+weather with city name (weather lahore)\n(7)+valobasa or hug with tag\n(8)+triggered\n(9)+trash with tag\n(10)+toilet\n(11)+music with music name\n(12)+video with content\n(13)+student with content\n(14)+studentv2 with content\n(15)+studentv3 with content\n(16)+stonk\n(17)+steal\n(18)+speedtest\n(19)+snauzk\n(20)+sleep\n(21)+simpson with content\n(22)+rankgif\n(23)+rankcard with content like (rankcard Adeel - Rajpoot)\n(24)+quiz\n(25)+poutine with tag\n(26)+pinterest with content you wana search\n(27)+ping\n(28)+pingv2\n(29)+math with calculation content like (+math 1 + 2 )\n(30)+note add (for adding group rule like +note add dnt abuse here than with command +note all your rules will be show off)\n(31)+translate to translate any lnguage in eng\n(32)+married with tag\n(33)+marriedv2\n(34)+marriedv3\n(35)+marriedv4\n(36)+marriedv5\n(37)+mark with content\n(38)+zuck with content\n(39)+mal\n(40)+lyric with song name\n(41)+love with tag\n(42)+loto\n(43)+log\n(44)+karaba\n(45)+jessica\n(46)+jail with tag or single\n(47)+iss\n(48)+rip\n(49)+infocard\n(50)+imagesearch with content 📣\n𝐔𝐬𝐞 +𝐡𝐞𝐥𝐩v𝟐 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐓𝐨 𝐌𝐨𝐫𝐞 𝟓𝟎 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 \n( ﾟ∀ﾟ)ﾉ【𝘊𝘰𝘥𝘦𝘥 𝘉𝘺 𝐎𝐰𝐧𝐞𝐫】:-々ƦαηΑ Α𝐃ཇཇɭ ッ");
      }