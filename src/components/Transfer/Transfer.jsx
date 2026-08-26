import './Transfer.scss';

const Transfer = () => {
  return (
    <section className='transfer'>
      <h2 className='section-title'>Quick Transfer</h2>

      <div className='transfer__card widget-block'>
        {/* Slider */}
        <div className='transfer__slider slider'>
          {/* user card */}
          <div className='slider__item user-card'>
            <img
              src='../src/assets/images/user-01.webp'
              alt='User-image'
              className='user-card__img'
              width={70}
              height={70}
            />
            {/* Name */}
            <span className='user-card__name'>Livia Bator</span>
            {/* Role */}
            <span className='user-card__role'>CEO</span>
          </div>
          {/* Slider Button */}
          <button className='slider__btn' type='button'>
            button
          </button>
        </div>
        {/* Form */}
        <form className='transfer__form' action='#' method='POST'>
          <label htmlFor='amount-input' className='transfer__label'>
            Write Amount
          </label>
          <input
            className='transfer__input'
            type='number'
            id='amount-input'
            name='amount'
            placeholder='525.50'
            step='0.01'
            min='0.01'
            required
          />
          <button type='submit' className='transfer__btn'>
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Transfer;
