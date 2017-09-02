const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'say',
            group: 'misc',
            memberName: 'say',
            description: 'Replies with the text you provide.',
            examples: ['!say Hi there!'],
            guildOnly: true,
            args: [
                {
                    key: 'text',
                    prompt: 'What would you like me to type?',
                    type: 'string'
                }
            ]
        });    
    }

    async run(message, args) {
        const { text } = args;
        await message.delete();
        await console.log("❗ " + message.author.username + " has made the bot say: " + text);
        return message.say(`\u180E${text}`);
     }
}