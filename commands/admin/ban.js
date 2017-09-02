const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class BanCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ban',
            group: 'admin',
            memberName: 'ban',
            description: 'Bans the member provided.',
            examples: ['!ban @User Sorry...'],
            guildOnly: true,
            args: [
                {
                    key: 'member',
                    prompt: 'Which user would you like to ban?',
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
		return msg.member ? msg.member.hasPermission("BAN_MEMBERS") : false

    }

    async run(message, args) {
        const { member, content } = args;
        await message.delete();
        await member.send(content);
        let icon = message.author.avatarURL;
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, icon)
        .setColor(0xFF5978)
        .setFooter('Ban')
        .setThumbnail('http://i.imgur.com/Ezz3FJQ.png')
        .setTimestamp()
        .addField('🔨 Ban', member)
        .addField('🤔 Reason:', content, true)
        .addField('\u200b', '\u200b', true)
        await member.ban(content);
        await message.guild.channels.find('name', `mod-log`).send({ embed });
        await console.log("❗ " + message.author.username + " has banned: " + member.displayName + " for reason: \"" + content + "\"");
        return message.reply("you have banned: " + member + " for reason: \"" + content + "\"").then(m=>m.delete(15000));
};
    }
