
import React, {useState} from 'react'
import Expenses from './components/Expenses/Expenses'
import ExpenseForm from './components/NewExpense/NewExpense'

const DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]

const App=() =>{

  const [expense, setExpense]=useState(DUMMY_EXPENSE)


  const addExpenseHandler=(expenseData)=>{
    //console.log(expenseData, "in app.js")
    setExpense(prevExpense=>{
      return[expenseData, ...prevExpense]
    })

  }
  return (
    <div className="container">
      <div >
      <h1 style={{ color: "red", textAlign: "center", fontWeight: "700", padding: "20px" }}>Company Item List</h1>
      </div>
      <ExpenseForm onAddExpense={addExpenseHandler}/>
      <Expenses items={expense} />
    </div>
  )
}

export default App


