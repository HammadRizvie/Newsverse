import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { mobileDrawerStyles } from './styles';
import { MobileDrawerProps } from "../../../types";

const MobileDrawer: React.FC<MobileDrawerProps> = ({ open, onClose, navigationItems }) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{ sx: mobileDrawerStyles.drawer }}
    >
      <Box sx={mobileDrawerStyles.container}>
        <Typography variant="h6" sx={mobileDrawerStyles.title}>Menu</Typography>
        {navigationItems.map((item) => (
          <Box key={item.path} sx={mobileDrawerStyles.linkBox}>
            <Link
              to={item.path}
              style={mobileDrawerStyles.link as React.CSSProperties}
              onClick={onClose}
            >
              {item.label}
            </Link>
          </Box>
        ))}
      </Box>
    </Drawer>
  );
};

export default MobileDrawer; 