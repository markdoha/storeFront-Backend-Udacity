"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var user_routes_1 = __importDefault(require("./handlers/user.routes"));
var products_routes_1 = __importDefault(require("./handlers/products.routes"));
var orders_routes_1 = __importDefault(require("./handlers/orders.routes"));
var port = 3000;
var corsOptions = {
    origin: '*'
};
var app = (0, express_1.default)();
app.use((0, cors_1.default)(corsOptions));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(user_routes_1.default);
app.use(products_routes_1.default);
app.use(orders_routes_1.default);
app.listen(3000, function () {
    console.log("server is running on port ".concat(port));
});
