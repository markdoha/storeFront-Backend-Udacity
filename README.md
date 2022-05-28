# Storefront Backend Project

## Prepare env and change the values
```
ENV=dev

db_host=localhost
db_name=shopping
db_test=shopping_test
db_user=shopping_user
db_password=password123

BCRYPT_PASSWORD=your_secret_password

SAULT_SHOTS=10

TOKEN=mark123!
```
## database
- create user with name `shopping_user` with password `password123` and grant him all access


## Set up

- `npm install` to install all dependencies
- `npm run db:up` to set up the database and get access via
- `npm run build` to build the app


## app ports
- database port `5432`

- app port `3000`

## Start the app
- `npm run start` to start the app

## Test the app
- `npm run test` to test the app


