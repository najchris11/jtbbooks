"use client";

import { useState } from "react";
import { Grid2, Box, Card } from "@mui/material";
import { Book } from "@/app/types";
import BookModal from "@/app/components/bookModal";
import Image from "next/image";
import theme from "@/theme";

interface BookGridProps {
  books: Book[];
  filters: {
    ageGroups: { [key: string]: boolean };
    genres: { [key: string]: boolean };
    tropes: { [key: string]: boolean };
    blacklist: {
      ageGroups: { [key: string]: boolean };
      genres: { [key: string]: boolean };
      tropes: { [key: string]: boolean };
    };
  };
  searchQuery: string;
}

export default function BookGrid({ books, filters, searchQuery }: BookGridProps) {

  const [openModal, setOpenModal] = useState(false);
  const [activeBook, setActiveBook] = useState<Book | null>(null);

// Utility function to get a title key without "The " at the start.
function getSortableTitle(title: string): string {
  // Strip out "The " at the beginning, case-insensitively, then trim whitespace
  return title
    .replace(/^the\s+/i, "")
    .trim()
    .toLowerCase();
}

// Sort your books array (in ascending order by title)
const sortedBooks = [...books].sort((a, b) => {
  const titleA = getSortableTitle(a.title);
  const titleB = getSortableTitle(b.title);
  return titleA.localeCompare(titleB);
});

  const filteredBooks = sortedBooks.filter((book) => {
    // First check if the book matches any blacklisted criteria
    const isBlacklisted = 
      // Check blacklisted age groups
      book.ageRange.some(age => filters.blacklist.ageGroups[age]) ||
      // Check blacklisted genres
      book.subGenres.some(genre => filters.blacklist.genres[genre]) ||
      // Check blacklisted tropes
      book.tropes.some(trope => filters.blacklist.tropes[trope]);

    // If book is blacklisted, exclude it
    if (isBlacklisted) return false;

    // Handle search query
    if (searchQuery) {
      const searchTerms = searchQuery.toLowerCase();
      const matchesSearch =
        book.title.toLowerCase().includes(searchTerms) ||
        book.author.toLowerCase().includes(searchTerms) ||
        book.ageRange.some(age => age.toLowerCase().includes(searchTerms)) ||
        book.subGenres.some(genre => genre.toLowerCase().includes(searchTerms)) ||
        book.tropes.some(trope => trope.toLowerCase().includes(searchTerms));

      if (!matchesSearch) return false;
    }

    // Check if any filters are active
    const hasActiveFilters =
      Object.values(filters.ageGroups).some(Boolean) ||
      Object.values(filters.genres).some(Boolean) ||
      Object.values(filters.tropes).some(Boolean);

    // If no filters are active, show all non-blacklisted books
    if (!hasActiveFilters) return true;

    // Check if book matches active filters
    const matchesAgeGroup =
      !Object.values(filters.ageGroups).some(Boolean) ||
      book.ageRange.some(age => filters.ageGroups[age]);

    const matchesGenre =
      !Object.values(filters.genres).some(Boolean) ||
      book.subGenres.some(genre => filters.genres[genre]);

    const matchesTrope =
      !Object.values(filters.tropes).some(Boolean) ||
      book.tropes.some(trope => filters.tropes[trope]);

    return matchesAgeGroup && matchesGenre && matchesTrope;
  });

  const handleBookClick = (book: Book) => {
    setActiveBook(book);
    setOpenModal(true);
  };

  return (
    <>
      {/* Bookshelf Frame */}
      <Box
        sx={{
          pt: 5,
          pb: 5,
          px: { xs: 2, sm: 3, md: 4 },
          overflowY: "auto",
          [theme.breakpoints.down("md")]: {
            width: "100%",
            backgroundImage: "url(/genericBookshelves/4WallsVert.png)", // Replace with your frame image
            aspectRatio: "9/16", // e.g., if your image is 16:9. Adjust to match your image.
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          },
          [theme.breakpoints.up("md")]: {
            position: "relative",
            margin: "0 auto",
            width: "100%",
            maxWidth: "1200px",
            aspectRatio: "16/9", // e.g., if your image is 16:9. Adjust to match your image.
            backgroundImage: "url(/genericBookshelves/4Walls.png)", // Replace with your frame image
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          },
        }}
      >
        {/* Scrollable Content */}
        <Box
          sx={{
            overflowY: "auto",
            padding: { xs: 2, sm: 3, md: 4 },
            height: "100%", // fill the parent’s forced ratio
            width: "100%",
          }}
        >
          {/* Books Grid */}
          <Grid2 container spacing={2}>
            {filteredBooks.map((book) => (
              <Grid2
                size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
                key={book.id}
                sx={{ position: "relative" }}
              >
                <Card
                  onClick={() => handleBookClick(book)}
                  sx={{
                    cursor: "pointer",
                    boxShadow: "none",
                    background: "transparent",
                  }}
                >
                  <Image
                    src={book.cover}
                    alt={book.title}
                    width={150}
                    height={225}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>

      {/* Book Modal */}
      {activeBook && (
        <BookModal
          book={activeBook}
          open={openModal}
          onClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
}
