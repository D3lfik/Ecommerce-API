
# Ecommerce API

This repository contains an Ecommerce API built by Apurv Nandgaonkar with Node.js, Express.js, MongoDB, and Mongoose. The API provides functionalities to manage products for an Ecommerce application.

## Prerequisites

Before running the API, make sure you have the following installed on your system:

- Node.js
- MongoDB

## Installation

1. Clone the repository:

```bash
git clone <repository_url>
cd EcommerceApi
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add the following environment variables:

```plaintext
MONGODB_URI=your_mongodb_connection_string
PORT=3000 (or any other preferred port number)
```

## Running the API

To start the server, run the following command:

```bash
npm start
```

The API will start running on the specified port, and you should see a message indicating that the server is up and running.

## Project Structure

The project follows a specific structure to organize the codebase:

```
├── index.js         # Main entry point of the application
├── config           # Configuration folder
│   └── mongoose.js  # Mongoose setup and configuration
├── controllers      # Controllers folder
│   └── productController.js  # Controller for product-related operations
├── models           # Models folder
│   └── productModel.js  # Mongoose model for Product
├── routes           # Routes folder
│   └── product.js   # Express routes for handling product-related API endpoints
├── .env             # Environment variables
├── .gitignore       # Git ignore file
├── package.json     # Package information and dependencies
├── README.md        # Project documentation
└── ...              # Other files and directories
```

## API Endpoints

The API provides the following endpoints for managing products:

- `POST /api/products` - Create a new product
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a specific product by ID
- `PUT /api/products/:id` - Update a specific product by ID
- `DELETE /api/products/:id` - Delete a specific product by ID

## Contribution

If you wish to contribute to this project, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for using the Ecommerce API developed by Apurv Nandgaonkar. If you have any questions or need further assistance, please don't hesitate to contact us. Happy coding!