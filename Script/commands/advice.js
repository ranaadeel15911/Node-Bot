module.exports.config = {
	name: "advice",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "NTKhang",
	description: "Randomly give you 1 piece of advice",
	commandCategory: "Utilities",
	usages: "advice",
	cooldowns: 5,
	dependencies: {"srod-v2": "","request": ""}
};

module.exports.run = async ({ event, api, args }) => {
  
  const request = global.nodemodule["request"];
  const srod = global.nodemodule["srod-v2"];
  const Data = (await srod.GetAdvice()).embed.description;
  
  return request(encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=bn&dt=t&q=${Data}`), (err, response, body) => {
		if (err) return api.sendMessage("An error has occurred!", event.threadID, event.messageID);
		var retrieve = JSON.parse(body);
		var text = '';
		retrieve[0].forEach(item => (item[0]) ? text += item[0] : '');
    api.sendMessage(Data+'\n'+text, event.threadID, event.messageID)
  });
}