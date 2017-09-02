const { Command } = require('discord.js-commando');

module.exports = class BlankCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'music',
            group: 'admin',
            aliases: ['play','pl','start','skip','s','queue','q','pause','p','resume','r','volume','vol','v','mute','m','unmute','um','leave','l','quit','stop','disconnect','clearqueue','clearq','c','np','nowplaying'],
            memberName: 'music',
            description: '',
            guildOnly: true
        });
    }

        hasPermission(msg) {
        return this.client.isOwner(msg.author);
    }
    run() {}
}