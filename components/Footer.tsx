import getConfig from 'next/config';
import { useTranslation } from 'next-i18next';

import styles from '../styles/Footer.module.scss';

const Footer = () => {
  const { t } = useTranslation('footer');

  const {
    publicRuntimeConfig: { version },
  } = getConfig();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__col}>&copy; 2018 - {new Date().getFullYear()}</div>
      <div className={styles.footer__col}>
        {t('version')}: {version}
      </div>
    </footer>
  );
};

export default Footer;
