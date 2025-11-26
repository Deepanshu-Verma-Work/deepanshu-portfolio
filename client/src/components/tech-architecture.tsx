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
    const center = { x: 250, y: 250 }; // Center of the SVG (500x500 canvas)
    const radius = 140;

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
        <div className="w-full h-[500px] flex items-center justify-center bg-muted/5 border border-border relative overflow-hidden rounded-lg">
            {/* Background Grid - subtler */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]"></div>

            <svg width="500" height="500" className="z-10 relative">
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

                {/* Labels for connections - Using foreignObject inside SVG */}
                {connections.map((conn, index) => {
                    const pos = getPosition(index, connections.length);

                    // Determine alignment based on coordinates
                    const isRight = pos.x > center.x + 20;
                    const isLeft = pos.x < center.x - 20;
                    const isTop = pos.y < center.y - 20;
                    const isBottom = pos.y > center.y + 20;

                    // Offset from the node center
                    const offset = 80;
                    let labelX = pos.x;
                    let labelY = pos.y;
                    let textAnchor: 'start' | 'middle' | 'end' = 'middle';
                    let width = 160;
                    let height = 60;

                    if (isRight) {
                        labelX = pos.x + offset;
                        labelY = pos.y - height / 2;
                        textAnchor = 'start';
                    } else if (isLeft) {
                        labelX = pos.x - offset - width;
                        labelY = pos.y - height / 2;
                        textAnchor = 'end';
                    } else if (isTop) {
                        labelX = pos.x - width / 2;
                        labelY = pos.y - offset - height;
                        textAnchor = 'middle';
                    } else if (isBottom) {
                        labelX = pos.x - width / 2;
                        labelY = pos.y + offset;
                        textAnchor = 'middle';
                    } else {
                        // Fallback for radial
                        labelX = pos.x - width / 2;
                        labelY = pos.y + 45;
                        textAnchor = 'middle';
                    }

                    return (
                        <motion.foreignObject
                            key={`label-${index}`}
                            x={labelX}
                            y={labelY}
                            width={width}
                            height={height}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.5 + index * 0.1 }}
                        >
                            <div
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: textAnchor === 'start' ? 'flex-start' : textAnchor === 'end' ? 'flex-end' : 'center',
                                    justifyContent: 'center',
                                    pointerEvents: 'none',
                                    fontSize: '10px',
                                    fontFamily: 'monospace',
                                    color: 'hsl(var(--muted-foreground))',
                                    background: 'rgba(255,255,255,0.95)',
                                    padding: '5px 8px',
                                    borderRadius: '6px',
                                    backdropFilter: 'blur(8px)',
                                    border: '1px solid rgba(0,0,0,0.08)',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                    textAlign: textAnchor === 'start' ? 'left' : textAnchor === 'end' ? 'right' : 'center',
                                    wordWrap: 'break-word',
                                    overflow: 'visible'
                                }}
                            >
                                <span style={{
                                    display: 'block',
                                    opacity: 0.7,
                                    marginBottom: '2px',
                                    fontSize: '8px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    fontWeight: 600
                                }}>
                                    {conn.role === 'source' ? '← Inputs' : conn.role === 'destination' ? 'Outputs →' : 'Integrates'}
                                </span>
                                <span style={{ fontWeight: 700, color: 'hsl(var(--foreground))', fontSize: '11px', lineHeight: '1.3' }}>
                                    {conn.description}
                                </span>
                            </div>
                        </motion.foreignObject>
                    );
                })}
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
        </div>
    );
}
