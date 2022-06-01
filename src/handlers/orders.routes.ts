import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";
import jwt, { Secret } from "jsonwebtoken";
import { orderInfo, order } from "../models/order";
import { auth } from "../middlewares/auth";

dotenv.config();

const o = new orderInfo();

export default function orderRouter (app: express.Application) {

app.get("/orders", auth, async (req: Request, res: Response) => {
  try {
    let data = await o.Index();
    res.json({ data: data });
  } catch (e) {
    res.json({ error: e });
  }
});

app.post("/create_order", auth, async (req: Request, res: Response) => {
  try {
    const addOrder: order = {
      user_id: req.body.user_id,
      status: req.body.status,
    };
    let newOrder = await o.create(addOrder);
    res.json({ order: newOrder });
  } catch (e) {
    res.json({ error: e });
  }
});

app.post("/current_order/:id", auth, async (req: Request, res: Response) => {
  try {
    const id = req.params.id as unknown as number;
    let Order = await o.getOrderByUserId(id);
    res.json({ order: Order });
  } catch (e) {
    res.json({ error: e });
  }
});

app.post("/addProcuct/:id", auth, async (req: Request, res: Response) => {
  try {
    const id = req.params.id as unknown as number;
    const addProduct = {
      product_id: req.body.productId,
      quantity: req.body.quantity,
    };
    let Order = await o.addProduct(
      addProduct.product_id,
      id,
      addProduct.quantity
    );
    res.json({ order: Order });
  } catch (e) {
    res.json({ error: e });
  }
});

app.get("/allOrders", auth, async (req: Request, res: Response) => {
  try {
    let data = await o.productORDER();
    res.json({ data: data });
  } catch (e) {
    res.json({ error: e });
  }
});

}
