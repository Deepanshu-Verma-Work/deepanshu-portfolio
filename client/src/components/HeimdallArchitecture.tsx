import React from 'react';
import { motion } from 'framer-motion';
import { Video, Server, ShieldAlert, Database, Bell, Cpu, ArrowRight } from 'lucide-react';

const HeimdallArchitecture = () => {
    return (
        <div className="w-full bg-slate-900/50 p-8 rounded-xl border border-slate-800 my-12">
            <h3 className="text-xl font-bold text-white mb-8 text-center">Production Architecture</h3>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative">

                {/* Step 1: Ingestion */}
                <div className="flex flex-col items-center gap-4 z-10">
                    <div className="p-4 bg-blue-500/20 rounded-xl border border-blue-500/40">
                        <Video className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="text-center">
                        <h4 className="text-blue-400 font-bold">CCTV Feed</h4>
                        <p className="text-xs text-slate-400 mt-1">RTSP Stream</p>
                    </div>
                </div>

                <ArrowRight className="text-slate-600 hidden lg:block" />

                {/* Step 2: IoT Core / Kinesis */}
                <div className="flex flex-col items-center gap-4 z-10">
                    <div className="p-4 bg-purple-500/20 rounded-xl border border-purple-500/40">
                        <Cpu className="w-8 h-8 text-purple-400" />
                    </div>
                    <div className="text-center">
                        <h4 className="text-purple-400 font-bold">AWS IoT Core</h4>
                        <p className="text-xs text-slate-400 mt-1">Device Management</p>
                    </div>
                </div>

                <ArrowRight className="text-slate-600 hidden lg:block" />

                {/* Step 3: Processing */}
                <div className="flex flex-col items-center gap-4 z-10">
                    <div className="p-4 bg-cyan-500/20 rounded-xl border border-cyan-500/40">
                        <Server className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="text-center">
                        <h4 className="text-cyan-400 font-bold">Kinesis Video</h4>
                        <p className="text-xs text-slate-400 mt-1">Stream Processing</p>
                    </div>
                </div>

                <ArrowRight className="text-slate-600 hidden lg:block" />

                {/* Step 4: AI Analysis */}
                <div className="flex flex-col items-center gap-4 z-10">
                    <div className="p-4 bg-green-500/20 rounded-xl border border-green-500/40">
                        <ShieldAlert className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-center">
                        <h4 className="text-green-400 font-bold">Rekognition</h4>
                        <p className="text-xs text-slate-400 mt-1">PPE Detection Model</p>
                    </div>
                </div>

                <ArrowRight className="text-slate-600 hidden lg:block" />

                {/* Step 5: Action */}
                <div className="flex flex-col items-center gap-4 z-10">
                    <div className="p-4 bg-red-500/20 rounded-xl border border-red-500/40">
                        <Bell className="w-8 h-8 text-red-400" />
                    </div>
                    <div className="text-center">
                        <h4 className="text-red-400 font-bold">SNS Alerts</h4>
                        <p className="text-xs text-slate-400 mt-1">SMS / Email / Slack</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeimdallArchitecture;
