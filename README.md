# Personal Portfolio
This is the source code for my personal portfolio website. It showcases my technical skills, experience, and a collection of personal projects I've worked on. Built with modern web technologies, this portfolio is designed to provide a professional online presence to link to all my work and connect with potential employers or collaborators.

## Technologies Used
- **Backend:** Node.js, Express.js
- **Frontend:** JavaScript, React, Chakra UI
- **Database:** MongoDB (NoSQL for storing project data and other information)
- **Design:** Figma (layout and structure)
- **Contact:** EmailJS (for sending messages via the contact form)

## Features
- **Interactive Portfolio:** Links to personal projects, each with detailed descriptions.
- **Technical Skills Showcase:** Displays technical skills with links to documentation.
- **Contact Form:** Allows visitors to reach out easily via a direct email service.
- **Responsive Design:** The website is fully responsive, ensuring a seamless experience across different devices (desktop, tablet, mobile).
- **Clean and Modern UI:** Designed with Chakra UI for a simple, professional look.
- **Easy Navigation:** User-friendly interface that allows easy access to different sections of the portfolio.

## Deployment
The portfolio website is deployed on a DigitalOcean Droplet running Ubuntu OS. The application is configured with Nginx as a reverse proxy to manage traffic between the frontend and backend.

### Deployment Overview:
- **DigitalOcean Droplet:** The application is hosted on a DigitalOcean droplet running Ubuntu 24.10.
- **Backend:** The backend server (built with Node.js and Express) handles API requests and serves dynamic content.
- **Frontend:** The React frontend is built and served as static files.
- **Nginx:** Configured as a reverse proxy to serve the React app and forward API requests to the Node.js server.

#### Nginx is set up to:
1. Serve the static files of the React frontend from the build directory.
2. Proxy API requests to the Node.js backend, ensuring clean URL routing and efficient request handling.

*This setup provides a secure environment for hosting the portfolio with efficient traffic management and high availability.*

## Preview
![Content Preview](https://github.com/user-attachments/assets/d118076d-b90d-4060-8c27-4cf75ac82991)

---
### Visit Deployment
[www.ksandeen.com](https://www.ksandeen.com)
