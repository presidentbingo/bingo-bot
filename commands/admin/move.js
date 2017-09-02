const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class MoveCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'move',
            group: 'admin',
            memberName: 'move',
            description: 'Moves the members in your current channel to another.',
            examples: ['!move <channel name>'],
            guildOnly: true,
            args: [
                {
                    key: 'channel',
                    prompt: 'Which channel would you like to move the members to?',
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
        let voiceCollection = message.member.voiceChannel.members;
        await voiceCollection.map(u => u.setVoiceChannel(channel)); 
        await console.log('❗ ' + message.author.username + " has moved " + message.member.voiceChannel.members.size + " members, " + voiceCollection.map(u => u.displayName + " (ID: " + u.id + ")").join(", "));
        return message.reply("has moved " + message.member.voiceChannel.members.size + " members, " + voiceCollection.map(u => u.user + " (ID: " + u.id + ")").join(", ")).then(m=>m.delete(15000));
};
    }