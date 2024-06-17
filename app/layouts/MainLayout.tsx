import Image from 'next/image';
import Link from 'next/link';

import { Lng } from '@/api/global.model';
import { Header, Footer } from '@/components';
import { useTranslation } from '@/i18n';

import Logo from '../assets/makaDev.png';

type MainLayoutProps = {
  children: React.ReactNode;
  lng: Lng;
};

const MainLayout = async ({ children, lng }: MainLayoutProps) => {
  const { t } = await useTranslation(lng);

  return (
    <div className="flex h-full flex-col">
      <Header
        icon={
          <Link href={`/${lng}`}>
            <Image
              priority
              src={Logo}
              width={40}
              height={40}
              alt="Logo makaDev"
              data-testid="makaDev-logo"
              className="h-full w-full object-cover animate-in"
            />
          </Link>
        }
        navigation={<h1 className="text-xl font-semibold">{t('appName')}</h1>}
      />
      <main className="m-auto mt-[60px] flex max-w-screen-xl flex-1 justify-center px-2.5">{children}</main>
      <Footer copyright="Copyright Ⓒ" version="makaDev Patryk Makarewicz, ver. 1.0" />
    </div>
  );
};

export default MainLayout;
