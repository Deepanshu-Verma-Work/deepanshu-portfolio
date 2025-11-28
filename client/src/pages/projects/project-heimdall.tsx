import { motion } from "framer-motion";
import { ArrowLeft, Layers, Cpu, ExternalLink, Github, Eye, Shield, Zap } from "lucide-react";
import { Link } from "wouter";
import HeimdallArchitecture from "@/components/HeimdallArchitecture";

export default function ProjectHeimdall() {
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
                            <span className="px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-500 text-xs font-mono uppercase tracking-wider">
                                Computer Vision
                            </span>
                            <span className="px-3 py-1 rounded-full border border-border bg-secondary/50 text-muted-foreground text-xs font-mono uppercase tracking-wider">
                                2025
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-6 leading-none">
                            Project Heimdall
                        </h1>
                        <p className="text-xl text-muted-foreground font-heading leading-relaxed max-w-2xl mb-8">
                            An autonomous visual safety monitoring system that uses a <strong>Hybrid Edge/Cloud Architecture</strong> to detect PPE violations in real-time.
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="https://main.d1i2ljwo2kkws6.amplifyapp.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
                            >
                                <ExternalLink className="w-4 h-4" /> Live Demo
                            </a>
                            <a
                                href="https://github.com/Deepanshu-Verma-Work/project-heimdall"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 border border-border bg-background text-foreground rounded-full font-medium hover:bg-secondary/50 transition-colors"
                            >
                                <Github className="w-4 h-4" /> View Code
                            </a>
                        </div>
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
                                <HeimdallArchitecture />
                            </div>
                        </div>
                    </motion.div>

                    {/* Project Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
                        <div className="md:col-span-2 space-y-12">
                            <section>
                                <h2 className="text-2xl font-display font-bold uppercase tracking-tight mb-6 flex items-center gap-3">
                                    <Shield className="w-6 h-6 text-cyan-500" />
                                    The Problem
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Workplace safety is a critical concern in manufacturing and construction. Manual monitoring is prone to error and expensive. Missing PPE (like helmets) can lead to severe accidents and liability issues.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-display font-bold uppercase tracking-tight mb-6 flex items-center gap-3">
                                    <Cpu className="w-6 h-6 text-cyan-500" />
                                    The Solution
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Heimdall is an intelligent "All-Seeing Eye" that monitors video feeds in real-time. It uses a <strong>Hybrid Architecture</strong>:
                                </p>
                                <ul className="space-y-4 text-muted-foreground">
                                    <li className="flex gap-4">
                                        <span className="font-mono text-cyan-500 font-bold">01</span>
                                        <span><strong>Edge Capture:</strong> The browser captures video frames and optimizes them (resizing/compression) before transmission to reduce bandwidth.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-mono text-cyan-500 font-bold">02</span>
                                        <span><strong>Serverless Analysis:</strong> AWS Lambda receives the frames and orchestrates the analysis, scaling automatically with demand.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-mono text-cyan-500 font-bold">03</span>
                                        <span><strong>Computer Vision:</strong> Amazon Rekognition's deep learning models detect persons and identify protective equipment (PPE) like helmets.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-mono text-cyan-500 font-bold">04</span>
                                        <span><strong>Real-time Alerts:</strong> If a violation is detected, the system logs the event and triggers an AWS SNS alert (simulated) to notify supervisors.</span>
                                    </li>
                                </ul>
                            </section>
                        </div>

                        <div className="space-y-12">
                            <section>
                                <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Amazon Rekognition", "AWS Lambda", "React", "TypeScript", "Tailwind CSS", "AWS Amplify", "AWS SNS"].map((tech) => (
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
                                        "Real-time PPE Detection",
                                        "99% Accuracy (Rekognition)",
                                        "Hybrid Edge/Cloud Design",
                                        "Serverless Scalability",
                                        "Instant Violation Logging"
                                    ].map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
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
