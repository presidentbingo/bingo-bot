const { Command } = require('discord.js-commando');
const fs = require("fs");

module.exports = class NicknameCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'nick',
            aliases: ['nickname', 'setnick', 'nickset'],
            group: 'admin',
            memberName: 'nick',
            description: "Sets the bot's nickname",
            examples: ['!nick Assistant Bingo'],
            args: [
                {
                    key: 'nickname',
                    prompt: 'What would you like the bot\'s nickname to be?',
                    type: 'string'
                }
            ]
        });
    }

        hasPermission(msg) {
		return msg.member ? msg.member.hasPermission("MANAGE_NICKNAMES") : false
    }

    async run(message, args) {
        
        const { nickname } = args;

        await fs.writeFileSync("./nickname.json", '{"nickname": "' + nickname + '"}');
        
        await message.delete();
        await message.member.guild.me.setNickname(nickname)
        await console.log("❗ " + message.author.username + " has set the nickname to: " + nickname);
        return message.reply("you set the bot's nickname to: " + nickname).then(m=>m.delete(15000));
    }
}