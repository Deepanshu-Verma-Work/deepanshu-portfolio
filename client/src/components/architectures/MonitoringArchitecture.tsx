import { motion } from "framer-motion";
import { Activity, Server, BarChart3, LineChart, Zap } from "lucide-react";

export default function MonitoringArchitecture() {
    return (
        <div className="w-full h-full min-h-[250px] bg-zinc-950 flex items-center justify-center p-8 relative overflow-hidden rounded-xl border border-zinc-800">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-orange-500/5 to-blue-500/5" />

            <div className="relative z-10 grid grid-cols-3 gap-8 w-full max-w-2xl items-center">
                {/* Source: Server Cluster */}
                <div className="flex flex-col gap-3">
                    <div className="relative p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                        {/* Server Rack */}
                        <div className="flex flex-col gap-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center gap-2 p-2 rounded bg-zinc-900/80 border border-emerald-500/10">
                                    <Server className="w-4 h-4 text-emerald-500" />
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4].map((j) => (
                                            <motion.div
                                                key={j}
                                                className="w-1 h-1 rounded-full bg-emerald-400"
                                                animate={{ opacity: [0.2, 1, 0.2] }}
                                                transition={{ duration: 0.5 + Math.random(), repeat: Infinity, delay: Math.random() }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Data Emission Particles */}
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute right-0 top-1/2 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.8)]"
                                initial={{ x: 0, opacity: 0 }}
                                animate={{ x: 20, opacity: [0, 1, 0] }}
                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
                            />
                        ))}
                    </div>
                    <span className="text-xs font-bold tracking-wider text-emerald-200 uppercase text-center mt-1">1000+ Nodes</span>
                </div>

                {/* Pipeline: Processing */}
                <div className="flex flex-col items-center justify-center relative h-full min-h-[120px]">
                    {/* Connection Line */}
                    <motion.div
                        className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-emerald-500/20 via-orange-500/50 to-blue-500/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />

                    {/* Central Processor */}
                    <div className="relative z-10">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-4 rounded-full border border-dashed border-orange-500/30"
                        />
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="p-4 rounded-2xl bg-orange-500/10 border border-orange-400/30 text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.2)] backdrop-blur-sm"
                        >
                            <Zap className="w-8 h-8" />
                        </motion.div>
                    </div>

                    {/* Fast Data Stream */}
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute top-1/2 left-0 h-[2px] bg-orange-400 rounded-full shadow-[0_0_5px_rgba(249,115,22,0.8)]"
                            initial={{ x: -20, width: 10, opacity: 0 }}
                            animate={{ x: "120%", width: [10, 30, 10], opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2, ease: "linear" }}
                            style={{ width: "20px" }}
                        />
                    ))}
                    <span className="text-xs font-bold tracking-wider text-orange-200 uppercase mt-6">Stream Proc.</span>
                </div>

                {/* Destination: Live Dashboard */}
                <div className="flex flex-col items-center gap-3">
                    <div className="relative p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 w-full h-36 flex flex-col justify-between shadow-[0_0_15px_rgba(59,130,246,0.1)] overflow-hidden">
                        {/* Live Indicator */}
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-bold text-blue-200 uppercase">Traffic</span>
                            <div className="flex items-center gap-1">
                                <motion.div
                                    animate={{ opacity: [1, 0.2, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.8)]"
                                />
                                <span className="text-[8px] font-bold text-red-400 uppercase">LIVE</span>
                            </div>
                        </div>

                        {/* Charts */}
                        <div className="relative h-full flex items-end gap-1">
                            {/* Bar Chart */}
                            {[40, 70, 50, 90, 60, 80, 45].map((h, i) => (
                                <motion.div
                                    key={i}
                                    className="flex-1 bg-blue-400/80 rounded-t-sm shadow-[0_0_5px_rgba(59,130,246,0.3)]"
                                    initial={{ height: "10%" }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                                />
                            ))}

                            {/* Line Chart Overlay */}
                            <svg className="absolute inset-0 w-full h-full overflow-visible" style={{ pointerEvents: 'none' }}>
                                <motion.path
                                    d="M0 50 Q 20 20, 40 60 T 80 30 T 120 70 T 160 40"
                                    fill="none"
                                    stroke="#60a5fa"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                            </svg>
                        </div>
                    </div>
                    <span className="text-xs font-bold tracking-wider text-blue-200 uppercase">Real-time Insights</span>
                </div>
            </div>
        </div>
    );
}
