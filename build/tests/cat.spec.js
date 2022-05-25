"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var order_1 = require("../models/order");
var user_1 = require("../models/user");
var product_1 = require("../models/product");
var o = new order_1.orderInfo();
var p = new product_1.ProductsInfo();
var u = new user_1.UserInfo();
describe("Order tests", function () {
    it("should have an index method", function () {
        expect(o.Index).toBeDefined();
    });
    it("should find something", function () {
        expect(o.addProduct).toBeDefined();
    });
    it("should create an order", function () {
        expect(o.create).toBeDefined();
    });
    it("should find an order", function () {
        expect(o.getOrderByUserId).toBeDefined();
    });
    it("should index all order with products", function () {
        expect(o.productORDER).toBeDefined();
    });
});
describe("products tests", function () {
    it("should have an index method", function () {
        expect(p.Index).toBeDefined();
    });
    it("should create product", function () {
        expect(p.create).toBeDefined();
    });
    it("should find something", function () {
        expect(p.show).toBeDefined();
    });
});
describe("user tests", function () {
    it("should have an index method", function () {
        expect(u.Index).toBeDefined();
    });
    it("should find user", function () {
        expect(u.check).toBeDefined();
    });
    it("should create user", function () {
        expect(u.create).toBeDefined();
    });
    it("should show user", function () {
        expect(u.show).toBeDefined();
    });
});
