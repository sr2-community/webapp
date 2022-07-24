import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from '../components/Layout';

const Landing: NextPage = () => {
  const { t } = useTranslation('landing');

  return (
    <Layout>
      <h1>{t('welcome')}</h1>
    </Layout>
  );
};

export default Landing;
