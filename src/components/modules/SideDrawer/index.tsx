import React from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Chip from '@mui/material/Chip';
import { sideDrawerStyles } from './styles';
import { SideDrawerProps } from "../../../types";
import { useFilter } from '../../../context/FilterContext';

const categories = ['business', 'entertainment', 'general', 'health' , 'science', 'sports', 'technology'];
const sources = ['Politico', 'CNN', 'Bloomberg'];
const authors = ['CBS Sports', 'Jamie Tarabay', 'John Fritze, Devan Cole', 'Veronika Melkozerova'];


const SideDrawer: React.FC<SideDrawerProps> = ({ open, onClose }) => {
  const location = useLocation();
  const { 
    pendingFromDate, 
    pendingToDate, 
    pendingSources, 
    pendingCategory, 
    pendingAuthor,
    setPendingFromDate, 
    setPendingToDate, 
    setPendingSources, 
    setPendingCategory,
    setPendingAuthor,
    applyFilters
  } = useFilter();

  const drawerRef = React.useRef<HTMLDivElement>(null);

  // Determine which filters to show
  const isArticles = location.pathname === '/articles';
  const isNewsFeed = location.pathname === '/news-feed';

  const handleFilterApply = () => {
    applyFilters(); // Apply pending filters to actual filters
    onClose();
  };

  return (
    <>
      {open && (
        <Box
          onClick={onClose}
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.5)',
            zIndex: 1200,
            pointerEvents: 'auto',
          }}
        />
      )}
      <Box
        ref={drawerRef}
        sx={{
          ...sideDrawerStyles.drawer,
          ...(open ? sideDrawerStyles.drawerOpen : {}),
          overflow: 'visible',
          zIndex: 1300,
        }}
      >
        {/* Header */}
        <Box sx={sideDrawerStyles.header}>
          <Typography sx={sideDrawerStyles.logo}>
            NEWSVERSE
          </Typography>
          <IconButton onClick={onClose} sx={sideDrawerStyles.closeIcon}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </Box>
        {/* News Cards */}
        <Box sx={sideDrawerStyles.newsList}>      
          {/* Filters Section */}
          <Box sx={sideDrawerStyles.filterSection}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              {(isArticles) && (
                <Box sx={{ mb: 2 }}>
                  <DatePicker
                    label="From Date"
                    value={pendingFromDate}
                    onChange={setPendingFromDate}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        sx: sideDrawerStyles.filterDatePicker,
                        InputProps: {
                          readOnly: true,
                          style: { color: '#fff' }
                        },
                      },
                      popper: {
                        disablePortal: true,
                      },
                    }}
                  />
                  <DatePicker
                    label="To Date"
                    value={pendingToDate}
                    onChange={setPendingToDate}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        sx: sideDrawerStyles.filterDatePicker,
                        InputProps: {
                          readOnly: true,
                          style: { color: '#fff' }
                        },
                      },
                      popper: {
                        disablePortal: true,
                      },
                    }}
                  />
                </Box>
              )}
              {(isArticles || isNewsFeed) && (
                <Box sx={{ mb: 2 }}>
                  <Typography sx={sideDrawerStyles.filterLabel}>
                    Categories
                  </Typography>
                  <Box sx={sideDrawerStyles.filterChipGroup}>
                    {categories.map((cat) => (
                      <Chip
                        key={cat}
                        label={cat}
                        clickable
                        onClick={() => setPendingCategory(cat)}
                        color={pendingCategory === cat ? 'primary' : 'default'}
                        sx={{
                          ...sideDrawerStyles.filterChip,
                          ...(pendingCategory === cat ? sideDrawerStyles.filterChipSelected : {}),
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              )}
              {(isArticles || isNewsFeed) && (
                <Box sx={{ mb: 2 }}>
                  <Typography sx={sideDrawerStyles.filterLabel}>
                    Sources
                  </Typography>
                  <Box sx={sideDrawerStyles.filterChipGroup}>
                    {sources.map((src) => (
                      <Chip
                        key={src}
                        label={src}
                        clickable
                        onClick={() => setPendingSources(src)}
                        color={pendingSources === src ? 'primary' : 'default'}
                        sx={{
                          ...sideDrawerStyles.filterChip,
                          ...(pendingSources === src ? sideDrawerStyles.filterChipSelected : {}),
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              )}
              {isNewsFeed && (
                <Box sx={{ mb: 2 }}>
                  <Typography sx={sideDrawerStyles.filterLabel}>
                    Authors
                  </Typography>
                  <Box sx={sideDrawerStyles.filterChipGroup}>
                    {authors.map((auth) => (
                      <Chip
                        key={auth}
                        label={auth}
                        clickable
                        onClick={() => setPendingAuthor(auth)}
                        color={pendingAuthor === auth ? 'primary' : 'default'}
                        sx={{
                          ...sideDrawerStyles.filterChip,
                          ...(pendingAuthor === auth ? sideDrawerStyles.filterChipSelected : {}),
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              )}
            </LocalizationProvider>
            <Button
              variant="outlined"
              fullWidth
              sx={sideDrawerStyles.filterButton}
              onClick={handleFilterApply}
            >
              Apply Filters
            </Button>
            <Divider sx={sideDrawerStyles.divider} />
          </Box>
        </Box>

        <Box sx={sideDrawerStyles.socialIcons}>
          <IconButton sx={sideDrawerStyles.socialIconBtn}><FacebookIcon /></IconButton>
          <IconButton sx={sideDrawerStyles.socialIconBtn}><TwitterIcon /></IconButton>
          <IconButton sx={sideDrawerStyles.socialIconBtn}><InstagramIcon /></IconButton>
          <IconButton sx={sideDrawerStyles.socialIconBtn}><LinkedInIcon /></IconButton>
          <IconButton sx={sideDrawerStyles.socialIconBtn}><YouTubeIcon /></IconButton>
        </Box>
      </Box>
    </>
  );
};

export default SideDrawer; 