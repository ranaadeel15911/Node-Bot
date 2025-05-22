module.exports.config = {
    name: "war",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "... - Long LTD",
    description: "War nát cái boxchat",
    commandCategory: "group",
    usages: "war đậm chất",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
 var mention = Object.keys(event.mentions)[0];
    
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Notification from MainSever \nBot Working Commands 📣 \n+rainbow 7 (for changing theme color of group)\n+teach (first add question in msg reply than add answer)\n+ (for showing girl dp)\n+yes with some text\n+wiki with text you wants to cehck about (e.g wiki animal)\n+weather with city name (weather lahore)\n+valobasa or hug with tag\n+triggered\n+trash with tag\n+toilet\n+music with music name\n+video with content\n+student with content\n+studentv2 with content\n+studentv3 with content\n+stonk\n+steal\n+speedtest\n+snauzk\n+sleep\n+simpson with content\n+rankgif\n+rankcard with content like (rankcard Adeel - Rajpoot)\n+quiz\n+poutine with tag\n+pinterest with content you wana search\n+ping\n+pingv2\n+math with calculation content like (+math 1 + 2 )\n+note add (for adding group rule like +note add dnt abuse here than with command +note all your rules will be show off)\n+translate to translate any lnguage in eng\n+married with tag\n+marriedv2\n+marriedv3\n+marriedv4\n+marriedv5\n+mark with content\n+zuck with content\n+mal\n+lyric with song name\n+love with tag\n+loto\n+log\n+karaba\n+jessica\n+jail with tag or single\n+iss\n+rip\n+infocard\n+imagesearch with content\n+hug with tag\n+hitler\n+fbsearch with username or grp or fb page\n+fbpost with content\n+fact with content\n+facepalm\n+emoji en with alphabet (+emoji en abcdef)\n+egg\n+listadmin\n+drake with content like (+drake abc | def ) \n+droof with content \n+dictionery with name\n+delete with tag or single\n+couple with tag\n+covid with country\n+say with content\n+cheems\n+box chart\n+cardinfov2\n+cardinfov3\n+groupimage (first send image in group and than reply this pic with command +groupimage than bot will auto set your group dp) \n+board with content\n+point\n+bed\n+beautiffull\n+banneranime with name\n+bannertet with name\n+bang with content \n+alert with content \n+uid with tag\n+advice\n+hack\n+pair with tag\n+engage with tag\n+newton with content\n+setgroupname with name to change\n+setname with tag and name to change (+set @ahmad prince)\n+setall with name to set all group member name with one command (+setall Idiots) 📣");
      }