import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FilterIcon from '@mui/icons-material/FilterAlt';
import SendIcon from '@mui/icons-material/Send';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { useTheme, useMediaQuery } from '@mui/material';
import { headerStyles } from './styles';
import BlackSliderOverlay from '../../elements/BlackSliderOverlay';
import SideDrawer from '../SideDrawer';
import MobileDrawer from '../MobileDrawer';

const Header: React.FC = () => {
  const [sliderOpen, setSliderOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navigationItems = [
    { label: 'Articles', path: '/articles' },
    { label: 'Personalized News Feed', path: '/news-feed' },
  ];

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleOpenSlider = (e: React.MouseEvent) => {
    setSliderOpen(true);
  };


  const showFilterIcon = location.pathname === '/articles' || location.pathname === '/news-feed';

  return (
    <>
      <AppBar position="static" color="transparent" sx={headerStyles.appBar}>
        <Toolbar sx={headerStyles.toolbar}>

          {isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
              <Typography
                variant="h4"
                sx={{ ...headerStyles.logo, ...headerStyles.logoMobile }}
                style={{ cursor: 'pointer' }}
                onClick={handleLogoClick}
              >
                NEWSVERSE
              </Typography>
              <Box sx={headerStyles.iconGroupMobile}>
                <IconButton onClick={handleOpenSlider}>
                  <SearchIcon sx={headerStyles.searchIcon} />
                </IconButton>
                {showFilterIcon && (
                  <IconButton onClick={() => setDrawerOpen(true)}>
                    <FilterIcon sx={headerStyles.menuIcon} />
                  </IconButton>
                )}
                <IconButton onClick={() => setMobileNavOpen(true)}>
                  <MenuIcon sx={headerStyles.menuIcon} />
                </IconButton>
              </Box>
            </Box>
          ) : (
            <>
              <Box sx={headerStyles.leftSection}>
                <Typography
                  variant="h4"
                  sx={headerStyles.logo}
                  style={{ cursor: 'pointer' }}
                  onClick={handleLogoClick}
                >
                  NEWSVERSE
                </Typography>
                <Box sx={headerStyles.navigation}>
                  {navigationItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography sx={headerStyles.navItem}>{item.label}</Typography>
                    </Link>
                  ))}
                </Box>
              </Box>
              <Box sx={headerStyles.rightSection}>
                <IconButton onClick={handleOpenSlider}>
                  <SearchIcon sx={headerStyles.searchIcon} />
                </IconButton>
                <Button
                  variant="outlined"
                  startIcon={<SendIcon sx={headerStyles.sendIcon} />}
                  sx={headerStyles.subscribeButton}
                >
                  Subscribe
                </Button>
                {showFilterIcon && (
                  <IconButton onClick={() => setDrawerOpen(true)}>
                    <FilterIcon sx={headerStyles.menuIcon} />
                  </IconButton>
                )}
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      <MobileDrawer
        open={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        navigationItems={navigationItems}
      />
      <BlackSliderOverlay open={sliderOpen} onClose={() => setSliderOpen(false)} />
      <SideDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default Header; 