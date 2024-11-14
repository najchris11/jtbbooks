'use client';

import * as React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = [
  { label: 'Home', path: '/' },
  { label: 'Black Love', path: '/blackLove' },
  { label: 'Fantasy', path: '/fantasy' },
  { label: 'Authors', path: '/authors' },
  // Add additional pages here
];

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (path: string) => {
    handleCloseNavMenu();
    router.push(path);
  };

  return (
    <AppBar position="static" sx={{ paddingTop: 2 }}> {/* Adds top padding to bring down brand name */}
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            flexDirection: { xs: 'row', md: 'column' },
            alignItems: { xs: 'center', md: 'center' },
          }}
        >
          {/* Mobile Menu Icon on the left */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, marginRight: 1 }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Brand Name and Icon */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: { md: 1 }, flexGrow: { xs: 1, md: 0 } }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                textAlign: 'center',
                marginLeft: { xs: 1, md: 0 }, // Offset brand name on mobile
              }}
            >
              Jump the Broom Books
            </Typography>
            <AdbIcon sx={{ ml: 1 }} />
          </Box>

          {/* Desktop Menu (Tabs below the brand name) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page.path}
                onClick={() => handleNavigate(page.path)}
                sx={{
                  my: 1,
                  mx: 1.5,
                  color: 'white',
                  borderBottom: pathname === page.path ? '2px solid white' : 'none',
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu */}
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            {pages.map((page) => (
              <MenuItem key={page.path} onClick={() => handleNavigate(page.path)}>
                <Typography textAlign="center">{page.label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;