import * as React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ContactButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Button
      aria-label="Contact us"
      variant="contained"
      sx={{ bgcolor: '#333', color: '#fff', '&:hover': { bgcolor: '#555' }}}
      onClick={() => navigate('/contact')}
    >
      Contact Us
    </Button>
  );
};

export default ContactButton;
