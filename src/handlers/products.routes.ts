import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";
import jwt, { Secret } from "jsonwebtoken";
import { Product, ProductsInfo } from "../models/product";
import { auth } from "../middlewares/auth";

dotenv.config();

const p = new ProductsInfo();

export default function productRouter (app: express.Application) {

app.get("/products", async (req: Request, res: Response) => {
  try {
    let data = await p.Index();
    let token = jwt.sign({ users: data }, process.env.TOKEN as string);
    res.json({ token });
  } catch (e) {
    res.json({ error: e });
  }
});

app.post("/create_product", auth, async (req: Request, res: Response) => {
  try {
    const AddUser: Product = {
      name: req.body.name,
      price: req.body.price,
    };
    let newProduct = await p.create(AddUser);
    res.json(newProduct);
  } catch (e) {
    res.json({ error: e });
  }
});

app.get("/show_product/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    let Product = await p.show(id as unknown as number);
    res.json({ Product: Product });
  } catch (err) {
    res.end(`product not found ${err}`);
  }
});

}
