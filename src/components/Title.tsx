import { PropsWithChildren } from 'react';

export function Title(props: PropsWithChildren) {
  return (
    <h1 className='max-w-3xl text-2xl font-semibold text-pretty text-slate-800 md:text-4xl lg:text-6xl'>
      {props.children}
    </h1>
  );
}
