import db_info from "../database";
import bcrypt, { hash } from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const peaper = process.env.BCRYPT_PASSWORD;
const SaultShots = process.env.SAULT_SHOTS;


export type Product = {
    id?: number;
    name: string;
    price: number;
};



export class ProductsInfo{
    
    async Index(): Promise<Product[]>{
        try{
            const conn = await db_info.connect();
            const sql = "select * from products";
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (err){
            throw new Error(`cannot get products: ${err}`)
            
        }
    }






    async create(p: Product): Promise<Product>{
        try{
            const conn = await db_info.connect();
            const sql = "INSERT INTO products(name, price) VALUES($1, $2) RETURNING * ";
            const {rows} = await conn.query(sql, [p.name, p.price]);
            conn.release();
            console.log(rows[0]);
            
            return rows[0];
        } catch (err){
            throw new Error(`cannot create product: ${err}`)
            
        }
    }


    async show(id: number) : Promise<Product | null>{
        try{
            const conn = await db_info.connect();
            const sql = "Select * from products where id = $1 ";
            const result = await conn.query(sql, [id]);
            conn.release();
            let ans =result.rows[0];
            if(ans){
                return ans;
            }
            else {
                return null;
            }
        } catch (err){
            throw new Error(`cannot get product: ${err}`)
            
        }
    }

}