'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import FlagEn from '../../assets/lang_en.png';
import FlagPl from '../../assets/lang_pl.png';

export const LngSwitch = ({ lng }: { lng: 'pl' | 'en' }) => {
  const pathname = usePathname();

  return (
    <div className="h-8 w-8 rounded-full border-2 border-white drop-shadow-md" data-testid="lng-button">
      <Image priority src={FlagPl} width={30} height={30} alt="Poland flag" />
      {/* // TODO: add links to change language */}
      {/* {lng === 'pl' ? (
        <Link href={pathname.replace('/pl', '/en')}>
          <Image priority src={FlagPl} width={30} height={30} alt="Poland flag" />
        </Link>
      ) : (
        <Link href={pathname.replace('/en', '/pl')}>
          <Image priority src={FlagEn} width={30} height={30} alt="English flag" />
        </Link>
      )} */}
    </div>
  );
};
