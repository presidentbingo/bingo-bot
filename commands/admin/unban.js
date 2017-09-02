const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class UnBanCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'unban',
            group: 'admin',
            memberName: 'unban',
            description: 'Unbans the member provided.',
            examples: ['!unban @User Sorry...'],
            guildOnly: true,
            args: [
                {
                    key: 'user',
                    prompt: 'Which user would you like to unban?',
                    type: 'user'
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
        const { user, content } = args;
        await message.delete();
        let bansCollection = await message.guild.fetchBans();
        await message.guild.unban(user);
        let icon = message.author.avatarURL;
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, icon)
        .setColor(0x46EDC8)
        .setFooter('🍌 Unban')
        .setThumbnail('http://i.imgur.com/Ezz3FJQ.png')
        .setTimestamp()
        .addField('Unban', bansCollection.map(u => u.username))
        .addField('🤔 Reason:', content, true)
        .addField('\u200b', '\u200b', true)
        await console.log("❗ " + message.author.username + " has unbanned: " + user + " for reason: \"" + content + "\"");
        await message.guild.channels.find('name', `mod-log`).send({ embed });
        return message.reply("you have unbanned: " + bansCollection.map(u => u.username) + " for reason: \"" + content + "\"").then(m=>m.delete(15000));
};
    }