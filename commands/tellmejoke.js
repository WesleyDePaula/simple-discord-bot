const jokes = require('./../jokes.json').jokes;

module.exports = function (msg) {
	const index = Math.floor(Math.random() * jokes.length);
	msg.channel.send(jokes[index]);
};

