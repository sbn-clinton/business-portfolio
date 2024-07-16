// src/data.ts
export interface User {
  image: string;
  title: string;
  rank: string;
  social: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
}

export const users: User[] = [
  {
    image: '/assets/img/team/team-1.jpg',
    title: 'Walter White',
    rank: 'Chief Executive Officer',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    image: '/assets/img/team/team-2.jpg',
    title: 'Sarah Jhonson',
    rank: 'Product Manager',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    image: '/assets/img/team/team-3.jpg',
    title: 'William Anderson',
    rank: 'CTO',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    image: '/assets/img/team/team-4.jpg',
    title: 'Amanda Jepson',
    rank: 'Accountant',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
 
];
