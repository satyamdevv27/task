# Scalable Web App with Authentication & Dashboard

This project is a full-stack web application built as part of a Frontend Developer internship assignment. The application demonstrates authentication, protected routes, and dashboard functionality integrated with a backend API.

The project focuses on building a scalable frontend architecture while integrating with a custom backend and database.

---

## 🚀 Features

### Authentication

* User registration
* User login
* JWT-based authentication
* Secure password hashing using bcrypt
* Persistent login using local storage
* Logout functionality

### Dashboard

* Protected dashboard route
* User-specific task management
* Create tasks
* View tasks
* Delete tasks
* Search/filter tasks

### Backend APIs

* User signup and login
* Task CRUD operations
* JWT middleware for route protection
* Input validation and error handling

### Security

* Password hashing
* JWT authentication middleware
* Protected API routes
* Validation for user inputs

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* React Router
* Tailwind CSS
* Fetch API

### Backend

* Node.js
* Express.js
* MongoDB with Mongoose
* JWT Authentication
* bcrypt for password hashing

---

## 📂 Project Structure

```
project-root/
│
├── client/   → React frontend
│
└── server/   → Express backend
```

### Frontend Structure

```
src/
 ├── components/
 ├── pages/
 ├── services/
 ├── context/
 └── App.jsx
```

### Backend Structure

```
server/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── middleware/
 ├── config/
 └── index.js
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone <repo-url>
cd project
```

---

### 2. Backend Setup

```bash
cd server
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

Backend runs on:

```
http://localhost:5000
```

---

## 📡 API Endpoints

### Authentication

```
POST /api/auth/register
POST /api/auth/login
```

### Tasks

```
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
```

All task routes require JWT authentication.

---

## 🧪 Usage Flow

1. Register user
2. Login
3. Access dashboard
4. Create tasks
5. Delete tasks
6. Logout

Dashboard is accessible only after login.

---

## 📈 Scalability & Production Plan

To scale this application for production:

* Deploy frontend and backend separately
* Use managed database service (MongoDB Atlas)
* Add caching layer (Redis)
* Implement rate limiting
* Add centralized logging
* Add role-based access control
* Add API versioning
* Use load balancers for traffic distribution

---

## ✅ Assignment Requirements Covered

✔ React frontend
✔ Responsive UI
✔ Authentication system
✔ Protected routes
✔ Backend integration
✔ CRUD operations
✔ Database connection
✔ Security practices
✔ Scalable architecture

---

## 👨‍💻 Author

Developed as part of Frontend Developer Internship assignment submission.




