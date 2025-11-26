import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { TechData } from "@/data/tech-data";

interface TechArchitectureProps {
    tech: TechData;
}

// Helper to get short code from name
function getTechInitials(name: string): string {
    if (name.startsWith("Amazon ")) return name.replace("Amazon ", "");
    if (name.startsWith("AWS ")) return name.replace("AWS ", "");
    return name.substring(0, 3);
}

export default function TechArchitecture({ tech }: TechArchitectureProps) {
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    const connections = tech.connections || [];
    const radius = 140; // Increased radius for more space
    const center = { x: 250, y: 200 }; // Center of the SVG (500x400 canvas)

    return (
        <div className="w-full h-[400px] flex items-center justify-center bg-muted/5 border border-border relative overflow-hidden rounded-lg">
            {/* Background Grid - subtler */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]"></div>

            <svg width="500" height="400" className="z-10 relative">
                {/* Connecting Lines */}
                {connections.map((conn, index) => {
                    const angle = (index / connections.length) * 2 * Math.PI - Math.PI / 2;
                    const x = center.x + radius * Math.cos(angle);
                    const y = center.y + radius * Math.sin(angle);

                    return (
                        <motion.g key={`line-group-${index}`}>
                            {/* Base Line */}
                            <motion.line
                                x1={center.x}
                                y1={center.y}
                                x2={x}
                                y2={y}
                                stroke="currentColor"
                                strokeWidth="1"
                                className="text-border"
                                strokeDasharray="4 4"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.3 }}
                                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                            />
                            {/* Animated Flow Particle */}
                            <motion.circle
                                r="2"
                                className={conn.role === 'source' ? "fill-primary" : "fill-foreground"}
                                initial={{ pathLength: 0 }}
                            >
                                <animateMotion
                                    dur="3s"
                                    repeatCount="indefinite"
                                    path={`M${conn.role === 'source' ? x : center.x},${conn.role === 'source' ? y : center.y} L${conn.role === 'source' ? center.x : x},${conn.role === 'source' ? center.y : y}`}
                                />
                            </motion.circle>
                        </motion.g>
                    );
                })}

                {/* Satellite Nodes */}
                {connections.map((conn, index) => {
                    const angle = (index / connections.length) * 2 * Math.PI - Math.PI / 2;
                    const x = center.x + radius * Math.cos(angle);
                    const y = center.y + radius * Math.sin(angle);

                    return (
                        <g key={`node-${index}`}>
                            <Link href={`/tech/${conn.slug}`}>
                                <motion.circle
                                    cx={x}
                                    cy={y}
                                    r="28"
                                    className="fill-background stroke-border cursor-pointer hover:stroke-primary hover:stroke-2 transition-all"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                                    onMouseEnter={() => setHoveredNode(conn.name)}
                                    onMouseLeave={() => setHoveredNode(null)}
                                />
                            </Link>
                            {/* Initials */}
                            <motion.text
                                x={x}
                                y={y}
                                dy=".3em"
                                textAnchor="middle"
                                className="text-[10px] font-mono font-bold fill-foreground pointer-events-none uppercase tracking-tighter"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 + index * 0.1 }}
                            >
                                {getTechInitials(conn.name).substring(0, 4)}
                            </motion.text>
                        </g>
                    );
                })}

                {/* Center Node (Current Tech) */}
                <g>
                    {/* Pulse Effect */}
                    <motion.circle
                        cx={center.x}
                        cy={center.y}
                        r="45"
                        className="fill-primary/10"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.circle
                        cx={center.x}
                        cy={center.y}
                        r="45"
                        className="fill-foreground"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    />
                    <motion.text
                        x={center.x}
                        y={center.y}
                        dy=".3em"
                        textAnchor="middle"
                        className="text-sm font-bold font-display fill-background pointer-events-none uppercase tracking-tight"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {getTechInitials(tech.name).substring(0, 5)}
                    </motion.text>
                </g>
            </svg>

            {/* Hover Info Overlay */}
            <div className="absolute bottom-4 left-0 right-0 text-center h-8 pointer-events-none">
                {hoveredNode ? (
                    <motion.span
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block text-xs font-mono bg-background/90 backdrop-blur px-4 py-1.5 border border-border rounded-full shadow-sm"
                    >
                        Connected to: <span className="font-bold text-primary">{hoveredNode}</span>
                    </motion.span>
                ) : (
                    <span className="text-xs font-mono text-muted-foreground opacity-40">
                        Hover nodes to explore connections
                    </span>
                )}
            </div>

            {/* Labels for connections - Improved Positioning */}
            {connections.map((conn, index) => {
                const angle = (index / connections.length) * 2 * Math.PI - Math.PI / 2;
                // Push text further out
                const labelRadius = radius + 45;
                const x = center.x + labelRadius * Math.cos(angle);
                const y = center.y + labelRadius * Math.sin(angle);

                // Dynamic alignment based on position relative to center
                const isLeft = x < center.x - 20;
                const isRight = x > center.x + 20;
                const isTop = y < center.y - 50;
                const isBottom = y > center.y + 50;

                let textAlign = "center";
                let transform = "translate(-50%, -50%)";

                if (isLeft) {
                    textAlign = "right";
                    transform = "translate(-100%, -50%)"; // Anchor right
                } else if (isRight) {
                    textAlign = "left";
                    transform = "translate(0, -50%)"; // Anchor left
                }

                return (
                    <motion.div
                        key={`label-${index}`}
                        className="absolute text-[10px] font-mono text-muted-foreground pointer-events-none whitespace-nowrap"
                        style={{
                            left: x,
                            top: y,
                            transform,
                            textAlign: textAlign as any
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 + index * 0.1 }}
                    >
                        <span className="block opacity-70 mb-0.5">{conn.role === 'source' ? '← Inputs' : conn.role === 'destination' ? 'Outputs →' : 'Integrates'}</span>
                        <span className="font-semibold text-foreground/80">{conn.description}</span>
                    </motion.div>
                );
            })}
        </div>
    );
}
