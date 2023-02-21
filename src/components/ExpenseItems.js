import "./ExpenseItems.css";

function ExpenseItem() {
  const Expensedate = new Date(2023, 2, 14);
  const Expensetitle = "Car Insurance";
  const Expenseprice = 269;
  const ExpenseLocation = "Bangalore";
  return (
    <div className="expense-item">
      <div>{Expensedate.toISOString()}</div>
      <div className="expense-item__description">
        <h2 className="expense-item h2">{Expensetitle}</h2>
        <h2 className="expense-item h2">{ExpenseLocation}</h2>

        <div className="expense-item__price">${Expenseprice}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
