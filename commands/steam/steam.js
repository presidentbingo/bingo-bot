const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const fs = require("fs");

module.exports = class SetGameCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'steam',
            group: 'admin',
            memberName: 'steam',
            description: "Search for a discord user's steam account",
            examples: ['!steam bingo'],
            args: [
                {
                    key: 'member',
                    prompt: 'Who\'s steam account would you like to find?',
                    type: 'member'
                }
            ]
        });
    }

    async run(message, args) {
        
        const { member } = args;

        var SteamID = '76561198041195323'

        let icon = member.user.displayAvatarURL;
        const embed = new Discord.RichEmbed()
        .setAuthor(member.displayName, icon)
        .setColor(0x00ADEE)
        .setFooter('Steam', 'http://www.freeiconspng.com/uploads/steam-icon-19.png')
        .setTimestamp()
        .setURL('http://steamcommunity.com/profiles/' + SteamID + '/')
        .addField('Steam Account:', 'http://steamcommunity.com/profiles/' + SteamID + '/', true)
        await console.log("❗ " + message.author.username + " checked for " + member.displayName + "'s steam account.");
        await message.channel.send({ embed });
        return message.delete();
    }
}