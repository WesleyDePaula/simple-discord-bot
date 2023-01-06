const tellmejoke = require('./commands/tellmejoke.js');
const tellmebatjoke = require('./commands/tellmebatjoke.js');

const commands = { tellmejoke, tellmebatjoke };

module.exports = function (msg) {
	const tokens = msg.content.split(' ');
	let command = tokens.shift();
	if (command.charAt(0) === '!') {
		command = command.substring(1);
		commands[command](msg, tokens);
	}
};
