import React, { useState } from "react";
import { API_URL } from "../api";

function AddExpense({ refresh }) {
  const [input, setInput] = useState({
    title: "",
    amount: "",
    date: "",
    category: ""
  });

  const handleAdd = async () => {
    // Simple validation: ensure amount is a number
    if(!input.title || !input.amount || !input.date || !input.category){
      alert("Please fill all fields!");
      return;
    }

    if(isNaN(input.amount)){
      alert("Amount must be a number!");
      return;
    }

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });

    // Reset fields
    setInput({ title: "", amount: "", date: "", category: "" });
    refresh();
  };

  return (
    <div>
      <input 
        placeholder="Title"
        value={input.title}
        onChange={(e) => setInput({ ...input, title: e.target.value })}
      />
      <input 
        type="text"  /* changed from number to text */
        placeholder="Amount"
        value={input.amount}
        onChange={(e) => setInput({ ...input, amount: e.target.value })}
      />
      <input 
        type="date"
        value={input.date}
        onChange={(e) => setInput({ ...input, date: e.target.value })}
      />
      <input 
        placeholder="Category"
        value={input.category}
        onChange={(e) => setInput({ ...input, category: e.target.value })}
      />
      <button className="add" onClick={handleAdd}>Add Expense</button>
    </div>
  );
}

export default AddExpense;
