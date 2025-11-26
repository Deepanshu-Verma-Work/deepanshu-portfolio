import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { TechData } from "@/data/tech-data";

interface TechArchitectureProps {
    tech: TechData;
}

// Helper to get short code from name
function getTechLabel(name: string): string {
    const clean = name.replace("Amazon ", "").replace("AWS ", "");
    if (clean.length <= 6) return clean;
    return clean.substring(0, 4).toUpperCase();
}

export default function TechArchitecture({ tech }: TechArchitectureProps) {
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);
    const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

    const connections = tech.connections || [];
    const center = { x: 300, y: 300 }; // Center of the SVG (600x600 canvas)
    const radius = 160;

    // Handle image load error
    const handleImageError = (slug: string) => {
        setImageErrors(prev => ({ ...prev, [slug]: true }));
    };

    // Fixed positions for cleaner layout (up to 4 connections)
    // 0: Right, 1: Left, 2: Top, 3: Bottom
    const getPosition = (index: number, total: number) => {
        // If we have many connections, fallback to radial
        if (total > 4) {
            const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
            return {
                x: center.x + radius * Math.cos(angle),
                y: center.y + radius * Math.sin(angle),
                align: 'radial'
            };
        }

        // Snap to cardinal directions for better layout
        const positions = [
            { x: center.x + radius, y: center.y, align: 'right' },
            { x: center.x - radius, y: center.y, align: 'left' },
            { x: center.x, y: center.y - radius, align: 'top' },
            { x: center.x, y: center.y + radius, align: 'bottom' }
        ];

        return positions[index % 4];
    };

    return (
        <div className="w-full h-[600px] flex items-center justify-center bg-muted/5 border border-border relative overflow-visible rounded-lg">
            {/* Background Grid - subtler */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]"></div>

            <svg width="600" height="600" className="z-10 relative">
                {/* Connecting Lines */}
                {connections.map((conn, index) => {
                    const pos = getPosition(index, connections.length);

                    return (
                        <motion.g key={`line-group-${index}`}>
                            {/* Base Line */}
                            <motion.line
                                x1={center.x}
                                y1={center.y}
                                x2={pos.x}
                                y2={pos.y}
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
                                    path={`M${conn.role === 'source' ? pos.x : center.x},${conn.role === 'source' ? pos.y : center.y} L${conn.role === 'source' ? center.x : pos.x},${conn.role === 'source' ? center.y : pos.y}`}
                                />
                            </motion.circle>
                        </motion.g>
                    );
                })}

                {/* Satellite Nodes */}
                {connections.map((conn, index) => {
                    const pos = getPosition(index, connections.length);
                    const hasIcon = !imageErrors[conn.slug];

                    return (
                        <g key={`node-${index}`}>
                            <Link href={`/tech/${conn.slug}`}>
                                <g
                                    className="cursor-pointer group"
                                    onMouseEnter={() => setHoveredNode(conn.name)}
                                    onMouseLeave={() => setHoveredNode(null)}
                                >
                                    <motion.circle
                                        cx={pos.x}
                                        cy={pos.y}
                                        r="32"
                                        className="fill-background stroke-border group-hover:stroke-primary group-hover:stroke-2 transition-all"
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                                    />

                                    {/* Icon or Initials */}
                                    <foreignObject x={pos.x - 20} y={pos.y - 20} width="40" height="40" className="pointer-events-none">
                                        <div className="w-full h-full flex items-center justify-center">
                                            {hasIcon ? (
                                                <img
                                                    src={`/deepanshu-portfolio/tech-icons/${conn.slug}.svg`}
                                                    alt={conn.name}
                                                    className="w-8 h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                                    onError={() => handleImageError(conn.slug)}
                                                />
                                            ) : (
                                                <span className="text-[10px] font-mono font-bold text-foreground uppercase tracking-tighter">
                                                    {getTechLabel(conn.name)}
                                                </span>
                                            )}
                                        </div>
                                    </foreignObject>
                                </g>
                            </Link>
                        </g>
                    );
                })}

                {/* Center Node (Current Tech) */}
                <g>
                    {/* Pulse Effect */}
                    <motion.circle
                        cx={center.x}
                        cy={center.y}
                        r="50"
                        className="fill-primary/10"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.circle
                        cx={center.x}
                        cy={center.y}
                        r="50"
                        className="fill-foreground"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    />

                    {/* Center Icon or Text */}
                    <foreignObject x={center.x - 30} y={center.y - 30} width="60" height="60" className="pointer-events-none">
                        <div className="w-full h-full flex items-center justify-center">
                            {!imageErrors[tech.name.toLowerCase().replace(/ /g, '-')] ? (
                                <img
                                    src={`/deepanshu-portfolio/tech-icons/${tech.name.toLowerCase().replace(/ /g, '-')}.svg`}
                                    // Try slug if available, but here we only have tech object. 
                                    // Actually techData keys are slugs. But we don't have the slug passed as prop easily unless we pass it.
                                    // Wait, tech object doesn't have slug property in interface? 
                                    // I added it to connections, but the main tech object might not have it.
                                    // I'll try to use a safe fallback or just text for center for now to be safe, 
                                    // OR better: pass slug to component.
                                    alt={tech.name}
                                    className="w-10 h-10 object-contain invert"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        // We can't easily switch to text here without state, but we can hide image.
                                        // Let's stick to text for center node for now to ensure it looks good, 
                                        // or use the same state logic if I pass slug.
                                    }}
                                />
                            ) : null}
                            <span className={`text-sm font-bold font-display text-background uppercase tracking-tight ${!imageErrors[tech.name.toLowerCase().replace(/ /g, '-')] ? 'hidden' : 'block'}`}>
                                {getTechLabel(tech.name)}
                            </span>
                        </div>
                    </foreignObject>

                    {/* Fallback Text if image fails (handled by CSS/JS above roughly, but let's be cleaner) */}
                    <motion.text
                        x={center.x}
                        y={center.y}
                        dy=".3em"
                        textAnchor="middle"
                        className="text-sm font-bold font-display fill-background pointer-events-none uppercase tracking-tight"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        style={{ display: 'block' }} // Always show text for center for now, it looks cool on black circle
                    >
                        {getTechLabel(tech.name)}
                    </motion.text>
                </g>
            </svg>

            {/* Labels for connections - Absolute positioned divs outside SVG */}
            {connections.map((conn, index) => {
                const pos = getPosition(index, connections.length);

                // Determine alignment based on coordinates
                const isRight = pos.x > center.x + 20;
                const isLeft = pos.x < center.x - 20;
                const isTop = pos.y < center.y - 20;
                const isBottom = pos.y > center.y + 20;

                // Calculate position - SVG is centered in the container
                const offset = 75;
                let labelStyle: React.CSSProperties = {
                    position: 'absolute',
                    pointerEvents: 'none',
                    zIndex: 30,
                    maxWidth: '180px',
                    minWidth: '100px'
                };

                if (isRight) {
                    labelStyle.left = `calc(50% + ${pos.x - center.x + offset}px)`;
                    labelStyle.top = `calc(50% + ${pos.y - center.y}px)`;
                    labelStyle.transform = 'translateY(-50%)';
                } else if (isLeft) {
                    labelStyle.right = `calc(50% + ${center.x - pos.x + offset}px)`;
                    labelStyle.top = `calc(50% + ${pos.y - center.y}px)`;
                    labelStyle.transform = 'translateY(-50%)';
                } else if (isTop) {
                    labelStyle.left = `calc(50% + ${pos.x - center.x}px)`;
                    labelStyle.top = `calc(50% + ${pos.y - center.y - offset}px)`;
                    labelStyle.transform = 'translate(-50%, -100%)';
                } else if (isBottom) {
                    labelStyle.left = `calc(50% + ${pos.x - center.x}px)`;
                    labelStyle.top = `calc(50% + ${pos.y - center.y + 65}px)`;
                    labelStyle.transform = 'translateX(-50%)';
                } else {
                    labelStyle.left = `calc(50% + ${pos.x - center.x}px)`;
                    labelStyle.top = `calc(50% + ${pos.y - center.y + 50}px)`;
                    labelStyle.transform = 'translateX(-50%)';
                }

                return (
                    <motion.div
                        key={`label-${index}`}
                        style={labelStyle}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5 + index * 0.1 }}
                        className="bg-background/95 backdrop-blur-sm px-3 py-2 rounded-md border border-border shadow-sm"
                    >
                        <div className={`text-[8px] uppercase tracking-wider font-semibold opacity-70 mb-0.5 ${isRight ? 'text-left' : isLeft ? 'text-right' : 'text-center'
                            }`}>
                            {conn.role === 'source' ? '← Inputs' : conn.role === 'destination' ? 'Outputs →' : 'Integrates'}
                        </div>
                        <div className={`text-[11px] font-bold leading-tight ${isRight ? 'text-left' : isLeft ? 'text-right' : 'text-center'
                            }`}>
                            {conn.description}
                        </div>
                    </motion.div>
                );
            })}

            {/* Hover Info Overlay */}
            <div className="absolute bottom-8 left-0 right-0 text-center h-8 pointer-events-none">
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
        </div>
    );
}
