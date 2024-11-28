import { Book } from '@/app/types';

export const books: Book[] = [
  {
    id: 1,
    title: 'The Gems',
    author: 'M.C. Jeter',
    genre: ['Fantasy', 'Contemporary', 'Friends to Lovers', 'Found Family', 'New Adult'],
    cover: '/covers/thegems.png',
    description: 'When seventeen-year-old Ruby Jenkins discovers that her blood carries powerful magic, she must band together with new allies to stop her uncle from terrorizing the world.',
    link: 'https://www.amazon.com/dp/B09K8YDQ2S',
  },
  {
    id: 2,
    title: 'Book Title 2',
    author: 'Author Name',
    genre: ['Science Fiction'],
    cover: '/covers/blankBookCover.jpg',
    description: 'Description of Book 2.',
    link: 'https://www.example.com',
  },
  // Add more book objects...
];