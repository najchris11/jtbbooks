"use client";
import { Box, Typography } from "@mui/material";
import theme from "@/theme";

export default function Fantasy() {

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full viewport height
        backgroundColor: theme.palette.background.default, // Use default background color
      }}
    >
      <Box
        sx={{
          padding: 4,
          backgroundColor: theme.palette.background.paper, // Use secondary background color
          borderRadius: 2,
          boxShadow: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h1" sx={{ color: theme.palette.text.primary }}>
          Coming soon!
        </Typography>
      </Box>
    </Box>
  );
}