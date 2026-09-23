const SidebarItem = ({ title, Icon, isActive, onClick }) => {
  return (
    <li className='sidebar__item'>
      <a
        href='#!'
        className={`sidebar__link ${isActive ? 'active' : ''}`}
        onClick={onClick}>
        {Icon ? (
          <Icon className='sidebar__icon' />
        ) : (
          <div className='sidebar__icon-placeholder' /> // заглушка для иконки
        )}
        <span className='sidebar__text'>{title}</span>
      </a>
    </li>
  );
};

export default SidebarItem;
