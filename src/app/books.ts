import { Book } from '@/app/types';

export const books: Book[] = [
  {
    id: 1,
    title: 'The Gems',
    author: 'M.C. Jeter',
    ageRange: ['New Adult'],
    subGenres: ['Familial Love', 'Romantic Love'],
    tropes: ['Fantasy', 'Contemporary', 'Friends to Lovers', 'Found Family', 'Sensitive Content', 'Strong Female Lead'],
    cover: '/covers/thegems.png',
    description: 'When seventeen-year-old Ruby Jenkins discovers that her blood carries powerful magic, she must band together with new allies to stop her uncle from terrorizing the world.',
    link: 'https://a.co/d/hofcGNV',
  },
  {
    id: 2,
    title: 'Book Title 2',
    author: 'Author Name',
    ageRange: ['New Adult'],
    subGenres: ['Science Fiction'],
    tropes: ['Enemies to Lovers', 'Found Family',],
    cover: '/covers/blankBookCover.jpg',
    description: 'Description of Book 2.',
    link: 'https://www.example.com',
  },
  // Add more book objects...
];