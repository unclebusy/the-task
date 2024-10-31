import * as React from 'react';
import { Box, Button, Paper, TextField } from '@mui/material';

interface ContactFormProps {
  onSubmit: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({onSubmit}) => {
  const [values, setValues] = React.useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = React.useState({ name: false, email: false, message: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setValues({ ...values, [id]: value });

    if (value) {
      setErrors({ ...errors, [id]: false });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: values.name === '',
      email: values.email === '',
      message: values.message === '',
    };
    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(error => error);
    if (!hasError) {

      console.log(`Thank you for your interest, ${values.name}!`);
      onSubmit();
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: {xs: 2, sm: 4, md: 4},  width: { xs: 360, sm: 400, md: 400 }, }}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        display="flex"
        flexDirection="column"
        gap={2}
        marginBottom={2}
      >
        <TextField id="name" label="Name" value={values.name} onChange={handleChange} error={errors.name}
                   helperText={errors.name ? 'This field is required' : ''} />
        <TextField id="email" label="Email" value={values.email} onChange={handleChange} error={errors.email}
                   helperText={errors.email ? 'This field is required' : ''} />
        <TextField
          multiline
          minRows={4}
          id="message"
          label="Message"
          value={values.message}
          onChange={handleChange}
          error={errors.message}
          helperText={errors.message ? 'This field is required' : ''}
        />
      </Box>
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          mt: 2,
          bgcolor: '#333',
          color: '#fff',
          '&:hover': { bgcolor: '#555' },
        }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Paper>
  );
};

export default ContactForm;
