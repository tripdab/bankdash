import './Overview.scss';
import Cards from '../Cards/Cards';
import Transaction from '../Transaction/Transaction';
import Activity from '../Activity/Activity';
import Statistics from '../Statistics/Statistics';

const Overview = () => {
  return (
    <div className='overview'>
      <div className='container'>
        <div className='overview__cards-row'>
          <Cards />
          <Transaction />
        </div>

        <div className='overview__charts-row'>
          <Activity />
          <Statistics />
        </div>

        <div className='overview__charts-transfers'>
          <div className=''>Quick Transfer</div>
          <div className=''>Balance History</div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
