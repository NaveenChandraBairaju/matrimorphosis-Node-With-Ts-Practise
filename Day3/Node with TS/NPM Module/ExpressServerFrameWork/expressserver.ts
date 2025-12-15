import express, { Request, Response } from "express";

const PORT_NO = 8001;
const serverObj = express();

serverObj.get("/", (req: Request, res: Response) => {
    res.send("Hello world");
});

serverObj.listen(PORT_NO, () => {
    console.log("server started");
});

//client - browser
//browser contact my node ts app => http://localhost:8001