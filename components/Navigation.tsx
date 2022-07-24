import Link from 'next/link';

import styles from '../styles/Navigation.module.scss';

interface MenuItemInterface {
  label: string;
  url: string;
}

const Navigation = () => {
  const menuItems: MenuItemInterface[] = [
    {
      label: 'mainpage',
      url: '/',
    },
    {
      label: 'claims',
      url: '/claims',
    },
    {
      label: 'profile',
      url: '/profile',
    },
  ];

  const menuItem: React.FC<MenuItemInterface> = ({ label, url }) => (
    <div className={styles.navigation__item}>
      <Link href={url}>{label}</Link>
    </div>
  );

  return <nav className={styles.navigation}>{menuItems.map(item => menuItem(item))}</nav>;
};

export default Navigation;
