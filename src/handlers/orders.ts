import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";
import jwt, { Secret } from "jsonwebtoken";
import { orderInfo , order, orderProduct} from '../models/order';
import { auth } from '../middelWares/auth';


dotenv.config();


const o = new orderInfo();
let app = express.Router();

app.get("/orders",auth,async (req: Request,res: Response)=>{
    let data = await o.Index();
    res.json({data: data});
});


app.post("/create_order",auth , async (req: Request,res: Response)=>{
    const addOrder: order = {
        user_id: req.body.user_id,
        status: req.body.status 
    }
    let newOrder = await o.create(addOrder)
    res.json({order: newOrder});
})



app.post("/current_order/:id",auth , async (req: Request,res: Response)=>{
    const id = req.params.id as unknown as number;
    let Order = await o.getOrderByUserId(id)
    res.json({order: Order});
})


app.post("/addProcuct/:id",auth , async (req: Request,res: Response)=>{
    const id = req.params.id as unknown as number;
    const addProduct: orderProduct = {
        product_id: req.body.productId,
        quantity: req.body.quantity 
    }
    let Order = await o.addProduct(addProduct.product_id, id , addProduct.quantity)
    res.json({order: Order});
})

app.get("/allOrders",auth,async (req: Request,res: Response)=>{
    let data = await o.productORDER();
    res.json({data: data});
});


export default app;