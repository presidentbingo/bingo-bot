const { Command } = require('discord.js-commando');

module.exports = class TTSCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'tts',
            group: 'misc',
            memberName: 'tts',
            description: 'Speaks the text you provide.',
            examples: ['!tts Hi there!'],
            guildOnly: true,
            args: [
                {
                    key: 'text',
                    prompt: 'What would you like me to speak?',
                    type: 'string'
                }
            ]
        });    
    }

    async run(message, args) {
        const { text } = args;
        await message.delete();
        await console.log("❗ " + message.author.username + " has made the bot tts: " + text);
        return message.say(`\u180E${text}`, {tts: true}).then(m=>m.delete());
    }
}