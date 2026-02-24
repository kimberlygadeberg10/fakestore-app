# FakeStore E-Commerce App

## Project Overview
This project is a React-based E-Commerce application that interacts with FakeStoreAPI. Users can view, add, edit, and delete products.

Note: FakeStoreAPI is a mock API. POST, PUT, and DELETE requests return success responses, but changes do not persist permanently.

---

## Technologies Used
- React
- React Router DOM
- Axios
- React Bootstrap
- FakeStoreAPI

---

## Features

- Home page with navigation
- Product listing page (GET request)
- Product details page
- Add product (POST request)
- Edit product (PUT request)
- Delete product with confirmation modal (DELETE request)
- Loading states and error handling
- Fully responsive using React Bootstrap

---

## Installation

```bash
npx create-vite fakestore-app --template react
cd fakestore-app
npm install
npm install react-router-dom axios react-bootstrap bootstrap
npm run dev