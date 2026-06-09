# Mini Expense Tracker

A full-stack expense tracking application built with React, Tailwind CSS, Node.js, Express, and SQLite.

The goal of this project is to provide a clean and intuitive way to track daily expenses, analyze spending patterns, and visualize financial data through a modern dashboard interface.

---

## Features

### Expense Management
- Add expenses with amount, category, date, and optional notes
- Edit existing expenses
- Delete expenses
- View all expenses in a structured table

### Filtering & Analysis
- Filter expenses by category
- Filter expenses by date range
- Monthly spending summary
- Highest single expense
- Category-wise spending breakdown

### Visualization
- Expense distribution chart
- Responsive dashboard layout

### Data Persistence
- SQLite database storage
- REST API powered by Express.js

---

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios
- Recharts

### Backend
- Node.js
- Express.js

### Database
- SQLite

---

## Project Structure

```text
mini-expense-tracker/

├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── services/
│   │   └── utils/
│
├── server/
│
├── README.md
└── .gitignore
```

---

## Current Progress

* [x] Project setup
* [x] React + Vite configuration
* [x] Tailwind CSS integration
* [x] Dashboard UI foundation
* [x] Summary Cards UI
* [x] Expense Form UI
* [x] Filters UI
* [x] Expense Table UI
* [x] Sample Expense Data Setup
* [x] Dynamic Expense Rendering
* [x] Add Expense functionality
* [x] Edit Expense functionality
* [x] Delete Expense functionality
* [ ] Filter logic implementation
* [x] Expense analytics
* [x] Charts and visualizations
* [ ] Backend API implementation
* [ ] SQLite integration
* [ ] CSV export

---

## Getting Started

### Frontend

```bash
cd client
npm install
npm run dev
```

The application will run on:

```text
http://localhost:5173
```

---

## Design Goals

This project focuses on:

- Clean architecture
- Reusable React components
- Scalable folder structure
- Responsive UI design
- Separation of frontend and backend concerns
- Maintainable code over unnecessary complexity

---

## Author

Shishir Sharma