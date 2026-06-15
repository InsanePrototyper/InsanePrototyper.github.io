export type Book = {
  title: string;
  author: string;
  status: 'reading' | 'finished' | 'queued';
  note?: string;
};

// Your reading list. status: 'reading' | 'finished' | 'queued'
export const BOOKS: Book[] = [
  {
    title: 'Build a Large Language Model (From Scratch)',
    author: 'Sebastian Raschka',
    status: 'reading',
  },
];
