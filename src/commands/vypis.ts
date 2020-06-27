import { Message } from "discord.js";
const glob = require("glob")
const path = require('path');

module.exports = {
    name: 'vypiš',
    description: 'Vypíše všechny soubory na přehrátí',
    execute(msg: Message, args: string[])
    {
        let files: string[] = glob.sync("sounds/**/*.mp3")
            .map((file: string) => path.parse(file).name.toLowerCase())
            .sort();
        msg.channel.send(files.join('\n'));
    },
};