import { motion } from "framer-motion";
import { Bot, Brain, User, MessageSquare, Sparkles } from "lucide-react";

export default function AIArchitecture() {
    return (
        <div className="w-full h-full min-h-[250px] bg-zinc-950 flex items-center justify-center p-8 relative overflow-hidden rounded-xl border border-zinc-800">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5" />

            <div className="relative z-10 flex items-center gap-8 md:gap-12 w-full max-w-2xl justify-between">
                {/* User Input: Chat Interface */}
                <div className="flex flex-col items-center gap-3">
                    <div className="relative">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0.8 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                            className="p-4 rounded-2xl bg-blue-500/20 border border-blue-400/30 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                        >
                            <User className="w-8 h-8" />
                        </motion.div>
                        {/* Chat Bubble Animation */}
                        <motion.div
                            className="absolute -top-4 -right-4 bg-blue-500 text-white text-[10px] px-2 py-1 rounded-lg rounded-bl-none shadow-lg border border-blue-400"
                            initial={{ opacity: 0, y: 5, scale: 0.8 }}
                            animate={{ opacity: [0, 1, 1, 0], y: [5, 0, 0, -5], scale: [0.8, 1, 1, 0.8] }}
                            transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.8, 1] }}
                        >
                            <MessageSquare className="w-3 h-3 inline-block mr-1" />
                            Query
                        </motion.div>
                    </div>
                    <span className="text-xs font-bold tracking-wider text-blue-200 uppercase">User</span>
                </div>

                {/* Flow Arrows (Left) */}
                <div className="flex-1 flex flex-col gap-2 relative h-16 justify-center">
                    <motion.div
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: "100%", opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_10px_rgba(96,165,250,0.5)]"
                    />
                </div>

                {/* Central Processing: Orchestrator */}
                <div className="flex flex-col items-center gap-3">
                    <div className="relative">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-2 rounded-full border-2 border-dashed border-zinc-600 opacity-50"
                        />
                        <div className="p-5 rounded-full bg-zinc-900 border border-zinc-700 text-white shadow-xl relative z-10">
                            <Bot className="w-10 h-10" />
                        </div>
                        {/* Processing Ring */}
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], borderColor: ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.3)", "rgba(255,255,255,0.1)"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 rounded-full border border-white/10 z-0"
                        />
                    </div>
                    <span className="text-xs font-bold tracking-wider text-zinc-300 uppercase">Orchestrator</span>
                </div>

                {/* Flow Arrows (Right) */}
                <div className="flex-1 flex flex-col gap-2 relative h-16 justify-center">
                    <motion.div
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: "100%", opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.4 }}
                        className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_10px_rgba(192,132,252,0.5)]"
                    />
                </div>

                {/* AI Brain: LLM */}
                <div className="flex flex-col items-center gap-3">
                    <div className="relative">
                        <motion.div
                            animate={{
                                boxShadow: ["0 0 0px rgba(168,85,247,0)", "0 0 30px rgba(168,85,247,0.5)", "0 0 0px rgba(168,85,247,0)"],
                                scale: [1, 1.05, 1]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="p-4 rounded-2xl bg-purple-500/20 border border-purple-400/30 text-purple-400 relative z-10"
                        >
                            <Brain className="w-8 h-8" />
                        </motion.div>

                        {/* Sparkles / Ideas */}
                        <motion.div
                            className="absolute -top-3 -right-3 text-yellow-400"
                            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5], rotate: [0, 45, 0] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        >
                            <Sparkles className="w-4 h-4" />
                        </motion.div>
                        <motion.div
                            className="absolute -bottom-2 -left-2 text-purple-300"
                            animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5], rotate: [0, -45, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                        >
                            <Sparkles className="w-3 h-3" />
                        </motion.div>
                    </div>
                    <span className="text-xs font-bold tracking-wider text-purple-200 uppercase">LLM</span>
                </div>
            </div>
        </div>
    );
}
