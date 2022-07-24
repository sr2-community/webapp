import { PropsWithChildren } from 'react';
import Head from 'next/head';

import Footer from './Footer';
import Navigation from './Navigation';

import styles from '../styles/Layout.module.scss';

interface Props {
  title?: string;
}

const Layout: React.FC<PropsWithChildren<Props>> = ({ children, title = '' }) => (
  <div className={styles.layout}>
    <Head>
      <title>{title}</title>
    </Head>
    <main className={styles.layout__content}>
      <Navigation />

      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
