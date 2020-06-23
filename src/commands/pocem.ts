import { Message } from "discord.js";

module.exports = {
    name: 'pocem',
    description: 'Příjde k tobě do voice channelu a slušně pozdraví',
    execute(msg: Message, args: string[]) {
        var channel = msg.member?.voice.channel;
        if (channel) {
            channel.join()
                .then(connection => {
                    connection.play('./sounds/pocem.mp3');
                })
                .catch(console.error);
        }

    },
};