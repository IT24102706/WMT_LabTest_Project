# Item Manager MERN Application - Enhancement and Deployment

A full-stack MERN (MongoDB, Express, React, Node.js) application for managing inventory items with dynamic discount calculation and responsive UI.

## Features
- **Item Management**: Full CRUD capabilities (Create, Read, Update, Delete)
- **Discount Percentage**: Add and update discount percentages with automatic discounted price calculations
- **Dynamic UI**: Responsive item grid with discount badges, pricing breakdowns, and clean form validation
- **RESTful API**: Node/Express backend connected to MongoDB Atlas

## Project Structure
```
WMT_LabTest_Project/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Quick Start

### 1. Backend Setup
```bash
cd backend
npm install
# Configure .env with your MONGO_URI and PORT
npm run dev
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.
