'use client';

import { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import BookGrid from '@/app/components/bookGrid';
import FilterButtons from '@/app/components/filterButtons';
import { books } from '../books';
import useBookFilters from '@/app/hooks/useBookFilters'; // Custom hook for filtering logic

export default function FirstShelfPage() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const {
    filteredBooks,
    handleFilterChange,
    ageGroups,
    subGenres,
    tropes,
  } = useBookFilters(books, searchQuery);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  return (
    <Box sx={{ textAlign: 'center', padding: 2 }}>
      {/* Page Title */}
      <Typography variant="h4" sx={{ mb: 2 }}>
        Explore Your Next Read
      </Typography>
      
      {/* Search Bar */}
      <TextField
        label="Search by title, genre, trope, or author"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{ mb: 2, width: '80%', maxWidth: 400 }}
      />

      {/* Filter Buttons */}
      <FilterButtons
        ageGroups={ageGroups}
        subGenres={subGenres}
        tropes={tropes}
        onFilterChange={handleFilterChange}
      />

      {/* Filtered Book Grid */}
      <BookGrid books={filteredBooks} selectedGenre="All" />
    </Box>
  );
}