import Layout from "@/components/layout";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Layout>
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Title Section */}
          <div className="md:col-span-12 mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10vw] leading-[0.8] font-display font-bold tracking-tighter uppercase text-foreground opacity-10"
            >
              Profile
            </motion.h1>
          </div>

          {/* Bio Section */}
          <div className="md:col-span-5 md:col-start-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg text-muted-foreground"
            >
              <p className="text-xl font-heading text-foreground leading-relaxed mb-8">
                I am an IT Architect obsessed with the elegance of logic and the strength of well-designed systems.
              </p>
              <p className="mb-6 font-light">
                With over a decade of experience in distributed systems, I approach code not just as instructions, but as digital infrastructure. My philosophy is rooted in "Digital Brutalism"—honoring the raw materials of computation (data, latency, throughput) rather than hiding them behind abstractions.
              </p>
              <p className="font-light">
                Currently focused on building resilient cloud-native architectures that can withstand the entropy of the modern web.
              </p>
            </motion.div>
          </div>

          {/* Stats / Skills Section */}
          <div className="md:col-span-4 md:col-start-8">
             <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-12"
             >
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest mb-6 border-b border-border pb-2">Core Competencies</h3>
                  <ul className="space-y-3">
                    {["System Design", "Cloud Infrastructure", "DevOps Automation", "Security Compliance", "Performance Tuning"].map((skill) => (
                      <li key={skill} className="text-lg font-display uppercase tracking-tight hover:translate-x-2 transition-transform cursor-default">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest mb-6 border-b border-border pb-2">Tech Stack</h3>
                  <div className="grid grid-cols-2 gap-4 font-mono text-sm text-muted-foreground">
                    <div>Kubernetes</div>
                    <div>AWS / Azure</div>
                    <div>Terraform</div>
                    <div>Rust / Go</div>
                    <div>Python</div>
                    <div>React / Next.js</div>
                  </div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
