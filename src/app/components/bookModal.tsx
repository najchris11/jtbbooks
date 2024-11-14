'use client';

import { Modal, Box, Typography, Button, Tooltip, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Book } from '../types';

interface BookModalProps {
  book: Book;
  open: boolean;
  onClose: () => void;
}

export default function BookModal({ book, open, onClose }: BookModalProps) {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="book-modal-title" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box
        sx={{
          position: 'relative',
          maxWidth: 500,
          width: '90%',
          backgroundColor: 'background.paper',
          padding: 3,
          borderRadius: 2,
          boxShadow: 5,
          textAlign: 'center',
        }}
      >
        {/* Close Button */}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>

        {/* Book Cover */}
        <Box
          component="img"
          src={book.cover}
          alt={book.title}
          sx={{
            width: '100%',
            maxWidth: 300,
            borderRadius: 2,
            mb: 2,
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />

        {/* Tooltip for Tropes/Themes */}
        <Tooltip title="Tropes/Themes">
          <Typography variant="caption" display="block" gutterBottom>
            {book.themes}
          </Typography>
        </Tooltip>

        {/* Book Blurb */}
        <Typography variant="body1" sx={{ mt: 2 }}>
          {book.description}
        </Typography>
      </Box>
    </Modal>
  );
}