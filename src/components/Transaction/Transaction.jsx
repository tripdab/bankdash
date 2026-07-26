import './Transaction.scss';
import cradsIcon from '/src/assets/icons/cards.svg';
import payPalIcon from '/src/assets/icons/paypal.svg';
import dollarIcon from '/src/assets/icons/dollar.svg';

const TRANSACTIONS_DATA = [
  {
    id: 1,
    icon: cradsIcon,
    iconColor: 'yellow',
    name: 'Deposit from my Card',
    date: '28 June 2026',
    dateTime: '2026-06-28',
    value: '-$850',
    type: 'expense',
  },

  {
    id: 2,
    icon: payPalIcon,
    iconColor: 'blue',
    name: 'Deposit Paypal',
    date: '25 June 2026',
    dateTime: '2026-06-25',
    value: '-$2,500',
    type: 'income',
  },

  {
    id: 3,
    icon: dollarIcon,
    iconColor: 'green',
    name: 'Ivan Ivanov',
    date: '21 June 2026',
    dateTime: '2026-06-21',
    value: '-$5,400',
    type: 'income',
  },

  //   id,
  //   icon,
  //   iconColor,
  //   name,
  //   date,
  //   dateTime,
  //   value,
  //   type,
];

const Transaction = () => {
  return (
    <section className='transaction'>
      <h2 className='section-title'>Recent Transaction</h2>
      <div className='transaction__card widget-block'>
        <ul className='transaction__list'>
          {TRANSACTIONS_DATA.map((item) => (
            <li className='transaction__item' key={item.id}>
              <div
                className={`transaction__icon-box transaction__icon-box--${item.iconColor}`}>
                <img src={item.icon} alt='Transaction icon' />
              </div>
              <div className='transaction__info'>
                <span className='transaction__name'>{item.name}</span>
                <time
                  dateTime={item.dateTime}
                  className='transaction__date'>
                  {item.date}
                </time>
              </div>
              <span
                className={`transaction__value transaction__value--${item.type}`}>
                {item.value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Transaction;
