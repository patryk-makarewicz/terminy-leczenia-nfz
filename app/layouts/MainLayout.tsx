'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useEffect, useState } from 'react';

import { Lng } from '@/api/global.model';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Placeholder } from '@/components/Placeholder';
import { Spinner } from '@/components/Spinner';

import Logo from '../assets/makaDev.png';
import { usePhotoLoading } from '../hooks/usePhotoLoading';

type MainLayoutProps = {
  children: React.ReactNode;
  lng: Lng;
};

const MainLayout = ({ children, lng }: MainLayoutProps) => {
  const [isLoadingApp, setIsLoadingApp] = useState(true);
  const { onLoad, loaded, refPhoto } = usePhotoLoading();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoadingApp(false);
    }
  }, []);

  if (isLoadingApp) {
    return (
      <div className="absolute z-10 flex h-full w-full items-center justify-center">
        <div className="animate-fadeIn">
          <Spinner />
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn visible flex h-full flex-col">
      <Header
        icon={
          <Link href={`/${lng}`}>
            <Placeholder hide={loaded} />
            <Image
              priority
              ref={refPhoto}
              onLoad={onLoad}
              src={Logo}
              width={40}
              height={40}
              alt="Logo makaDev"
              data-testid="makaDev-logo"
              className={`${!loaded ? 'opacity-0' : 'animate-fadeIn opacity-100'} h-full w-full object-cover`}
            />
          </Link>
        }
      />
      <main className="m-auto mt-[60px] flex max-w-screen-xl flex-1 justify-center px-2.5">{children}</main>
      <Footer copyright="Copyright Ⓒ" version="makaDev Patryk Makarewicz, ver. 1.0" />
    </div>
  );
};

export default MainLayout;
