'use client';

import { useState } from 'react';
import { Grid2, Box, Card, CardMedia, Modal, Typography } from '@mui/material';
import { Book } from '@/app/types';
import BookModal from '@/app/components/bookModal';

interface BookGridProps {
  books: Book[];
  selectedGenre: string;
}

export default function BookGrid({ books, selectedGenre }: BookGridProps) {
  const [openModal, setOpenModal] = useState(false);
  const [activeBook, setActiveBook] = useState<Book | null>(null);

  const filteredBooks = selectedGenre === 'All' ? books : books.filter((book) => book.genre === selectedGenre);

  const handleBookClick = (book: Book) => {
    setActiveBook(book);
    setOpenModal(true);
  };

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: 800,
          margin: '0 auto',
          backgroundImage: 'url(/bookshelf-frame.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: 500,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            right: '10%',
            bottom: '10%',
            overflowY: 'scroll',
          }}
        >
          <Grid2 container spacing={2}>
            {filteredBooks.map((book) => (
              <Grid2 size={{ xs: 6, md: 2, sm: 4 }} key={book.id}>
                <Card onClick={() => handleBookClick(book)} sx={{ cursor: 'pointer' }}>
                  <CardMedia
                    component="img"
                    image={book.cover}
                    alt={book.title}
                    sx={{ height: 200 }}
                  />
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>
      {activeBook && (
        <BookModal book={activeBook} open={openModal} onClose={() => setOpenModal(false)} />
      )}
    </>
  );
}