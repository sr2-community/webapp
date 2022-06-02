import type { NextPage } from 'next';
import getConfig from 'next/config';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Landing: NextPage = () => {
  const { t } = useTranslation('landing');

  const {
    publicRuntimeConfig: { version },
  } = getConfig();

  return (
    <>
      <h1>{t('welcome')}</h1>

      <footer>
        {t('version')}:{version}
      </footer>
    </>
  );
};

export default Landing;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['landing'])),
  },
});
