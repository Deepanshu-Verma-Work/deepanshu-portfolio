# Setup Guide

This guide will walk you through setting up the IT Architect Portfolio from scratch.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)
- **Code Editor** (VS Code recommended) - [Download here](https://code.visualstudio.com/)

## Step-by-Step Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ITArchitectPortfolio.git
cd ITArchitectPortfolio
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React and React DOM
- TypeScript
- Vite
- Express
- TailwindCSS
- Framer Motion
- And more...

### 3. Environment Configuration (Optional)

Create a `.env` file in the root directory if you need custom configuration:

```env
PORT=5001
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
```

### 4. Start Development Server

```bash
npm run dev
```

The server will start on `http://localhost:5001`

You should see:
```
[vite] (client) Re-optimizing dependencies
[express] serving on port 5001
```

### 5. Open in Browser

Navigate to `http://localhost:5001` in your web browser.

## Project Structure Explained

```
ITArchitectPortfolio/
├── client/                      # Frontend application
│   ├── public/                 # Static files (favicon, images)
│   ├── src/
│   │   ├── components/         # Reusable React components
│   │   │   ├── layout.tsx     # Main layout with header/footer
│   │   │   ├── contact-footer.tsx  # Contact form component
│   │   │   └── ui/            # UI components (buttons, inputs, etc.)
│   │   ├── pages/             # Page components
│   │   │   ├── home.tsx       # Home page with project gallery
│   │   │   ├── about.tsx      # About page
│   │   │   ├── contact.tsx    # Contact page
│   │   │   └── projects/      # Individual project pages
│   │   ├── lib/               # Utility functions
│   │   ├── hooks/             # Custom React hooks
│   │   └── index.css          # Global styles
│   └── index.html             # HTML entry point
├── server/                     # Backend Express server
│   ├── app.ts                 # Express configuration
│   ├── index-dev.ts           # Development server setup
│   └── index-prod.ts          # Production server setup
├── db/                        # Database schemas (Drizzle ORM)
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
└── tailwind.config.ts         # TailwindCSS configuration
```

## Development Workflow

### Making Changes

1. **Edit Files**: Make changes to files in `client/src/`
2. **Hot Reload**: Vite will automatically reload the page
3. **Check Console**: Look for any errors in browser console

### Adding New Pages

1. Create a new file in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Import and use the component

Example:
```typescript
// client/src/pages/new-page.tsx
import Layout from "@/components/layout";

export default function NewPage() {
  return (
    <Layout>
      <h1>New Page</h1>
    </Layout>
  );
}

// client/src/App.tsx
import NewPage from "@/pages/new-page";

function Router() {
  return (
    <Switch>
      <Route path="/new-page" component={NewPage} />
      {/* other routes */}
    </Switch>
  );
}
```

### Styling

This project uses TailwindCSS for styling:

```typescript
<div className="bg-background text-foreground p-6 md:p-12">
  <h1 className="text-4xl font-bold">Hello</h1>
</div>
```

Custom colors are defined in `tailwind.config.ts`.

## Building for Production

### Create Production Build

```bash
npm run build
```

This creates:
- `dist/public/` - Frontend static files
- `dist/index.js` - Backend server bundle

### Test Production Build Locally

```bash
npm start
```

## Troubleshooting

### Port Already in Use

If port 5001 is already in use:

1. Change port in `server/app.ts`:
   ```typescript
   const port = parseInt(process.env.PORT || '5002', 10);
   ```

2. Or kill the process using the port:
   ```bash
   lsof -ti:5001 | xargs kill -9
   ```

### Dependencies Issues

If you encounter dependency errors:

```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

Run type checking:
```bash
npm run check
```

### Build Errors

Clear Vite cache:
```bash
rm -rf node_modules/.vite
npm run dev
```

## Next Steps

- [Customize your portfolio](CUSTOMIZATION.md)
- [Deploy to production](DEPLOYMENT.md)
- [Configure contact form](README.md#configure-contact-form)

## Getting Help

If you encounter issues:

1. Check the [README](README.md)
2. Review error messages carefully
3. Check browser console for frontend errors
4. Check terminal for backend errors
5. Search for similar issues online

## Useful Commands Reference

```bash
# Development
npm run dev              # Start development server
npm run dev:client       # Start only Vite dev server

# Production
npm run build           # Build for production
npm start               # Start production server

# Database
npm run db:push         # Push schema changes

# Utilities
npm run check           # TypeScript type checking
```

---

**Ready to customize?** Check out [CUSTOMIZATION.md](CUSTOMIZATION.md)
