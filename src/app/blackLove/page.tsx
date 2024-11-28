'use client';

import { useState } from 'react';
import { Box, TextField } from '@mui/material';
import { books } from '../books';
import BookGrid from '@/app/components/bookGrid';
import FilterButtons from '@/app/components/filterButtons';

const genres = [...new Set(books.flatMap((book) => book.genre))];

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
    .filter((book) => !book.genre.some((genre) => filteredGenres[genre])) // Filter by genre
    .filter((book) =>
      searchQuery === '' ||
      book.title.toLowerCase().includes(searchQuery) // Match title
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