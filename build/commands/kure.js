"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    name: 'kuře',
    description: 'KOKODÁK!',
    execute: function (msg, args) {
        var _a;
        var channel = (_a = msg.member) === null || _a === void 0 ? void 0 : _a.voice.channel;
        if (!channel)
            return msg.reply("a kde ti to mám asi přehrát ty píčo");
        channel.join()
            .then(function (connection) {
            var dispatcher = connection.play('./sounds/chicken.mp3');
        })
            .catch(console.error);
    },
};
