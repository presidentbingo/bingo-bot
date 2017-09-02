const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const fs = require("fs");

module.exports = class SecretCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'secret',
            group: 'misc',
            aliases: ['sec', 'anon', 'anonymous', 'anonymouse'],
            memberName: 'secret',
            description: 'Sends your message anonymously.',
            examples: ['!anonymous Hi there!'],
            guildOnly: true,
        });    
    }

    async run(message, args) {
        let fileurl = message.attachments.map(attachment => attachment.url);
        let filename = message.attachments.map(attachment => attachment.filename);
        await snekfetch.get(fileurl[0]).then(r => fs.writeFile('../files/' + filename.toString(), r.body));
        await message.delete();
        await console.log("❗ " + message.author.username + " has anonymously sent: " + args);
        const embed = new Discord.RichEmbed()
        .setColor(0xFBB35A)
        .setTitle('👻')
        .setFooter('Anonymous')
        .setTimestamp()
        .addField('\nMessage:', '\u200b' + args, true)
        .addField('File(s):', fileurl, true)
        return message.channel.send({ embed });
     }
}