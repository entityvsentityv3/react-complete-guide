import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { date: new Date(2018, 1, 26), title: "Car Insurance", amount: 985 },
  { date: new Date(2020, 1, 24), title: "Wood Insurance", amount: 9.85 },
  { date: new Date(2021, 1, 23), title: "Truck Insurance", amount: 85 },
  { date: new Date(2022, 1, 22), title: "TV Insurance", amount: 95 },
  { date: new Date(2022, 1, 22), title: "Game Insurance", amount: 95 },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
