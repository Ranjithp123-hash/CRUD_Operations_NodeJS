# CRUD_Operations


City Management API 

The City Management API is a Node.js project that provides a set of RESTful APIs to manage a collection of cities. The API allows you to perform CRUD operations (Create, Read, Update, Delete) on city data, with features like pagination, filtering, sorting, searching, and field projection.



Features:

Add City: Create a new city with unique city name validation.
Update City: Update details of an existing city.
Delete City: Remove a city from the collection.
Get Cities: Retrieve a list of cities with support for pagination, filtering, sorting, searching, and projection.


Technologies Used:

Node.js: JavaScript runtime environment.
Express.js: Web framework for Node.js.
MongoDB: NoSQL database for storing city data.
Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.
Postman: API testing tool.
dotenv: Module to manage environment variables.



Project Structure 


city-api/
│
├── controllers/
│   └── cityController.js      # Controller logic for city operations
│
├── models/
│   └── City.js                # Mongoose model for City
│
├── routes/
│   └── cityRoutes.js          # Route definitions for city APIs
│
├── .env                       # Environment variables (e.g., MongoDB URI)
├── index.js                   # Entry point of the application
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation


