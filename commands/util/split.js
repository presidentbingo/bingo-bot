const { Command } = require('discord.js-commando');

module.exports = class SplitCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'split',
			group: 'util',
			memberName: 'split',
			description: 'Sends split messages with a specific total length.',
			details: 'This command is for testing split messages. The length must be at least 1.',
			examples: ['split 3000'],

			args: [
				{
					key: 'length',
					prompt: 'How many characters long would you like the message to be?',
					type: 'integer',
					validate: val => parseInt(val) >= 1
				},
				{
					key: 'text',
					prompt: 'What would you like the text to be?',
					type: 'string'
				}
			]
		});
	}

	async run(msg, args) {
		const { length, text } = args;
		let content = '';
		for(let i = 0; i < args.length; i++) content += `${i % 500 === 0 ? '\n' : ''}`+ text;
		return [await msg.reply(content, { split: true })];
	}
};