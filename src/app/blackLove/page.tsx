"use client";

import { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { books } from "../books";
import BookGrid from "@/app/components/bookGrid";
import FilterButtons from "@/app/components/filterButtons";

export default function BlackLoveShelf() {
  const [selectedFilters, setSelectedFilters] = useState({
    ageGroups: {} as { [key: string]: boolean },
    genres: {} as { [key: string]: boolean },
    tropes: {} as { [key: string]: boolean },
  });
  const [searchQuery, setSearchQuery] = useState<string>("");

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
    <Box sx={{ textAlign: "center", padding: 3 }}>
      {/* Introductory Text */}
      <Box
        sx={{
          width: {
            xs: "90%",
            sm: "80%",
            md: "60%",
            lg: "50%",
          },
          margin: "3vh auto",
          backgroundColor: "background.paper",
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "left",
        }}
      >
        <Typography variant="h6" sx={{ mb: 1 }}>
          Celebrate Black Love
          February 1st 2025 - February 3rd 2025
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          The Free Ebook Downloading Occasion of the Season
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          In celebration of the month of love, JTB wants to embrace all types of
          love within the Black community. From romantic to familial and
          platonic to self, this selection of books expresses the essence of
          Everything Black Love: a collective commitment to prioritizing,
          uplifting, celebrating, and empowering one another.
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          Further, after much deliberation, the JTB staff has decided to include Interracial Black
          Love in which the Black main character is giving and receiving love. We do believe it 
          is a unique branch of Black Love and should be represented. We want this event to include
          experiences that happen across the Black diaspora, and we believe we would be doing you a 
          disservice by not including this branch.
          </Typography>
      </Box>

      {/* Search Bar and Filter Button Row */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          mb: 3,
        }}
      >
        <TextField
          label="Search by title, genre, trope, age range, or author"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{ width: "80%", maxWidth: 400 }}
        />
        {/* Filter Buttons */}
        <FilterButtons
          ageGroups={[...new Set(books.flatMap((book) => book.ageRange))]}
          genres={[...new Set(books.flatMap((book) => book.subGenres))]}
          tropes={[...new Set(books.flatMap((book) => book.tropes))]}
          onFilterChange={handleFilterChange}
        />
      </Box>

      {/* Book Grid with Filters */}
      <BookGrid
        books={books}
        filters={selectedFilters}
        searchQuery={searchQuery}
      />
    </Box>
  );
}
