import React from "react";
import { API_URL } from "../api";

function ExpenseList({ expenses, refresh }) {
  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    refresh();
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Your Expenses</h2>
      {expenses.map((e) => (
        <div key={e.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}>
          <p><strong>{e.title}</strong></p>
          <p>Rs. {e.amount}</p>
          <p>{e.date}</p>
          <p>{e.category}</p>
          <button onClick={() => handleDelete(e.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
