import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { TechData } from "@/data/tech-data";

interface TechArchitectureProps {
    tech: TechData;
}

export default function TechArchitecture({ tech }: TechArchitectureProps) {
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    const connections = tech.connections || [];
    const radius = 120; // Radius of the orbit
    const center = { x: 200, y: 200 }; // Center of the SVG

    return (
        <div className="w-full h-[400px] flex items-center justify-center bg-muted/10 border border-border relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <svg width="400" height="400" className="z-10">
                {/* Connecting Lines */}
                {connections.map((conn, index) => {
                    const angle = (index / connections.length) * 2 * Math.PI - Math.PI / 2;
                    const x = center.x + radius * Math.cos(angle);
                    const y = center.y + radius * Math.sin(angle);

                    return (
                        <motion.line
                            key={`line-${index}`}
                            x1={center.x}
                            y1={center.y}
                            x2={x}
                            y2={y}
                            stroke="currentColor"
                            strokeWidth="1"
                            className="text-border"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.5 }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        />
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
                                    r="24"
                                    className="fill-background stroke-foreground cursor-pointer hover:stroke-primary transition-colors"
                                    strokeWidth="1"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                                    onMouseEnter={() => setHoveredNode(conn.name)}
                                    onMouseLeave={() => setHoveredNode(null)}
                                />
                            </Link>
                            {/* Icon or Initial */}
                            <motion.text
                                x={x}
                                y={y}
                                dy=".3em"
                                textAnchor="middle"
                                className="text-[10px] font-mono fill-foreground pointer-events-none uppercase"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 + index * 0.1 }}
                            >
                                {conn.name.substring(0, 2)}
                            </motion.text>
                        </g>
                    );
                })}

                {/* Center Node (Current Tech) */}
                <motion.circle
                    cx={center.x}
                    cy={center.y}
                    r="40"
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
                    className="text-sm font-bold font-display fill-background pointer-events-none uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    {tech.name.split(' ')[0].substring(0, 4)}
                </motion.text>
            </svg>

            {/* Hover Info Overlay */}
            <div className="absolute bottom-4 left-0 right-0 text-center h-8">
                {hoveredNode ? (
                    <motion.span
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs font-mono bg-background/80 backdrop-blur px-3 py-1 border border-border rounded-full"
                    >
                        Connected to: <span className="font-bold">{hoveredNode}</span>
                    </motion.span>
                ) : (
                    <span className="text-xs font-mono text-muted-foreground opacity-50">
                        Hover nodes to see connections
                    </span>
                )}
            </div>

            {/* Labels for connections (Absolute positioned divs for better text handling than SVG) */}
            {connections.map((conn, index) => {
                const angle = (index / connections.length) * 2 * Math.PI - Math.PI / 2;
                // Position text slightly outside the node
                const x = center.x + (radius + 40) * Math.cos(angle);
                const y = center.y + (radius + 40) * Math.sin(angle);

                return (
                    <motion.div
                        key={`label-${index}`}
                        className="absolute text-[10px] font-mono text-muted-foreground w-24 text-center pointer-events-none"
                        style={{
                            left: x,
                            top: y,
                            transform: 'translate(-50%, -50%)'
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 + index * 0.1 }}
                    >
                        {conn.role === 'source' ? '← ' : ''}
                        {conn.description}
                        {conn.role === 'destination' ? ' →' : ''}
                    </motion.div>
                );
            })}
        </div>
    );
}
