
import { BookCardProps } from "@/components/books/BookCard";

// Placeholder cover images
const COVER_IMAGES = [
  'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1543322606-91a2a86ef136?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1581088248284-531d83e6468b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
];

// Mock book data
export const books: BookCardProps[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    coverImage: COVER_IMAGES[0],
    rating: 4.5,
    similarityScore: 0.92,
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    coverImage: COVER_IMAGES[1],
    rating: 4.8,
    similarityScore: 0.87,
  },
  {
    id: '3',
    title: '1984',
    author: 'George Orwell',
    coverImage: COVER_IMAGES[2],
    rating: 4.6,
    similarityScore: 0.85,
  },
  {
    id: '4',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    coverImage: COVER_IMAGES[3],
    rating: 4.7,
    similarityScore: 0.78,
  },
  {
    id: '5',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    coverImage: COVER_IMAGES[4],
    rating: 4.3,
    similarityScore: 0.76,
  },
  {
    id: '6',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    coverImage: COVER_IMAGES[5],
    rating: 4.9,
    similarityScore: 0.72,
  },
  {
    id: '7',
    title: 'Brave New World',
    author: 'Aldous Huxley',
    coverImage: COVER_IMAGES[6],
    rating: 4.4,
    similarityScore: 0.68,
  },
];

// Generate categories with books
export const bookCategories = [
  {
    id: 'recommended',
    title: 'Recommended for You',
    books: [...books].sort(() => 0.5 - Math.random()).slice(0, 5),
    isAIRecommended: true,
  },
  {
    id: 'popular',
    title: 'Popular Now',
    books: [...books].sort(() => 0.5 - Math.random()),
  },
  {
    id: 'new-arrivals',
    title: 'New Arrivals',
    books: [...books].sort(() => 0.5 - Math.random()).slice(0, 4),
  },
  {
    id: 'similar',
    title: 'Because You Read "The Great Gatsby"',
    books: [...books].sort(() => 0.5 - Math.random()).slice(0, 6),
    isAIRecommended: true,
  }
];

// Mock user data for profile
export const userData = {
  id: '1',
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  avatar: '',
  borrowedBooks: books.slice(0, 2),
  readingHistory: books.slice(2, 5),
  favorites: books.slice(0, 3),
};

// Mock stats for dashboard
export const libraryStats = {
  totalBooks: 12483,
  booksCheckedOut: 3456,
  activeUsers: 5689,
  topGenres: [
    { name: 'Fiction', count: 4521 },
    { name: 'Science Fiction', count: 2345 },
    { name: 'Mystery', count: 1987 },
    { name: 'Biography', count: 1634 },
  ],
  recentActivity: [
    { type: 'checkout', user: 'John Smith', book: 'The Great Gatsby', timestamp: new Date() },
    { type: 'return', user: 'Maria Garcia', book: '1984', timestamp: new Date(Date.now() - 3600000) },
    { type: 'signup', user: 'David Wilson', timestamp: new Date(Date.now() - 7200000) },
    { type: 'review', user: 'Sarah Johnson', book: 'To Kill a Mockingbird', rating: 5, timestamp: new Date(Date.now() - 10800000) },
  ]
};
