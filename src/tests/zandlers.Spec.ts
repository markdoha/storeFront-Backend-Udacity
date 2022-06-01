import supertest from "supertest"
import jwt, {Secret} from "jsonwebtoken"
import { user, UserInfo } from "../models/user";
import app from "../server"; 
import userRoute from "../handlers/user.routes"
import productRoute from "../handlers/products.routes"
import orderRoute from "../handlers/orders.routes"
import { auth } from "../middlewares/auth";


const request = supertest(app);

const SECRET = process.env.TOKEN_SECRET as Secret

let token : string;

describe("User", () => {

    it("create a user",  (done) => {
        request
    .post("/create_user")
    .send({
        firstname: "test",
        lastname: "test",
        password: "test"
    })
    .then((res: any) => {
      const {body, status} = res
      token = body
      expect(token).toBeDefined()
      done();
    })

    })

    it("show a user",  (done) => {
        request.get("/show_user/2")
        .set("Authorization", "bearer " + token)
        .then((res) => {
            expect(res.status).toBe(200);
        })
        done();
    })

    it("show all users", (done) => {
        request.get("/users")
        .set("Authorization", "bearer " + token)
        .then((res) => {
            expect(res.status).toBe(200);
        })
        done();
    })
})



    console.log("porduct handeler");
    
    it("create a product",  (dpne) => {
        request.post("/create_product")
        .set("Authorization", "bearer " + token)
        .send({
            name: "test",
            price: 123
        }).then((res) => {
        expect(res.status).toBe(200);
        })
        dpne();
    })

    it("show a product",  (done) => {
        request.get("/show_product/1")
        .set("Authorization", "bearer " + token)
        .then((res) => {
            expect(res.status).toBe(200);
        })
        done();
        
    })

    it("show all products",  (done) => {
        request.get("/products")
        .set("Authorization", "bearer " + token)
        .then((res) => {
            expect(res.status).toBe(200);
        })
        done();
    })




describe("orders Handler", () => {
    it("create order",  (done) => {
        request.post("/create_order")
        .set("Authorization", "bearer " + token)
        .send({
            user_id: 1,
            status: true
        }).then((res) => {
        expect(res.status).toBe(200);
        })
        done();
    })

    it("shows current order",  (done) => {
        request.get("/current_order/1")
        .set("Authorization", "bearer " + token)
        .then((res) => {
            expect(res.status).toBe(404);
        })
        done();
    })

    it("show all orders",  (done) => {
        request.get("/orders")
        .set("Authorization", "bearer " + token)
        .then((res) => {
            expect(res.status).toBe(200);
        })
        done();
    })

    it("add product",  (done) => {
        request.post("/addProcuct/1")
        .set("Authorization", "bearer " + token)
        .send({
            product_id: 1,
            quantity: 2
        }).then((res) => {
        expect(res.status).toBe(200);
        })
        done();
    })

})

