import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/card";
import "./ExpenseItems.css";

const ExpenseItem = (props) => {
  const [title, settitle] = useState(props.title);
  const clickHandler = () => {
    settitle("updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2 className="expense-item h2">{title}</h2>

        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>click</button>
    </Card>
  );
};

export default ExpenseItem;
