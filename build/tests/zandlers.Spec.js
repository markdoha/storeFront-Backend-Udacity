"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var server_1 = __importDefault(require("../server"));
var request = (0, supertest_1.default)(server_1.default);
var SECRET = process.env.TOKEN_SECRET;
var token;
describe("User", function () {
    it("create a user", function (done) {
        request
            .post("/create_user")
            .send({
            firstname: "test",
            lastname: "test",
            password: "test"
        })
            .then(function (res) {
            var body = res.body, status = res.status;
            token = body;
            expect(token).toBeDefined();
            done();
        });
    });
    it("show a user", function (done) {
        request.get("/show_user/2")
            .set("Authorization", "bearer " + token)
            .then(function (res) {
            expect(res.status).toBe(200);
        });
        done();
    });
    it("show all users", function (done) {
        request.get("/users")
            .set("Authorization", "bearer " + token)
            .then(function (res) {
            expect(res.status).toBe(200);
        });
        done();
    });
});
console.log("porduct handeler");
it("create a product", function (dpne) {
    request.post("/create_product")
        .set("Authorization", "bearer " + token)
        .send({
        name: "test",
        price: 123
    }).then(function (res) {
        expect(res.status).toBe(200);
    });
    dpne();
});
it("show a product", function (done) {
    request.get("/show_product/1")
        .set("Authorization", "bearer " + token)
        .then(function (res) {
        expect(res.status).toBe(200);
    });
    done();
});
it("show all products", function (done) {
    request.get("/products")
        .set("Authorization", "bearer " + token)
        .then(function (res) {
        expect(res.status).toBe(200);
    });
    done();
});
describe("orders Handler", function () {
    it("create order", function (done) {
        request.post("/create_order")
            .set("Authorization", "bearer " + token)
            .send({
            user_id: 1,
            status: true
        }).then(function (res) {
            expect(res.status).toBe(200);
        });
        done();
    });
    it("shows current order", function (done) {
        request.get("/current_order/1")
            .set("Authorization", "bearer " + token)
            .then(function (res) {
            expect(res.status).toBe(404);
        });
        done();
    });
    it("show all orders", function (done) {
        request.get("/orders")
            .set("Authorization", "bearer " + token)
            .then(function (res) {
            expect(res.status).toBe(200);
        });
        done();
    });
    it("add product", function (done) {
        request.post("/addProcuct/1")
            .set("Authorization", "bearer " + token)
            .send({
            product_id: 1,
            quantity: 2
        }).then(function (res) {
            expect(res.status).toBe(200);
        });
        done();
    });
});
