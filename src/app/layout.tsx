import type { Metadata } from 'next';
import { Figtree, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { DESCRIPTION, ROLE, SITE_NAME } from '@/constants';

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `${SITE_NAME} | ${ROLE}`,
  description: `${DESCRIPTION}`,
  icons: {
    icon: '/logo-symbol.svg',
    shortcut: '/logo-symbol.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${figtree.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
