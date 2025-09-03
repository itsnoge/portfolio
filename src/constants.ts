export const SITE_NAME = 'ITSNOGE';
export const AUTHOR = 'NODARI GEORGES';
export const ROLE = 'Full-Stack Java Developer';
export const LOCATION_COORDS = '50.8503° N, 4.3517° E';
export const TIMEZONE = 'Europe/Brussels';

export type NavItem = {
  label: string;
  href: string;
};

export const NAVIGATION: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
];

export type SocialItem = {
  label: string;
  href: string;
};

export const SOCIALS: SocialItem[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/georges-nodari' },
  { label: 'GitHub', href: 'https://github.com/itsnoge' },
];

export const CONTACT_EMAIL = 'hello@itsnoge.com';
export const DESCRIPTION =
  'Full-Stack Developer specializing in modern web applications — Java & React. Explore my projects, blog posts, and insights. Based in Brussels, working on-site and remotely. — Georges Nodari';
