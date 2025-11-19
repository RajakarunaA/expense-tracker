import React, { useEffect, useState } from "react";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import { API_URL } from "./api";
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  const getExpenses = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setExpenses(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <div className="container">
      <h1>Personalized Expense Tracker</h1>
      <AddExpense refresh={getExpenses} />
      <ExpenseList expenses={expenses} refresh={getExpenses} />
    </div>
  );
}

export default App;
