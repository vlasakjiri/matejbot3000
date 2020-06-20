import fs from "fs";
import Discord from "discord.js"
import { BaseClient } from "discord.js";
// const Discord = require('discord.js');
const { prefix, token } = require('../config.json');
const bot = new Discord.Client();
loadCommands(bot, "build/commands");
bot.login(token);

bot.on('ready', () => {
    console.info(`Logged in as ${bot?.user?.tag}!`);
});

bot.on('message', msg => {
    if (!msg.content || !msg.content.toLowerCase().startsWith(prefix) || msg.author.bot) {
        return;
    }
    const args = msg.content.split(/ +/);
    if (args.length == 1) {
        msg.reply("co po mně chceš? Víš, že na tohle nemám čas.")
        return;
    }
    args.shift();
    const command = args.shift().toLowerCase();

    if (!bot.commands.has(command)) {
        console.info(`Unknown command: ${command}`);
        return;
    }

    try {
        console.info(`Calling command: ${command}`);
        bot.commands.get(command).execute(msg, args);
    } catch (error) {
        console.error(error);
        msg.reply('there was an error trying to execute that command!');
    }
});


function loadCommands(client: Discord.Client, path: string) {
    bot.commands = new Discord.Collection();
    const commandFiles = fs.readdirSync(path).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command);
    }
}

declare module "discord.js" {
    interface Client {
        commands: Collection<string, command>;
    }
}

interface command {
    name: string;
    description: string;
    execute(msg: Discord.Message, args: string[]): void
}