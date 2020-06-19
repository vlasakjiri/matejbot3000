module.exports = {
    name: 'vypadni',
    description: 'Vypadne z voice chanellu',
    execute(msg, args) {
        if (msg.member.voice.channel) {
            msg.channel.send("Tak si to tady fakt užijte.");
            msg.member.voice.channel.leave();
        }
    },
};