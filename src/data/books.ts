export type Book = {
  title: string;
  author: string;
  status: 'reading' | 'finished' | 'queued';
  note?: string;
};

// Your reading list. status: 'reading' | 'finished' | 'queued'
export const BOOKS: Book[] = [
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    status: 'reading',
    note: 'Going through this slowly for the distributed systems and storage parts.',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    status: 'finished',
    note: 'A lot of the thinking behind the Streak project came from this.',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Hunt & Thomas',
    status: 'queued',
  },
];
