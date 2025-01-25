"use client";

import {
  Box,
  IconButton,
  Tooltip,
  Typography,
  Modal,
  Tabs,
  Tab,
  Button,
} from "@mui/material";
import TagIcon from "@mui/icons-material/Label";
import BlockIcon from '@mui/icons-material/Block';
import { useState } from "react";

interface FilterButtonsProps {
  ageGroups: string[];
  genres: string[];
  tropes: string[];
  onFilterChange: (filters: {
    ageGroups: { [key: string]: boolean };
    genres: { [key: string]: boolean };
    tropes: { [key: string]: boolean };
    blacklist: {
      ageGroups: { [key: string]: boolean };
      genres: { [key: string]: boolean };
      tropes: { [key: string]: boolean };
    };
    searchQuery: string; // Add searchQuery here
  }) => void;
}

export default function FilterButtons({
  ageGroups,
  genres,
  tropes,
  onFilterChange,
}: FilterButtonsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<{
    ageGroups: { [key: string]: boolean };
    genres: { [key: string]: boolean };
    tropes: { [key: string]: boolean };
    blacklist: {
      ageGroups: { [key: string]: boolean };
      genres: { [key: string]: boolean };
      tropes: { [key: string]: boolean };
    };
  }>({
    ageGroups: {},
    genres: {},
    tropes: {},
    blacklist: {
      ageGroups: {},
      genres: {},
      tropes: {},
    },
  });

  const [activeTab, setActiveTab] = useState(0); // Tabs for switching categories

  // Toggle individual filters
  const handleToggleFilter = (
    filterType: keyof Omit<typeof selectedFilters, 'blacklist'>,
    filter: string,
    isBlacklist: boolean = false
  ) => {
    const updatedFilters = { ...selectedFilters };
    
    if (isBlacklist) {
      // Toggle blacklist
      updatedFilters.blacklist[filterType] = {
        ...updatedFilters.blacklist[filterType],
        [filter]: !updatedFilters.blacklist[filterType][filter],
      };
      // Remove from regular filters if it exists
      if (updatedFilters[filterType][filter]) {
        delete updatedFilters[filterType][filter];
      }
    } else {
      // Toggle regular filter
      updatedFilters[filterType] = {
        ...updatedFilters[filterType],
        [filter]: !updatedFilters[filterType][filter],
      };
      // Remove from blacklist if it exists
      if (updatedFilters.blacklist[filterType][filter]) {
        delete updatedFilters.blacklist[filterType][filter];
      }
    }
    
    setSelectedFilters(updatedFilters);
  };

  // Update the renderFilterButtons function to include blacklist buttons
  const renderFilterButtonsWithBlacklist = (
    filterType: keyof Omit<typeof selectedFilters, 'blacklist'>,
    options: string[]
  ) => (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
      {options.map((option) => (
        <Box key={option} sx={{ display: "flex", gap: 0.5, mb: 1 }}>
          <Button
            variant={selectedFilters[filterType][option] ? "contained" : "outlined"}
            onClick={() => handleToggleFilter(filterType, option)}
            sx={{
              borderRadius: "20px 0 0 20px",
              textTransform: "capitalize",
              color: selectedFilters[filterType][option] ? "white" : "inherit",
              backgroundColor: selectedFilters[filterType][option]
                ? "primary.main"
                : "inherit",
            }}
          >
            {option}
          </Button>
          <Button
            variant={selectedFilters.blacklist[filterType][option] ? "contained" : "outlined"}
            onClick={() => handleToggleFilter(filterType, option, true)}
            sx={{
              borderRadius: "0 20px 20px 0",
              minWidth: '40px',
              backgroundColor: selectedFilters.blacklist[filterType][option] 
                ? "error.main" 
                : "inherit",
              "&:hover": {
                backgroundColor: selectedFilters.blacklist[filterType][option]
                  ? "error.dark"
                  : undefined,
              },
            }}
          >
            <BlockIcon fontSize="small" />
          </Button>
        </Box>
      ))}
    </Box>
  );

  // Update hasAnyFiltersSelected to include blacklist
  const hasAnyFiltersSelected = (filters: typeof selectedFilters) => {
    return (
      Object.values(filters).some((filterGroup) =>
        Object.values(filterGroup).some((isSelected) => isSelected)
      ) ||
      Object.values(filters.blacklist).some((filterGroup) =>
        Object.values(filterGroup).some((isSelected) => isSelected)
      )
    );
  };

  // Modify the handleApplyFilters function
  const handleApplyFilters = () => {
    // Only apply filters if at least one is selected
    if (hasAnyFiltersSelected(selectedFilters)) {
      onFilterChange({
        ...selectedFilters,
        searchQuery: "",
      });
    } else {
      // If no filters are selected, pass empty filter objects
      onFilterChange({
        ageGroups: {},
        genres: {},
        tropes: {},
        blacklist: {
          ageGroups: {},
          genres: {},
          tropes: {},
        },
        searchQuery: "",
      });
    }
    setIsModalOpen(false);
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSelectedFilters({
      ageGroups: {},
      genres: {},
      tropes: {},
      blacklist: {
        ageGroups: {},
        genres: {},
        tropes: {}
      }
    });
    onFilterChange({
      ageGroups: {},
      genres: {},
      tropes: {},
      blacklist: {
        ageGroups: {},
        genres: {},
        tropes: {}
      },
      searchQuery: "", // Clear searchQuery
    });
  };

  return (
    <Box>
      {/* Icon Button to Open Modal */}
      <Tooltip title="Filter Books">
        <IconButton onClick={() => setIsModalOpen(true)}>
          <TagIcon fontSize="large" />
        </IconButton>
      </Tooltip>

      {/* Modal Component */}
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            position: "relative",
            width: "90%",
            maxWidth: 600,
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
            boxShadow: 24,
          }}
        >
          {/* Modal Title */}
          <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
            Select Filters
          </Typography>

          {/* Tabs for Filter Categories */}
          <Tabs
            value={activeTab}
            onChange={(e, newValue) => setActiveTab(newValue)}
            centered
          >
            <Tab label="Age Groups" />
            <Tab label="Genres" />
            <Tab label="Tropes" />
          </Tabs>

          {/* Tab Content */}
          <Box sx={{ mt: 2 }}>
            {activeTab === 0 && renderFilterButtonsWithBlacklist("ageGroups", ageGroups)}
            {activeTab === 1 && renderFilterButtonsWithBlacklist("genres", genres)}
            {activeTab === 2 && renderFilterButtonsWithBlacklist("tropes", tropes)}
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
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
