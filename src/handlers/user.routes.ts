import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";
import jwt, { Secret } from "jsonwebtoken";
import { UserInfo, user } from "../models/user";
import { NextFunction } from "migrate";
import { auth } from "../middlewares/auth";


dotenv.config();

const u = new UserInfo();

export default function userRouter (app: express.Application) {
app.get("/users", auth, async (req: Request, res: Response) => {
  try {
    let data = await u.Index();
    res.json({ users: data });
  } catch (e) {
    res.json({ error: e });
  }
});

app.post("/create_user", async (req: Request, res: Response) => {
  try {
    const AddUser: user = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: req.body.password,
    };
    let newUser = await u.create(AddUser);
    let token = jwt.sign({ user: newUser }, process.env.TOKEN as string);
    res.json(token);
  } catch (e) {
    res.json({ error: e });
  }
});

app.get("/show_user/:id", auth, async (req: Request, res: Response) => {
  try {
    const id = req.params.id as unknown as number;
    let TheUser = await u.show(id);
    if (TheUser != null) {
      let token = jwt.sign({ user: TheUser }, process.env.TOKEN as string);
      res.json({ TOKEN: token });
    } else res.end("user not found");
  } catch (err) {
    res.end(`user not found ${err}`);
  }
});
}

