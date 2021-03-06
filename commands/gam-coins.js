const Discord = require("discord.js")
const CoinMod = require("../models/mod-coins.js")
const moneyHook = new Discord.WebhookClient('537710849008074754', 'Nr_a6RXlTeV24o8B4JtiwPqDcdiOzJGVQmbXq6Tj8iHkAgYozJToFohITmiI07ErtjOb');

module.exports.run = async (message, cmd) => {
  console.log(message.channel.id)
  await message.delete()
  if (message.channel.id !== "539877981045260309") message.reply("Go to <#539877981045260309> channel").then(msg => msg.delete(10000))
  console.log(`[${cmd.slice(1)}] requested by: [${message.author.tag}]`)
  let target = message.mentions.users.first() || message.author
  let sym = '='
  let charnum = String(target.username).length
  CoinMod.findOne({
    userID: target.id,
    serverID: message.guild.id
  }, (err, res) => {
    if (err) console.log("[ERR] " + err)
    if (!res) {
      return moneyHook.send(`\`\`\`css\n≠==== [ ${target.username}'s pouch ] ====≠\n| Coins  : 0 dimes\n| Gold   : 0 pieces\n| Silver : 0 pieces\n| Bronze : 0 pieces\n#=======${sym.repeat(charnum + 8)}=======#\n\`\`\``).catch(console.error)
    } else {
      return moneyHook.send(`<@!${target.id}>\n\`\`\`css\n#==== [ ${target.username}'s pouch ] ====#\n| Coins  : ${res.coins} dimes\n| Gold   : ${res.gp} pieces\n| Silver : ${res.sp} pieces\n| Bronze : ${res.bp} pieces\n#=======${sym.repeat(charnum + 8)}=======#\n\`\`\``).catch(console.error)
    }
  })
}

module.exports.config = {
  name: "coins",
  aliases: [
    "coin",
    "moeda",
    "dindin",
    "bufunfa",
    "fazmerir"
  ]
}