const { Command } = require('discord.js-commando');

module.exports = class DiceRollCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            aliases: ['dice', 'die'],
            group: 'random',
            memberName: 'roll',
            description: 'Rolls a dice.'
        });
    }

    async run(msg, args) {
        msg.delete();
        const message = await msg.say('♠ ♣ ♥ ♦');
        var roll = Math.floor (Math.random() * 6) + 1;
        await message.edit('♥ ♦ ♠ ♣');
        var roll = Math.floor (Math.random() * 6) + 1;
        await message.edit('♦ ♠ ♣ ♥');
        var roll = Math.floor (Math.random() * 6) + 1;
        await message.edit('♣ ♥ ♠ ♦');
        var roll = Math.floor (Math.random() * 6) + 1;
        await message.delete();
        var roll = Math.floor (Math.random() * 6) + 1;
        await console.log("❗ " + msg.author.username + " has rolled the dice and landed on: 🎲" + roll);
        return msg.reply("you rolled a 🎲" + roll);
    }
}