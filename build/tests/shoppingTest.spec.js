"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var order_1 = require("../models/order");
var user_1 = require("../models/user");
var product_1 = require("../models/product");
var o = new order_1.orderInfo();
var p = new product_1.ProductsInfo();
var u = new user_1.UserInfo();
var mark = {
    firstname: "mark",
    lastname: "mamdouh",
    password: "1234"
};
var prod = {
    name: "prod",
    price: 12
};
var ord = {
    user_id: 1,
    status: true
};
describe("define Order tests", function () {
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
describe("define products tests", function () {
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
describe("define user tests", function () {
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
describe("user tests", function () {
    it("should create user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var createMark, firstname, lastname, password;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, u.create(mark)];
                case 1:
                    createMark = _a.sent();
                    firstname = createMark.firstname, lastname = createMark.lastname, password = createMark.password;
                    expect(firstname).toBe(mark.firstname);
                    expect(lastname).toBe(mark.lastname);
                    expect(password).not.toBe("ksokpwqf.cskmfwwqerwqr");
                    return [2 /*return*/];
            }
        });
    }); });
    it("should index all users", function () { return __awaiter(void 0, void 0, void 0, function () {
        var userList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, u.Index()];
                case 1:
                    userList = _a.sent();
                    expect(userList.length).toBe(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should test the login functionality", function () { return __awaiter(void 0, void 0, void 0, function () {
        var loginUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, u.check(mark)];
                case 1:
                    loginUser = _a.sent();
                    expect(loginUser).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    }); });
    it("should show user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var showUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, u.show(1)];
                case 1:
                    showUser = _a.sent();
                    expect(showUser).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("products tests", function () {
    it("should create product", function () { return __awaiter(void 0, void 0, void 0, function () {
        var createProduct;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, p.create(prod)];
                case 1:
                    createProduct = _a.sent();
                    expect(createProduct.name).toBe(prod.name);
                    expect(createProduct.price).toBe(prod.price);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should have an index method", function () { return __awaiter(void 0, void 0, void 0, function () {
        var productList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, p.Index()];
                case 1:
                    productList = _a.sent();
                    expect(productList.length).toBe(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should find product", function () { return __awaiter(void 0, void 0, void 0, function () {
        var showProduct;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, p.show(1)];
                case 1:
                    showProduct = _a.sent();
                    expect(showProduct).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    }); });
});
describe("Order tests", function () {
    it("should create an order", function () { return __awaiter(void 0, void 0, void 0, function () {
        var createOrder;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, o.create(ord)];
                case 1:
                    createOrder = _a.sent();
                    expect(createOrder.user_id).toBe(ord.user_id);
                    expect(createOrder.status).toBe(ord.status);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should have an index method", function () { return __awaiter(void 0, void 0, void 0, function () {
        var orderList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, o.Index()];
                case 1:
                    orderList = _a.sent();
                    expect(orderList.length).toBe(1);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should add product", function () { return __awaiter(void 0, void 0, void 0, function () {
        var addProduct;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, o.addProduct(1, 1, 2)];
                case 1:
                    addProduct = _a.sent();
                    expect(addProduct).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    }); });
    it("should find an order", function () { return __awaiter(void 0, void 0, void 0, function () {
        var showOrder;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, o.getOrderByUserId(1)];
                case 1:
                    showOrder = _a.sent();
                    expect(showOrder).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    }); });
    it("should index all order with products", function () { return __awaiter(void 0, void 0, void 0, function () {
        var productORDER;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, o.productORDER()];
                case 1:
                    productORDER = _a.sent();
                    expect(productORDER.length).toBe(1);
                    return [2 /*return*/];
            }
        });
    }); });
});
