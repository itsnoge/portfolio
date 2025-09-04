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

export type TechItem = {
  label: string;
  icon: string;
};

export const TECHNOLOGIES: TechItem[] = [
  { label: 'Java', icon: '/java.svg' },
  { label: 'Spring Boot', icon: '/spring-boot.svg' },
  { label: 'Docker', icon: '/docker.svg' },
  { label: 'PostgreSQL', icon: '/postgresql.svg' },
  { label: 'TypeScript', icon: '/typescript.svg' },
  { label: 'React', icon: '/react.svg' },
  { label: 'Next.js', icon: '/next-js.svg' },
  { label: 'Node.js', icon: '/nodejs.svg' },
  { label: 'Intellij-idea', icon: '/intellij-idea.svg' },
  { label: 'Webstorm', icon: '/webstorm.svg' },
  { label: 'Sanity', icon: '/sanity.svg' },
];
