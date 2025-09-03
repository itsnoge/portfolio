import Link from 'next/link';
import { Title } from '@/components/Title';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <section className='container mx-auto grid grid-cols-1 gap-6 p-12'>
      <Title>ITSNOGE</Title>
      <hr />
      <Link href='/blog'>
        <Button variant='outline' className='w-fit'>
          Blog
        </Button>
      </Link>
    </section>
  );
}
