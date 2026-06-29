# 🔐 Authentication System (Login & Signup)

A full-stack user authentication system built using the **MERN Stack** that provides secure user registration and login functionality using JWT authentication.

---

## 🚀 Features

* ✅ User Registration (Signup)
* ✅ User Login
* ✅ Password Hashing with bcrypt
* ✅ JWT Authentication
* ✅ Protected Routes
* ✅ User Context Management
* ✅ React Router Navigation
* ✅ Toast Notifications
* ✅ Axios API Integration
* ✅ Responsive UI

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* React Hot Toast
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcryptjs
* dotenv
* cookie-parser
* cors

---

## 📂 Project Structure

```
UC_Task1/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/UC_Task1.git
```

### 2. Navigate to the Project

```bash
cd UC_Task1
```

### 3. Install Frontend Dependencies

```bash
cd client
npm install
```

### 4. Install Backend Dependencies

```bash
cd ../server
npm install
```

---

## ▶️ Run the Project

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm run dev
```

Frontend:

```
http://localhost:5173
```

Backend:

```
http://localhost:5000
```

---

## 🔐 Authentication Flow

1. User registers with email and password.
2. Password is securely hashed using **bcrypt**.
3. User logs in with valid credentials.
4. Server verifies credentials.
5. JWT token is generated.
6. Token is stored securely.
7. Protected routes verify authentication before granting access.

---

## 📌 API Endpoints

### Register

```
POST /register
```

Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

---

### Login

```
POST /login
```

Request Body

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

---

### Logout

```
GET /logout
```

---

## 🔒 Security Features

* Password hashing using bcrypt
* JWT-based authentication
* Protected routes
* Input validation
* Secure API communication

---

## 📸 Screenshots

Add screenshots of:

* Home Page
* Login Page
* Signup Page
* Dashboard

---

## 📖 Future Improvements

* Forgot Password
* Reset Password via Email
* Email Verification
* Google OAuth Login
* User Profile Page
* Role-Based Authentication
* Refresh Tokens

---

## 👨‍💻 Author

**Nilish Shah**

GitHub: https://github.com/nilish2006

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.
