import db_info from "../database";
import bcrypt, { hash } from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { NumberLiteralType } from "typescript";

dotenv.config();

const peaper = process.env.BCRYPT_PASSWORD;
const SaultShots = process.env.SAULT_SHOTS;


export interface order {
    id?: number;
    user_id: string;
    status: boolean;
};

export interface orderProduct {
    product_id: number;
    quantity: number;
};



export class orderInfo{
    
    async Index(): Promise<order[]>{
        try{
            const conn = await db_info.connect();
            const sql = "select * from orders";
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (err){
            throw new Error(`cannot get products: ${err}`)
            
        }
    }



    async create(o: order): Promise<order>{
        try{
            const conn = await db_info.connect();
            const sql = "INSERT INTO orders(user_id, status) VALUES($1, $2) RETURNING * ";
            const result = await conn.query(sql, [o.user_id, o.status]);
            conn.release();
            console.log(result.rows[0]);
            
            return result.rows[0];
        } catch (err){
            throw new Error(`cannot create order: ${err}`)
            
        }
    }
    async addProduct(productId:number , orderId: number , quantaty: number): Promise<order>{
        try{
            const conn = await db_info.connect();
            const sql = "INSERT INTO order_products(order_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING * "
            let result = await conn.query(sql,[orderId, productId,quantaty]);
            return result.rows[0];
        } catch (err){
            throw new Error( `cannot add product: ${err}`)
        }
    }

    async getOrderByUserId(userId: number): Promise<order> {
        try {
          const conn = await db_info.connect();
          const sql = `SELECT * FROM orders WHERE user_id = $1 ORDER BY id DESC LIMIT 1`;
          const result = await conn.query(sql,[userId]);
          conn.release();
    
          return result.rows[0];
        } catch (err) {
          throw new Error(`Could not get current order. Error: ${err}`);
        }
      }



      async productORDER(): Promise<order[]>{
        try{
            const conn = await db_info.connect();
            const sql = "select * from order_products";
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (err){
            throw new Error(`cannot get products: ${err}`)
            
        }
    }

}