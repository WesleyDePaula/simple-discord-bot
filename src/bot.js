const { Client, GatewayIntentBits, Events, Collection } = require('discord.js');
const interactionHandler = require('./interactionHandler');

const fs = require('node:fs');
const path = require('node:path');

require('dotenv').config();

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.js'));

commandFiles.forEach(file => {
    const filePath = path.join(commandsPath, file);
	const command = require(filePath);

	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
		return;
	}
	console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
});


client.once(Events.ClientReady, () => {
	console.log('Authenticated successfully!!');
});


client.on(Events.InteractionCreate, interactionHandler);

client.login(process.env.BOT_TOKEN).catch((result) => {
	console.error('A error ocurred on trying to authenticate: ' + result);
	throw result;
});
