import './Overview.scss';
import Cards from '../Cards/Cards';
import Transaction from '../Transaction/Transaction';

const Overview = () => {
  return (
    <div className='overview'>
      <div className='overview__cards-row'>
        <Cards />
        <Transaction />
      </div>

      <div className='overview__charts-row'>
        <div className=''>Weekly Activity</div>
        <div className=''>Expense Statistics</div>
      </div>

      <div className='overview__charts-transfers'>
        <div className=''>Quick Transfer</div>
        <div className=''>Balance History</div>
      </div>
    </div>
  );
};

export default Overview;
