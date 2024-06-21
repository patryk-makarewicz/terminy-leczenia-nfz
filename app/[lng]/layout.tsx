import { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

import { ReactQueryProvider } from '@/providers/reactQueryProvider';
import { dir } from 'i18next';

import { Lng } from '@/api/global.model';
import { languages } from '@/i18n/settings';
import MainLayout from '@/layouts/MainLayout';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Terminy leczenia NFZ',
  description: 'Strona do wyszukiwania najblizszych terminów leczenia NFZ.',
  category: 'website',
  keywords: ['terminy leczenia', 'nfz', 'kolejki nfz'],
  authors: [
    { name: 'Patryk Makarewicz' },
    {
      name: 'Patryk Makarewicz',
      url: 'https://www.linkedin.com/in/patryk-makarewicz/'
    }
  ],
  openGraph: {
    title: 'Terminy leczenia NFZ',
    description: 'Strona do wyszukiwania najblizszych terminów leczenia NFZ.',
    images: ['/cover.png'],
    url: '',
    siteName: 'Terminy leczenia NFZ'
  },
  metadataBase: new URL('https://acme.com'),
  icons: {
    icon: '/favicon.ico'
  }
};

export const generateStaticParams = async () => {
  return languages.map((lng) => ({ lng }));
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    lng: Lng;
  };
};

const RootLayout = ({ children, params: { lng } }: RootLayoutProps) => (
  <html lang={lng} dir={dir(lng)}>
    <body className={cn('bg-background font-sans antialiased', fontSans.variable)}>
      <ReactQueryProvider>
        <MainLayout lng={lng}>{children}</MainLayout>
      </ReactQueryProvider>
    </body>
  </html>
);

export default RootLayout;
