import Layout from "@/components/layout";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-start justify-center min-h-[60vh]">
        <h1 className="text-[15vw] leading-none font-display font-bold text-foreground opacity-10">
          404
        </h1>
        <h2 className="text-2xl font-heading mt-8 mb-4">
          Structure Not Found
        </h2>
        <p className="text-muted-foreground max-w-md mb-8 font-mono text-sm">
          The requested architectural component could not be located within the system. It may have been deprecated or moved.
        </p>
        <Link href="/" className="px-8 py-3 bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-foreground/90 transition-colors inline-block">
            Return to Index
        </Link>
      </div>
    </Layout>
  );
}
