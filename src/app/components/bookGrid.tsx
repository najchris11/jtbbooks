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
    genres: { [key: string]: boolean };
    ageGroups: { [key: string]: boolean };
    tropes: { [key: string]: boolean };
  };
  searchQuery: string; // Explicitly declare searchQuery as a separate prop
}

export default function BookGrid({
  books,
  filters,
  searchQuery,
}: BookGridProps) {
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

  // Dynamic filtering logic
  const filteredBooks = sortedBooks.filter((book) => {
    const genreMatch =
      Object.keys(filters.genres).length === 0 ||
      Object.keys(filters.genres).some(
        (genre) => filters.genres[genre] && book.subGenres.includes(genre)
      );

    const ageGroupMatch =
      Object.keys(filters.ageGroups).length === 0 ||
      Object.keys(filters.ageGroups).some(
        (ageGroup) =>
          filters.ageGroups[ageGroup] && book.ageRange.includes(ageGroup)
      );

    const tropeMatch =
      Object.keys(filters.tropes).length === 0 ||
      Object.keys(filters.tropes).some(
        (trope) => filters.tropes[trope] && book.tropes.includes(trope)
      );

    // Example: modifies the search query logic to also match subGenres and tropes

    const searchQueryMatch =
      searchQuery === "" ||
      // Title or Author contain the query?
      book.title.toLowerCase().includes(searchQuery) ||
      book.author.toLowerCase().includes(searchQuery) ||
      // subGenres contain the query? (Assuming subGenres is an array of strings)
      (book.subGenres &&
        book.subGenres.some((subGenre) =>
          subGenre.toLowerCase().includes(searchQuery)
        )) ||
      // ageRanges contain the query? (Assuming ageRanges is an array of strings)
      (book.ageRange &&
        book.ageRange.some((ageRange) =>
          ageRange.toLowerCase().includes(searchQuery)
        )) ||
      // tropes contain the query? (Assuming tropes is an array of strings)
      (book.tropes &&
        book.tropes.some((trope) => trope.toLowerCase().includes(searchQuery)));

    return genreMatch && ageGroupMatch && tropeMatch && searchQueryMatch;
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
