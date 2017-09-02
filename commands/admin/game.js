const { Command } = require('discord.js-commando');
const fs = require("fs");

module.exports = class SetGameCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'game',
            group: 'admin',
            memberName: 'game',
            description: "Sets the bot's game",
            examples: ['!game nigeria.dll'],
            args: [
                {
                    key: 'game',
                    prompt: 'What game would you like the bot to play?',
                    type: 'string'
                }
            ]
        });
    }

        hasPermission(msg) {
        return this.client.isOwner(msg.author);
    }

    async run(message, args) {
        
        const { game } = args;

        await fs.writeFileSync("./game.json", '{"game": "' + game + '"}');
        
        await message.delete();
        await this.client.user.setPresence({ game: { name: game, type: 0 } });;
        await console.log("❗ " + message.author.username + " has set the game to: " + game);
        return message.reply("you set the bot's game to: " + game).then(m=>m.delete(15000));
    }
}