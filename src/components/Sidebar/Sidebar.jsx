import { useState } from 'react';
import './Sidebar.scss';
import logoIcon from '../../assets/logo.png';
import SidebarItem from '../SidebarItem/SidebarItem';
import sidebarData from '../../data/sidebarItemsData.json';

// Icons
import HomeIcon from '../../assets/icons/home.svg?react';
import TransactionsIcon from '../../assets/icons/transactions.svg?react';
import AccountsIcon from '../../assets/icons/accounts.svg?react';
import InvestmentsIcon from '../../assets/icons/investments.svg?react';
import CreditIcon from '../../assets/icons/credit-cards.svg?react';
import LoansIcon from '../../assets/icons/loans.svg?react';
import ServicesIcon from '../../assets/icons/service.svg?react';
import PrivilegesIcon from '../../assets/icons/privileges.svg?react';
import SettingIcon from '../../assets/icons/setting.svg?react';

const iconMap = {
  home: HomeIcon,
  transactions: TransactionsIcon,
  accounts: AccountsIcon,
  investments: InvestmentsIcon,
  credit: CreditIcon,
  loans: LoansIcon,
  services: ServicesIcon,
  privileges: PrivilegesIcon,
  setting: SettingIcon,
};

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <aside className='sidebar'>
      <div className='sidebar__logo'>
        <a href='#!'>
          <img src={logoIcon} alt='Bank Dash Logo' />
        </a>
      </div>
      <ul className='sidebar__list'>
        {sidebarData.map((item) => {
          const IconComponent = iconMap[item.img];

          return (
            <SidebarItem
              key={item.id}
              title={item.title}
              id={item.id}
              Icon={IconComponent}
              isActive={activeTab === item.id}
              onClick={() => setActiveTab(item.id)}
            />
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
