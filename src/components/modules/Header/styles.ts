export const headerStyles = {
  appBar: {
    paddingTop: { xs: '10px', sm: '8px' },
    paddingBottom: { xs: '3px', sm: '8px' },
    background: '#131313',
    boxShadow: 'none',
    borderBottom: `1px solid #848484`,
    alignItems: 'center',
  },
  
  toolbar: {
    width: '100%',
    maxWidth: 1200,
    margin: '0 auto',
    justifyContent: 'space-between',
    minHeight: { xs: 56, sm: 80 },
    paddingLeft: { xs: 1, sm: 4 },
    paddingRight: { xs: 1, sm: 4 },
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: { xs: 'flex-start', sm: 'center' },
    gap: { xs: 1, sm: 0 },
  },
  
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: { xs: 2, sm: 6 },
    width: { xs: '100%', sm: 'auto' },
    justifyContent: { xs: 'center', sm: 'flex-start' },
    mb: { xs: 1, sm: 0 },
  },
  
  logo: {
    color: '#3CFFD0',
    fontWeight: 700,
    fontFamily: "'Anton', sans-serif",
    letterSpacing: 2,
    fontSize: { xs: 24, sm: 32 },
    lineHeight: 1,
    mr: { xs: 2, sm: 4 },
  },
  
  logoMobile: {
    ml: 2,
  },
  
  iconGroupMobile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 0,
    mr: 2,
  },
  
  navigation: {
    display: 'flex',
    gap: { xs: 2, sm: 4 },
    flexWrap: { xs: 'wrap', sm: 'nowrap' },
    width: { xs: '100%', sm: 'auto' },
    justifyContent: { xs: 'center', sm: 'flex-start' },
    mb: { xs: 1, sm: 0 },
  },
  
  navItem: {
    color: '#fff',
    fontFamily: "'Montserrat', sans-serif",
    fontSize: { xs: 16, sm: 18 },
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'color 0.2s',
    '&:hover': {
      color: '#3CFFD0',
    },
  },
  
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: { xs: 1, sm: 2 },
    width: { xs: '100%', sm: 'auto' },
    justifyContent: { xs: 'center', sm: 'flex-end' },
    mb: { xs: 1, sm: 0 },
  },
  
  searchIcon: {
    color: '#848484',
    fontSize: { xs: 28, sm: 36 },
    mr: 1,
    transition: 'color 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      color: '#3CFFD0',
      transition: 'color 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  
  subscribeButton: {
    color: '#fff',
    borderColor: '#3CFFD0',
    fontFamily: "'Anton', sans-serif",
    fontWeight: 700,
    fontSize: { xs: 16, sm: 20 },
    px: { xs: 2, sm: 3 },
    py: { xs: 0.8, sm: 1.2 },
    borderRadius: 0,
    boxShadow: 'none',
    background: 'transparent',
    textTransform: 'none',
    transition: 'color 0.2s, border-color 0.2s',
    '&:hover': {
      borderColor: '#3CFFD0',
      color: '#3CFFD0',
      background: 'transparent',
    },
  },
  
  sendIcon: {
    transform: 'rotate(-50deg)',
    mb: '5px',
    transition: 'color 0.2s',
    color: '#fff',
    '.MuiButton-root:hover &': {
      color: '#fff',
    },
    fontSize: { xs: 18, sm: 24 },
  },
  
  menuIcon: {
    color: '#848484',
    ml: 2,
    fontSize: { xs: 30, sm: 38 },
    transition: 'color 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      color: '#3CFFD0',
      transition: 'color 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    },
  }
}; 