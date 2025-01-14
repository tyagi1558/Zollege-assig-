# Zollege Project

## Description
Zollege is a platform designed for managing users, referrals, earnings, transactions, and more. The application includes features such as user registration, referral management, earnings calculation, and reporting. This project is built using Node.js, MongoDB, and Mongoose.

## Features
- User registration and management
- Referral program to track direct and indirect earnings
- Earnings report generation
- Transaction tracking and management

## Technologies Used
- **Node.js** - Backend
- **MongoDB** - Database
- **Express.js** - Web framework
- **Mongoose** - MongoDB object modeling for Node.js

## Setup Instructions

### 1. Clone the repository
      git clone https://github.com/tyagi1558/Zollege-assig-.git
### 2. Navigate to the project directory: 
      cd Zollege-assig-
      npm install
### 3.Install the necessary dependencies using npm:
      npm install

**Set up environment variables** : Create a .env file in the root directory and add the following variables:
  MONGO_URI=your_mongodb_connection_string

### 4. Run the application
      npm run dev
## API Endpoints
- **POST /referral/register** - Register a new user.
   ```bash
    if it's parent User
    http://localhost:3000/api/referral/register
    {
    "name": "Anmol Test"
    }
    If it's child User 
   {
    "name": "Anmol Test 10",
    "parentId": "ParentUserId"
    }

- **DELETE /user/:userId** - Delete a user by ID.
   ```bash
    if it's parent User
     http://localhost:3000/api/referral/user/UserId


- **GET /report/earnings/:userId** - Get earnings report for a specific user
  ```bash
   http://localhost:3000/api/report/earnings/USerId
- **GET /report/distribution/:userId** - Get earnings distribution for a specific user
  ```bash 
   http://localhost:3000/api/report/distribution/UserID
- **POST /transaction** - Get Transaction 
    ```bash
       http://localhost:3000/api/transaction/transaction
 **Request Body**
    ```bash 
          {
            "userId": "RederUserId",
            "amount": 1500
           }
- **GET /earnings** - Get Earnings By UserId 
    ```bash
       http://localhost:3000/api/earnings/earnings/UserId

