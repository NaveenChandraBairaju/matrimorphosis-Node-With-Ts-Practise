import * as fs from 'fs'
fs .writeFileSync('test.txt','Hello World')
console.log(fs.readFileSync("test.txt").toString())