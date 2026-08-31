import './UserCard.scss';

const UserCard = ({ user, isActive, onClick }) => {
  return (
    <a href='#!'>
      <li
        href='#'
        className={`slider__item user-card ${isActive ? 'user-card--active' : ''}`}
        onClick={onClick}>
        <img
          src={user.avatar}
          alt={user.name}
          className='user-card__img'
          width={70}
          height={70}
        />
        {/* Name */}
        <span className='user-card__name'>{user.name}</span>
        {/* Role */}
        <span className='user-card__role'>{user.role}</span>
      </li>
    </a>
  );
};

export default UserCard;
