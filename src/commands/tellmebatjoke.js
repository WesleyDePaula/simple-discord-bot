const { SlashCommandBuilder } = require('discord.js');
const { batJokes } = require('./../resources/jokes.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tellmebatjoke')
		.setDescription('Responderá com uma piada ruim sobre o Batman 🦇.'),
	async execute(interaction) {
		const index = Math.floor(Math.random() * batJokes.length);
		interaction.reply(batJokes[index]);
	},
};
