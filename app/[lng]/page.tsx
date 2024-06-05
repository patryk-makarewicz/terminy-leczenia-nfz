import { lngModel } from '@/app/api/global.model';
import { useTranslation } from '@/app/i18n';
import { Button } from '@/components/ui/button';

const Home = async ({ params: { lng } }: lngModel) => {
  const { t } = await useTranslation(lng);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="my-12">
        <h1>{t('appName')}</h1>
        <Button>Click me</Button>
      </div>
    </main>
  );
};

export default Home;
