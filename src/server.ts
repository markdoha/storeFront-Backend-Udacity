import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import catRoute from "./handlers/user.routes";
import productRoute from "./handlers/products.routes"
import orderRoute from "./handlers/orders"

const port: number = 3000;

const corsOptions= {
    origin: '*'
}

const app: express.Application = express();

app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(catRoute);
app.use(productRoute);
app.use(orderRoute)


app.listen(3000, ()=>{
    console.log(`server is running on port ${port}`);
    
})