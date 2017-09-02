const { Command } = require('discord.js-commando');

module.exports = class DMCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'dm',
            group: 'misc',
            memberName: 'dm',
            description: 'Sends a message to the user you mention.',
            examples: ['!dm @User Hi there!'],
            guildOnly: true,
            args: [
                {
                    key: 'member',
                    prompt: 'Which user do you want to send the DM to?',
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

    async run(message, args) {
        const { member, content } = args;
        await message.delete();
        await console.log("❗ " + message.author.username + " has dm'd " + member.displayName + " with: " + content);
        return member.send(content);
    }
}