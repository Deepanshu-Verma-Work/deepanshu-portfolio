# Customization Guide

This guide explains how to personalize the IT Architect Portfolio for your own use.

## Personal Information

### 1. Contact Information

#### Footer Contact (`client/src/components/contact-footer.tsx`)

Update lines 64-68 and 123-128:

```typescript
// Desktop footer
<div className="hidden md:block mt-12 space-y-2 font-mono text-xs text-background/40 uppercase tracking-widest">
  <p>Your City, Country</p>
  <p>your.email@domain.com</p>
  <p>+XX XXXXXXXXXX</p>
</div>

// Mobile footer
<div className="md:hidden mt-16 pt-8 border-t border-background/10 space-y-2 font-mono text-xs text-background/40 uppercase tracking-widest text-center">
  <p>Your City, Country</p>
  <p>your.email@domain.com</p>
  <p>+XX XXXXXXXXXX</p>
</div>
```

#### Contact Page (`client/src/pages/contact.tsx`)

Update email, phone, and location:

```typescript
<p className="text-xl font-display font-bold">your.email@domain.com</p>
<p className="text-xl font-display font-bold">+XX XXXXXXXXXX</p>
<p className="text-xl font-display font-bold">Your City, Country</p>
```

### 2. Branding

#### Logo and Name (`client/src/components/layout.tsx`)

Update lines 11-25:

```typescript
<div className="relative w-12 h-12 bg-foreground flex items-center justify-center">
  <span className="text-background font-display font-bold text-2xl tracking-tighter">YI</span>
</div>
<div>
  <div className="text-lg md:text-xl font-display font-bold tracking-tight text-foreground">
    Your Name Portfolio
  </div>
  <div className="text-[10px] font-mono opacity-60 text-foreground">
    YOUR TITLE
  </div>
</div>
```

#### Vertical Text (`client/src/components/layout.tsx`)

Update line 60:

```typescript
<span className="writing-vertical-rl rotate-180 text-xs font-mono opacity-40 tracking-widest uppercase">
  Your Name — Your Title
</span>
```

#### Page Title and Meta Tags (`client/index.html`)

Update lines 7-18:

```typescript
<title>Your Name Portfolio</title>
<meta property="og:title" content="Your Name Portfolio | System Design" />
<meta property="og:description" content="Your portfolio description" />
<meta name="twitter:title" content="Your Name Portfolio" />
<meta name="twitter:description" content="Your portfolio description" />
```

## Projects

### Update Project List (`client/src/pages/home.tsx`)

Modify the `projects` array (lines 12-45):

```typescript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    category: "Project Category",
    year: "2024",
    image: yourProjectImage,
    description: "Brief description of your project highlighting key technologies and achievements.",
    route: "/projects/your-project-slug"
  },
  // Add more projects...
];
```

### Create Project Detail Pages

1. Create a new file in `client/src/pages/projects/`:

```typescript
// client/src/pages/projects/your-project.tsx
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function YourProject() {
  return (
    <Layout>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
        {/* Back Button */}
        <Link href="/">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mono text-sm">Back to Projects</span>
          </motion.button>
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-6">
            Your<br />Project
          </h1>
          <p className="text-xl text-muted-foreground font-heading max-w-2xl">
            Project description and overview
          </p>
        </motion.div>

        {/* Add your content sections here */}
      </div>
    </Layout>
  );
}
```

2. Add route in `client/src/App.tsx`:

```typescript
import YourProject from "@/pages/projects/your-project";

function Router() {
  return (
    <Switch>
      {/* ... other routes ... */}
      <Route path="/projects/your-project" component={YourProject} />
    </Switch>
  );
}
```

## Contact Form

### Configure Formspree

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form ID
4. Update `client/src/components/contact-footer.tsx` (line 39):

```typescript
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: values.email,
    message: values.message,
    _replyto: values.email,
    _subject: "New Contact Form Submission - Your Portfolio",
  }),
});
```

5. Update error message (line 58):

```typescript
toast({
  title: "Failed to Send Message",
  description: "Please try again or contact directly at your.email@domain.com",
  variant: "destructive",
});
```

## Images and Assets

### Project Images

1. Add your images to `client/public/`
2. Import in your page:

```typescript
import yourImage from "@assets/your-image.png";
```

### Favicon

Replace `client/public/favicon.png` with your own icon (recommended size: 512x512px)

## Colors and Theme

### Update Color Scheme (`client/src/index.css`)

Modify CSS variables (lines 8-30):

```css
@layer base {
  :root {
    --background: 0 0% 100%;        /* White */
    --foreground: 0 0% 3.9%;        /* Near black */
    --primary: 0 0% 9%;             /* Dark gray */
    --secondary: 0 0% 96.1%;        /* Light gray */
    --accent: 0 0% 14.9%;           /* Medium gray */
    --muted: 0 0% 96.1%;            /* Light gray */
    --muted-foreground: 0 0% 45.1%; /* Medium gray */
    /* ... other colors ... */
  }
}
```

### Typography

Fonts are configured in `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ["Inter", "sans-serif"],
  display: ["Space Grotesk", "sans-serif"],
  heading: ["Inter", "sans-serif"],
  mono: ["JetBrains Mono", "monospace"],
}
```

To change fonts:
1. Update `client/index.html` Google Fonts import
2. Update `tailwind.config.ts` font family

## About Page

Update `client/src/pages/about.tsx` with your bio, skills, and experience.

## Navigation

### Add New Pages

1. Create page component in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Add navigation link in `client/src/components/layout.tsx`:

```typescript
<Link href="/your-page" className={cn(
  "px-4 py-2 border transition-all hover:bg-foreground hover:text-background",
  location === "/your-page" 
    ? "bg-foreground text-background border-foreground" 
    : "bg-background/80 backdrop-blur-sm text-foreground border-border"
)}>
  <span className="text-sm font-medium">Your Page</span>
</Link>
```

## Animations

### Customize Framer Motion Animations

Example from project cards:

```typescript
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-10%" }}
  transition={{ duration: 0.8, delay: index * 0.1 }}
>
  {/* Content */}
</motion.div>
```

Adjust:
- `initial`: Starting state
- `animate` or `whileInView`: End state
- `transition.duration`: Animation speed
- `transition.delay`: Delay before animation

## Testing Your Changes

1. Save your files
2. Check browser for hot reload
3. Test on different screen sizes
4. Verify all links work
5. Test contact form submission

## Common Customizations

### Change Port

Edit `server/app.ts` (line 82):

```typescript
const port = parseInt(process.env.PORT || '3000', 10);
```

### Add Social Links

Update contact page or footer with your social media links.

### Add Analytics

Add Google Analytics or similar in `client/index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_ID');
</script>
```

---

**Need help?** Check [SETUP.md](SETUP.md) or [README.md](README.md)
