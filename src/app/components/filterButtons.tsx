'use client';

import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';

interface FilterButtonsProps {
  ageGroups: string[];
  subGenres: string[];
  tropes: string[];
  onFilterChange: (filterType: string, selectedFilters: { [key: string]: boolean }) => void;
}

export default function FilterButtons({ ageGroups, subGenres, tropes, onFilterChange }: FilterButtonsProps) {
  const [selectedAgeGroups, setSelectedAgeGroups] = useState<{ [key: string]: boolean }>({});
  const [selectedSubGenres, setSelectedSubGenres] = useState<{ [key: string]: boolean }>({});
  const [selectedTropes, setSelectedTropes] = useState<{ [key: string]: boolean }>({});

  const handleToggleFilter = (filterType: string, filter: string) => {
    let newSelectedFilters;
    if (filterType === 'ageGroup') {
      newSelectedFilters = { ...selectedAgeGroups, [filter]: !selectedAgeGroups[filter] };
      setSelectedAgeGroups(newSelectedFilters);
    } else if (filterType === 'subGenre') {
      newSelectedFilters = { ...selectedSubGenres, [filter]: !selectedSubGenres[filter] };
      setSelectedSubGenres(newSelectedFilters);
    } else if (filterType === 'trope') {
      newSelectedFilters = { ...selectedTropes, [filter]: !selectedTropes[filter] };
      setSelectedTropes(newSelectedFilters);
    }
    onFilterChange(filterType, newSelectedFilters);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 3 }}>
      <Typography variant="body2" sx={{ mb: 1 }}>
        Filter by Age Group:
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {ageGroups.map((ageGroup) => (
          <Button
            key={ageGroup}
            variant={selectedAgeGroups[ageGroup] ? 'contained' : 'outlined'}
            onClick={() => handleToggleFilter('ageGroup', ageGroup)}
            sx={{
              color: selectedAgeGroups[ageGroup] ? 'white' : 'inherit',
              backgroundColor: selectedAgeGroups[ageGroup] ? 'primary.main' : 'inherit',
            }}
          >
            {ageGroup}
          </Button>
        ))}
      </Box>

      <Typography variant="body2" sx={{ mb: 1, mt: 2 }}>
        Filter by Sub-Genre:
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {subGenres.map((subGenre) => (
          <Button
            key={subGenre}
            variant={selectedSubGenres[subGenre] ? 'contained' : 'outlined'}
            onClick={() => handleToggleFilter('subGenre', subGenre)}
            sx={{
              color: selectedSubGenres[subGenre] ? 'white' : 'inherit',
              backgroundColor: selectedSubGenres[subGenre] ? 'primary.main' : 'inherit',
            }}
          >
            {subGenre}
          </Button>
        ))}
      </Box>

      <Typography variant="body2" sx={{ mb: 1, mt: 2 }}>
        Filter by Trope:
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {tropes.map((trope) => (
          <Button
            key={trope}
            variant={selectedTropes[trope] ? 'contained' : 'outlined'}
            onClick={() => handleToggleFilter('trope', trope)}
            sx={{
              color: selectedTropes[trope] ? 'white' : 'inherit',
              backgroundColor: selectedTropes[trope] ? 'primary.main' : 'inherit',
            }}
          >
            {trope}
          </Button>
        ))}
      </Box>
    </Box>
  );
}