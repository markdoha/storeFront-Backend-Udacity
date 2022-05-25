# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints

#### Users
- Index `/users` [GET] [token required]
- Create `/create_user` [POST] [token required]
- GetUser `/show_user/:id` [GET] [token required]
#### Orders
- Index `/orders` [GET] [token required]
- Create `/create_order` [POST] [token required]
- Read Current Product For User `/current_order/:id` [GET] [token required]

#### Products
- Index `/products` [GET]
- Create `/create_product` [POST] [token required]
- GetProduct `/show_product/:id` [GET]

## Data Shapes
#### Product
Table: *products*
- id `SERIAL PRIMARY KEY`
- name `VARCHAR`
- price `INTEGER`

#### User
Table: *users*
- id `SERIAL PRIMARY KEY`
- FirstName `VARCHAR`
- LastName `VARCHAR`
- password `VARCHAR`

#### Orders
Table: *orders*
- id `SERIAL PRIMARY KEY`
- user_id `INTEGER` `REFERENCES users(id)`
- status `BOOLEAN`

Table: *order_products*
- order_id `INTEGER` `REFERENCES orders(id)` 
- product_id `INTEGER` `REFERENCES products(id)`
- quantity `INTEGER`