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
       await request.post("/create_user").send(
           {
                firstname: userdata.firstname,
                lastname: userdata.lastname,
                password: userdata.password
           }
       ).then((res) => {
            
            expect(res.status).toBe(200)
            
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
        request2.post("/create_product").send({
            name: "test",
            price: 123
        }).then((res) => {
        expect(res.status).toBe(200);
        })

    })

    it("show a product", async () => {
        request2.get("/show_product/1").then((res) => {
            expect(res.status).toBe(200);
        })
    })

    it("show all products", async () => {
        request2.get("/products").then((res) => {
            expect(res.status).toBe(200);
        })
    })

})


describe("orders Handler", () => {
    it("create order", async () => {
        request3.post("/create_order").send({
            user_id: 1,
            status: true
        }).then((res) => {
        expect(res.status).toBe(200);
        })

    })

    it("shows current order", async () => {
        request3.get("/current_order/1").then((res) => {
            expect(res.status).toBe(200);
        })
    })

    it("show all orders", async () => {
        request3.get("/orders").then((res) => {
            expect(res.status).toBe(200);
        })
    })

    it("add product", async () => {
        request3.post("/addProcuct/1").send({
            product_id: 1,
            quantity: 2
        }).then((res) => {
        expect(res.status).toBe(200);
        })
    })

})

