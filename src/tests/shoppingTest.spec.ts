import { order, orderInfo } from '../models/order';
import { user, UserInfo } from "../models/user";
import { Product, ProductsInfo } from "../models/product";

const o = new orderInfo();
const p = new ProductsInfo();
const u = new UserInfo();

const mark: user = {
  firstname: "mark",
  lastname: "mamdouh",
  password: "1234"
}

const prod: Product = {
  name: "prod",
  price: 12
}

const ord: order ={
  user_id: 1,
  status: true
}

describe("define Order tests", ()=>{
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



describe("define products tests", ()=>{
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



describe("define user tests", ()=>{
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


describe("user tests", ()=>{

  it("should create user", async() => {
    const createMark = await u.create(mark);
    const {firstname, lastname , password} = createMark;
    expect(firstname).toBe(mark.firstname)
    expect(lastname).toBe(mark.lastname);
    expect(password).not.toBe("ksokpwqf.cskmfwwqerwqr");
  });


  it("should index all users", async () => {
    const userList = await u.Index();
    expect(userList.length).toBe(1);
    });

    it("should test the login functionality", async () => {
      const loginUser = await u.check(mark);
      expect(loginUser).toBeTruthy();
    });


    it("should show user", async () => {
      const showUser = await u.show(1);
      expect(showUser).toBeTruthy();
    });
})


describe("products tests", ()=>{
  it("should create product", async() => {
    const createProduct = await p.create(prod);
    expect(createProduct.name).toBe(prod.name);
    expect(createProduct.price).toBe(prod.price);
  });


  it("should have an index method", async() => {
    const productList = await p.Index();
    expect(productList.length).toBe(1);
    });



    it("should find product", async() => {
      const showProduct = await p.show(1);
      expect(showProduct).toBeTruthy();
    });
})



describe("Order tests", ()=>{


  it("should create an order", async () => {
    const createOrder = await o.create(ord);
    expect(createOrder.user_id).toBe(ord.user_id);
    expect(createOrder.status).toBe(ord.status);
  });


  it("should have an index method", async () => {
    const orderList = await o.Index();
    expect(orderList.length).toBe(1);
    });


    it("should add product", async() => {
      const addProduct = await o.addProduct(1, 1, 2);
      expect(addProduct).toBeTruthy();
    });



    it("should find an order", async () => {
      const showOrder = await o.getOrderByUserId(1);
      expect(showOrder).toBeTruthy();
    });

    it("should index all order with products", async () => {
      const productORDER = await o.productORDER();
      expect(productORDER.length).toBe(1);
    });
})
