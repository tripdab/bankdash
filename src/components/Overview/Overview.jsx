import Balance from '../Balance/Balance';
import './Overview.scss';
// import Cards from '../Cards/Cards';
// import Transaction from '../Transaction/Transaction';
// import Activity from '../Activity/Activity';
// import Statistics from '../Statistics/Statistics';
import Transfer from '../Transfer/Transfer';

const Overview = () => {
  return (
    <div className='overview'>
      <div className='container'>
        <div className='overview__row overview__row-top'>
          {/* <Cards />
          <Transaction /> */}
        </div>

        <div className='overview__row overview__row-middle'>
          {/* <Activity />
          <Statistics /> */}
        </div>

        <div className='overview__row overview__row-bottom'>
          <Transfer />
          <Balance />
        </div>
      </div>
    </div>
  );
};

export default Overview;
