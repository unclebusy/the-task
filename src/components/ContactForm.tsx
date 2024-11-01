import * as React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Box, Button, Paper, TextField } from '@mui/material';


interface ContactFormProps {
  onSubmit: () => void;
}

const validationSchema = Yup.object({
  name: Yup.string().matches(/^[A-Za-zА-Яа-яЁё\s]+$/, 'Only letters are allowed') .required('This field is required'),
  email: Yup.string().email('Invalid email address').required('This field is required'),
  message: Yup.string().required('This field is required'),
});

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: { xs: 2, sm: 4, md: 4 },
        width: { xs: 360, sm: 400, md: 400 },
      }}
    >
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            const response = await axios.post('http://localhost:3001/api/contact', values);
            console.log(response.data.message);
            onSubmit();
            resetForm();
          } catch (error) {
            console.error("Submission failed", error);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form noValidate autoComplete="off">
            <Box display="flex" flexDirection="column" gap={2} marginBottom={2}>
              <Field
                as={TextField}
                id="name"
                name="name"
                label="Name"
                error={touched.name && !!errors.name}
                helperText={<ErrorMessage name="name" />}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: '#555555', // Цвет рамки при фокусе
                    },
                    '&.Mui-focused .MuiInputBase-input': {
                      color: '#555555', // Цвет текста при фокусе
                    },
                  },
                  '& .MuiInputLabel-root': {
                    '&.Mui-focused': {
                      color: '#555555', // Цвет лейбла при фокусе
                    },
                  },
                }}
              />
              <Field
                as={TextField}
                id="email"
                name="email"
                label="Email"
                error={touched.email && !!errors.email}
                helperText={<ErrorMessage name="email" />}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: '#555555',
                    },
                    '&.Mui-focused .MuiInputBase-input': {
                      color: '#555555',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    '&.Mui-focused': {
                      color: '#555555',
                    },
                  },
                }}
              />
              <Field
                as={TextField}
                multiline
                minRows={4}
                id="message"
                name="message"
                label="Message"
                error={touched.message && !!errors.message}
                helperText={<ErrorMessage name="message" />}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: '#555555',
                    },
                    '&.Mui-focused .MuiInputBase-input': {
                      color: '#555555',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    '&.Mui-focused': {
                      color: '#555555',
                    },
                  },
                }}
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
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default ContactForm;

