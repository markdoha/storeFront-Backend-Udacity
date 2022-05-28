import supertest from "supertest"
import jwt, {Secret} from "jsonwebtoken"
import { user } from "../models/user";

import userRoute from "../handlers/user.routes"
import productRoute from "../handlers/products.routes"
import orderRoute from "../handlers/orders.routes"
import { auth } from "../middlewares/auth";

const request = supertest(userRoute);
const request2 = supertest(productRoute);
const request3 = supertest(orderRoute);
const SECRET = process.env.TOKEN_SECRET as Secret

describe("User Handler", () => {
    const userdata :user ={
        firstname: "John",
        lastname: "Doe",
        password: "12345"
    }
    let token :string;
    it("create a user", async () => {
       await request.post("/create_user").send(userdata).then((res) => {
            const {body, status} = res
            token = body
      
            // @ts-ignore
            const {user} = jwt.verify(token, SECRET)
            
      
            expect(status).toBe(200)
            
        })

    })

    it("show a user", async () => {
        request.get("/show_user/1").then((res) => {
            expect(res.status).toBe(200);
        })
    })

    it("show all users", async () => {
        request.get("/users").then((res) => {
            expect(res.status).toBe(200);
        })
    })

})



describe("Products Handler", () => {
    it("create a product", async () => {
        request.post("/create_product").send({
            name: "test",
            price: 123
        }).then((res) => {
        expect(res.status).toBe(200);
        })

    })

    it("show a product", async () => {
        request.get("/show_product/1").then((res) => {
            expect(res.status).toBe(200);
        })
    })

    it("show all products", async () => {
        request.get("/products").then((res) => {
            expect(res.status).toBe(200);
        })
    })

})

