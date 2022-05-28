import db_info from "../database";
import bcrypt, { hash } from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const peaper = process.env.BCRYPT_PASSWORD;
const SaultShots = process.env.SAULT_SHOTS;

export type user = {
    id?: number;
    firstname: string;
    lastname: string;
    password: string;
}


export class UserInfo{



    async Index(): Promise<user[]>{
        try{
            const conn = await db_info.connect();
            const sql = "select * from users";
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (err){
            throw new Error(`cannot get users: ${err}`)
            
        }
    }


    async create(u: user): Promise<user>{
        try{
            const conn = await db_info.connect();
            const sql = "INSERT INTO users(FirstName, LastName, password) VALUES($1, $2, $3) RETURNING * ";
            const hash = bcrypt.hashSync(u.password + peaper , 10)
            const {rows} = await conn.query(sql, [u.firstname, u.lastname, hash]);
            conn.release();
            console.log(rows[0]);
            return rows[0];
        } catch (err){
            throw new Error(`cannot create user: ${err}`)
            
        }
    }



    async show(id: number) : Promise<user | null>{
        try{
            const conn = await db_info.connect();
            const sql = "Select * from users where id = $1 ";
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
            throw new Error(`cannot get user: ${err}`)
            
        }
    }


    async check(u: user): Promise<null | user>{
        try{
            const conn = await db_info.connect();
            const sql = "SELECT * FROM users WHERE FirstName = $1 ";
            const result = await conn.query(sql, [u.firstname]);
            conn.release();
            
            if(result.rows.length){
                const wot: user = result.rows[0];
                if(bcrypt.compareSync(u.password + peaper , wot.password)){
                    console.log("success");
                    return wot;
                }

                return null;
            }
            return null;
        } catch (err){
            throw new Error(`cannot get user: ${err}`)
            
        }
    }

}