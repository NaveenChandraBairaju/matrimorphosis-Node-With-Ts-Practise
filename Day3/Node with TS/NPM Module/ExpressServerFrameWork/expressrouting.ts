import express, { Request, Response } from "express";

const PORT_NO: number = 8001;

const serverObj = express();

serverObj.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .send(JSON.stringify({ message: "Welcome to Home Page" }));
});

serverObj.get("/about", (req: Request, res: Response) => {
  res
    .status(200)
    .send(
      JSON.stringify({ message: "About Us Page", company: "Tech Corp" })
    );
});

// serverObj.all("*", (req: Request, res: Response) => {
//   res
//     .status(404)
//     .send(
//       JSON.stringify({
//         message: "Page not found",
//         contact: "Admin@matrimony.com",
//       })
//     );
// });

serverObj.use((req, res) => { //middleware
  res
    .status(404)
    .send(
      JSON.stringify({
        message: "Page not found",
        contact: "Admin@matrimony.com",
      })
    );
});

serverObj.listen(PORT_NO, () => {
  console.log("server started");
});

// http://localhost:8001/
// http://localhost:8001/about
// http://localhost:8001/discount

// http://localhost:4000/cart/1 => api => http