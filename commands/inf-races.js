const Discord = require("discord.js");
const fs = require("fs");
const modRaces = require("../models/mod-races.js");
let jsonRaces = JSON.parse(fs.readFileSync("./jsonfiles/races.json", 'utf8'));

module.exports.run = async (bot, message, cmd, args) => {
    mArray = message.content.split(" ");
    let argument = mArray[1];
    let property = mArray[2];

    // await message.delete();
    console.log(`[CMD] ${cmd} | requested by: [${message.author.tag}]`);

    if (args.toString()) {
        console.log(args);
        let dembed = new Discord.RichEmbed()
            .setTitle("RACE'S MANUAL")
            .setColor("#DD69D6");

        modRaces.findOne({
            _id: "5c315c02dd843e0698842af5"
        }, (err, races) => {
            if (err) console.log("[ERR] " + err);
            if (!races) {
                dembed.setDescription("Couldn't find any information.")
                return message.channel.send(dembed);
            } else {
                dembed.setDescription(races.Dwarf.description.toString(), true);
                return message.channel.send(dembed);
            }
        })
    }
    if (!args) {
        let rEmbed = new Discord.RichEmbed()
            .setTitle("RACES FROM FIFTH EDITION OF THE PLAYER'S HANDBOOK")
            .setColor("#10E0FF")
            .addField(`🧙`, jsonRaces.allraces.toString().split(",").join(", "), true);

        return message.channel.send(rEmbed);
    }
}

module.exports.config = {
    name: "races",
    aliases: ["race"]
}
