"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    name: 'dělo',
    description: 'Přehraje "bych mu dal dělo" v tvém voice channelu',
    execute: function (msg, args) {
        var _a, _b;
        var channel = (_b = (_a = msg.member) === null || _a === void 0 ? void 0 : _a.voice) === null || _b === void 0 ? void 0 : _b.channel;
        if (!channel) {
            return msg.reply("a kde ti to mám asi přehrát ty píčo");
        }
        else {
            channel.join()
                .then(function (connection) {
                var dispatcher = connection.play('./sounds/delo.mp3');
            })
                .catch(console.error);
        }
    },
};
