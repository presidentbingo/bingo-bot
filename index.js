const commando = require('discord.js-commando');
const Discord = require('discord.js');
const music = require('discord.js-music-v11');
const { TOKEN, PREFIX } = require('./config');
const bot = new commando.Client({
    commandPrefix: PREFIX,
    owner: ['192023544480137225', '244947995861188618'] ,
});
const fs = require("fs");
music(bot, {
    prefix: '!',
    global: false,
    maxQueueSize: 20,
    volume: 10,
    anyoneCanSkip: true,
    clearInvoker: false
});

bot.registry.registerGroup('admin', 'Admin');
bot.registry.registerGroup('util', 'Utilities');
bot.registry.registerGroup('misc', 'Misc');
bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

var timestamp = ' [' + new Date().toUTCString() + ']';
var launchtime = new Date().toUTCString();

var nickname = fs.readFileSync("./nickname.json");
var setgame = fs.readFileSync("./game.json");
var status = fs.readFileSync("./status.json");

var jsonNickname = JSON.parse(nickname);
var jsonSetGame = JSON.parse(setgame);
var jsonStatus = JSON.parse(status);

bot.on('ready', async () => {
  return bot.user.setPresence({ game: { name: jsonSetGame.game, type: 0 } });
})

bot.on('ready', async () => {
  return bot.user.setStatus(status.toString());
})

bot.on('ready', async () => {
  if(bot.guilds.get('197913149985259520')) bot.guilds.get('197913149985259520').me.setNickname(jsonNickname.nickname)
  if(bot.guilds.get('297939129222692864')) bot.guilds.get('297939129222692864').me.setNickname(jsonNickname.nickname)
})

bot.on('voiceStateUpdate', async (OldMember, NewMember) => {
  let voiceCollectionOld = OldMember.voiceChannel;
  let voiceCollectionNew = NewMember.voiceChannel;
  if (!OldMember.voiceChannel && NewMember.voiceChannel) console.log("❗ " + NewMember.displayName + " has joined voice channel: \"" + voiceCollectionNew.name + "\"" + timestamp); //joined //NewMember.guild.channels.find('name', `bot-commands`).send("❗ " + NewMember.displayName + " has joined voice channel: \"" + voiceCollectionNew.name + "\"" + timestamp);
  if (!NewMember.voiceChannel && OldMember.voiceChannel) console.log("❗ " + OldMember.displayName + " has left voice channel: \"" + voiceCollectionOld.name + "\"" + timestamp); //left//OldMember.guild.channels.find('name', `bot-commands`).send("❗ " + OldMember.displayName + " has left voice channel: \"" + voiceCollectionOld.name + "\"" + timestamp);
  if (NewMember.voiceChannel && OldMember.voiceChannel) console.log("❗ " + NewMember.displayName + " has switched to voice channel: \"" + voiceCollectionNew.name + "\" from channel: \"" + voiceCollectionOld.name + "\"" + timestamp); //switched channels //NewMember.guild.channels.find('name', `bot-commands`).send("❗ " + NewMember.displayName + " has switched to voice channel: \"" + voiceCollectionNew.name + "\" from channel: \"" + voiceCollectionOld.name + "\"" + timestamp);
});

bot.on('guildMemberAdd', async member => {
  //const defaultChannel = member.guild.channels.find(c=> c.permissionsFor(member.guild.me).has("SEND_MESSAGES"));
  //defaultChannel.send(`Welcome to the server, ${member}!`);
  if(member.guild.id ==='197913149985259520') member.addRole('342450822958809088')
  if(member.guild.id ==='297939129222692864') member.addRole('343918357235630082')
  //return member.guild.channels.find('name', `welcome-log`).send(`Welcome to the server, ${member}!`);
});
  
bot.on('guildMemberRemove', async member => {
  //const defaultChannel = member.guild.channels.find(c=> c.permissionsFor(member.guild.me).has("SEND_MESSAGES"));
  //defaultChannel.send(`Bye bye, ${member} :(`);
  return member.guild.channels.find('name', `welcome-log`).send(`Bye bye, ${member} :(`);
});
bot.on("message", async message => {
if (message.content.indexOf("+help") === 0) {
message.reply("\n**🎷 Music Commands:** \n" + "```\n+help, !clearqueue, !leave, !mute, !np, !pause, !play, !queue, !resume, !skip, !unmute, !volume\n```" + "https://twitter.com/michaelvuolo_").then(m=>m.delete(15000));
}});
bot.on("message", async message => {
    if (message.content.indexOf("|") === 0) {
    if (message.content.indexOf("|||||") === 0) { 
    let time = 9000000
    console.log("❗ " + message.author.username + "'s message will delete in 150 minutes. (2 hours, 30 minutes). (" + message + ")");
		await message.reply("above message will delete in 150 minutes. (2 hours, 30 minutes)").then(m=>m.delete(15000));
    return message.delete(time)
     }
    if (message.content.indexOf("||||") === 0) { 
    let time = 7200000
    console.log("❗ " + message.author.username + "'s message will delete in 120 minutes. (2 hours). (" + message + ")");
		await message.reply("above message will delete in 120 minutes. (2 hours)").then(m=>m.delete(15000));
    return message.delete(time)
     }
    if (message.content.indexOf("|||") === 0) { 
    let time = 5400000
    console.log("❗ " + message.author.username + "'s message will delete in 90 minutes. (1 hour, 30 minutes). (" + message + ")");
		await message.reply("above message will delete in 90 minutes. (1 hour, 30 minutes)").then(m=>m.delete(15000));
    return message.delete(time)
     }
    if (message.content.indexOf("||") === 0) {
    let time = 3600000
    console.log("❗ " + message.author.username + "'s message will delete in 60 minutes. (1 hour). (" + message + ")");
		await message.reply("above message will delete in 60 minutes. (1 hour)").then(m=>m.delete(15000));
    return message.delete(time)
     }
    let time = 1800000
    console.log("❗ " + message.author.username + "'s message will delete in 30 minutes. (" + message + ")");
		await message.reply("above message will delete in 30 minutes.").then(m=>m.delete(15000));
    return message.delete(time)
	}
});

bot.login(TOKEN);

console.log("\n-------------------------------------------------------------------------------------------------------------------------------");

console.log("|                                                                                                                             |\n|                                                    *ASSISTANT BINGO STARTED*                                                |\n|                                                                                                                             |");

console.log("|                                                                                                                             |\n|        NUGGET: wuts up mah nigga we just ran dis bot and its super cool hmu man @michaelvuolo_ on twitter for nudes         |");

console.log("-------------------------------------------------------------------------------------------------------------------------------");

console.log("\n🕐time: \"" + launchtime + "\"");

console.log("\n🤔nickname: \"" + jsonNickname.nickname + "\"");

console.log("\n🎲game: \"" + jsonSetGame.game + "\"");

console.log("\n📱status: \"" + jsonStatus.status + "\"\n");