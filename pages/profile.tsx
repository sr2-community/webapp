import { useTranslation } from 'react-i18next';
import { NextPage } from 'next';

import Layout from '../components/Layout';

const ProfilePage: NextPage = () => {
  const { t } = useTranslation('profilePage');

  return (
    <Layout>
      <h1>{t('profile')}</h1>
    </Layout>
  );
};

export default ProfilePage;
