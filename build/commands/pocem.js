"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    name: 'pocem',
    description: 'Příjde k tobě do voice channelu a slušně pozdraví',
    execute: function (msg, args) {
        var _a;
        var channel = (_a = msg.member) === null || _a === void 0 ? void 0 : _a.voice.channel;
        if (channel) {
            channel.join()
                .then(function (connection) {
                connection.play('./sounds/pocem.mp3');
            })
                .catch(console.error);
        }
    },
};
