import { useState } from 'react';
import './Header.scss';
import searchIcon from '../../assets/icons/search.svg';
import settingsBtn from '../../assets/icons/settings-btn.svg';
import notificationBtn from '../../assets/icons/notification-btn.svg';
import avatarImage from '../../assets/images/user-avatar.webp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__row'>
          {/*  */}
          <button
            type='button'
            className={`header__burger-btn ${isMenuOpen ? 'is-open' : ''}`}
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            onClick={toggleMenu}>
            <span
              className={`header__burger-icon ${isMenuOpen ? 'is-open' : ''}`}></span>
          </button>

          {/*  */}
          <div className='header__left'>
            <h1 className='header__title title'>Overview</h1>
          </div>
          <div className='header__right'>
            <div className='header__search-box'>
              <label htmlFor='search-field'>
                <img
                  src={searchIcon}
                  className='header__search-icon'
                  alt='Search icon'
                />
              </label>
              <input
                id='search-field'
                type='search'
                className='header__search-input'
                placeholder='Search for something'
              />
            </div>
            <a
              href='#Setting'
              className='header__btn header__btn--settings'>
              <img src={settingsBtn} alt='Settings icon' />
            </a>
            <button className='header__btn header__btn--notification'>
              <img src={notificationBtn} alt='Notification icon' />
            </button>
            <a href='#Accounts' className='header__user-link'>
              <img
                src={avatarImage}
                alt='User avatar'
                className='header__user-img'
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
