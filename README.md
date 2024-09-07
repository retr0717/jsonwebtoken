# JSON Web Token (JWT) Implementation with Auth Middleware

This project is a backend implementation of JSON Web Tokens (JWT) for authentication. The server uses Express.js and Node.js to handle authentication and authorization through middleware. This project does not include a frontend—it's solely focused on the backend.

## Stack

- **Node.js**: JavaScript runtime for server-side programming.
- **Express.js**: Web framework for Node.js for building APIs.

## Features

- **JWT Authentication**: Securely authenticate users with JSON Web Tokens.
- **Auth Middleware**: Protect endpoints by verifying JWTs.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/retr0717/jsonwebtoken.git
   cd jsonwebtoken
   npm i

2. **Configure**
    ```bash
    create a .env file and create a JWT_SCERET= env variable
    (use a random long string or generate a cutom secret key)

3. **Start the Development Server**
    ```bash
    npm run dev

**Routes**
1. /signup
    ```bash
    {
      "email" : "user@mail.com",
      "password" : "password"
    }
    
3. /signin
    ```bash
    {
      "email" : "user@mail.com",
      "password" : "password"
    }

4. /auth
  ```bash
  set the request header
  token : your_jwt_token_here
