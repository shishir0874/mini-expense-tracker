import dbPromise from "../database/db.js";

export const getExpenses = async (req, res) => {
  const db = await dbPromise;

  const expenses = await db.all(
    "SELECT * FROM expenses ORDER BY id DESC"
  );

  res.json(expenses);
};

export const createExpense = async (req, res) => {
  const db = await dbPromise;

  const { amount, category, date, note } = req.body;

  const result = await db.run(
    `
    INSERT INTO expenses
    (amount, category, date, note)
    VALUES (?, ?, ?, ?)
    `,
    [amount, category, date, note]
  );

  res.status(201).json({
    id: result.lastID,
    amount,
    category,
    date,
    note,
  });
};
export const deleteExpense = async (req, res) => {
  const db = await dbPromise;

  const { id } = req.params;

  await db.run(
    "DELETE FROM expenses WHERE id = ?",
    [id]
  );

  res.json({
    message: "Expense deleted successfully",
  });
};
export const updateExpense = async (req, res) => {
  const db = await dbPromise;

  const { id } = req.params;

  const {
    amount,
    category,
    date,
    note,
  } = req.body;

  await db.run(
    `
    UPDATE expenses
    SET amount = ?,
        category = ?,
        date = ?,
        note = ?
    WHERE id = ?
    `,
    [
      amount,
      category,
      date,
      note,
      id,
    ]
  );

  res.json({
    id,
    amount,
    category,
    date,
    note,
  });
};