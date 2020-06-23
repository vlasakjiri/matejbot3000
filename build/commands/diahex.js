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
var randomFile = __importStar(require("../getRandomFile"));
module.exports = {
    name: 'diahex',
    description: 'Přehraje náhodný diahexův bobánek',
    execute: function (msg, args) {
        var _a, _b;
        var channel = (_b = (_a = msg.member) === null || _a === void 0 ? void 0 : _a.voice) === null || _b === void 0 ? void 0 : _b.channel;
        if (!channel) {
            return msg.reply("a kde ti to mám asi přehrát ty píčo");
        }
        else {
            channel.join()
                .then(function (connection) {
                var file = randomFile.getSoundFile("./sounds/diahex/");
                var dispatcher = connection.play(file);
            })
                .catch(console.error);
        }
    },
};
