import bcrypt, { hash } from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export function auth( req:Request,res:Response ,next:NextFunction){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null ) return res.sendStatus(401)
    try{
        jwt.verify(token , process.env.TOKEN as string)
        next();
    } catch(err){
        throw new Error("access denied")
    }
}