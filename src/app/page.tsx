'use client';

import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: 2,
      }}
    >
      <Box
        sx={{
          width: {
            xs: '90%',   // Mobile screens
            sm: '80%',   // Tablets
            md: '60%',   // Small desktops
            lg: '50%',   // Larger desktops
          },
          backgroundColor: 'background.paper',
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Your Bookshelf
        </Typography>
        <Typography variant="body1">
          Discover a curated selection of books. Start browsing and explore your favorite genres.
        </Typography>
      </Box>
    </Box>
  );
}