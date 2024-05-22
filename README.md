# Product Store

## Overview
Product Store is a web application built with the Next.js framework and Material-UI (MUI) for the frontend. The application uses Redux for state management and integrates with the [Fake Store API](https://fakestoreapi.com/) to simulate a fully functional e-commerce store. This project demonstrates basic CRUD operations, product filtering, and search functionalities.

## Features
- **Login and Authentication**: Users can log in to the application and maintain an authenticated session.
- **View Products**: Browse a list of all available products.
- **Filter by Category**: Narrow down products by specific categories.
- **Search Products**: Search for products by name or description.
- **View Product Details**: See detailed information about a specific product.
- **Simulated CRUD Operations**: Create, update, and delete products with simulated responses.

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/bentayebdounia/product-store-web.git
   cd product-store
2. **Install Dependencies**
   ```bash
   npm install
3. ***Run the Development Server***
   ```bash
   npm run dev

  The application will be available at http://localhost:3000.
## Usage
### Login and authentication 
* Add username and password 
### Viewing Products
* Access the homepage to see a list of all products.
* Click on any product to view its details.
### Filtering by Category
* Use the category filter to display products within a selected category.
### Searching for Products
* Use the search bar to find products by entering keywords related to the product name or description.
### Product Details
* Click on a product to view more information, including its price, description, and category.
### CRUD Operations
- **Create**: Add a new product (response will simulate success but will not affect the actual database).
- **Update**: Edit an existing product (response will simulate success but will not affect the actual database).
- **Delete**: Remove a product (response will simulate success but will not affect the actual database).
## API Integration
The application interacts with the Fake Store API to simulate CRUD operations and fetch product data. Note that while the API responds with status 200 for create, update, and delete operations, no actual changes are made to the database.

-  Login

```javascript
fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
```

- Get All Products

```javascript
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(json => console.log(json));
```
- Filter Products by Category

```javascript
fetch(`https://fakestoreapi.com/products/category/${category}`)
  .then(res => res.json())
  .then(json => console.log(json));
```
- Search Products

  - Implemented client-side filtering based on the product list fetched from the API.
- View Product Details

```javascript
fetch(`https://fakestoreapi.com/products/${productId}`)
  .then(res => res.json())
  .then(json => console.log(json));
 ```
- Create Product

```javascript
fetch('https://fakestoreapi.com/products', {
    method: "POST",
    body: JSON.stringify(
        {
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        }
    )
})
  .then(res => res.json())
  .then(json => console.log(json));
```
- Update Product

```javascript
fetch('https://fakestoreapi.com/products/7', {
    method: "PUT",
    body: JSON.stringify(
        {
            title: 'updated product',
            price: 15,
            description: 'updated description',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        }
    )
})
  .then(res => res.json())
  .then(json => console.log(json));
```
- Delete Product

```javascript

fetch('https://fakestoreapi.com/products/7', {
    method: "DELETE"
})
  .then(res => res.json())
  .then(json => console.log(json));
```
## Technologies Used
- **Next.js**: Framework for server-rendered React applications.
- **Material-UI (MUI)**: React components for faster and easier web development.
- **Redux**: State management for predictable state container.
- **Fake Store API**: Mock API for simulating e-commerce functionalities.

