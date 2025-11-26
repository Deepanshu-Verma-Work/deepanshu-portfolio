import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Layers, Cpu, Code2, Database } from "lucide-react";
import { Link } from "wouter";
import AIArchitecture from "@/components/architectures/AIArchitecture";

export default function AIConversationalBot() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/">
                        <div className="flex items-center gap-2 cursor-pointer group">
                            <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                            <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">Back to Portfolio</span>
                        </div>
                    </Link>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono uppercase tracking-wider">
                                AI/ML
                            </span>
                            <span className="px-3 py-1 rounded-full border border-border bg-secondary/50 text-muted-foreground text-xs font-mono uppercase tracking-wider">
                                2024
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-6 leading-none">
                            AI-Powered Conversational Bot
                        </h1>
                        <p className="text-xl text-muted-foreground font-heading leading-relaxed max-w-2xl">
                            An intelligent, generative AI–enhanced chatbot using Amazon Lex, Amazon Bedrock, and AWS Lambda for natural language understanding and dynamic responses.
                        </p>
                    </motion.div>

                    {/* Architecture Diagram */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-20"
                    >
                        <div className="rounded-2xl border border-border bg-zinc-950 overflow-hidden shadow-2xl">
                            <div className="p-4 border-b border-zinc-800 bg-zinc-900/50 flex items-center justify-between">
                                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">System Architecture</span>
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                                </div>
                            </div>
                            <div className="aspect-video w-full bg-zinc-950 relative">
                                <AIArchitecture />
                            </div>
                        </div>
                    </motion.div>

                    {/* Project Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
                        <div className="md:col-span-2 space-y-12">
                            <section>
                                <h2 className="text-2xl font-display font-bold uppercase tracking-tight mb-6 flex items-center gap-3">
                                    <Layers className="w-6 h-6 text-primary" />
                                    Core Challenge
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Traditional chatbots often struggle with context retention and providing natural, dynamic responses. The goal was to build a system that could handle complex user queries, maintain context over a conversation, and generate human-like responses using state-of-the-art LLMs, all while being serverless and scalable.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-bold uppercase tracking-tight mb-6 flex items-center gap-3">
                                    <Cpu className="w-6 h-6 text-primary" />
                                    System Workflow
                                </h2>
                                <ul className="space-y-4 text-muted-foreground">
                                    <li className="flex gap-4">
                                        <span className="font-mono text-primary font-bold">01</span>
                                        <span>User interacts via voice or text through a secure web interface hosted on S3/CloudFront.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-mono text-primary font-bold">02</span>
                                        <span>Amazon Lex handles the initial NLU (Natural Language Understanding) and intent recognition.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-mono text-primary font-bold">03</span>
                                        <span>Complex queries are routed to AWS Lambda, which acts as the orchestrator.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-mono text-primary font-bold">04</span>
                                        <span>Lambda invokes Amazon Bedrock to generate context-aware responses using Foundation Models (FMs).</span>
                                    </li>
                                </ul>
                            </section>
                        </div>

                        <div className="space-y-12">
                            <section>
                                <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Amazon Lex", "AWS Lambda", "Amazon Bedrock", "Python", "LangChain", "DynamoDB", "S3"].map((tech) => (
                                        <span key={tech} className="px-3 py-1.5 rounded-md border border-border bg-secondary/30 text-xs font-mono text-foreground">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6">Key Features</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Generative AI Responses",
                                        "Voice & Text Support",
                                        "Context Retention",
                                        "Serverless Architecture",
                                        "Secure Auth (Cognito)"
                                    ].map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
