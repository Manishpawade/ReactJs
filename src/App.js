
import Expense from './components/Expense';


function App() {

  const expenses = [
    {
      id: 'e1',
      title:'New Mobile',
      amount: 339,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 499,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 299,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Laptop',
      amount: 999,
      date: new Date(2021, 9, 12),
    },
  ];

  return (
    <div className="container">
      <h1 style={{ color: "red", textAlign: "center", fontWeight: "700", padding: "20px" }}>Company Item List</h1>


      <Expense title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date} >
        </Expense>

      <Expense title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}> 
        </Expense>

      <Expense title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}>
        </Expense>

      <Expense title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}>
        </Expense>




    </div>
  );
}

export default App;
