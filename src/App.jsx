import './App.scss';
import Header from './components/Header/Header';
import Overview from './components/Overview/Overview';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='dashboard-container'>
      <Sidebar />
      <div className='dashboard-body'>
        <Header />
        <main className='main'>
          <div className='container'>
            <Overview />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
