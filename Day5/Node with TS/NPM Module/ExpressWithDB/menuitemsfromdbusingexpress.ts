import express, { Request, Response } from "express";
import pool from "./dbconnection";
import { FoodItem } from "./Fooditem";

let appServer = express();

appServer.get("/getFoodMenu", (req: Request, res: Response) => {
  let responseData: string =
    "<HTML><HEAD><TITLE>Food Delivery app</TITLE></HEAD><BODY><table>";

  pool
    .query("SELECT * FROM food_items")
    .then(([result]) => {
      let menuItem: FoodItem[] = result as FoodItem[];

      responseData +=
        "<THEAD><TH>ID</TH><TH>Name</TH><TH>Price</TH><TH>Category</TH></THEAD>";
        console.log(menuItem);

      menuItem.forEach((item) => {
        responseData += `<TR><TD>${item.id}</TD><TD>${item.name}</TD><TD>${item.price}</TD><TD>${item.category}</TD></TR>`;
      });

      responseData += "</table></BODY></HTML>";
      res.send(responseData);
    })
    .catch((err) => {
      console.log("Error", err);
      res.send("Database Error");
    })
    .finally(() => {
      console.log("db end");
    });
});

appServer.listen(3000, () => {
  console.log("server running");
});
//http://localhost:3000/getFoodMenu => end point
//connect to db send respone, if req read request object