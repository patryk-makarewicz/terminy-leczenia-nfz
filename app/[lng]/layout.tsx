import { Inter as FontSans } from 'next/font/google';

import { dir } from 'i18next';

import { languages } from '@/app/i18n/settings';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export const generateStaticParams = async () => {
  return languages.map((lng) => ({ lng }));
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    lng: string;
  };
};

const RootLayout = ({ children, params: { lng } }: RootLayoutProps) => {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>{children}</body>
    </html>
  );
};

export default RootLayout;