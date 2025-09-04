'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  CONTACT_EMAIL,
  LOCATION_COORDS,
  NAVIGATION,
  SOCIALS,
  TIMEZONE,
} from '@/constants';
import { NavLink } from '@/components/NavLink';
import { usePathname } from 'next/navigation';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { RollingText } from '@/components/RollingText';

export function Header() {
  const [time, setTime] = useState('');
  const pathname = usePathname();

  const isActiveLink = (href: string, pathname: string) =>
    href !== '/' ? pathname.startsWith(href) : pathname === '/';

  useEffect(() => {
    const updateTime = () => {
      const brusselsTime = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: TIMEZONE,
      }).format(new Date());
      setTime(brusselsTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className='sticky top-0 z-50 container mx-auto flex h-12 items-center justify-between rounded-b-2xl bg-gray-100/80 px-2 backdrop-blur-md'>
      <Link className='flex-shrink-0 pl-2' href='/'>
        <Image
          src='/logo-line-semibold.svg'
          alt='ITSNOGE Logo'
          width={80}
          height={80}
          priority
        />
      </Link>
      <div className='font-jetbrains-mono hidden max-w-sm flex-1 flex-shrink-0 justify-between gap-2 text-center text-xs font-medium lg:flex'>
        <div>{LOCATION_COORDS}</div>
        <div>{time}</div>
      </div>
      <div className='flex items-center gap-4'>
        <ul className='hidden gap-4 text-sm font-medium lg:flex lg:items-center'>
          {NAVIGATION.map((item) => (
            <li key={item.href} className='group cursor-pointer'>
              <NavLink
                key={item.href}
                href={item.href}
                isActive={isActiveLink(item.href, pathname)}
                dotPosition='left'
                label={item.label}
                direction='up'
                speed='slow'
              />
            </li>
          ))}
        </ul>

        <div className='flex gap-2'>
          <Button className='rounded-full text-sm font-medium'>
            Start a project
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                aria-label='Open menu'
                className='rounded-full'
                size='icon'
              >
                <Plus />
              </Button>
            </SheetTrigger>
            <SheetContent
              side='top'
              withCloseButton={false}
              className='container mx-auto rounded-b-2xl bg-gray-100/80 backdrop-blur-md'
            >
              <SheetHeader>
                <SheetTitle className='flex items-center justify-between'>
                  <Link className='flex-shrink-0' href='/'>
                    <Image
                      src='/logo-line-semibold.svg'
                      alt='ITSNOGE Logo'
                      width={80}
                      height={80}
                      priority
                    />
                  </Link>
                  <div className='font-jetbrains-mono hidden max-w-sm flex-1 flex-shrink-0 justify-between gap-2 text-center text-xs font-medium lg:flex'>
                    <div>{LOCATION_COORDS}</div>
                    <div>{time}</div>
                  </div>
                  <SheetClose asChild>
                    <Button className='rotate-45 rounded-full' size='icon'>
                      <Plus />
                    </Button>
                  </SheetClose>
                </SheetTitle>
                <SheetDescription className='hidden'></SheetDescription>
              </SheetHeader>
              <div className='grid grid-cols-1 gap-4 p-4 lg:grid-cols-2'>
                <div className='col-span-2 lg:col-span-1'>
                  <ul className='space-y-4'>
                    {NAVIGATION.map((item, index) => {
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className='group flex items-center justify-between'
                          >
                            <RollingText
                              className='text-xl font-semibold'
                              speed='slow'
                              text={item.label}
                              direction='up'
                            />
                            <RollingText
                              className={`font-jetbrains-mono ${
                                isActiveLink(item.href, pathname)
                                  ? 'text-foreground font-bold'
                                  : 'text-muted-foreground'
                              }`}
                              text={`(${String(index + 1).padStart(2, '0')})`}
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className='relative hidden h-full w-full lg:col-span-1 lg:block'>
                  <Image
                    src='/img-02.avif'
                    alt='ITSNOGE Logo'
                    sizes='(max-width: 1024px) 100vw, 50vw'
                    fill
                    className='rounded-sm object-cover'
                    priority
                  />
                </div>
              </div>
              <SheetFooter className='flex flex-row items-center justify-between'>
                <p className='text-lg font-semibold'>{CONTACT_EMAIL}</p>
                <ul className='mt-1 flex gap-4 text-sm font-medium'>
                  {SOCIALS.map((social) => (
                    <li key={social.href}>
                      <NavLink
                        href={social.href}
                        label={social.label}
                        dotPosition='none'
                        direction='up'
                        speed='slow'
                        external
                      />
                    </li>
                  ))}
                </ul>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
