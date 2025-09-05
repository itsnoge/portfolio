import { PropsWithChildren } from 'react';

export function Title(props: PropsWithChildren) {
  return (
    <h1 className='text-3xl leading-tight font-bold text-pretty md:text-5xl md:leading-snug lg:text-7xl lg:leading-snug'>
      {props.children}
    </h1>
  );
}
