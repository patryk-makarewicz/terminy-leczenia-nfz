import { lngProps } from '@/api/global.model';
import { useTranslation } from '@/i18n';

import { Button } from '../../components/ui/button';

const Home = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);

  return (
    <div className="my-12 flex-1">
      <h1>{t('appName')}</h1>
      <Button>Click me</Button>
    </div>
  );
};

export default Home;
