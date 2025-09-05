'use client';
import { PROJECT_QUERYResult } from '@/sanity/types';
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

export function ProjectImage(props: NonNullable<PROJECT_QUERYResult>) {
  const { mainImage, title } = props;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 3], [1, 1.5]);
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 20 });
  return (
    <div
      ref={ref}
      className='relative h-[50vh] w-full overflow-hidden rounded-2xl sm:h-[60vh] md:h-[80vh]'
    >
      {mainImage?.asset?._ref && (
        <motion.div style={{ scale: smoothScale }} className='h-full w-full'>
          <Image
            src={urlFor(mainImage).quality(100).auto('format').fit('max').url()}
            alt={mainImage.alt || title || ''}
            fill
            className='object-cover'
            sizes='(max-width: 640px) 100vw, 100vw'
            priority
          />
        </motion.div>
      )}
    </div>
  );
}
