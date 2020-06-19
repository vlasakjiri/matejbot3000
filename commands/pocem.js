module.exports = {
    name: 'pocem',
    description: 'Příjdu k tobě do voice channelu :O',
    execute(msg, args) {
        var channel = msg.member.voice.channel;
        if (channel) {
            channel.join();
            msg.channel.send("ČÁU");
        }

    },
};