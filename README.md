# The Task

This project is a responsive React-based web application built with TypeScript, Vite, and Material UI. It includes a contact form with backend integration, a video section optimized for performance, and sticky headers and footers for improved navigation. This project focuses on SEO, accessibility, and Core Web Vitals optimization.

## Table of Contents
- [Project Overview](#project-overview)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Features](#features)
- [SEO and Performance Optimization](#seo-and-performance-optimization)
- [Assumptions and Custom Techniques](#assumptions-and-custom-techniques)
- [License](#license)

---

## Project Overview

This project was developed as part of a test assignment for a front-end developer role. The main objectives include:
- Responsive design with a flexible layout for various screen sizes.
- Contact form that submits data to a backend, with required fields.
- Embedded YouTube video optimized to enhance Largest Contentful Paint (LCP).
- Sticky header and footer for a smooth user experience.
- Social media tags for better sharing options.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/the-task.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

To run both the frontend and backend locally:

1. **Start the backend server**:
   ```bash
   node server.js
   ```
   This will start a Node.js server on `http://localhost:3001` to handle form submissions.

2. **Start the Vite client**:
   ```bash
   npm run dev
   ```
   This will start the React development server at `http://localhost:5173`.

The frontend will interact with the backend server for form submissions, providing a complete workflow for testing.

## Features

1. **Responsive Design**: Layout adapts for various screen sizes using styled-components with media queries.
2. **Contact Form**:
    - Built with Material UI components and validated with Formik and Yup.
    - Fields are required (name, email, and message).
    - Data is submitted to the backend, which logs it to the console and returns a personalized response.
3. **Embedded Video**:
    - YouTube video is embedded using `lite-youtube-embed` for improved LCP.
4. **Sticky Header and Footer**:
    - Header and footer are sticky for smoother navigation.
5. **SEO and Social Media Optimization**:
    - Open Graph and Twitter meta tags are added for social media previews.

## SEO and Performance Optimization

- **SEO**:
    - Meta tags for Open Graph and Twitter are added in `index.html` for enhanced social sharing.
    - Semantic HTML and headings are used to improve accessibility and search engine indexing.
    - `aria-label` attributes are added to interactive elements to boost accessibility.

- **Performance**:
    - `lite-youtube-embed` optimizes the loading of embedded videos, improving the LCP metric.
    - CSS-in-JS (styled-components) is used for efficient styling and responsiveness.

## Assumptions and Custom Techniques

- **Custom CSS**: Styled-components with media queries provide responsive design with flexible styling.
- **Lite YouTube Embed**: `lite-youtube` enhances performance by loading the video only on user interaction.
- **Simple Node.js Backend**: A basic Express server handles form submission, logging data to the console and returning a custom response.

## License

This project is licensed under the MIT License.
