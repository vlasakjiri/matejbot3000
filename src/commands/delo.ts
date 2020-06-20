import { Message } from "discord.js";

module.exports = {
    name: 'dělo',
    description: 'Přehraje "bych mu dal dělo" v tvém voice channelu',
    execute(msg: Message, args: string[]) {
        var channel = msg.member?.voice?.channel;
        if (!channel) {
            return msg.reply("a kde ti to mám asi přehrát ty píčo")
        }
        else {
            channel.join()
                .then(connection => {
                    const dispatcher = connection.play('./sounds/delo.mp3');
                })
                .catch(console.error);
        }
    },
};