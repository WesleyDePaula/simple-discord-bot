const batJokes = require('./../jokes.json').batJokes;

module.exports = function (msg) {
    const index = Math.floor(Math.random() * batJokes.length);
    msg.channel.send(batJokes[index]);
};