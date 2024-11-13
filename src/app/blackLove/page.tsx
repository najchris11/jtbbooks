'use client';

import { useState } from 'react';
import { Box, Button, ButtonGroup } from '@mui/material';
import { books } from '@/app/books';
import BookGrid from '@/app/components/bookGrid';

const genres = ['All', 'Fantasy', 'Science Fiction', 'Mystery', 'Non-Fiction'];

export default function FirstShelfPage() {
  const [selectedGenre, setSelectedGenre] = useState<string>('All');

  const handleFilterChange = (genre: string) => {
    setSelectedGenre(genre);
  };

  return (
    <Box sx={{ textAlign: 'center', padding: 2 }}>
      <ButtonGroup variant="contained" aria-label="genre filter">
        {genres.map((genre) => (
          <Button key={genre} onClick={() => handleFilterChange(genre)}>
            {genre}
          </Button>
        ))}
      </ButtonGroup>
      <BookGrid books={books} selectedGenre={selectedGenre} />
    </Box>
  );
}