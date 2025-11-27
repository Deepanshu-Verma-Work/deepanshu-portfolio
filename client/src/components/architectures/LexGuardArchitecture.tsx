import { motion } from "framer-motion";
import { User, FileText, UploadCloud, Cpu, Brain, Database, ScanText, ShieldAlert } from "lucide-react";

export default function LexGuardArchitecture() {
    return (
        <div className="w-full h-full bg-zinc-950 flex items-center justify-center p-2 md:p-8 relative overflow-hidden rounded-xl border border-zinc-800">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-red-500/5 to-amber-500/5" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-4 w-full max-w-4xl items-center justify-items-center">

                {/* 1. User Upload */}
                <div className="flex flex-col items-center gap-2">
                    <div className="relative">
                        <motion.div
                            className="p-3 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-300"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        >
                            <User className="w-6 h-6" />
                        </motion.div>
                        {/* File Packet */}
                        <motion.div
                            className="absolute -right-2 top-0 bg-white text-zinc-900 rounded p-0.5"
                            animate={{ x: [0, 40], opacity: [1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <FileText className="w-3 h-3" />
                        </motion.div>
                    </div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase">Upload</span>
                </div>

                {/* 2. S3 Storage */}
                <div className="flex flex-col items-center gap-2">
                    <div className="relative p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                        <UploadCloud className="w-6 h-6" />
                        <motion.div
                            className="absolute inset-0 border border-orange-500/40 rounded-xl"
                            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                    <span className="text-[10px] font-bold text-orange-300 uppercase">S3 Bucket</span>
                </div>

                {/* 3. Lambda Orchestrator */}
                <div className="flex flex-col items-center gap-2">
                    <div className="relative p-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                        <Cpu className="w-8 h-8" />
                        {/* Orbiting Textract */}
                        <motion.div
                            className="absolute -top-3 -right-3 bg-zinc-800 p-1.5 rounded-lg border border-zinc-600 text-zinc-300"
                            animate={{ rotate: 360 }}
                            style={{ originX: -1.2, originY: 2.5 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        >
                            <ScanText className="w-3 h-3" />
                        </motion.div>
                    </div>
                    <span className="text-[10px] font-bold text-blue-300 uppercase">Lambda</span>
                </div>

                {/* 4. Bedrock Analysis */}
                <div className="flex flex-col items-center gap-2">
                    <div className="relative p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                        <Brain className="w-6 h-6" />
                        <motion.div
                            className="absolute -top-2 -right-2 text-amber-400"
                            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <ShieldAlert className="w-4 h-4" />
                        </motion.div>
                    </div>
                    <span className="text-[10px] font-bold text-purple-300 uppercase">Bedrock</span>
                </div>

                {/* 5. DynamoDB Results */}
                <div className="flex flex-col items-center gap-2">
                    <div className="relative p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                        <Database className="w-6 h-6" />
                        {/* Data Rows Animation */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center gap-0.5 opacity-30">
                            {[1, 2, 3].map(i => (
                                <motion.div
                                    key={i}
                                    className="w-4 h-0.5 bg-emerald-400"
                                    animate={{ width: ["0%", "80%", "0%"] }}
                                    transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                                />
                            ))}
                        </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-300 uppercase">DynamoDB</span>
                </div>

            </div>

            {/* Connecting Lines (Mobile: Hidden, Desktop: Visible) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block">
                <motion.path
                    d="M 150 100 L 250 100 L 400 100 L 550 100 L 700 100"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray="5 5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.2 }}
                />
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}
