import { TypographyH2 } from '@/components/Typography';
import { useTranslation } from '@/i18n';

export const Info = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);

  return (
    <div className="my-5">
      <TypographyH2>{t('info.data')}</TypographyH2>
      <p>{t('info.content')}</p>
      <h3>
        {t('info.source')} {t('info.nfz')}
      </h3>
    </div>
  );
};
