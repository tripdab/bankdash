import cardChip from '/src/assets/icons/chip_card.svg';
import masterCardIcon from '/src/assets/icons/master-card.svg';
import './BankCard.scss';

const BankCard = () => {
  return (
    <div className='bank-card'>
      <div className='bank-card__top'>
        <div className='bank-card__balance'>
          <span className='bank-card__label'>Balance</span>
          <p className='bank-card__balance-value'>$5,756</p>
        </div>
        <div className='bank-card__chip'>
          <img src={cardChip} alt='Card chip icon' />
        </div>
      </div>
      <div className='bank-card__middle'>
        <div className='bank-card__info'>
          <div className='bank-card__info-box'>
            <span className='bank-card__label bank-card__label--info'>
              CARD HOLDER
            </span>
            <p className='bank-card__info-value'>Eddy Cusuma</p>
          </div>

          <div className='bank-card__info-box'>
            <span className='bank-card__label bank-card__label--info'>
              VALID THRU
            </span>
            <p className='bank-card__info-value'>12/22</p>
          </div>
        </div>
      </div>
      <div className='bank-card__bottom'>
        <span className='bank-card__number'>3778 **** **** 1234</span>
        <img src={masterCardIcon} alt='Master-card icon' />
      </div>
    </div>
  );
};

export default BankCard;
