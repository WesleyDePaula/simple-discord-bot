const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();
const commandHandler = require('./commands');

client.once('ready', () => {
	console.log('Authenticated successfully!!');
});

client.on('message', commandHandler);

// Authenticate starts (also called login...)
client.login(process.env.BOT_TOKEN).catch((result) => {
    console.error('A error ocurred on trying to authenticate: ' + result);
    throw result;
});
