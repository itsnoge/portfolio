'use client';

import { VisualEditing } from 'next-sanity';
import { DisableDraftMode } from '@/components/DisableDraftMode';

export function DraftTools({ enabled }: { enabled: boolean }) {
  if (!enabled) return null;

  return (
    <>
      <DisableDraftMode />
      <VisualEditing />
    </>
  );
}
