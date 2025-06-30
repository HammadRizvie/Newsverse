export const scrollToTopButtonStyles = {
  button: {
    position: 'fixed',
    bottom: { xs: 16, sm: 32 },
    right: { xs: 16, sm: 32 },
    backgroundColor: '#3CFFD0',
    color: '#000',
    width: { xs: 40, sm: 56 },
    height: { xs: 40, sm: 56 },
    borderRadius: '50%',
    boxShadow: '0 4px 12px rgba(60, 255, 208, 0.3)',
    zIndex: 1000,
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#2EE6B8',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 16px rgba(60, 255, 208, 0.4)',
    },
  },
  icon: {
    fontSize: { xs: 22, sm: 28 },
    fontWeight: 'bold',
  },
}; 