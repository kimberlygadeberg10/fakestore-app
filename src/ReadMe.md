FakeStore E-Commerce App
Project Overview
FakeStore E-Commerce App is a React-based front-end application that simulates an online store experience. The application integrates with the FakeStoreAPI to perform full CRUD operations, allowing users to view, create, update, and delete products.
This project demonstrates modern React development practices including routing, state management, API integration, and responsive design.

Features
View all products from the API


View detailed information for a single product


Add a new product


Edit an existing product


Delete a product with confirmation modal


Loading indicators during API calls


Error handling for failed requests


Responsive navigation bar



Technologies Used
React


React Router DOM


Axios


React Bootstrap


Vite


FakeStoreAPI



Application Pages
Home Page
Welcome message


Navigation button to products page


Products Page
Fetches and displays all products


Shows product image, title, and price


Includes "View Details" button for each product


Displays loading spinner and error messages when necessary


Product Details Page
Displays full product information


Includes Edit and Delete buttons


Confirmation modal before deletion


Redirects user after successful deletion


Add Product Page
Form to create a new product


Sends POST request to API


Displays success message upon submission


Edit Product Page
Pre-filled form with existing product data


Sends PUT request to update product


Displays success message upon submission



How to Run Locally
Clone the repository:


git clone <your-repository-url>

Navigate into the project folder:


cd fakestore-app

Install dependencies:


npm install

Start the development server:


npm run dev

Open the local development URL shown in the terminal.



API Information
This project uses FakeStoreAPI for product data. The API simulates backend functionality. Some POST, PUT, and DELETE requests may not permanently persist changes because it is a mock API.

Project Purpose
This application was built to demonstrate:
Component-based architecture in React


Client-side routing


State management with useState


Data fetching with useEffect


RESTful API interaction


Responsive UI design using Bootstrap



Future Improvements
Add authentication


Add cart functionality


Improve styling with custom CSS


Add search and filtering features



Author
Kimberly Gadeberg
