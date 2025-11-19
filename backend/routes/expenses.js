import express from "express";
import db from "../db.js";

const router = express.Router();

// Get all expenses
router.get("/", (req, res) => {
  db.query("SELECT * FROM expenses ORDER BY date DESC", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// Add a new expense
router.post("/", (req, res) => {
  const { title, amount, date, category } = req.body;
  const sql = "INSERT INTO expenses (title, amount, date, category) VALUES (?, ?, ?, ?)";

  db.query(sql, [title, amount, date, category], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Expense Added", id: result.insertId });
  });
});

// Delete expense
router.delete("/:id", (req, res) => {
  db.query("DELETE FROM expenses WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Expense Deleted" });
  });
});

export default router;
