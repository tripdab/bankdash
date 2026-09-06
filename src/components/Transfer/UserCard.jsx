import './UserCard.scss';

const UserCard = ({ user, isActive, onClick }) => {
  return (
    <li className='slider__item user-card'>
      <a
        href='#!'
        className={`user-card__link ${isActive ? 'user-card__link--active' : ''}`}
        onClick={onClick}
        draggable='false'>
        <img
          src={user.avatar}
          alt={user.name}
          className='user-card__img'
          width={70}
          height={70}
          draggable='false'
        />
        {/* Name */}
        <span className='user-card__name'>{user.name}</span>
        {/* Role */}
        <span className='user-card__role'>{user.role}</span>
      </a>
    </li>
  );
};

export default UserCard;
