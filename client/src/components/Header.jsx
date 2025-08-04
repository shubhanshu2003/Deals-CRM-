import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const Header = () => {
  return (
    <AppBar position="static" color="primary" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Toolbar>
        <BusinessCenterIcon sx={{ mr: 2 }} />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Deals CRM
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;