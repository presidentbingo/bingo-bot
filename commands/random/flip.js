const { Command } = require('discord.js-commando');

module.exports = class CoinFlipCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'flip',
            aliases: ['coin', 'coinflip'],
            group: 'random',
            memberName: 'flip',
            description: 'Flips a coin.'
        });
    }

    async run(msg, args) {
        msg.delete();
        const message = await msg.say('🔴 🔵');
        var flip = (Math.floor(Math.random() * 2) == 0) ? '🔵heads' : '🔴tails';
        await message.edit('🔵 🔴');
        var flip = (Math.floor(Math.random() * 2) == 0) ? '🔵heads' : '🔴tails';
        await message.edit('🔴 🔵');
        var flip = (Math.floor(Math.random() * 2) == 0) ? '🔵heads' : '🔴tails';
        await message.edit('🔵 🔴');
        var flip = (Math.floor(Math.random() * 2) == 0) ? '🔵heads' : '🔴tails';
        await message.delete();
        var flip = (Math.floor(Math.random() * 2) == 0) ? '🔵heads' : '🔴tails';
        await console.log("❗ " + msg.author.username + " has flipped the coin and landed on: " + flip);
        return msg.reply("you landed on " + flip);
    }
}