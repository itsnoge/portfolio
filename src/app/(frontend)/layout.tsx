// src/app/(frontend)/layout.tsx
import { ReactNode } from 'react';
import { Header } from '@/components/Header';
import { SanityLive } from '@/sanity/lib/live';
import { DraftTools } from '@/components/DraftTools';
import { draftMode } from 'next/headers';

export default async function FrontendLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { isEnabled } = await draftMode();

  return (
    <section className='min-h-screen bg-white'>
      <Header />
      {children}
      <SanityLive />
      <DraftTools enabled={isEnabled} />
    </section>
  );
}
