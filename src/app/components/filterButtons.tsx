'use client';

import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';

interface FilterButtonsProps {
  genres: string[];
  onFilterChange: (selectedGenres: { [key: string]: boolean }) => void;
}

export default function FilterButtons({ genres, onFilterChange }: FilterButtonsProps) {
  const [selectedGenres, setSelectedGenres] = useState<{ [key: string]: boolean }>({});

  const handleToggleGenre = (genre: string) => {
    const newSelectedGenres = { ...selectedGenres, [genre]: !selectedGenres[genre] };
    setSelectedGenres(newSelectedGenres);
    onFilterChange(newSelectedGenres);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 3 }}>
      <Typography variant="body2" sx={{ mb: 1 }}>
        Select genres to include or exclude:
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {genres.map((genre) => (
          <Button
            key={genre}
            variant={selectedGenres[genre] ? 'contained' : 'outlined'}
            onClick={() => handleToggleGenre(genre)}
            sx={{
              color: selectedGenres[genre] ? 'white' : 'inherit',
              backgroundColor: selectedGenres[genre] ? 'primary.main' : 'inherit',
            }}
          >
            {selectedGenres[genre] ? `Exclude ${genre}` : `Include ${genre}`}
          </Button>
        ))}
      </Box>
    </Box>
  );
}