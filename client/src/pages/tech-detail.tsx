import Layout from "@/components/layout";
import ContactFooter from "@/components/contact-footer";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "wouter";

// Complete tech data with GenAI focus
import { techData } from "@/data/tech-data";

export default function TechDetail() {
    const params = useParams();
    const slug = params.slug as string;
    const tech = techData[slug];

    if (!tech) {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-display font-bold mb-4">Technology Not Found</h1>
                        <Link href="/">
                            <a className="text-muted-foreground hover:text-foreground">← Back to Home</a>
                        </Link>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-32">
                {/* Back Button */}
                <Link href="/">
                    <motion.a
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors mb-12 cursor-pointer"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Stack
                    </motion.a>
                </Link>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-16"
                >
                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                        {tech.category}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mt-4 mb-6">
                        {tech.name}
                    </h1>
                    <p className="text-xl text-muted-foreground font-heading max-w-2xl">
                        {tech.description}
                    </p>
                </motion.div>

                {/* Content Sections - Reordered: What, Why, How, Best */}
                <div className="space-y-24">
                    {/* 01 - What It Is */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="border-t border-border pt-12"
                    >
                        <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
                            01 — What It Is
                        </h2>
                        <p className="text-lg font-heading leading-relaxed text-foreground/80">
                            {tech.whatItIs}
                        </p>
                    </motion.section>

                    {/* 02 - Why It's Needed */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="border-t border-border pt-12"
                    >
                        <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
                            02 — Why It's Needed
                        </h2>
                        <p className="text-lg font-heading leading-relaxed text-foreground/80 max-w-3xl">
                            {tech.whyNeeded}
                        </p>
                    </motion.section>

                    {/* 03 - How We Used It */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="border-t border-border pt-12"
                    >
                        <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
                            03 — How We Used It
                        </h2>
                        <ul className="space-y-4">
                            {tech.howWeUsedIt.map((item, index) => (
                                <li key={index} className="flex gap-4">
                                    <span className="text-xs font-mono text-muted-foreground mt-1">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-lg font-heading leading-relaxed text-foreground/80">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.section>

                    {/* 04 - Best Practices */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="border-t border-border pt-12 pb-24"
                    >
                        <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
                            04 — Best Practices
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {tech.bestPractices.map((practice, index) => (
                                <div key={index} className="border border-border p-6">
                                    <span className="text-xs font-mono text-muted-foreground">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <p className="mt-2 font-heading text-foreground/80">
                                        {practice}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                </div>
            </div>

            <ContactFooter />
        </Layout>
    );
}
