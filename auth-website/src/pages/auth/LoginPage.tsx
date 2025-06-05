

import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { TextField, Button, Box, Typography } from '@mui/material';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button 
          type="submit" 
          variant="contained" 
          fullWidth 
          sx={{ 
            mt: 2,
            backgroundColor: 'black',
            '&:hover': {
              backgroundColor: '#333'
            }
          }}
        >
          Login
        </Button>
      </form>
    </Box>
  );
}

