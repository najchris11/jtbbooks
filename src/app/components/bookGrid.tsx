"use client";

import { useState } from "react";
import { Grid2, Box, Card, useMediaQuery } from "@mui/material";
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

  // Dynamic filtering logic
  const filteredBooks = books.filter((book) => {
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

    const searchQueryMatch =
      searchQuery === "" ||
      book.title.toLowerCase().includes(searchQuery) ||
      book.author.toLowerCase().includes(searchQuery);

    return genreMatch && ageGroupMatch && tropeMatch && searchQueryMatch;
  });

  const handleBookClick = (book: Book) => {
    setActiveBook(book);
    setOpenModal(true);
  };

  // Breakpoint detection
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));
  // const isXl = useMediaQuery(theme.breakpoints.only('xl'));

  const columns = {
    xs: 2,
    sm: 3,
    md: 4,
    lg: 6,
    xl: 6,
  };

  const currentBreakpoint = isXs
    ? "xs"
    : isSm
    ? "sm"
    : isMd
    ? "md"
    : isLg
    ? "lg"
    : "xl";

  const columnsPerRow = columns[currentBreakpoint];

  return (
    <>
      {/* Bookshelf Frame */}
      <Box
        sx={{
          pt: 5,
          pb: 5,
          px: { xs: 2, sm: 3, md: 4 },
          overflowY: "auto",
          
          transform: "none", // default
          [theme.breakpoints.down("md")]: {
            width: "100%",
            minHeight: "100vh",
            backgroundImage: "url(/genericBookshelves/4WallsFlipped.png)", // Replace with your frame image
            backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          },
          [theme.breakpoints.up('md')]: {
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
            {filteredBooks.map((book, index) => (
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
                {/* Shelf Divider */}
                {((index + 1) % columnsPerRow === 0 ||
                  index === filteredBooks.length - 1) && (
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: -10,
                      left: 0,
                      width: "100%",
                      height: "10px",
                      backgroundImage: "url(/shelf.png)", // Replace with your shelf image
                      backgroundRepeat: "repeat-x",
                    }}
                  />
                )}
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
