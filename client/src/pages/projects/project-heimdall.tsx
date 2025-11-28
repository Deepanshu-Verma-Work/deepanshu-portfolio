import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Zap, ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import HeimdallArchitecture from '@/components/HeimdallArchitecture';

const ProjectHeimdall = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_50%)]"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <Link href="/">
                        <a className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
                        </a>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row gap-12 items-center"
                    >
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                                    <Shield className="w-8 h-8 text-cyan-400" />
                                </div>
                                <span className="text-cyan-400 font-mono text-sm tracking-wider">AI SAFETY MONITOR</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
                                Project Heimdall
                            </h1>

                            <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl">
                                An autonomous visual safety monitoring system that uses a **Hybrid Edge/Cloud Architecture** to detect PPE violations in real-time.
                                By processing frames intelligently, it ensures workplace safety while optimizing cloud costs.
                            </p>

                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/Deepanshu-Verma-Work/project-heimdall"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-slate-200 transition-colors"
                                >
                                    <Github className="w-5 h-5" /> View Code
                                </a>
                                <a
                                    href="https://main.d1i2ljwo2kkws6.amplifyapp.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-full font-medium hover:bg-slate-700 transition-colors border border-slate-700"
                                >
                                    <ExternalLink className="w-5 h-5" /> Live Demo
                                </a>
                            </div>
                        </div>

                        {/* Hero Visual */}
                        <div className="flex-1 w-full relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative bg-slate-900 rounded-2xl border border-slate-800 p-2 overflow-hidden aspect-video flex items-center justify-center">
                                <div className="text-center">
                                    <Eye className="w-16 h-16 text-slate-700 mx-auto mb-4" />
                                    <p className="text-slate-500 font-mono text-sm">LIVE FEED PREVIEW</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Architecture Section */}
            <section className="py-20 px-6 bg-slate-900/30 border-y border-slate-800">
                <div className="max-w-7xl mx-auto">
                    <HeimdallArchitecture />
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Key Capabilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
                            <Eye className="w-10 h-10 text-cyan-400 mb-6" />
                            <h3 className="text-xl font-bold mb-4">Real-time Detection</h3>
                            <p className="text-slate-400">
                                Processes video feeds instantly using Amazon Rekognition to identify workers and verify PPE compliance with high accuracy.
                            </p>
                        </div>
                        <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-purple-500/30 transition-colors">
                            <Zap className="w-10 h-10 text-purple-400 mb-6" />
                            <h3 className="text-xl font-bold mb-4">Instant Alerts</h3>
                            <p className="text-slate-400">
                                Triggers immediate notifications via AWS SNS (SMS/Email) to site supervisors when safety violations occur.
                            </p>
                        </div>
                        <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-green-500/30 transition-colors">
                            <Lock className="w-10 h-10 text-green-400 mb-6" />
                            <h3 className="text-xl font-bold mb-4">Enterprise Scalable</h3>
                            <p className="text-slate-400">
                                Built on serverless AWS architecture (Lambda, Kinesis, IoT Core) to handle thousands of camera feeds simultaneously.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ProjectHeimdall;
