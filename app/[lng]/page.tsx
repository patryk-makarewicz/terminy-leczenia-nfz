import { lngProps } from '@/api/global.model';
import { SearchTerm } from '@/components/SearchTerm';
import { useTranslation } from '@/i18n';

const Home = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);

  return (
    <div className="my-12 flex-1">
      <SearchTerm />
    </div>
  );
};

export default Home;
