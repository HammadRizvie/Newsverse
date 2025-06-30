import React, { useEffect, useState, useRef } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { blackSliderOverlayStyles } from './styles';
import { useSearch } from '../../../context/SearchContext';
import { BlackSliderOverlayProps } from "../../../types";

const ICON_SIZE = 36;

const BlackSliderOverlay: React.FC<BlackSliderOverlayProps> = ({ open, onClose }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [overSearchField, setOverSearchField] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { setSearchKeyword } = useSearch();

  useEffect(() => {
    if (open) {
      setSearchValue('');
    }
    if (!open) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleEsc);
    };
  }, [open, onClose]);

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchKeyword(searchValue);
      onClose();
    }
  };

  const handleSearchIconClick = () => {
    setSearchKeyword(searchValue);
    onClose();
  };

  return (
    <Box
      sx={{
        ...blackSliderOverlayStyles.sliderOverlay,
        ...(open ? blackSliderOverlayStyles.sliderOverlayOpen : {}),
        ...(overSearchField ? blackSliderOverlayStyles.sliderOverlayCursorDefault : {}),
        pointerEvents: open ? 'auto' : 'none',
      }}
      onClick={open ? onClose : undefined}
    >
      <Box
        sx={blackSliderOverlayStyles.searchFieldContainer}
        onMouseEnter={() => setOverSearchField(true)}
        onMouseLeave={() => setOverSearchField(false)}
        onClick={e => e.stopPropagation()}
      >
        <TextField
          inputRef={inputRef}
          type="text"
          placeholder="Type Keywords Here......"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          onKeyDown={handleInputKeyDown}
          sx={blackSliderOverlayStyles.searchInput}
          variant="standard"
          InputProps={{ 
            disableUnderline: true,
            style: {
              fontSize: 'inherit',
              color: 'inherit',
            }
          }}
          inputProps={{
            style: {
              fontSize: 'inherit',
              color: 'inherit',
            }
          }}
        />
        <SearchIcon
          sx={{ ...blackSliderOverlayStyles.searchIcon, cursor: 'pointer' }}
          onClick={handleSearchIconClick}
        />
      </Box>

      {open && !overSearchField && (
        <Box
          sx={{
            position: 'fixed',
            left: mousePos.x - ICON_SIZE / 2,
            top: mousePos.y - ICON_SIZE / 2,
            zIndex: 1400,
            pointerEvents: 'auto',
          }}
          onClick={e => {
            e.stopPropagation();
            onClose();
          }}
        >
          <IconButton
            sx={{ ...blackSliderOverlayStyles.closeIcon, pointerEvents: 'none' }}
            disableRipple
            disableFocusRipple
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default BlackSliderOverlay; 