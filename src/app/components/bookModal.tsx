"use client";

import {
  Modal,
  Box,
  Typography,
  IconButton,
  Button,
  Tooltip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Book } from "../types";

interface BookModalProps {
  book: Book;
  open: boolean;
  onClose: () => void;
}

export default function BookModal({ book, open, onClose }: BookModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="book-modal-title"
      aria-describedby="book-modal-description"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          position: "relative",
          maxWidth: 600,
          width: "90vw",
          maxHeight: "80vh",
          overflowY: "auto",
          backgroundColor: "background.paper",
          padding: 4,
          borderRadius: 3,
          boxShadow: 5,
          textAlign: "center",
        }}
      >
        {/* Close Button */}
        <IconButton
          aria-label="Close modal"
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Book Cover */}
        <Box
          component="img"
          src={book.cover}
          alt={`Cover of ${book.title}`}
          sx={{
            width: "100%",
            maxWidth: 300,
            margin: "0 auto",
            borderRadius: 2,
            mb: 3,
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />

        {/* Book Details */}
        <Typography variant="h5" id="book-modal-title" gutterBottom>
          {book.title}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "text.secondary", mb: 2 }}>
          by {book.author}
        </Typography>

        {/* Tooltip for Tropes/Themes */}
        <Tooltip title="Tropes and Themes">
          <Typography
            variant="body2"
            sx={{ fontStyle: "italic", color: "text.secondary" }}
          >
            {[...book.subGenres, ...book.tropes, ...book.ageRange]
              .sort()
              .join(", ")}
          </Typography>
        </Tooltip>

        {/* Book Description */}
        <Typography
          variant="body1"
          id="book-modal-description"
          sx={{ mt: 3, mb: 3, lineHeight: 1.6 }}
        >
          {book.description}
        </Typography>

        {/* Buy Now Button */}
        <Button
          variant="contained"
          sx={{
            padding: "10px 20px",
            fontSize: "1rem",
            textTransform: "none",
          }}
          href={book.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download for Free
        </Button>
      </Box>
    </Modal>
  );
}
