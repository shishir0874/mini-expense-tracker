import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbPromise from "./database/db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const initializeDatabase = async () => {
  const db = await dbPromise;

  await db.exec(`
    CREATE TABLE IF NOT EXISTS expenses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      amount REAL NOT NULL,
      category TEXT NOT NULL,
      date TEXT NOT NULL,
      note TEXT
    )
  `);

  console.log("Database connected");
};

initializeDatabase();

app.get("/", (req, res) => {
  res.json({
    message: "Mini Expense Tracker API Running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});