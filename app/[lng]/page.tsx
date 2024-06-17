import { lngProps } from '@/api/global.model';
import { SearchTerm } from '@/components/SearchTerm';
import { useTranslation } from '@/i18n';

const Home = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);

  return (
    <div className="my-12 flex-1">
      <h1 className="mb-4 text-xl font-semibold">{t('appName')}</h1>
      <SearchTerm />
    </div>
  );
};

export default Home;
