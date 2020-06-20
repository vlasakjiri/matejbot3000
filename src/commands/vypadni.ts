import { Message } from "discord.js";

module.exports = {
    name: 'vypadni',
    description: 'Vypadne z voice chanellu',
    execute(msg: Message, args: string[]) {
        if (msg.guild?.voice?.channel) {
            msg.channel.send("Tak si to tady fakt užijte.");
            msg.guild.voice.channel.leave();
        }
        else {
            msg.channel.send("A kam? Dej mi pokoj. Víš že na tohle nemám čas.");
        }
    },
};