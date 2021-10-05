import { readFileSync, writeFileSync } from 'fs';

const re = /[^\n]*new URL[^\n]*/g;
for(let crateName of JSON.parse(readFileSync("./.rsw.json", "utf8")).crates) {
    try {
        const fileName = "./src/lib/" + crateName + "/pkg/" + crateName + ".js";
        writeFileSync(fileName, readFileSync(fileName, "utf8").replace(re, ""));
    } catch {}
}