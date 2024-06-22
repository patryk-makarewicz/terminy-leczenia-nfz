import Image from 'next/image';
import Link from 'next/link';

import { Lng } from '@/api/global.model';
import Logo from '@/assets/makaDev.png';
import { Header, Footer, LngSwitch, ColorModeToggle } from '@/components';
import { useTranslation } from '@/i18n';

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
        navigation={<h1 className="text-2xl font-bold md:text-3xl">{t('appName')}</h1>}
        rightElementFirst={<ColorModeToggle />}
        rightElementSecond={<LngSwitch lng={lng} />}
      />
      <main className="m-auto flex max-w-screen-xl flex-1 justify-center px-2.5">{children}</main>
      <Footer lng={lng} />
    </div>
  );
};

export default MainLayout;
