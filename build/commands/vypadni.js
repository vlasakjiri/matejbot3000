"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var rand = __importStar(require("../getRandomFile"));
module.exports = {
    name: 'vypadni',
    description: 'Vypadne z voice chanellu a řekne slovo na n s tvrdým r na konci',
    execute: function (msg, args) {
        var _a, _b;
        var channel = (_b = (_a = msg.guild) === null || _a === void 0 ? void 0 : _a.voice) === null || _b === void 0 ? void 0 : _b.channel;
        if (channel) {
            channel.join()
                .then(function (connection) {
                var file = rand.getSoundFile("./sounds/vypadni/");
                var dispatcher = connection.play(file);
                dispatcher.on("finish", function () {
                    channel.leave();
                });
            });
        }
        else {
            msg.channel.send("A kam? Dej mi pokoj. Víš že na tohle nemám čas.");
        }
    },
};
