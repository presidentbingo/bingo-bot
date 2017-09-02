const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class SpamCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'spam',
            group: 'admin',
            memberName: 'spam',
            description: 'Spams the members in your current channel.',
            examples: ['!spam <channel name>'],
            guildOnly: true,
            args: [
                {
                    key: 'channel',
                    prompt: 'Which channel would you like to spam?',
                    type: 'channel'
                }
            ]
        });    
    }

	hasPermission(msg) {
		return msg.member ? msg.member.hasPermission("MOVE_MEMBERS") : false

    }

    async run(message, args) {
        const { channel } = args;
        await message.delete();
        let voiceCollection = message.member.voiceChannel;
        await voiceCollection.join(channel);
        await voiceCollection.leave(channel);
        await voiceCollection.join(channel);
        await voiceCollection.leave(channel);
        await voiceCollection.join(channel);
        await voiceCollection.leave(channel);
        await voiceCollection.join(channel);
        await voiceCollection.leave(channel);
        await voiceCollection.join(channel);
        await voiceCollection.leave(channel);
        await voiceCollection.join(channel);
        await voiceCollection.leave(channel);
        return console.log('❗ ' + message.author.username + " has spammed the channel: " + channel.name);
        };
    }