import { TypographyH2, TypographyH3, TypographyP, Divider } from '@/components';
import { useTranslation } from '@/i18n';

export const Info = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);

  return (
    <div className="mt-20">
      <Divider />
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="w-full rounded-md border p-4">
          <TypographyH2>{t('info.queue')}</TypographyH2>
          <TypographyP>{t('info.queueContent')}</TypographyP>
        </div>
        <div className="w-full rounded-md border p-4">
          <TypographyH2>{t('info.data')}</TypographyH2>
          <TypographyP>{t('info.content')}</TypographyP>
        </div>
      </div>
      <Divider />
      <div className="text-right">
        <TypographyH3>
          {t('info.source')} {t('info.nfz')}
        </TypographyH3>
      </div>
    </div>
  );
};
