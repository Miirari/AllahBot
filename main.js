const Discord = require('discord.js');
require('dotenv').config()
const client = new Discord.Client();
const prefix = '!';
const fs = require('fs');


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Allah is Online.')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    if(command === 'kick'){
        client.commands.get('kick').execute(message, args, Discord);
    }
    if (command === 'help'){
        client.commands.get('help').execute(message, args, Discord);
    }
    if (command === 'ban'){
        client.commands.get('ban').execute(message, args, Discord);
    }
    if (command === 'play'){
        client.commands.get('play').execute(message, args);
    }
});

client.login(process.env.BOT_TOKEN);
