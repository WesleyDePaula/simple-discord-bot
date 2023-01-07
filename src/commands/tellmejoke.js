const { SlashCommandBuilder } = require('discord.js');
const { jokes } = require('./../resources/jokes.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tellmejoke')
		.setDescription('Responderá com uma piada ruim 🤡.'),
	async execute(interaction) {
		const index = Math.floor(Math.random() * jokes.length);
		interaction.reply(jokes[index]);
	},
};