'use client';

import { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { books } from '../books';
import theme from "@/theme";
// import BookGrid from '@/app/components/bookGrid';
import FilterButtons from '@/app/components/filterButtons';

export default function BlackLoveShelf() {
  const [selectedFilters, setSelectedFilters] = useState({
    ageGroups: {} as { [key: string]: boolean },
    genres: {} as { [key: string]: boolean },
    tropes: {} as { [key: string]: boolean },
  });
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleFilterChange = (filters: {
    ageGroups: { [key: string]: boolean };
    genres: { [key: string]: boolean };
    tropes: { [key: string]: boolean };
    searchQuery: string;
  }) => {
    setSelectedFilters(filters);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  return (
    <Box sx={{ textAlign: 'center', padding: 3 }}>
      {/* Search Bar and Filter Button Row */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          mb: 3,
        }}
      >
        <TextField
          label="Search by title, genre, trope, or author"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{ width: '80%', maxWidth: 400 }}
        />
        {/* Filter Buttons */}
        <FilterButtons
          ageGroups={[...new Set(books.flatMap((book) => book.ageRange))]}
          genres={[...new Set(books.flatMap((book) => book.subGenres))]}
          tropes={[...new Set(books.flatMap((book) => book.tropes))]}
          onFilterChange={handleFilterChange}
        />
      </Box>

      {/* Introductory Text */}
      <Box
        sx={{
          width: {
            xs: '90%',
            sm: '80%',
            md: '60%',
            lg: '50%',
          },
          margin: '0 auto',
          backgroundColor: 'background.paper',
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          textAlign: 'left',
        }}
      >
        <Typography variant="h6" sx={{ mb: 1 }}>
          Celebrate Black Love
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          In celebration of the month of love, JTB wants to embrace all types of love within the
          Black community. From romantic to familial and platonic to self, this selection of books
          expresses the essence of Everything Black Love: a collective commitment to prioritizing,
          uplifting, celebrating, and empowering one another.
        </Typography>
      </Box>

      {/* Book Grid with Filters */}
      {/* <BookGrid books={books} filters={selectedFilters} searchQuery={searchQuery} /> */}
      <Box
        sx={{
          mt: 3,
          padding: 4,
          backgroundColor: theme.palette.background.paper, // Use secondary background color
          borderRadius: 2,
          boxShadow: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h1" sx={{ color: theme.palette.text.primary }}>
          Coming soon!
        </Typography>
      </Box>
    </Box>
  );
}