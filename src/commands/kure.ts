import { Message } from "discord.js";

module.exports = {
    name: 'kuře',
    description: 'KOKODÁK!',
    execute(msg: Message, args: string[]) {
        var channel = msg.member?.voice.channel;
        if (!channel)
            return msg.reply("a kde ti to mám asi přehrát ty píčo")
        channel.join()
            .then(connection => {
                const dispatcher = connection.play('./sounds/chicken.mp3');
            })
            .catch(console.error);
    },
};