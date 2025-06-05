


import { useAuth } from '../../contexts/AuthContext';
import { Button, Box, Typography, Stack, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export default function DashboardPage() {
  const { user, logout, theme, toggleTheme } = useAuth();

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <Avatar sx={{ bgcolor: 'primary.main' }}>
          <PersonIcon />
        </Avatar>
        <Typography variant="h4" gutterBottom>
          Welcome, {user?.email}
        </Typography>
      </Box>
      
      <Stack spacing={2} sx={{ mt: 4 }}>
        <Button 
          variant="contained" 
          onClick={toggleTheme}
          sx={{ width: 200, mx: 'auto' }}
        >
          Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
        
        <Button 
          variant="outlined" 
          onClick={logout}
          sx={{ width: 200, mx: 'auto' }}
        >
          Logout
        </Button>
      </Stack>
    </Box>
  );
}


