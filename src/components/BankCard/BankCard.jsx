import сhipLight from '/src/assets/icons/chip-light.svg';
import chipDark from '/src/assets/icons/chip-dark.svg';
import cardLogoLight from '/src/assets/icons/card-logo-light.svg';
import cardLogoDark from '/src/assets/icons/card-logo-dark.svg';
import './BankCard.scss';

const BankCard = ({
  theme = 'dark',
  balance,
  holder,
  validThru,
  number,
}) => {
  const isDark = theme === 'dark';
  const currentChip = isDark ? сhipLight : chipDark;
  const currentLogo = isDark ? cardLogoLight : cardLogoDark;

  return (
    <div className={`bank-card bank-card--${theme}`}>
      <div className='bank-card__top'>
        <div className='bank-card__balance'>
          <span className='bank-card__label'>Balance</span>
          <p className='bank-card__balance-value'>{balance}</p>
        </div>
        <div className='bank-card__chip'>
          <img src={currentChip} alt='Card chip icon' />
        </div>
      </div>
      <div className='bank-card__middle'>
        <div className='bank-card__info'>
          <div className='bank-card__info-box'>
            <span className='bank-card__label bank-card__label--info'>
              CARD HOLDER
            </span>
            <p className='bank-card__info-value'>{holder}</p>
          </div>

          <div className='bank-card__info-box'>
            <span className='bank-card__label bank-card__label--info'>
              VALID THRU
            </span>
            <p className='bank-card__info-value'>{validThru}</p>
          </div>
        </div>
      </div>
      <div className='bank-card__bottom'>
        <span className='bank-card__number'>{number}</span>
        <img src={currentLogo} alt='Card logo icon' />
      </div>
    </div>
  );
};

export default BankCard;
