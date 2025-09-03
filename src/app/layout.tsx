import type { Metadata } from 'next';
import { Figtree, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { AUTHOR, ROLE, SITE_NAME } from '@/constants';

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `${SITE_NAME} (${AUTHOR}) | ${ROLE}`,
  description:
    'Full-Stack Developer specializing in modern web applications. Discover projects, blog posts, and insights by Georges Nodari aka itsnoge.',
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
