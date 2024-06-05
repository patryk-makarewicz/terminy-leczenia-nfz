import { lngProps } from '@/api/global.model';
import { Data } from '@/components/Data/Data';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/i18n';

const Home = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);

  return (
    <div className="my-12 flex-1">
      <h1>{t('appName')}</h1>
      <Button>Click me</Button>
      <Data />
    </div>
  );
};

export default Home;
