const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class DisconnectCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'disconnect',
            group: 'music',
            aliases: ['leave'],
            memberName: 'disconnect',
            description: 'Disconnects the bot from your current channel.',
            examples: ['!disconnect'],
            guildOnly: true
        });    
    }

	hasPermission(msg) {
		return msg.member ? msg.member.hasPermission("MOVE_MEMBERS") : false

    }

    async run(message) {
        await message.delete();
        let voiceCollection = message.member.voiceChannel;
        await voiceCollection.leave();
        await console.log('❗ ' + message.author.username + " has disconnected the bot from the channel: " + voiceCollection.name);
        return message.channel.send("👋").then(m=>m.delete(5000));
        };
    }