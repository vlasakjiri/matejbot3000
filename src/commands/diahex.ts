import { Message } from "discord.js";
import * as randomFile from "../getRandomFile"


module.exports = {
    name: 'diahex',
    description: 'Přehraje náhodný diahexův bobánek',
    execute(msg: Message, args: string[]) {
        var channel = msg.member?.voice?.channel;
        if (!channel) {
            return msg.reply("a kde ti to mám asi přehrát ty píčo")
        }
        else {
            channel.join()
                .then(connection => {
                    const file = randomFile.getSoundFile("./sounds/diahex/");
                    const dispatcher = connection.play(file);
                })
                .catch(console.error);
        }
    },
};

