"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    name: 'vypadni',
    description: 'Vypadne z voice chanellu',
    execute: function (msg, args) {
        var _a, _b;
        if ((_b = (_a = msg.guild) === null || _a === void 0 ? void 0 : _a.voice) === null || _b === void 0 ? void 0 : _b.channel) {
            msg.channel.send("Tak si to tady fakt užijte.");
            msg.guild.voice.channel.leave();
        }
        else {
            msg.channel.send("A kam? Dej mi pokoj. Víš že na tohle nemám čas.");
        }
    },
};
