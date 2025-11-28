import { motion } from "framer-motion";
import { Camera, Eye, Server, ShieldAlert, Zap, Lock } from "lucide-react";

export default function HeimdallArchitecture() {
    return (
        <div className="w-full h-full bg-zinc-950 flex items-center justify-center p-2 md:p-8 relative overflow-hidden rounded-xl border border-zinc-800">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-4xl items-center justify-items-center">

                {/* 1. Camera Source */}
                <div className="flex flex-col items-center gap-2">
                    <div className="relative">
                        <motion.div
                            className="p-3 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-300"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        >
                            <Camera className="w-6 h-6" />
                        </motion.div>
                        {/* Scanning Effect */}
                        <motion.div
                            className="absolute inset-0 border-2 border-cyan-500/50 rounded-xl"
                            animate={{ opacity: [0, 1, 0], scale: [1, 1.2, 1.4] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase">Live Feed</span>
                </div>

                {/* 2. Lambda Processing */}
                <div className="flex flex-col items-center gap-2">
                    <div className="relative p-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                        <Server className="w-8 h-8" />
                        {/* Orbiting Particles */}
                        <motion.div
                            className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full"
                            animate={{ rotate: 360 }}
                            style={{ originX: -1.5, originY: 2.5 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                    <span className="text-[10px] font-bold text-blue-300 uppercase">Lambda</span>
                </div>

                {/* 3. Rekognition AI */}
                <div className="flex flex-col items-center gap-2">
                    <div className="relative p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                        <Eye className="w-6 h-6" />
                        <motion.div
                            className="absolute -top-2 -right-2 text-red-400"
                            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                        >
                            <ShieldAlert className="w-4 h-4" />
                        </motion.div>
                    </div>
                    <span className="text-[10px] font-bold text-purple-300 uppercase">Rekognition</span>
                </div>

                {/* 4. Alert System */}
                <div className="flex flex-col items-center gap-2">
                    <div className="relative p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                        <Zap className="w-6 h-6" />
                        {/* Pulse Animation */}
                        <motion.div
                            className="absolute inset-0 bg-red-500/20 rounded-xl"
                            animate={{ opacity: [0, 0.5, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                        />
                    </div>
                    <span className="text-[10px] font-bold text-red-300 uppercase">SNS Alert</span>
                </div>

            </div>

            {/* Connecting Lines (Desktop) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block">
                <motion.path
                    d="M 200 100 L 350 100 L 500 100 L 650 100"
                    fill="none"
                    stroke="url(#heimdall-gradient)"
                    strokeWidth="2"
                    strokeDasharray="5 5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 1.5 }}
                />
                <defs>
                    <linearGradient id="heimdall-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#ef4444" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}
