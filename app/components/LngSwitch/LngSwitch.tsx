'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Lng } from '@/api/global.model';

import FlagEn from '../../assets/lang_en.png';
import FlagPl from '../../assets/lang_pl.png';

export const LngSwitch = ({ lng }: { lng: Lng }) => {
  const pathname = usePathname();

  return (
    <div className="h-8 w-8 rounded-full border-2 border-white drop-shadow-md" data-testid="lng-button">
      {lng === 'pl' ? (
        <Link href={pathname.replace('/pl', '/en')}>
          <Image priority src={FlagPl} width={30} height={30} alt="Poland flag" />
        </Link>
      ) : (
        <Link href={pathname.replace('/en', '/pl')}>
          <Image priority src={FlagEn} width={30} height={30} alt="English flag" />
        </Link>
      )}
    </div>
  );
};
