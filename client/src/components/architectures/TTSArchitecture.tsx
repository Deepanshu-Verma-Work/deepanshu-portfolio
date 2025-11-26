import { motion } from "framer-motion";
import { FileText, Mic, Speaker, Cloud, AudioLines } from "lucide-react";

export default function TTSArchitecture() {
    return (
        <div className="w-full h-full min-h-[250px] bg-zinc-950 flex items-center justify-center p-8 relative overflow-hidden rounded-xl border border-zinc-800">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-500/5 via-blue-500/5 to-purple-500/5" />

            <div className="relative z-10 flex items-center gap-4 md:gap-12 w-full max-w-2xl justify-between">
                {/* Input: Text Stream */}
                <div className="flex flex-col items-center gap-3">
                    <div className="relative">
                        <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="p-4 rounded-2xl bg-zinc-800 border border-zinc-600 shadow-[0_0_15px_rgba(255,255,255,0.05)] relative z-10"
                        >
                            <FileText className="w-8 h-8 text-zinc-300" />
                        </motion.div>
                        {/* Flying Text Blocks */}
                        {[1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="absolute top-0 right-0 bg-zinc-700 w-6 h-8 rounded-sm border border-zinc-500 opacity-0"
                                animate={{ x: [0, 40], y: [0, 10], opacity: [0, 1, 0], scale: [1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 1 }}
                            />
                        ))}
                    </div>
                    <span className="text-xs font-bold tracking-wider text-zinc-400 uppercase">Input</span>
                </div>

                {/* Processing: Lambda + Polly */}
                <div className="flex-1 flex items-center justify-center relative">
                    {/* Connection Line */}
                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-zinc-800" />

                    {/* Moving Text Packet */}
                    <motion.div
                        className="absolute top-1/2 left-0 w-3 h-3 bg-zinc-200 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                        initial={{ x: 0, opacity: 0 }}
                        animate={{ x: "45%", opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        style={{ marginTop: -6 }}
                    />

                    {/* Cloud Processing */}
                    <div className="relative z-10">
                        <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="p-5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                        >
                            <Cloud className="w-12 h-12" />
                        </motion.div>

                        {/* Processing Indicator */}
                        <motion.div
                            className="absolute -top-2 -right-2 bg-purple-500 text-white rounded-full p-2 shadow-lg"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <AudioLines className="w-4 h-4" />
                        </motion.div>
                    </div>

                    {/* Moving Audio Packet */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(192,132,252,0.8)]"
                        initial={{ x: 0, opacity: 0 }}
                        animate={{ x: "100%", opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                        style={{ marginTop: -6 }}
                    />
                </div>

                {/* Output: Audio */}
                <div className="flex flex-col items-center gap-3">
                    <div className="relative">
                        <div className="p-4 rounded-2xl bg-purple-500/20 border border-purple-400/30 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)] relative z-10">
                            <Speaker className="w-8 h-8" />
                        </div>
                        {/* Sound Waves */}
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                className="absolute top-1/2 left-1/2 rounded-full border-2 border-purple-500/30"
                                initial={{ width: "100%", height: "100%", x: "-50%", y: "-50%", opacity: 0 }}
                                animate={{ width: "250%", height: "250%", opacity: [0.8, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
                            />
                        ))}
                    </div>
                    <span className="text-xs font-bold tracking-wider text-purple-200 uppercase">Audio</span>
                </div>
            </div>
        </div>
    );
}
