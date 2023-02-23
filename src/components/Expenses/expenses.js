import React, { useState } from "react";

import Card from "../UI/card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
import "./expenses.css";
const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");
  const filterChangeHandler = (selectedyear) => {
    setfilteredYear(selectedyear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          filterselect={filterChangeHandler}
        />
        <ExpenseChart expense={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </li>
  );
};
export default Expenses;
