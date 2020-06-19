module.exports = {
    name: 'pocem',
    description: 'Příjdu k tobě do voice channelu :O',
    execute(msg, args) {
        var channel = msg.member.voice.channel;
        if (channel) {
            channel.join()
                .then(connection => {
                    msg.channel.send("ČÁU");
                })
                .catch(console.error);
        }

    },
};