const { Command } = require('discord.js-commando');
const request = require('request');
module.exports = class SarahCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'sarah',
            group: 'random',
            aliases: ['snake'],
            memberName: 'sarah',
            description: 'Sarah..',
            examples: ['!sarah'],
            guildOnly: true
        });    
    }

    async run(msg) {
        await console.log("❗ " + msg.author.username + " ran the \"sarah\" command.");
        msg.delete();
        var page = 1 + Math.floor(Math.random() * 5) * 10;
        var number = Math.floor (Math.random() * 12) + 1;
        if (number === 1) {let args = 'snake'
            request("https://www.googleapis.com/customsearch/v1?key=" + "AIzaSyAa4lxOV83yqRpRdueGruVuNCqr-JxBfQs" + "&cx=" + "000148466820596494456:fbex4pzkewo" + "&q=" + (args.replace(/\s/g, '+')) + "&searchType=image&alt=json&num=10&start="+page, function(err, res, body) {
        var data, error;
        try {
            data = JSON.parse(body);
        } catch (error) {
            console.log(error)
            return;
        }
        if(!data){
            console.log(data);
            msg.channel.send( "Error:\n" + JSON.stringify(data));
            return;
        }
        else if (!data.items || data.items.length == 0){
            console.log(data);
            msg.channel.send("The daily 100 snake searches have been reached... :( :snake:" + " (" + args + ")");
            return;
        }
        var randResult = data.items[0];
        msg.reply("Good choice. Here she is! (" + args + ") \n\n" + randResult.link);
    });}
        if (number === 2) {let args = 'big snake'
            request("https://www.googleapis.com/customsearch/v1?key=" + "AIzaSyAa4lxOV83yqRpRdueGruVuNCqr-JxBfQs" + "&cx=" + "000148466820596494456:fbex4pzkewo" + "&q=" + (args.replace(/\s/g, '+')) + "&searchType=image&alt=json&num=10&start="+page, function(err, res, body) {
        var data, error;
        try {
            data = JSON.parse(body);
        } catch (error) {
            console.log(error)
            return;
        }
        if(!data){
            console.log(data);
            msg.channel.send( "Error:\n" + JSON.stringify(data));
            return;
        }
        else if (!data.items || data.items.length == 0){
            console.log(data);
            msg.channel.send("The daily 100 snake searches have been reached... :( :snake:" + " (" + args + ")");
            return;
        }
        var randResult = data.items[0];
        msg.reply("Good choice. Here she is! (" + args + ") \n\n" + randResult.link);
    });}
        if (number === 3) {let args = 'cute snake'
            request("https://www.googleapis.com/customsearch/v1?key=" + "AIzaSyAa4lxOV83yqRpRdueGruVuNCqr-JxBfQs" + "&cx=" + "000148466820596494456:fbex4pzkewo" + "&q=" + (args.replace(/\s/g, '+')) + "&searchType=image&alt=json&num=10&start="+page, function(err, res, body) {
        var data, error;
        try {
            data = JSON.parse(body);
        } catch (error) {
            console.log(error)
            return;
        }
        if(!data){
            console.log(data);
            msg.channel.send( "Error:\n" + JSON.stringify(data));
            return;
        }
        else if (!data.items || data.items.length == 0){
            console.log(data);
            msg.channel.send("The daily 100 snake searches have been reached... :( :snake:" + " (" + args + ")");
            return;
        }
        var randResult = data.items[0];
        msg.reply("Good choice. Here she is! (" + args + ") \n\n" + randResult.link);
    });}
        if (number === 4) {let args = 'scary snake'
            request("https://www.googleapis.com/customsearch/v1?key=" + "AIzaSyAa4lxOV83yqRpRdueGruVuNCqr-JxBfQs" + "&cx=" + "000148466820596494456:fbex4pzkewo" + "&q=" + (args.replace(/\s/g, '+')) + "&searchType=image&alt=json&num=10&start="+page, function(err, res, body) {
        var data, error;
        try {
            data = JSON.parse(body);
        } catch (error) {
            console.log(error)
            return;
        }
        if(!data){
            console.log(data);
            msg.channel.send( "Error:\n" + JSON.stringify(data));
            return;
        }
        else if (!data.items || data.items.length == 0){
            console.log(data);
            msg.channel.send("The daily 100 snake searches have been reached... :( :snake:" + " (" + args + ")");
            return;
        }
        var randResult = data.items[0];
        msg.reply("Good choice. Here she is! (" + args + ") \n\n" + randResult.link);
    });}
        if (number === 5) {let args = 'scary snake'
            request("https://www.googleapis.com/customsearch/v1?key=" + "AIzaSyAa4lxOV83yqRpRdueGruVuNCqr-JxBfQs" + "&cx=" + "000148466820596494456:fbex4pzkewo" + "&q=" + (args.replace(/\s/g, '+')) + "&searchType=image&alt=json&num=10&start="+page, function(err, res, body) {
        var data, error;
        try {
            data = JSON.parse(body);
        } catch (error) {
            console.log(error)
            return;
        }
        if(!data){
            console.log(data);
            msg.channel.send( "Error:\n" + JSON.stringify(data));
            return;
        }
        else if (!data.items || data.items.length == 0){
            console.log(data);
            msg.channel.send("The daily 100 snake searches have been reached... :( :snake:" + " (" + args + ")");
            return;
        }
        var randResult = data.items[0];
        msg.reply("Good choice. Here she is! (" + args + ")\n\n" + randResult.link);
    });}
        if (number === 6) {let args = 'retarded snake'
            request("https://www.googleapis.com/customsearch/v1?key=" + "AIzaSyAa4lxOV83yqRpRdueGruVuNCqr-JxBfQs" + "&cx=" + "000148466820596494456:fbex4pzkewo" + "&q=" + (args.replace(/\s/g, '+')) + "&searchType=image&alt=json&num=10&start="+page, function(err, res, body) {
        var data, error;
        try {
            data = JSON.parse(body);
        } catch (error) {
            console.log(error)
            return;
        }
        if(!data){
            console.log(data);
            msg.channel.send( "Error:\n" + JSON.stringify(data));
            return;
        }
        else if (!data.items || data.items.length == 0){
            console.log(data);
            msg.channel.send("The daily 100 snake searches have been reached... :( :snake:" + " (" + args + ")");
            return;
        }
        var randResult = data.items[0];
        msg.reply("Good choice. Here she is! (" + args + ")\n\n" + randResult.link);
    });}
    if (number === 7) {let args = 'small snake'
        request("https://www.googleapis.com/customsearch/v1?key=" + "AIzaSyAa4lxOV83yqRpRdueGruVuNCqr-JxBfQs" + "&cx=" + "000148466820596494456:fbex4pzkewo" + "&q=" + (args.replace(/\s/g, '+')) + "&searchType=image&alt=json&num=10&start="+page, function(err, res, body) {
    var data, error;
    try {
        data = JSON.parse(body);
    } catch (error) {
        console.log(error)
        return;
    }
    if(!data){
        console.log(data);
        msg.channel.send( "Error:\n" + JSON.stringify(data));
        return;
    }
    else if (!data.items || data.items.length == 0){
        console.log(data);
        msg.channel.send("The daily 100 snake searches have been reached... :( :snake:" + " (" + args + ")");
        return;
    }
    var randResult = data.items[0];
    msg.reply("Good choice. Here she is! (" + args + ")\n\n" + randResult.link);
});}
if (number === 8) {let args = 'green snake'
    request("https://www.googleapis.com/customsearch/v1?key=" + "AIzaSyAa4lxOV83yqRpRdueGruVuNCqr-JxBfQs" + "&cx=" + "000148466820596494456:fbex4pzkewo" + "&q=" + (args.replace(/\s/g, '+')) + "&searchType=image&alt=json&num=10&start="+page, function(err, res, body) {
var data, error;
try {
    data = JSON.parse(body);
} catch (error) {
    console.log(error)
    return;
}
if(!data){
    console.log(data);
    msg.channel.send( "Error:\n" + JSON.stringify(data));
    return;
}
else if (!data.items || data.items.length == 0){
    console.log(data);
    msg.channel.send("The daily 100 snake searches have been reached... :( :snake:" + " (" + args + ")");
    return;
}
var randResult = data.items[0];
msg.reply("Good choice. Here she is! (" + args + ")\n\n" + randResult.link);
});}
if (number === 9) {let args = 'tree snake'
    request("https://www.googleapis.com/customsearch/v1?key=" + "AIzaSyAa4lxOV83yqRpRdueGruVuNCqr-JxBfQs" + "&cx=" + "000148466820596494456:fbex4pzkewo" + "&q=" + (args.replace(/\s/g, '+')) + "&searchType=image&alt=json&num=10&start="+page, function(err, res, body) {
var data, error;
try {
    data = JSON.parse(body);
} catch (error) {
    console.log(error)
    return;
}
if(!data){
    console.log(data);
    msg.channel.send( "Error:\n" + JSON.stringify(data));
    return;
}
else if (!data.items || data.items.length == 0){
    console.log(data);
    msg.channel.send("The daily 100 snake searches have been reached... :( :snake:" + " (" + args + ")");
    return;
}
var randResult = data.items[0];
msg.reply("Good choice. Here she is! (" + args + ")\n\n" + randResult.link);
});}
if (number === 10) {let args = 'forest snake'
    request("https://www.googleapis.com/customsearch/v1?key=" + "AIzaSyAa4lxOV83yqRpRdueGruVuNCqr-JxBfQs" + "&cx=" + "000148466820596494456:fbex4pzkewo" + "&q=" + (args.replace(/\s/g, '+')) + "&searchType=image&alt=json&num=10&start="+page, function(err, res, body) {
var data, error;
try {
    data = JSON.parse(body);
} catch (error) {
    console.log(error)
    return;
}
if(!data){
    console.log(data);
    msg.channel.send( "Error:\n" + JSON.stringify(data));
    return;
}
else if (!data.items || data.items.length == 0){
    console.log(data);
    msg.channel.send("The daily 100 snake searches have been reached... :( :snake:" + " (" + args + ")");
    return;
}
var randResult = data.items[0];
msg.reply("Good choice. Here she is! (" + args + ")\n\n" + randResult.link);
});}
if (number === 11) {let args = 'sad snake'
    request("https://www.googleapis.com/customsearch/v1?key=" + "AIzaSyAa4lxOV83yqRpRdueGruVuNCqr-JxBfQs" + "&cx=" + "000148466820596494456:fbex4pzkewo" + "&q=" + (args.replace(/\s/g, '+')) + "&searchType=image&alt=json&num=10&start="+page, function(err, res, body) {
var data, error;
try {
    data = JSON.parse(body);
} catch (error) {
    console.log(error)
    return;
}
if(!data){
    console.log(data);
    msg.channel.send( "Error:\n" + JSON.stringify(data));
    return;
}
else if (!data.items || data.items.length == 0){
    console.log(data);
    msg.channel.send("The daily 100 snake searches have been reached... :( :snake:" + " (" + args + ")");
    return;
}
var randResult = data.items[0];
msg.reply("Good choice. Here she is! (" + args + ")\n\n" + randResult.link);
});}
if (number === 12) {let args = 'happy snake'
    request("https://www.googleapis.com/customsearch/v1?key=" + "AIzaSyAa4lxOV83yqRpRdueGruVuNCqr-JxBfQs" + "&cx=" + "000148466820596494456:fbex4pzkewo" + "&q=" + (args.replace(/\s/g, '+')) + "&searchType=image&alt=json&num=10&start="+page, function(err, res, body) {
var data, error;
try {
    data = JSON.parse(body);
} catch (error) {
    console.log(error)
    return;
}
if(!data){
    console.log(data);
    msg.channel.send( "Error:\n" + JSON.stringify(data));
    return;
}
else if (!data.items || data.items.length == 0){
    console.log(data);
    msg.channel.send("The daily 100 snake searches have been reached... :( :snake:" + " (" + args + ")");
    return;
}
var randResult = data.items[0];
msg.reply("Good choice. Here she is! (" + args + ")\n\n" + randResult.link);
});}
     }
}