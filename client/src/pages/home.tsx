import Layout from "@/components/layout";
import ContactFooter from "@/components/contact-footer";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

// Import generated assets
import imgConcrete from "@assets/generated_images/abstract_concrete_architecture_b&w.png";
import imgGlass from "@assets/generated_images/glass_and_steel_structure_abstract.png";
import imgGallery from "@assets/generated_images/minimalist_interior_gallery_space.png";
import imgTech from "@assets/generated_images/geometric_tech_abstract.png";

const projects = [
  {
    id: 1,
    title: "Cloud Infrastructure",
    category: "System Architecture",
    year: "2024",
    image: imgConcrete,
    description: "Scalable microservices on AWS using EC2, ECS, Lambda, S3, RDS, and AI/ML services like SageMaker and Rekognition.",
    route: "/projects/cloud-infrastructure"
  },
  {
    id: 2,
    title: "Neural Network API",
    category: "Machine Learning",
    year: "2023",
    image: imgTech,
    description: "High-throughput inference engine architecture with sub-millisecond latency for production ML systems.",
    route: "/projects/neural-network-api"
  },
  {
    id: 3,
    title: "Data Lakehouse",
    category: "Data Engineering",
    year: "2024",
    image: imgGlass,
    description: "Unified storage layer combining the best of data warehouses and data lakes for modern analytics.",
    route: "/projects/data-lakehouse"
  },
  {
    id: 4,
    title: "Security Protocol",
    category: "Cybersecurity",
    year: "2025",
    image: imgGallery,
    description: "Zero-trust architecture implementation for distributed remote teams with comprehensive security controls.",
    route: "/projects/security-protocol"
  }
];

export default function Home() {
  return (
    <Layout>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-end mb-32 pb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-32 text-[12vw] leading-[0.8] font-display font-bold tracking-tighter uppercase text-foreground opacity-30"
          >
            System<br />
            Architect
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 max-w-md ml-auto mr-0 md:mr-24"
          >
            <p className="font-heading text-lg md:text-xl leading-relaxed text-muted-foreground opacity-60">
              Designing resilient digital structures. Bridging the gap between abstract logic and concrete implementation.
            </p>
          </motion.div>
        </section>

        {/* Gallery Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-y-24 gap-x-8 mb-32">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={project.route}
              className={`group relative cursor-pointer ${index % 2 === 0 ? "md:col-span-7" : "md:col-span-5 md:col-start-8 md:mt-32"
                }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden bg-secondary aspect-[4/5] mb-6">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full grayscale contrast-[1.1] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                <div className="flex justify-between items-start border-t border-border pt-4">
                  <div>
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-xs font-mono text-muted-foreground">0{project.id}</span>
                      <h3 className="text-2xl font-display font-bold uppercase tracking-tight group-hover:text-muted-foreground transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground font-mono">{project.category}</p>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="text-xs font-mono text-muted-foreground mb-2">{project.year}</span>
                    <div className="p-2 rounded-full border border-border group-hover:bg-foreground group-hover:text-background transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </section>

        {/* Minimal Text Section */}
        <section className="py-32 md:py-48 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter leading-none">
              Code is<br />Structure
            </h2>
            <div className="space-y-8">
              <p className="text-lg font-heading leading-relaxed text-muted-foreground">
                Just as physical architecture shapes how we live, software architecture shapes how we work, think, and connect. I build digital environments that are robust, scalable, and elegant.
              </p>
              <ul className="grid grid-cols-2 gap-4 font-mono text-sm uppercase tracking-wide">
                <li className="border-b border-border pb-2">Distributed Systems</li>
                <li className="border-b border-border pb-2">Cloud Native</li>
                <li className="border-b border-border pb-2">Event-Driven</li>
                <li className="border-b border-border pb-2">Micro-Frontends</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <ContactFooter />
    </Layout>
  );
}
