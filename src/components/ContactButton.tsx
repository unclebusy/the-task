import * as React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ContactButton: React.FC = () => {
  const navigate = useNavigate();

  return (<Button variant="contained" onClick={() => navigate('/contact')}>Contact Us</Button>);
};

export default ContactButton;
