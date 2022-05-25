import { order, orderInfo } from '../models/order';
import { user, UserInfo } from "../models/user";
import { Product, ProductsInfo } from "../models/product";

const o = new orderInfo();
const p = new ProductsInfo();
const u = new UserInfo();

describe("Order tests", ()=>{
    it("should have an index method", () => {
        expect(o.Index).toBeDefined();
      });


      it("should find something", () => {
        expect(o.addProduct).toBeDefined();
      });

      it("should create an order", () => {
        expect(o.create).toBeDefined();
      });


      it("should find an order", () => {
        expect(o.getOrderByUserId).toBeDefined();
      });

      it("should index all order with products", () => {
        expect(o.productORDER).toBeDefined();
      });
})



describe("products tests", ()=>{
    it("should have an index method", () => {
        expect(p.Index).toBeDefined();
      });


      it("should create product", () => {
        expect(p.create).toBeDefined();
      });

      it("should find something", () => {
        expect(p.show).toBeDefined();
      });
})



describe("user tests", ()=>{
    it("should have an index method", () => {
        expect(u.Index).toBeDefined();
      });


      it("should find user", () => {
        expect(u.check).toBeDefined();
      });

      it("should create user", () => {
        expect(u.create).toBeDefined();
      });

      it("should show user", () => {
        expect(u.show).toBeDefined();
      });
})