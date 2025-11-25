# IT Architect Portfolio

A modern, minimalist portfolio website for IT architects and system designers, built with React, TypeScript, Express, and Vite. Features a clean design with smooth animations, responsive layouts, and a functional contact form.

![Portfolio Preview](client/public/preview.png)

## ✨ Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Express, TailwindCSS
- **Responsive Design**: Mobile-first approach with beautiful layouts
- **Smooth Animations**: Framer Motion for professional transitions
- **Project Showcase**: Detailed pages for Cloud Infrastructure, Neural Networks, Data Lakehouse, and Security
- **Contact Form**: Integrated with Formspree for email delivery
- **Dark Theme**: Professional dark mode design
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ITArchitectPortfolio.git
   cd ITArchitectPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5001`

## 📁 Project Structure

```
ITArchitectPortfolio/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   │   └── projects/  # Project detail pages
│   │   ├── lib/           # Utilities and configurations
│   │   └── hooks/         # Custom React hooks
│   └── index.html         # HTML entry point
├── server/                # Backend Express server
│   ├── app.ts            # Express app configuration
│   ├── index-dev.ts      # Development server
│   └── index-prod.ts     # Production server
├── db/                    # Database schemas (Drizzle ORM)
└── package.json          # Project dependencies
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Wouter** - Lightweight routing
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Backend
- **Express** - Web server
- **TypeScript** - Type safety
- **Drizzle ORM** - Database toolkit
- **PostgreSQL** - Database (optional)

## 📝 Available Scripts

```bash
# Development
npm run dev              # Start dev server (port 5001)
npm run dev:client       # Start Vite dev server only

# Production
npm run build           # Build for production
npm start               # Start production server

# Database
npm run db:push         # Push database schema changes

# Type Checking
npm run check           # Run TypeScript type checking
```

## 🎨 Customization

### Update Personal Information

1. **Contact Details** (`client/src/components/contact-footer.tsx`):
   ```typescript
   // Update footer contact info (lines 64-68)
   <p>Your City, Country</p>
   <p>your.email@domain.com</p>
   <p>+XX XXXXXXXXXX</p>
   ```

2. **Contact Page** (`client/src/pages/contact.tsx`):
   ```typescript
   // Update email, phone, and location
   ```

3. **Logo and Branding** (`client/src/components/layout.tsx`):
   ```typescript
   // Update logo text and subtitle
   <div>Rishabh Portfolio</div>
   <div>IT ARCHITECT</div>
   ```

### Update Projects

Edit `client/src/pages/home.tsx` to modify project listings:

```typescript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    category: "Category",
    year: "2024",
    image: yourImage,
    description: "Project description",
    route: "/projects/your-project"
  }
];
```

### Configure Contact Form

The contact form uses Formspree. To set up:

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Update `client/src/components/contact-footer.tsx`:
   ```typescript
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
     // ...
   });
   ```

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with:
- `dist/public/` - Static frontend assets
- `dist/index.js` - Production server

### Deploy to Vercel/Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist/public`

### Deploy to VPS

1. Build the project: `npm run build`
2. Copy `dist` folder to your server
3. Install dependencies: `npm install --production`
4. Start server: `npm start`
5. Use PM2 or similar for process management

## 📄 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5001
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Deepanshu Verma**
- Email: deepanshu.verma@zohomail.in
- Location: Pune, India
- Phone: +91 7879761418

## 🙏 Acknowledgments

- Design inspiration from modern architecture portfolios
- Icons from Lucide React
- Fonts from Google Fonts (Inter, Space Grotesk)

## 📸 Screenshots

### Home Page
Modern project showcase with smooth animations

### Project Details
Comprehensive technical documentation for each project

### Contact Page
Clean contact information display with icons

---

**Built with ❤️ for IT Architects and System Designers**
