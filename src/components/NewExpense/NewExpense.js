import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const expenseDataHandler = (expenseFormData) => {
    const expensedata = {
      ...expenseFormData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expensedata);
    console.log(expensedata);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onsaveExpenseData={expenseDataHandler} />
    </div>
  );
};

export default NewExpense;
