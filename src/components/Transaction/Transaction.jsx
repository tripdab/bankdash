import './Transaction.scss';
import { TRANSACTIONS_DATA } from '../../data/transaction';

const Transaction = () => {
  return (
    <section className='transaction'>
      <h2 className='section-title'>Recent Transaction</h2>
      <div className='transaction__card widget-block'>
        <ul className='transaction__list'>
          {TRANSACTIONS_DATA.map(
            ({
              id,
              icon,
              iconColor,
              name,
              date,
              dateTime,
              value,
              type,
            }) => (
              <li className='transaction__item' key={id}>
                <div
                  className={`transaction__icon-box transaction__icon-box--${iconColor}`}>
                  <img src={icon} alt='Transaction icon' />
                </div>
                <div className='transaction__info'>
                  <span className='transaction__name'>{name}</span>
                  <time
                    dateTime={dateTime}
                    className='transaction__date'>
                    {date}
                  </time>
                </div>
                <span
                  className={`transaction__value transaction__value--${type}`}>
                  {value}
                </span>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
};

export default Transaction;
