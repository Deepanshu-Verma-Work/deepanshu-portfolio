import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-background flex flex-col">
      {/* Fixed Navigation Frame */}
      <nav className="fixed top-0 left-0 w-full p-6 md:p-12 z-50 flex justify-between items-start bg-background/95 backdrop-blur-sm">
        <Link href="/" className="pointer-events-auto group">
          <div className="flex items-center gap-3">
            {/* Modern RS Logo */}
            <div className="relative w-12 h-12 bg-foreground flex items-center justify-center">
              <span className="text-background font-display font-bold text-2xl tracking-tighter">DV</span>
            </div>
            <div>
              <div className="text-lg md:text-xl font-display font-bold tracking-tight text-foreground">
                Deepanshu Portfolio
              </div>
              <div className="text-[10px] font-mono opacity-60 text-foreground">
                IT ARCHITECT
              </div>
            </div>
          </div>
        </Link>

        <div className="flex gap-2 pointer-events-auto">
          <Link href="/" className={cn(
            "px-4 py-2 border transition-all hover:bg-foreground hover:text-background",
            location === "/"
              ? "bg-foreground text-background border-foreground"
              : "bg-background/80 backdrop-blur-sm text-foreground border-border"
          )}>
            <span className="text-sm font-medium">Index</span>
          </Link>
          <Link href="/about" className={cn(
            "px-4 py-2 border transition-all hover:bg-foreground hover:text-background",
            location === "/about"
              ? "bg-foreground text-background border-foreground"
              : "bg-background/80 backdrop-blur-sm text-foreground border-border"
          )}>
            <span className="text-sm font-medium">Profile</span>
          </Link>
          <Link href="/contact" className={cn(
            "px-4 py-2 border transition-all hover:bg-foreground hover:text-background",
            location === "/contact"
              ? "bg-foreground text-background border-foreground"
              : "bg-background/80 backdrop-blur-sm text-foreground border-border"
          )}>
            <span className="text-sm font-medium">Contact</span>
          </Link>
        </div>
      </nav>

      {/* Vertical Text Decoration - Left */}
      <div className="fixed left-6 md:left-12 bottom-12 hidden md:block z-40 mix-blend-difference text-white pointer-events-none">
        <span className="writing-vertical-rl rotate-180 text-xs font-mono opacity-40 tracking-widest uppercase">
          Deepanshu Verma — IT Architect
        </span>
      </div>

      {/* Main Content */}
      <main className="w-full flex-grow pt-32 pb-24 px-6 md:px-12">
        {children}
      </main>
    </div>
  );
}
