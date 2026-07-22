import BankCard from '../BankCard/BankCard';
import './Cards.scss';

const Cards = () => {
  return (
    <div className='cards'>
      <div className='cards__header'>
        <h2 className='cards__title'>My Cards</h2>
        <button className='cards__btn'>See All</button>
      </div>
      <div className='cards__wrapper'>
        <BankCard />
        <BankCard />
      </div>
    </div>
  );
};

export default Cards;
