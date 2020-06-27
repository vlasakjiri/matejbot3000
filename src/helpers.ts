import fs from "fs";
import glob from "glob"
import path from 'path'


export function getSoundFile(path: string): string
{
    const soundFiles = fs.readdirSync(path);
    return path + soundFiles[Math.floor(Math.random() * soundFiles.length)]
}
