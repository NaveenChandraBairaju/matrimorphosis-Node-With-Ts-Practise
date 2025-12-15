import * as pathmodule from "path";
const filepath = pathmodule.join(__dirname, "example.json")
console.log(filepath)
console.log("Extension for this file: ",pathmodule.extname(filepath))