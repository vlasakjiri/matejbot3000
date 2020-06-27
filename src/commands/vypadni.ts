import { Message } from "discord.js";
import * as rand from "../helpers"

module.exports = {
    name: 'vypadni',
    description: 'Vypadne z voice chanellu a řekne slovo na n s tvrdým r na konci',
    execute(msg: Message, args: string[]) {
        let channel = msg.guild?.voice?.channel;
        if (channel) {
            channel.join()
                .then(connection => {
                    const file = rand.getSoundFile("./sounds/vypadni/");
                    const dispatcher = connection.play(file);
                    dispatcher.on("finish", () => {
                        channel.leave();
                    });
                });
        }
        else {
            msg.channel.send("A kam? Dej mi pokoj. Víš že na tohle nemám čas.");
        }
    },
};