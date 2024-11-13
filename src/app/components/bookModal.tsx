'use client';

import { Modal, Box, Typography } from '@mui/material';
import { Book } from '@/app/types';

interface BookModalProps {
  book: Book;
  open: boolean;
  onClose: () => void;
}

export default function BookModal({ book, open, onClose }: BookModalProps) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="book-modal-title">
      <Box sx={style}>
        <Typography id="book-modal-title" variant="h6" component="h2">
          {book.title}
        </Typography>
        <Typography sx={{ mt: 2 }}>{book.description}</Typography>
      </Box>
    </Modal>
  );
}