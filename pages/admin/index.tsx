import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';

const AdminIndex: NextPage = () => {
  const { t } = useTranslation('adminIndex');

  return (
    <>
      <h1>{t('admin')}</h1>
    </>
  );
};

export default AdminIndex;
