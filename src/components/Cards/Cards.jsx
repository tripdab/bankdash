import BankCard from '../BankCard/BankCard';
import './Cards.scss';

const Cards = () => {
  return (
    <div className='cards'>
      <div className='cards__header'>
        <h2 className='cards__title'>My Cards</h2>
        <button className='cards__btn'>See All</button>
      </div>
      <div className='cards__list'>
        <BankCard
          theme='dark'
          balance='$5,756'
          holder='Aleksei Danilov'
          validThru='12/30'
          number='3778 **** **** 1234'
        />
        <BankCard
          theme='light'
          balance='$5,756'
          holder='Aleksei Danilov'
          validThru='12/30'
          number='3778 **** **** 1234'
        />
      </div>
    </div>
  );
};

export default Cards;
