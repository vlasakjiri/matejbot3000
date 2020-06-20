"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prefix = require('../../config.json').prefix;
module.exports = {
    name: 'pomoc',
    description: 'Vypíše seznam všech příkazů',
    execute: function (msg, args) {
        var data = ["Zatím umím jen tohle :("];
        var commands = msg.client.commands;
        commands.forEach(function (command) {
            data.push(prefix + " **" + command.name + "**: " + command.description);
        });
        msg.channel.send(data.join('\n'));
    }
};
