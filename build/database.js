"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var _a = process.env, db_host = _a.db_host, db_name = _a.db_name, db_test = _a.db_test, db_user = _a.db_user, port = _a.port, db_password = _a.db_password, ENV = _a.ENV;
var data;
if (ENV === "dev") {
    data = {
        host: db_host,
        database: db_name,
        port: port,
        user: db_user,
        password: db_password,
    };
}
if (ENV === "test") {
    data = {
        host: db_host,
        database: db_test,
        port: port,
        user: db_user,
        password: db_password,
    };
}
var db_info = new pg_1.Pool(data);
exports.default = db_info;
