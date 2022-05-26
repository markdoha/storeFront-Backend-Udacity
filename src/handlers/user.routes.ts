import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";
import jwt, { Secret } from "jsonwebtoken";
import { UserInfo, user } from '../models/user';
import { NextFunction } from "migrate";
import { auth } from '../middlewares/auth';

dotenv.config();




const user = new UserInfo();
let app = express.Router();

    
    app.get("/users", auth, async (req: Request,res: Response)=>{
        let data = await user.Index();
        res.json({users: data});
    });


    
    app.post("/create_user", async (req: Request,res: Response)=>{
        const AddUser: user = {
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            password: req.body.password
        }
        let newUser = await user.create(AddUser)
        let token = jwt.sign({user: newUser}, process.env.TOKEN as string)
        res.json(token);
    })




    
    app.get("/show_user/:id",auth, async (req: Request,res: Response)=>{
        const id = req.params.id;
        let TheUser = await user.show(id)
        if(TheUser != null){
            let token = jwt.sign({user: TheUser}, process.env.TOKEN as string)
            res.json({TOKEN: token})
        }
        else
        res.end("user not found")
    })

    export default app;