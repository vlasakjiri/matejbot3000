"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSoundFile = void 0;
var fs_1 = __importDefault(require("fs"));
function getSoundFile(path) {
    var soundFiles = fs_1.default.readdirSync(path);
    return path + soundFiles[Math.floor(Math.random() * soundFiles.length)];
}
exports.getSoundFile = getSoundFile;