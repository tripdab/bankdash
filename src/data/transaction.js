import cradsIcon from '/src/assets/icons/cards.svg';
import payPalIcon from '/src/assets/icons/paypal.svg';
import dollarIcon from '/src/assets/icons/dollar.svg';

export const TRANSACTIONS_DATA = [
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
];
