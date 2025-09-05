import Link from 'next/link';
import { Button } from '@/components/ui/button';

type SectionHeaderProps = {
  title: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
};

export function SectionHeader({
  title,
  description,
  buttonText,
  buttonLink,
  className,
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <div className='flex items-center justify-between'>
        <p className='text-2xl font-semibold md:text-3xl lg:text-5xl'>
          {title}
        </p>
        {buttonText && buttonLink && (
          <Link href={buttonLink}>
            <Button className='rounded-full'>{buttonText}</Button>
          </Link>
        )}
      </div>
      {description && (
        <p className='mt-5 max-w-sm text-sm text-pretty whitespace-pre-line'>
          {description}
        </p>
      )}
    </div>
  );
}
