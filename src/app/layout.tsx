import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import "./globals.css";
import Navbar from "./components/navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
        <Analytics />
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
              <SpeedInsights />
              <Box component="main" sx={{ flexGrow: 1 }}>
              <Analytics />
                {children}
              </Box>
              <Box
                component="footer"
                sx={{
                  py: 2,
                  px: 2,
                  mt: 'auto',
                  backgroundColor: 'background.paper',
                  borderTop: 1,
                  borderColor: 'divider',
                  textAlign: 'center',
                }}
              >
                <Link
                  href="https://discord.gg/SWVQ36VVjA"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textDecoration: 'none',
                    color: 'primary.main',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                    fontSize: {
                      xs: '0.875rem',
                      sm: '1rem',
                    },
                  }}
                >
                  Join our Discord!
                </Link>
              </Box>
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}