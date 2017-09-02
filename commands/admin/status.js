const { Command } = require('discord.js-commando');
const fs = require("fs");

module.exports = class SetGameCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'status',
            group: 'admin',
            memberName: 'status',
            description: "Sets the bot's status",
            examples: ['!status Offline'],
            args: [
                {
                    key: 'status',
                    prompt: 'What would you like the bot\'s status to be?\n\n📱Possible status options:\n\n•`online`\n•`idle`\n•`invisble`\n•`dnd` (do not disturb)\n',
                    type: 'string'
                }
            ]
        });
    }

        hasPermission(msg) {
        return this.client.isOwner(msg.author);
    }

    async run(message, args) {
        
        const { status } = args;

        await fs.writeFileSync("./status.json", '{"status": "' + status + '"}');
        
        await message.delete();
        await this.client.user.setStatus(status.toString());
        await console.log("❗ " + message.author.username + " has set the bot's status to: " + status);
        return message.reply("you set the bot's status to: " + status).then(m=>m.delete(15000));
    }
}