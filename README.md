# Harkirat Singh - Portfolio Website

A modern, responsive portfolio website showcasing my skills, experience, and projects as a Full Stack Developer. Built with React, Framer Motion, and Tailwind CSS.

![Portfolio Preview](https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600)

## 🌟 Features

- **Modern Design**: Clean, professional design with glass morphism effects and gradient animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful scroll animations powered by Framer Motion
- **Interactive Navigation**: Smooth scrolling navigation with active section highlighting
- **Contact Form**: Interactive contact form for easy communication
- **Dark Theme**: Elegant dark theme with blue and purple accent colors
- **Performance Optimized**: Fast loading times with optimized assets

## 🚀 Sections

- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About Me**: Personal introduction and background information
- **Skills**: Technical skills with animated progress bars
- **Experience**: Professional experience and work history
- **Projects**: Showcase of featured projects with technologies used
- **Contact**: Contact information and contact form

## 🛠️ Technologies Used

### Frontend
- **React 18** - Modern React with hooks
- **Framer Motion** - Smooth animations and transitions
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Vite** - Fast build tool and development server

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/harkirat-singh2/harkirat-portfolio.git
   cd harkirat-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
harkirat-portfolio/
├── public/
│   └── harkirat-portrait.jpg    # Profile image
├── src/
│   ├── App.jsx                  # Main application component
│   ├── index.css                # Global styles and Tailwind imports
│   └── main.jsx                 # Application entry point
├── package.json                 # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## 🎨 Customization

### Colors and Styling
The portfolio uses a custom color scheme with blue and purple gradients. You can modify the colors in:
- `src/index.css` - Custom CSS variables and animations
- `tailwind.config.js` - Tailwind color extensions

### Content Updates
To update the content:
- **Personal Information**: Edit the text content in `src/App.jsx`
- **Skills**: Modify the `skills` array in the App component
- **Projects**: Update the `projects` array with your own projects
- **Contact Information**: Update email, phone, and social media links

### Profile Image
Replace `public/harkirat-portrait.jpg` with your own profile image.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

### GitHub Pages
1. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 📞 Contact Information

- **Email**: harkirat.email@gmail.com
- **Phone**: +91 9453675860
- **Location**: Pune, India
- **GitHub**: [harkirat-singh2](https://github.com/harkirat-singh2)
- **LinkedIn**: [Harkirat Singh](https://www.linkedin.com/in/harkirat-singh-83862a27a)

## 🤝 Contributing

While this is a personal portfolio, if you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Icons provided by [Lucide React](https://lucide.dev/)
- Images from [Pexels](https://www.pexels.com/)
- Animation library by [Framer Motion](https://www.framer.com/motion/)

---

**Built with ❤️ by Harkirat Singh** 