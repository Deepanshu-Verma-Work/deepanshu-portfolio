import { motion } from "framer-motion";
import { Database, FileText, ImageIcon, Search, Brain, Sparkles } from "lucide-react";

export default function RAGArchitecture() {
    return (
        <div className="w-full h-full bg-zinc-950 flex items-center justify-center p-2 md:p-8 relative overflow-hidden rounded-xl border border-zinc-800">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-emerald-500/5 to-indigo-500/5" />

            <div className="relative z-10 grid grid-cols-3 gap-2 md:gap-8 w-full max-w-2xl items-center">
                {/* Inputs: Multimodal Source */}
                <div className="flex flex-col gap-2 md:gap-4 justify-center">
                    <motion.div
                        className="flex items-center gap-1.5 md:gap-3 p-1.5 md:p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.1)]"
                        animate={{ x: [0, 10, 0], borderColor: ["rgba(59,130,246,0.2)", "rgba(59,130,246,0.5)", "rgba(59,130,246,0.2)"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <FileText className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                        <span className="text-[10px] md:text-xs font-bold text-blue-200 uppercase">Text</span>
                    </motion.div>
                    <motion.div
                        className="flex items-center gap-1.5 md:gap-3 p-1.5 md:p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 shadow-[0_0_10px_rgba(168,85,247,0.1)]"
                        animate={{ x: [0, 10, 0], borderColor: ["rgba(168,85,247,0.2)", "rgba(168,85,247,0.5)", "rgba(168,85,247,0.2)"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                        <ImageIcon className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                        <span className="text-[10px] md:text-xs font-bold text-purple-200 uppercase">Image</span>
                    </motion.div>
                </div>

                {/* Vector DB: 3D Space */}
                <div className="flex flex-col items-center justify-center relative">
                    <div className="relative w-20 h-20 md:w-32 md:h-32 flex items-center justify-center perspective-1000">
                        {/* Orbital Rings */}
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                className="absolute inset-0 rounded-full border border-emerald-500/20"
                                style={{ rotateX: i * 45, rotateY: i * 30 }}
                                animate={{ rotateZ: 360 }}
                                transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
                            />
                        ))}

                        {/* Floating Vectors */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 md:w-1.5 md:h-1.5 bg-emerald-400 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.8)]"
                                animate={{
                                    x: Math.cos(i) * (window.innerWidth < 768 ? 25 : 40),
                                    y: Math.sin(i) * (window.innerWidth < 768 ? 25 : 40),
                                    scale: [0.8, 1.2, 0.8],
                                    opacity: [0.4, 1, 0.4]
                                }}
                                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                            />
                        ))}

                        {/* Core DB */}
                        <div className="bg-zinc-900 p-2 md:p-4 rounded-full border border-emerald-500/30 z-10 shadow-[0_0_30px_rgba(16,185,129,0.2)] relative">
                            <Database className="w-5 h-5 md:w-8 md:h-8 text-emerald-400" />
                            <motion.div
                                className="absolute inset-0 rounded-full bg-emerald-500/10"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </div>
                    </div>
                    <span className="text-[8px] md:text-xs font-bold tracking-wider text-emerald-200 uppercase mt-2 text-center">Vector Space</span>
                </div>

                {/* Retrieval & LLM */}
                <div className="flex flex-col items-center gap-2 md:gap-4">
                    {/* Query Process */}
                    <div className="flex items-center gap-1 md:gap-2 w-full justify-center">
                        <div className="relative">
                            <Search className="w-4 h-4 md:w-5 md:h-5 text-zinc-400" />
                            <motion.div
                                className="absolute inset-0 bg-zinc-400/20 rounded-full"
                                animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        </div>
                        <motion.div
                            className="h-[2px] w-6 md:w-12 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
                            animate={{ opacity: [0.2, 1, 0.2], scaleX: [0.8, 1.2, 0.8] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>

                    {/* LLM Synthesis */}
                    <div className="relative p-2 md:p-4 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex flex-col items-center gap-1 md:gap-2 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                        <Brain className="w-5 h-5 md:w-8 md:h-8 text-indigo-400" />
                        <motion.div
                            className="absolute -top-2 -right-2 text-indigo-300"
                            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                        </motion.div>
                        <span className="text-[8px] md:text-[10px] font-bold text-indigo-200 uppercase text-center leading-tight">Multimodal<br />Reasoning</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
