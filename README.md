# Storefront Backend Project

## creating the database
 - create a database and name it `shopping` for the dev via the sql `CREATE DATABASE shopping;`
 - create a database and name it `shopping_test` for the testing `CREATE DATABASE shopping_test`

## create user
- create user and name him `shopping_user` you want but don't forget to put it in the .env file via the sql `CREATE USER shopping_user WITH PASSWORD 'password123' `

- grant all access to that user via the sql `GRANT ALL PRIVILEGES ON DATABASE shopping TO shopping_user `
- grant all access to that user via the sql `GRANT ALL PRIVILEGES ON DATABASE shopping_test TO shopping_user `

## create a .env file and copy and paste all with changing the `##`
```
ENV=dev

db_host=localhost
db_name=shopping
db_test=shopping_test
db_user=shopping_user
db_password=password123

BCRYPT_PASSWORD=##

SAULT_SHOTS=10

TOKEN=##
```
## the database.json should be good to go but you can edit it if you want
```
{
    "dev": {
      "driver": "pg",
      "host": {"ENV": "db_host"},
      "database": {"ENV": "db_name"},
      "port": {"ENV": "port"},
      "user": {"ENV": "db_user"},
      "password": {"ENV": "db_password"}
    },
    "test": {
      "driver": "pg",
      "host": {"ENV": "db_host"},
      "database": {"ENV": "db_test"},
      "port": {"ENV": "port"},
      "user": {"ENV": "db_user"},
      "password": {"ENV": "db_password"}
    }
  }
  
```


## Set up

- `npm install` to install all dependencies
- `npm run db:up` to set up the database and get access the app
- `npm run build` to build the app


## app ports
- database port `5432`

- app port `3000`

## Start the app
- `npm run start` to start the app

## Test the app
- `npm run test` to test the app


