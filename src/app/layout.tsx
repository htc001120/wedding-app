import type { Metadata } from 'next';
import { Poppins, Ms_Madi } from 'next/font/google';
import './globals.css';
import { LangProvider, LocalizationProvider } from '@/locales';
import { Toaster } from 'sonner';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const msMadi = Ms_Madi({
  variable: '--font-ms-madi',
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'The Wedding of Yan & Ming',
  description:
    'Join us in celebrating the union of Yan and Ming. Discover our love story, wedding details, and more.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${poppins.variable} ${msMadi.className} ${msMadi.variable}`}
      >
        <LangProvider>
          <LocalizationProvider>
            {children}
            <Toaster />
          </LocalizationProvider>
        </LangProvider>
      </body>
    </html>
  );
}
