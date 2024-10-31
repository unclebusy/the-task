import * as React from 'react';
import { Box, Button, Paper, TextField } from '@mui/material';

const ContactForm: React.FC = () => {
  return (
    <Paper elevation={3} sx={{ padding: 4, width: 400 }}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        display="flex"
        flexDirection="column"
        gap={2}
        marginBottom={2}
      >
        <TextField required id="input-name" label="Name" defaultValue="" />
        <TextField required id="input-email" label="Email" defaultValue="" />
        <TextField
          required
          multiline
          id="input-massage"
          label="Message"
          defaultValue=""
        />
      </Box>
      <Button
        variant="contained"
        fullWidth
        sx={{
          mt: 2,
          bgcolor: '#333',
          color: '#fff',
          '&:hover': { bgcolor: '#555' },
        }}
      >
        Submit
      </Button>
    </Paper>
  );
};

export default ContactForm;
