import './App.scss';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='dashboard-container'>
      <Sidebar />
      <div className='dashboard-body'>
        <Header />
        <main>
          <Cards />
        </main>
      </div>
    </div>
  );
}

export default App;
