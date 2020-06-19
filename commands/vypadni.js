module.exports = {
    name: 'vypadni',
    description: 'Vypadne z voice chanellu',
    execute(msg, args) {
        if (msg.client.voice.channel) {
            msg.channel.send("Tak si to tady fakt užijte.");
            msg.member.voice.channel.leave();
        }
        else {
            msg.channel.send("Dej mi pokoj :( už nemám kam vypadnout :(");
        }
    },
};