# UserManagement_REST_API 🚀

## Description 📝
**UserManagement_REST_API** is a RESTful API built with Node.js, Express, and MongoDB for managing user data. It currently includes endpoints for basic user operations such as retrieving all users and registering new users.

## Features ✨
- 🔍 **Retrieve All Users**: Allows you to fetch a list of all registered users.
- 📝 **Register New User**: Enables new users to register by providing essential information.

## Technologies 🛠️
- **Node.js** and **Express**: For server and routing.
- **MongoDB**: Database for storing user information.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
- **Express Validator**: Middleware for input validation.

## Endpoints 📌

| Method | Endpoint             | Description                          |
|--------|-----------------------|--------------------------------------|
| GET    | `/api/users`         | Retrieve a list of all users         |
| POST   | `/api/users/signup`  | Register a new user                  |

## User Data Model 👤
Each user has the following fields:

- **username**: String, required
- **email**: String, required
- **password**: String, required
- **address**: String, required
- **contactNumber**: String, required

## Validation Rules ✅
- **Email**: Must be a valid email format.
- **Username, Password, Address**: Cannot be empty.
- **Contact Number**: Must be at least 10 characters long.

## Setup Instructions ⚙️

### Prerequisites 📋
- **Node.js** and **npm** installed
- **MongoDB** installed locally or access to a MongoDB Atlas cluster

### Installation 📥
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/UserManagement_REST_API.git
   cd UserManagement_REST_API
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure MongoDB Connection**:
   - In `app.js`, update the MongoDB connection string with your own MongoDB URI:
     ```javascript
     mongoose.connect("your_mongodb_connection_string");
     ```

4. **Run the Server**:
   ```bash
   npm start
   ```
   The server will start on port 8080 by default.

### Testing the API
Use a tool like **Postman** to test the endpoints:

1. **Get All Users**:
   - Method: `GET`
   - URL: `http://localhost:8080/api/users`

2. **Register New User**:
   - Method: `POST`
   - URL: `http://localhost:8080/api/users/signup`
   - Body (JSON):
     ```json
     {
       "username": "TechGuru22",
       "email": "techguru22@example.com",
       "password": "securePass!123",
       "address": "123 Maple Ave, Springfield, IL 62704",
       "contactNumber": "5551234567"
     }
     ```

## License
This project is open-source and available under the [MIT License](LICENSE).
