import express from "express";
import cors from "cors";
import expensesRoute from "./routes/expenses.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/expenses", expensesRoute);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
