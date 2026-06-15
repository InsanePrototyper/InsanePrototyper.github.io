export type Project = {
  name: string;
  blurb: string;
  tags: string[];
  href?: string;
  featured?: boolean;
};

// Add your personal projects here. `featured: true` surfaces it on the home page.
export const PROJECTS: Project[] = [
  {
    name: 'Streak',
    blurb:
      'A small habit tracker. The idea is to build a habit in five minutes a day and keep the streak going.',
    tags: ['Product', 'Habits'],
    href: '#',
    featured: true,
  },
  {
    name: 'AI Internals',
    blurb:
      'A curriculum I am working through to understand how modern AI systems work by building them from scratch.',
    tags: ['Learning', 'AI', 'Systems'],
    href: 'https://github.com/InsanePrototyper',
    featured: true,
  },
  {
    name: 'Competitive Programming',
    blurb:
      'Solutions and notes across data structures and algorithms from years of Codeforces practice.',
    tags: ['DSA', 'C++'],
    href: 'https://github.com/InsanePrototyper/competitive-programming',
  },
  {
    name: 'Intrusion and Electricity-Theft Detection for Smart Grids',
    blurb:
      'A lightweight intrusion detection and electricity-theft detection system. Published in SpringerLink, Nov 2023.',
    tags: ['Research', 'Security', 'ML'],
    href: '#',
  },
];
