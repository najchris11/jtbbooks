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
    cover: '/covers/comingSoon4.png',
    description: 'Description of Book 2.',
    link: 'https://www.example.com',
  },
  {
    id: 3,
    title: 'Lipstick & Camera Clicks',
    author: 'D. J. Murphy',
    ageRange: ['New Adult'],
    subGenres: ['Romantic Love', 'Familial Love'],
    tropes: ['Contemporary', 'Forced Proximity', 'Friends to Lovers', 'Interracial', 'Spicy (Low)', 'Strong Female Lead'],
    cover: '/covers/lipstickAndCam.jpg',
    description: 'Indigo Johnson joins the cast of a reality dating show after a recent heartbreak leaves her craving change. She never expected to develop real feelings for the bachelor—or that her childhood best friend, now the show’s producer, would reignite emotions she thought were long buried. Now, she’s caught in the spotlight, struggling to resist the growing spark with the leading man while pretending she’s over the one working behind the scenes.',
    link: 'https://a.co/d/1oEl7XA',
  },
  // Add more book objects...
];