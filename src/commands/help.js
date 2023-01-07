const { SlashCommandBuilder } = require('discord.js');
// const { helpText } = require('./../resources/help.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Lista as funcionalidades do bot.'),
	async execute(interaction) {
		const myCommands = interaction.client.commands;
		const commandNames = [...myCommands.keys()];
		const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

		let output = '__**-= **Lista de Comandos** =-**__\n';

		myCommands.forEach(command => {
			output += `◆ **/${command.data.name}** ${'-'.repeat(longest - command.data.name.length)}> ${command.data.description}\n`;
		});
		interaction.reply('Ok');
		interaction.channel.send(output);
	},
};
