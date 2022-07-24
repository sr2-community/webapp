import { useTranslation } from 'react-i18next';
import { NextPage } from 'next';

import Layout from '../../components/Layout';

const ClaimsIndex: NextPage = () => {
  const { t } = useTranslation('claimsIndex');

  return (
    <Layout>
      <h1>{t('claims')}</h1>
    </Layout>
  );
};

export default ClaimsIndex;
