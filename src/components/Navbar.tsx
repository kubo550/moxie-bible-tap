import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{ top: 0, zIndex: (theme) => theme.zIndex.drawer + 1 }}
      style={{ background: '#000000', opacity: '0.7' }}
    >
      <Toolbar>
        <Box
          component="a"
          href="https://moxieimpact.com/pages/qr-apparel"
          sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box component="img" src={logo} alt="Logo" sx={{ height: 50 }} />
        </Box>

        <Button color="inherit" component={Link} to="/" sx={{ ml: 2 }}>
          Home
        </Button>

        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
