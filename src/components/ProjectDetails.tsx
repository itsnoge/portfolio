'use client';
import { ReactNode } from 'react';

type ProjectDetailProps = {
  label: ReactNode;
  children: ReactNode;
};

export function ProjectDetails({ label, children }: ProjectDetailProps) {
  return (
    <div className='flex flex-col gap-2 py-2'>
      <p className='font-semibold'>{label}</p>
      <div className='flex flex-wrap gap-2'>{children}</div>
    </div>
  );
}
