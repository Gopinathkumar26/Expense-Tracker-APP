import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const[filteredYear, setFilteredYear] = useState('2020')
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  // let expensesContent = <p>No Expense Found</p>;
  // if(filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => 
  //   <ExpenseItem 
  //     key={expense.id}
  //     title={expense.title}
  //     amount={expense.amount}
  //     date={expense.date}/>)
  // }

  return (
    <div className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {/* {filteredExpenses.length !== 0 ? 
       (filteredExpenses.map((expense) => 
        <ExpenseItem 
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}/>)) : (<p>No Expenses Found</p>)} */}
      {/* {filteredExpenses.length === 0 &&  <p>No Expenses Found</p>}
       {filteredExpenses.length > 0 && filteredExpenses.map((expense) => 
        <ExpenseItem 
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}/>)} */}
          {/* {expensesContent} */}
          <ExpensesChart expenses={filteredExpenses}/>
          <ExpensesList items={filteredExpenses}/>
          {/* if id does not exist
      {filteredExpenses.map((expense, index) => 
        <ExpenseItem 
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}/>)} */}
    </div>
  )
}

export default Expenses;