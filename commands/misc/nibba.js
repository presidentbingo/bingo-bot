const { Command } = require('discord.js-commando');

module.exports = class NibbaCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'nibba',
            group: 'misc',
            memberName: 'nibba',
            description: 'Sends a nice message ;)',
            guildOnly: true
        });
    }

    async run(message, args) {
        await message.delete();
        await console.log("❗ " + message.author.username + " has performed !nibba.");
        return message.reply("you my nibba boy?", {tts: true});
    }
}