import * as http from "http";
const PORT_NO = 8001;

const serverObj = http.createServer((request, response) => {
    response.writeHead(200, { "content-type": "text/plain" });
    response.write("Hello world");
    response.write("Good Evening")
    response.end();
});

serverObj.listen(PORT_NO, () => {
    console.log("server started");
});
//client - browser
//browser contact my node ts app => http://localhost:8001