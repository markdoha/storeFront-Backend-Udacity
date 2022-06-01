import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import userRoute from "./handlers/user.routes";
import productRoute from "./handlers/products.routes"
import orderRoute from "./handlers/orders.routes"

const port: number = 3000;

const corsOptions= {
    origin: '*'
}

const app: express.Application = express();

app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
userRoute(app);
productRoute(app);
orderRoute(app);


app.listen(3000, ()=>{
    console.log(`server is running on port ${port}`);
    
})

export default app;