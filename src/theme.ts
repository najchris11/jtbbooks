'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true, // Enables CSS variables for theme colors
  palette: {
    primary: {
      main: '#57266D', // Honey Flower
      light: '#BD9CD3', // Light Pastel Purple
      dark: '#833F3F', // Lotus
    },
    secondary: {
      main: '#F4D5D5', // Pastel Pink
      light: '#F6E6EB', // Dawn Pink
      dark: '#D59090', // Dusty Pink
    },
    background: {
      default: '#F6E6EB', // Dawn Pink (for background)
      paper: '#F4D5D5', // Pastel Pink (for card/paper elements)
    },
    text: {
      primary: '#57266D', // Dark text on light background
      secondary: '#833F3F', // Slightly lighter text option
    },
    action: {
      active: '#57266D', // Active elements, e.g., buttons, icons
      hover: '#D59090', // Hover state for elements
      selected: '#BD9CD3', // Selected state for elements
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Default font for body text
    h1: {
      fontFamily: 'Gloria, Arial, sans-serif', // Custom font for headers
    },
    h2: {
      fontFamily: 'Gloria, Arial, sans-serif', // Custom font for headers
    },
    h3: {
      fontFamily: 'Gloria, Arial, sans-serif', // Custom font for headers
    },
    h4: {
      fontFamily: 'Gloria, Arial, sans-serif', // Custom font for headers
    },
    h5: {
      fontFamily: 'Gloria, Arial, sans-serif', // Custom font for headers
    },
    h6: {
      fontFamily: 'Gloria, Arial, sans-serif', // Custom font for headers
    },
  },
});

export default theme;