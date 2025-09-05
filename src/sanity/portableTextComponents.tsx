import Image from 'next/image';
import { PortableTextComponents } from 'next-sanity';
import { urlFor } from '@/sanity/lib/image';

export const components: PortableTextComponents = {
  types: {
    image: (props) =>
      props.value?.asset?._ref ? (
        <div className='relative my-2 h-[50vh] w-full overflow-hidden rounded-2xl sm:h-[60vh] md:h-[80vh]'>
          <Image
            src={urlFor(props.value)
              .quality(100)
              .auto('format')
              .fit('max')
              .url()}
            alt={props.value.alt || ''}
            fill
            className='object-cover'
            sizes='(max-width: 640px) 100vw, 100vw'
          />
        </div>
      ) : null,
  },
};
