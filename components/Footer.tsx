import getConfig from 'next/config';
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation('footer');

  const {
    publicRuntimeConfig: { version },
  } = getConfig();

  return (
    <footer>
      <div>&copy; 2018 - {new Date().getFullYear()}</div>
      <div>
        {t('version')}:{version}
      </div>
    </footer>
  );
};

export default Footer;
