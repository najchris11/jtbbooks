"use client";

import { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { books } from "../books";
import BookGrid from "@/app/components/bookGrid";
import FilterButtons from "@/app/components/filterButtons";
import banner from "/public/banners/blackLove.png";
import Image from "next/image";

export default function BlackLoveShelf() {
  const [selectedFilters, setSelectedFilters] = useState({
    ageGroups: {} as { [key: string]: boolean },
    genres: {} as { [key: string]: boolean },
    tropes: {} as { [key: string]: boolean },
    blacklist: {
      ageGroups: {} as { [key: string]: boolean },
      genres: {} as { [key: string]: boolean },
      tropes: {} as { [key: string]: boolean },
    },
  });
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleFilterChange = (filters: {
    ageGroups: { [key: string]: boolean };
    genres: { [key: string]: boolean };
    tropes: { [key: string]: boolean };
    blacklist: {
      ageGroups: { [key: string]: boolean };
      genres: { [key: string]: boolean };
      tropes: { [key: string]: boolean };
    };
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
        <br />
        <Image
                src={banner}
                width={0} // Let next/image calculate width
                height={0} // Let next/image calculate height
                sizes="(max-width: 768px) 200px, 33vw"
                priority
                alt="Everything Black Love book above a bookshelf"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
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
          ageGroups={[...new Set(books.flatMap((book) => book.ageRange))].sort()}
          genres={[...new Set(books.flatMap((book) => book.subGenres))].sort()}
          tropes={[...new Set(books.flatMap((book) => book.tropes))].sort()}
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
