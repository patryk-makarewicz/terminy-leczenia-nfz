import { Lng } from '@/api/global.model';
import { useTranslation } from '@/i18n';

type FooterProps = {
  lng: Lng;
};

export const Footer = async ({ lng }: FooterProps) => {
  const { t } = await useTranslation(lng);
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="w-full border-t bg-primary text-white">
      <div className="mx-auto flex items-center justify-center px-2.5 py-3">
        <p className="text-center text-xs" data-testid="copyright">
          {t('footer.copyright', { year })}
        </p>
      </div>
    </footer>
  );
};
