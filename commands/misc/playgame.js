const { Command } = require('discord.js-commando');

module.exports = class PlayGameCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'playgame',
            group: 'misc',
            memberName: 'playgame',
            description: 'Pings channel asking if anyone wants to play.',
            examples: ['!playgame <name of game>'],
            guildOnly: true,
            args: [
                {
                    key: 'text',
                    prompt: 'What game would you like to play with others?',
                    type: 'string'
                }
            ]
        });    
    }

    async run(message, args) {
        const { text } = args;
        await message.delete();
        await console.log("❗ " + message.author.username + " has requested to play game: " + text);
        return message.say('@here - ' + message.author + ` wants to play \u180E${text}. Anyone care to join? :stuck_out_tongue: :video_game:`);
    }
}