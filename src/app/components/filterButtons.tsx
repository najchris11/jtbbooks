'use client';

import { Box, IconButton, Tooltip, Typography, Modal, Tabs, Tab, Button } from '@mui/material';
import TagIcon from '@mui/icons-material/Label';
import { useState } from 'react';

interface FilterButtonsProps {
  ageGroups: string[];
  genres: string[];
  tropes: string[];
  onFilterChange: (filters: {
    ageGroups: { [key: string]: boolean };
    genres: { [key: string]: boolean };
    tropes: { [key: string]: boolean };
  }) => void;
}

export default function FilterButtons({
  ageGroups,
  genres,
  tropes,
  onFilterChange,
}: FilterButtonsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    ageGroups: {} as { [key: string]: boolean },
    genres: {} as { [key: string]: boolean },
    tropes: {} as { [key: string]: boolean },
  });

  const [activeTab, setActiveTab] = useState(0); // Tabs for switching categories

  // Toggle individual filters
  const handleToggleFilter = (filterType: string, filter: string) => {
    const updatedFilters = {
      ...selectedFilters[filterType],
      [filter]: !selectedFilters[filterType][filter],
    };
    setSelectedFilters({
      ...selectedFilters,
      [filterType]: updatedFilters,
    });
  };

  // Apply filters and close modal
  const handleApplyFilters = () => {
    onFilterChange(selectedFilters);
    setIsModalOpen(false);
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSelectedFilters({
      ageGroups: {},
      genres: {},
      tropes: {},
    });
    onFilterChange({
      ageGroups: {},
      genres: {},
      tropes: {},
    });
  };

  // Render filter options as pills
  const renderFilterButtons = (filterType: string, options: string[]) => (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
      {options.map((option) => (
        <Button
          key={option}
          variant={selectedFilters[filterType][option] ? 'contained' : 'outlined'}
          onClick={() => handleToggleFilter(filterType, option)}
          sx={{
            borderRadius: 20,
            textTransform: 'capitalize',
            color: selectedFilters[filterType][option] ? 'white' : 'inherit',
            backgroundColor: selectedFilters[filterType][option] ? 'primary.main' : 'inherit',
          }}
        >
          {option}
        </Button>
      ))}
    </Box>
  );

  return (
    <Box>
      {/* Icon Button to Open Modal */}
      <Tooltip title="Filter Books">
        <IconButton onClick={() => setIsModalOpen(true)}>
          <TagIcon fontSize="large" />
        </IconButton>
      </Tooltip>

      {/* Modal Component */}
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: 600,
            bgcolor: 'background.paper',
            p: 4,
            borderRadius: 2,
            boxShadow: 24,
          }}
        >
          {/* Modal Title */}
          <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
            Select Filters
          </Typography>

          {/* Tabs for Filter Categories */}
          <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)} centered>
            <Tab label="Age Groups" />
            <Tab label="Genres" />
            <Tab label="Tropes" />
          </Tabs>

          {/* Tab Content */}
          <Box sx={{ mt: 2 }}>
            {activeTab === 0 && renderFilterButtons('ageGroups', ageGroups)}
            {activeTab === 1 && renderFilterButtons('genres', genres)}
            {activeTab === 2 && renderFilterButtons('tropes', tropes)}
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button variant="outlined" onClick={handleClearFilters}>
              Clear Filters
            </Button>
            <Button variant="contained" onClick={handleApplyFilters}>
              Apply Filters
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}