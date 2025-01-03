import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import "./globals.css";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "JTB Books",
  description: "Jump into the world of books with JTB Books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <ThemeProvider theme={theme}>
            <CssBaseline /> {/* Global CSS reset */}
            <Box
              sx={{
                minHeight: '100vh',
                backgroundColor: 'background.default', // Set background from theme
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Navbar />
              <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
              </Box>
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}