import { Book } from '@/app/types';

export const books: Book[] = [
  {
    id: 1,
    title: 'Book Title 1',
    author: 'Author Name',
    genre: 'Fantasy',
    cover: '/covers/blankBookCover.jpg',
    description: 'Description of Book 1.',
    themes: 'Magic, Adventure',
  },
  {
    id: 2,
    title: 'Book Title 2',
    author: 'Author Name',
    genre: 'Science Fiction',
    cover: '/covers/blankBookCover.jpg',
    description: 'Description of Book 2.',
    themes: 'Space, Aliens',
  },
  // Add more book objects...
];