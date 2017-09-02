const { Command } = require('discord.js-commando');

module.exports = class BansCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'bans',
            group: 'admin',
            memberName: 'bans',
            description: 'Lists the banned players.',
            examples: ['!bans'],
            guildOnly: true
        });    
    }

	hasPermission(msg) {
		return msg.member ? msg.member.hasPermission("BAN_MEMBERS") : false

    }

    async run(message) {
        let bansCollection = await message.guild.fetchBans();
        await console.log("❗ " + message.author.username + " has checked for bans");
        return message.reply("banned players: " + bansCollection.map(u => u.username + " (ID: " + u.id + ")").join(", ")).then(m=>m.delete(15000));
    }
};