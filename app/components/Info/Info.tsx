import { TypographyH2, TypographyH3, TypographyP, Divider } from '@/components';
import { useTranslation } from '@/i18n';

export const Info = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);

  return (
    <>
      <div className="mb-4 flex flex-col gap-2 md:flex-row">
        <div className="w-full rounded-md border p-4">
          <TypographyH2>{t('components.info.queue')}</TypographyH2>
          <TypographyP>{t('components.info.queueContent')}</TypographyP>
        </div>
        <div className="w-full rounded-md border p-4">
          <TypographyH2>{t('components.info.data')}</TypographyH2>
          <TypographyP>{t('components.info.content')}</TypographyP>
        </div>
      </div>
      <div className="text-right">
        <TypographyH3>
          {t('components.info.source')} {t('components.info.nfz')}
        </TypographyH3>
      </div>
    </>
  );
};
