import fs from "fs";


export function getSoundFile(path: string): string {
    const soundFiles = fs.readdirSync(path);
    return path + soundFiles[Math.floor(Math.random() * soundFiles.length)]
}
