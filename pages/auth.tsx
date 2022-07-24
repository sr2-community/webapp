import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';

import Layout from '../components/Layout';

const Auth: NextPage = () => {
  const { t } = useTranslation('auth');

  return (
    <Layout>
      <h1>{t('auth')}</h1>
    </Layout>
  );
};

export default Auth;
