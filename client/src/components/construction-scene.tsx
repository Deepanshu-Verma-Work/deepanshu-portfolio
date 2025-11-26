import { motion } from "framer-motion";

export default function ConstructionScene() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <svg
                viewBox="0 0 1200 600"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Ground line */}
                <line x1="0" y1="550" x2="1200" y2="550" stroke="currentColor" strokeWidth="2" />

                {/* Building 1 - Left */}
                <motion.g
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                >
                    <rect x="50" y="400" width="120" height="150" fill="none" stroke="currentColor" strokeWidth="2" />
                    <line x1="110" y1="400" x2="110" y2="550" stroke="currentColor" strokeWidth="1" />
                    <line x1="50" y1="475" x2="170" y2="475" stroke="currentColor" strokeWidth="1" />
                </motion.g>

                {/* Building 2 - Right */}
                <motion.g
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                >
                    <rect x="1000" y="350" width="150" height="200" fill="none" stroke="currentColor" strokeWidth="2" />
                    <line x1="1050" y1="350" x2="1050" y2="550" stroke="currentColor" strokeWidth="1" />
                    <line x1="1100" y1="350" x2="1100" y2="550" stroke="currentColor" strokeWidth="1" />
                    <line x1="1000" y1="425" x2="1150" y2="425" stroke="currentColor" strokeWidth="1" />
                    <line x1="1000" y1="500" x2="1150" y2="500" stroke="currentColor" strokeWidth="1" />
                </motion.g>

                {/* Crane */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    {/* Crane base */}
                    <rect x="380" y="500" width="40" height="50" fill="none" stroke="currentColor" strokeWidth="2" />
                    {/* Crane tower */}
                    <line x1="400" y1="500" x2="400" y2="250" stroke="currentColor" strokeWidth="3" />
                    {/* Crane arm */}
                    <motion.line
                        x1="400"
                        y1="250"
                        x2="550"
                        y2="250"
                        stroke="currentColor"
                        strokeWidth="2"
                        animate={{ x2: [550, 520, 550] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    {/* Crane cable */}
                    <motion.line
                        x1="520"
                        y1="250"
                        x2="520"
                        y2="400"
                        stroke="currentColor"
                        strokeWidth="1"
                        animate={{ y2: [400, 350, 400] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    {/* Crane hook/box */}
                    <motion.rect
                        x="510"
                        y="390"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        animate={{ y: [390, 340, 390] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.g>

                {/* Stick Figure Worker 1 - Walking */}
                <motion.g
                    animate={{ x: [0, 1200] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    <g transform="translate(200, 520)">
                        {/* Head */}
                        <circle cx="0" cy="0" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
                        {/* Body */}
                        <line x1="0" y1="8" x2="0" y2="28" stroke="currentColor" strokeWidth="2" />
                        {/* Arms */}
                        <motion.line
                            x1="0"
                            y1="15"
                            x2="-12"
                            y2="22"
                            stroke="currentColor"
                            strokeWidth="2"
                            animate={{ rotate: [0, 20, 0, -20, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        />
                        <motion.line
                            x1="0"
                            y1="15"
                            x2="12"
                            y2="22"
                            stroke="currentColor"
                            strokeWidth="2"
                            animate={{ rotate: [0, -20, 0, 20, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        />
                        {/* Legs */}
                        <motion.line
                            x1="0"
                            y1="28"
                            x2="-8"
                            y2="45"
                            stroke="currentColor"
                            strokeWidth="2"
                            animate={{ rotate: [0, 15, 0, -15, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        />
                        <motion.line
                            x1="0"
                            y1="28"
                            x2="8"
                            y2="45"
                            stroke="currentColor"
                            strokeWidth="2"
                            animate={{ rotate: [0, -15, 0, 15, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        />
                    </g>
                </motion.g>

                {/* Stick Figure Worker 2 - Hammering */}
                <motion.g transform="translate(700, 520)">
                    {/* Head */}
                    <circle cx="0" cy="0" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
                    {/* Body */}
                    <line x1="0" y1="8" x2="0" y2="28" stroke="currentColor" strokeWidth="2" />
                    {/* Arm with hammer */}
                    <motion.g
                        animate={{ rotate: [-30, 10, -30] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        style={{ transformOrigin: "0px 15px" }}
                    >
                        <line x1="0" y1="15" x2="15" y2="5" stroke="currentColor" strokeWidth="2" />
                        <rect x="15" y="2" width="8" height="6" fill="currentColor" />
                    </motion.g>
                    {/* Other arm */}
                    <line x1="0" y1="15" x2="-10" y2="20" stroke="currentColor" strokeWidth="2" />
                    {/* Legs */}
                    <line x1="0" y1="28" x2="-6" y2="45" stroke="currentColor" strokeWidth="2" />
                    <line x1="0" y1="28" x2="6" y2="45" stroke="currentColor" strokeWidth="2" />
                </motion.g>

                {/* Stick Figure Worker 3 - Carrying box */}
                <motion.g
                    animate={{ x: [900, 600, 900] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                    <g transform="translate(0, 515)">
                        {/* Head */}
                        <circle cx="0" cy="0" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
                        {/* Body */}
                        <line x1="0" y1="8" x2="0" y2="28" stroke="currentColor" strokeWidth="2" />
                        {/* Arms holding box */}
                        <line x1="0" y1="15" x2="-15" y2="18" stroke="currentColor" strokeWidth="2" />
                        <line x1="0" y1="15" x2="15" y2="18" stroke="currentColor" strokeWidth="2" />
                        {/* Box */}
                        <rect x="-12" y="15" width="24" height="15" fill="none" stroke="currentColor" strokeWidth="2" />
                        {/* Legs */}
                        <motion.line
                            x1="0"
                            y1="28"
                            x2="-7"
                            y2="45"
                            stroke="currentColor"
                            strokeWidth="2"
                            animate={{ rotate: [0, 10, 0, -10, 0] }}
                            transition={{ duration: 1.2, repeat: Infinity }}
                        />
                        <motion.line
                            x1="0"
                            y1="28"
                            x2="7"
                            y2="45"
                            stroke="currentColor"
                            strokeWidth="2"
                            animate={{ rotate: [0, -10, 0, 10, 0] }}
                            transition={{ duration: 1.2, repeat: Infinity }}
                        />
                    </g>
                </motion.g>

                {/* Small building blocks being stacked */}
                <motion.g transform="translate(250, 500)">
                    <motion.rect
                        x="0"
                        y="30"
                        width="30"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        initial={{ y: 30 }}
                    />
                    <motion.rect
                        x="0"
                        y="10"
                        width="30"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 10, opacity: 1 }}
                        transition={{ duration: 2, delay: 2 }}
                    />
                </motion.g>

                {/* Floating particles/dust */}
                {[...Array(15)].map((_, i) => (
                    <motion.circle
                        key={i}
                        cx={100 + i * 80}
                        cy={500}
                        r="2"
                        fill="currentColor"
                        animate={{
                            y: [-20, -60, -20],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: 3 + i * 0.2,
                            repeat: Infinity,
                            delay: i * 0.3,
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}
