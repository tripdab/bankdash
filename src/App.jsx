import './App.scss';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Transaction from './components/Transaction/Transaction';

function App() {
  return (
    <div className='dashboard-container'>
      <Sidebar />
      <div className='dashboard-body'>
        <Header />
        <main className='main'>
          <div className='container'>
            <Cards />
            <Transaction />
            <div className=''>Weekly Activity</div>
            <div className=''>Expense Statistics</div>
            <div className=''>Quick Transfer</div>
            <div className=''>Balance History</div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
