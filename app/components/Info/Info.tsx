import { TypographyH2, TypographyH3, TypographyP, Divider } from '@/components';
import { useTranslation } from '@/i18n';

export const Info = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);

  return (
    <div className="mt-20">
      <Divider />
      <TypographyH2>{t('info.queue')}</TypographyH2>
      <TypographyP>{t('info.queueContent')}</TypographyP>
      <Divider />
      <TypographyH2>{t('info.data')}</TypographyH2>
      <TypographyP>{t('info.content')}</TypographyP>
      <Divider />
      <TypographyH3>
        {t('info.source')} {t('info.nfz')}
      </TypographyH3>
    </div>
  );
};
