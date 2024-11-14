'use client';

import { useState } from 'react';
import { Box, TextField } from '@mui/material';
import { books } from '../books';
import BookGrid from '@/app/components/bookGrid';
import FilterButtons from '@/app/components/filterButtons';

const genres = [...new Set(books.map((book) => book.genre))]; // Unique genres from book data

export default function FirstShelfPage() {
  const [filteredGenres, setFilteredGenres] = useState<{ [key: string]: boolean }>({});
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleFilterChange = (selectedGenres: { [key: string]: boolean }) => {
    setFilteredGenres(selectedGenres);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredBooks = books
    .filter((book) => !filteredGenres[book.genre]) // Filter by genre
    .filter((book) =>
      searchQuery === '' ||
      book.title.toLowerCase().includes(searchQuery) || // Match title
      book.genre.toLowerCase().includes(searchQuery) || // Match genre
      (book.themes && book.themes.toLowerCase().includes(searchQuery)) || // Match themes/tropes
      (book.author && book.author.toLowerCase().includes(searchQuery)) || // Match author
      book.description.toLowerCase().includes(searchQuery) // Match description
    );

  return (
    <Box sx={{ textAlign: 'center', padding: 2 }}>
      {/* Combined Search Bar */}
      <TextField
        label="Search by title, genre, trope, or author"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{ mb: 2, width: '80%', maxWidth: 400 }}
      />
      <FilterButtons genres={genres} onFilterChange={handleFilterChange} />
      <BookGrid books={filteredBooks} selectedGenre="All" />
    </Box>
  );
}