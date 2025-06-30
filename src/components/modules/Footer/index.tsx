import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import { footerStyles } from './styles';

const resources = ["What's New", 'Developers', 'Releases', 'Support', 'Cookie Policy'];
const usefulLinks = ["What's New", 'Developers', 'Releases', 'Support', 'Cookie Policy'];

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Box sx={footerStyles.root}>
      <Box sx={footerStyles.container}>

        <Box sx={footerStyles.logoCol}>
          <Typography sx={footerStyles.logo}>NEWSVERSE</Typography>
          <Typography sx={footerStyles.desc}>
            The stars will never align, and the traffic lights of life will never all be green at the same time.The stars will never align, and the traffic lights.
          </Typography>
          <Box sx={footerStyles.social}>
            <IconButton sx={{ color: '#fff' }}><FacebookIcon /></IconButton>
            <IconButton sx={{ color: '#fff' }}><TwitterIcon /></IconButton>
            <IconButton sx={{ color: '#fff' }}><InstagramIcon /></IconButton>
            <IconButton sx={{ color: '#fff' }}><LinkedInIcon /></IconButton>
            <IconButton sx={{ color: '#fff' }}><YouTubeIcon /></IconButton>
          </Box>
        </Box>

        <Box sx={footerStyles.col}>
          <Typography sx={footerStyles.colTitle}>Resources</Typography>
          {resources.map((item) => (
            <Link key={item} href="#" sx={footerStyles.link}>{item}</Link>
          ))}
        </Box>

        <Box sx={footerStyles.col}>
          <Typography sx={footerStyles.colTitle}>Useful Links</Typography>
          {usefulLinks.map((item) => (
            <Link key={item} href="#" sx={footerStyles.link}>{item}</Link>
          ))}
        </Box>

        <Box sx={footerStyles.subscribeCol}>
          <Typography sx={footerStyles.subscribeTitle}>Subscribe Now</Typography>
          <form onSubmit={handleSubscribe}>
            <Box sx={footerStyles.subscribeBox}>
              <TextField
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                sx={footerStyles.subscribeInput}
                required
                variant="standard"
                InputProps={{ disableUnderline: true }}
              />
              <Button type="submit" sx={footerStyles.subscribeBtn}>
                <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 14h16M18 14l-4-4m4 4l-4 4" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Button>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Checkbox
                checked={checked}
                onChange={e => setChecked(e.target.checked)}
                sx={footerStyles.subscribeCheckbox}
                required
              />
              <Typography sx={footerStyles.subscribeLabel}>
                I have read and accept the Terms & Policy
              </Typography>
            </Box>
          </form>
        </Box>
      </Box>

      <Box sx={footerStyles.bottomBar}>
        <Typography>Copyright © NEWSVERSE 2025. All rights reserved</Typography>
        <Box sx={footerStyles.bottomLinks}>
          <Link href="#" sx={{ ...footerStyles.link, color: '#bdbdbd', marginRight: 8 }}>Privacy Policy</Link>
          <span>|</span>
          <Link href="#" sx={{ ...footerStyles.link, color: '#bdbdbd', marginLeft: 8 }}>Terms of Use</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer; 