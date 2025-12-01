import * as fs from "fs";

function echo(name: string) {
    console.log(name);
}

// Write file asynchronously
fs.writeFile(
    "exampleasync.txt",
    "Hello, Node.js with TypeScript (Async)!",
    (err) => {
        if (err) throw err;
        console.log("File written successfully.");
    }
);

echo("sudha");
console.log("line 18 Executed")

fs.readFile("test.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log("File Content:", data);
});
console.log("line 24 Executed")
fs.appendFile("test.txt", "\nAppending async content...", (err) => {
    if (err) throw err;
    console.log("Content appended.");
});
console.log("line 29 Executed")
// delete a file from the filesystem
fs.unlink("test.txt", (err) => {
    if (err) throw err;
    console.log("File deleted.");
});