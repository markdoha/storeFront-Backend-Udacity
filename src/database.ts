import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const {db_host, db_name, db_test, db_user, db_password, ENV}=
    process.env;

let data;

if(ENV === "dev"){
    data = {
        host: db_host,
        database: db_name,
        port: 5432,
        user: db_user,
        password: db_password,
    };
}

if(ENV === "test"){
    data = {
        host: db_host,
        database: db_test,
        port: 5432,
        user: db_user,
        password: db_password,
    };
}

const db_info = new Pool(data);

export default db_info;