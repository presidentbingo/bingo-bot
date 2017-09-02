const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class KickCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'kick',
            group: 'admin',
            memberName: 'kick',
            description: 'Kicks the member provided.',
            examples: ['!kick @User Sorry...'],
            guildOnly: true,
            args: [
                {
                    key: 'member',
                    prompt: 'Which user would you like to kick?',
                    type: 'member'
                },
                {
                    key: 'content',
                    prompt: 'What would you like the content of the message to be?',
                    type: 'string'
                }
            ]
        });    
    }

	hasPermission(msg) {
		return msg.member ? msg.member.hasPermission("KICK_MEMBERS") : false

    }

    async run(message, args) {
        const { member, content } = args;
        await message.delete();
        await member.send(content);
        let icon = message.author.avatarURL;
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, icon)
        .setColor(0xFBB35A)
        .setFooter('👢 Kick')
        .setThumbnail('http://i.imgur.com/Ezz3FJQ.png')
        .setTimestamp()
        .addField('Kick', member)
        .addField('🤔 Reason:', content, true)
        .addField('\u200b', '\u200b', true)
        await member.kick(content);
        await console.log("❗ " + message.author.username + " has kicked: " + member.displayName + " for reason: \"" + content + "\"");
        await message.guild.channels.find('name', `mod-log`).send({ embed });
        return message.reply("you have kicked: " + member + " for reason: \"" + content + "\"").then(m=>m.delete(15000));
};
    }