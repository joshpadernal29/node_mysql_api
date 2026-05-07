
# Node_mysql_api

A robust REST API built with Node.js, Express, and Sequelize for handling user registration, email verification, and role-based authentication. and crud functions.

## 🛠️ Installation & Setup
1. Install Production Dependencies
Run the following command to install the core libraries:
```bash
npm install express cors body-parser cookie-parser bcryptjs jsonwebtoken mysql2 sequelize nodemailer joi swagger-ui-express yamljs express-jwt
```

2. Install Development Dependencies
Run this command to install TypeScript and type definitions:
```bash
npm install -D typescript ts-node nodemon @types/node @types/express @types/cors @types/cookie-parser @types/bcryptjs @types/jsonwebtoken @types/nodemailer @types/swagger-ui-express @types/yamljs
```

3. Initialize TypeScript
Create the tsconfig.json configuration file:
```bash
npx tsc --init
```

## ⚙️ Configuration
Update config.json in the root directory with your specific credentials:

1. MySQL: Host, User, Password, and Database name.

2. Email: Your Ethereal SMTP username and password.

## 🧪 Testing Endpoints (EchoAPI / Postman)
**Auth & Registration** 
1. **POST /accounts/register** - Create a new user.

2. **POST /accounts/authenticate** - Login to receive jwtToken and refreshToken.

3. **POST /accounts/revoke-token** - Revoke a refresh token (requires Bearer Token).

**Account Management**
1. **GET /accounts** - List all accounts (Admin only).
2. **GET /accounts/:id** - Get specific account details.
3. **PUT /accounts/:id** - Update account details (user or Admin).
## 📖 Important Note on Versioning
This project uses express-jwt v7+.
## 📄 Documentation
Access the interactive Swagger UI at:
```text
http://localhost:4000/api-docs
```
## Activity for Intprog Lab-6
For Lab 6 intprog
