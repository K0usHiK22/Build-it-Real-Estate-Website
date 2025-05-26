
# Build It - Real Estate: Project Documentation

## Overview

This project is a real estate website designed to showcase various properties and projects, provide customer reviews, and allow visitors to contact the business. The UI is designed to be sleek, modern, and fully responsive with smooth animations to enhance user experience.

## Components

### Header

- Displays a hero image background with a call-to-action  
- Uses motion for fade-in and slide animations  
- Contains the main Navbar  

### Navbar

- Responsive navigation with desktop and mobile support  
- Hamburger menu triggers a slide-down mobile menu  
- Hides/shows on scroll for better UX  
- Lazy loads MobileNavbar component  

### Projects

- Displays a carousel slider of projects with image, title, price, and location  
- Navigation arrows to move between projects  
- Responsive layout adjusts the number of cards shown based on screen size  
- Motion animations for smooth transitions  

### CustomerReviews

- Lazy-loaded component to optimize performance  
- Displays customer feedback  

### Contact

- Contact form with basic validation (can be extended)  
- Submit button to send inquiries  

### ChatAi

- AI-powered chatbot integrated via OpenAI API (currently under development)  
- Lazy loaded for performance  

## State Management

- Local React state and refs manage component visibility and user interactions (scrolling, menu toggling).  

## Deployment

- The project is deployed on Netlify with GitHub continuous deployment enabled.  
- Pushing updates to GitHub automatically triggers a new build and deploy.   
