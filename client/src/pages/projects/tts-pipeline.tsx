import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Layers, Cpu, Code2, Database } from "lucide-react";
import { Link } from "wouter";
import TTSArchitecture from "@/components/architectures/TTSArchitecture";

export default function TTSPipeline() {
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
                                Serverless
                            </span>
                            <span className="px-3 py-1 rounded-full border border-border bg-secondary/50 text-muted-foreground text-xs font-mono uppercase tracking-wider">
                                2024
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-6 leading-none">
                            Text-to-Speech (TTS) Pipeline
                        </h1>
                        <p className="text-xl text-muted-foreground font-heading leading-relaxed max-w-2xl">
                            A serverless pipeline using AWS Lambda and Amazon Polly to convert dynamic text into high-quality, lifelike speech audio files, stored and served via S3.
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
                                <TTSArchitecture />
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
                                    Converting text to speech at scale requires a robust, event-driven architecture. The goal was to create a system that could handle varying loads, process text asynchronously, and deliver high-quality audio without managing servers, all while keeping costs low.
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
                                        <span>User submits text via an API Gateway endpoint.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-mono text-primary font-bold">02</span>
                                        <span>AWS Lambda triggers and sends the text to Amazon Polly for synthesis.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-mono text-primary font-bold">03</span>
                                        <span>Polly generates the audio stream, which Lambda saves as an MP3 file to an S3 bucket.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-mono text-primary font-bold">04</span>
                                        <span>Metadata is stored in DynamoDB, and an SNS notification alerts the user when the file is ready.</span>
                                    </li>
                                </ul>
                            </section>
                        </div>

                        <div className="space-y-12">
                            <section>
                                <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Amazon Polly", "AWS Lambda", "Amazon S3", "DynamoDB", "Amazon SNS", "API Gateway", "Node.js"].map((tech) => (
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
                                        "Lifelike Speech Synthesis",
                                        "Event-Driven Processing",
                                        "Scalable Storage",
                                        "Real-time Notifications",
                                        "Cost-Effective Serverless"
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
