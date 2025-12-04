import express, { Request, Response } from "express";

let appServer = express();
appServer.use(express.json());

appServer.post("/placeorder", (req: Request, res: Response) => {
  console.log(req?.body);

  // destructuring the data
  let { customerName, phoneNumber, address, items } = req?.body;

  console.log(customerName);
  console.log(phoneNumber);

  res
    .status(200)
    .send(
      `Received your order ${customerName}. You will receive your order soon`
    );
});

appServer.listen(3000, () => {
  console.log("server is running");
});
