"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var discord_js_1 = __importDefault(require("discord.js"));
var _a = require('../config.json'), prefix = _a.prefix, token = _a.token;
var bot = new discord_js_1.default.Client();
loadCommands(bot, "build/commands");
bot.login(token);
bot.on('ready', function () {
    var _a;
    console.info("Logged in as " + ((_a = bot === null || bot === void 0 ? void 0 : bot.user) === null || _a === void 0 ? void 0 : _a.tag) + "!");
});
bot.on('message', function (msg) {
    if (!msg.content || !msg.content.toLowerCase().startsWith(prefix) || msg.author.bot) {
        return;
    }
    var args = msg.content.split(/ +/);
    if (args.length == 1) {
        msg.reply("co po mně chceš? Víš, že na tohle nemám čas.");
        return;
    }
    args.shift();
    var command = args.shift().toLowerCase();
    if (!bot.commands.has(command)) {
        console.info("Unknown command: " + command);
        return;
    }
    try {
        console.info("Calling command: " + command);
        bot.commands.get(command).execute(msg, args);
    }
    catch (error) {
        console.error(error);
        msg.reply('there was an error trying to execute that command!');
    }
});
function loadCommands(client, path) {
    bot.commands = new discord_js_1.default.Collection();
    var commandFiles = fs_1.default.readdirSync(path).filter(function (file) { return file.endsWith('.js'); });
    for (var _i = 0, commandFiles_1 = commandFiles; _i < commandFiles_1.length; _i++) {
        var file = commandFiles_1[_i];
        var command = require("./commands/" + file);
        client.commands.set(command.name, command);
    }
}
