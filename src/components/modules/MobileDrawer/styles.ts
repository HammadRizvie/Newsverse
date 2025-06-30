export const mobileDrawerStyles = {
  drawer: {
    width: 240,
    bgcolor: '#181818',
    color: '#fff',
  },
  container: {
    p: 3,
  },
  title: {
    mb: 2,
    fontFamily: 'Anton, sans-serif',
    color: '#3CFFD0',
    fontWeight: 700,
    fontSize: 24,
  },
  linkBox: {
    mb: 2,
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 18,
    fontWeight: 500,
    display: 'block',
    padding: '8px 0',
    borderRadius: 4,
    transition: 'background 0.2s, color 0.2s',
    cursor: 'pointer',
    '&:hover': {
      color: '#3CFFD0',
      background: 'rgba(60,255,208,0.08)',
    },
  },
}; 