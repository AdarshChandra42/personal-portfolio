# Interactive Portfolio Website

A modern, interactive portfolio website built with React, Three.js, and Express.js featuring 3D animations, custom cursor effects, and a beautiful dark theme.

## Features

### 🎨 Design & UI
- **Custom Cursor**: Interactive circular cursor that distorts when hovering over elements
- **Three.js Background**: Animated particles and floating geometric shapes
- **Dark Theme**: Modern gradient backgrounds with glassmorphism effects
- **Responsive Design**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion powered animations and transitions

### 📱 Sections
- **Hero Section**: Animated introduction with 3D floating code symbol
- **About Me**: Personal information with animated skills tags and 3D sphere
- **Education Roadmap**: Interactive timeline with animated 3D path
- **Projects Gallery**: Showcase of projects with 3D cube animations
- **Contact Form**: Working contact form with Two email addresses

### ⚡ Technical Features
- **Full-Stack Application**: React frontend with Express.js backend
- **TypeScript**: Type-safe development
- **Three.js Integration**: 3D graphics and animations throughout
- **Framer Motion**: Smooth page transitions and micro-interactions
- **Styled Components**: Component-based styling
- **API Integration**: Contact form backend processing

## Tech Stack

### Frontend
- React 18 with TypeScript
- Three.js & React Three Fiber
- Framer Motion
- Styled Components
- React Router DOM

### Backend
- Node.js
- Express.js
- CORS middleware
- Nodemailer (for contact form)

### Development Tools
- Create React App
- Concurrently
- Nodemon

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   # Install server dependencies
   npm install
   
   # Install client dependencies
   cd client
   npm install
   cd ..
   ```

3. **Run the development server**
   ```bash
   # Run both frontend and backend concurrently
   npm run dev
   ```

   Or run them separately:
   ```bash
   # Terminal 1 - Backend
   npm run server
   
   # Terminal 2 - Frontend
   npm run client
   ```

4. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

### Production Build

1. **Build the frontend**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## Project Structure

```
portfolio-website/
├── client/                 # React frontend
│   ├── public/
│   │   ├── src/
│   │   │   ├── components/    # React components
│   │   │   │   ├── CustomCursor.tsx
│   │   │   │   ├── ThreeBackground.tsx
│   │   │   │   ├── SimpleNavigation.tsx
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── About.tsx
│   │   │   │   ├── EducationRoadmap.tsx
│   │   │   │   ├── Projects.tsx
│   │   │   │   └── Contact.tsx
│   │   │   ├── App.tsx
│   │   │   └── index.tsx
│   │   └── package.json
├── server.js              # Express server
├── package.json           # Main package.json
└── README.md
```

## Features Breakdown

### Custom Cursor
- Circular cursor that replaces the default pointer
- Expands and changes opacity when hovering over interactive elements
- Smooth animations with backdrop blur effects
- Mix-blend-mode for visual impact

### Three.js Elements
- **Background**: Animated particle system with floating geometric shapes
- **Hero Section**: 3D floating code symbol
- **About Section**: Morphing sphere with distortion material
- **Education Timeline**: Animated 3D path with floating spheres
- **Projects**: Floating cubes on each project card
- **Contact**: Wobbling spheres animation

### Responsive Design
- Mobile-first approach
- Breakpoints for tablets and desktops
- Collapsible navigation on mobile
- Optimized 3D elements for performance

## API Endpoints

### POST /api/contact
Submit a contact form message
```json
{
  "name": "string",
  "email": "string", 
  "message": "string"
}
```

### GET /api/health
Check server status

## Contact Information

The contact section includes two email addresses:
- **Professional**: adarsh.professional@example.com
- **Personal**: adarsh.personal@example.com

## Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Three.js community for amazing 3D web graphics
- Framer Motion for smooth animations
- React Three Fiber for React-Three.js integration
- Styled Components for component styling 