import Layout from "@/components/layout";
import ContactFooter from "@/components/contact-footer";
import ParticleBackground from "@/components/particle-background";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

// Import Architecture Components
import AIArchitecture from "@/components/architectures/AIArchitecture";
import MonitoringArchitecture from "@/components/architectures/MonitoringArchitecture";
import TTSArchitecture from "@/components/architectures/TTSArchitecture";
import RAGArchitecture from "@/components/architectures/RAGArchitecture";
import LexGuardArchitecture from "@/components/architectures/LexGuardArchitecture";

const projects = [
  {
    id: 1,
    title: "AI Conversational Bot",
    category: "AI/ML",
    year: "2024",
    Component: AIArchitecture,
    description: "An intelligent, generative AI–enhanced chatbot using Amazon Lex, Amazon Bedrock, and AWS Lambda for natural language understanding and dynamic responses.",
    route: "/projects/ai-conversational-bot"
  },
  {
    id: 2,
    title: "Real-time Monitoring",
    category: "Data Engineering",
    year: "2024",
    Component: MonitoringArchitecture,
    description: "A scalable solution to collect, process, and visualize real-time network flow logs from 1000+ machines, providing actionable insights into machine usage and network activity.",
    route: "/projects/real-time-monitoring"
  },
  {
    id: 3,
    title: "TTS Pipeline",
    category: "Serverless",
    year: "2024",
    Component: TTSArchitecture,
    description: "A serverless pipeline using AWS Lambda and Amazon Polly to convert dynamic text into high-quality, lifelike speech audio files, stored and served via S3.",
    route: "/projects/tts-pipeline"
  },
  {
    id: 4,
    title: "Multimodal RAG",
    category: "AI/ML",
    year: "2025",
    Component: RAGArchitecture,
    description: "Engineered a full-stack, multimodal RAG (Retrieval-Augmented Generation) system capable of processing and reasoning across both text and image data for complex document analysis.",
    route: "/projects/multimodal-rag"
  },
  {
    id: 5,
    title: "LexGuard",
    category: "Serverless AI",
    year: "2025",
    Component: LexGuardArchitecture,
    description: "A production-grade, serverless contract analysis platform using AWS Lambda, Amazon Bedrock (Titan), and Textract for automated legal risk assessment.",
    route: "/projects/lex-guard"
  }
];

export default function Home() {
  return (
    <Layout>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <section className="relative md:min-h-[80vh] flex flex-col justify-center md:justify-end mb-16 md:mb-32 pb-12 pt-20 md:pt-0">
          <ParticleBackground />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 mt-4 md:mt-32 text-[12vw] leading-[0.8] font-display font-bold tracking-tighter uppercase text-foreground opacity-30"
          >
            System<br />
            Architect
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative z-10 mt-12 max-w-md ml-auto mr-0 md:mr-24"
          >
            <p className="font-heading text-lg md:text-xl leading-relaxed text-muted-foreground opacity-60">
              Designing resilient digital structures. Bridging the gap between abstract logic and concrete implementation.
            </p>
          </motion.div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-20 md:mb-48 border-t border-border pt-16 md:pt-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-12 md:mb-16">
              Technology Stack
            </h2>

            {/* Scrollable Container with Fade Masks */}
            <div className="relative group/scroll">
              {/* Top Fade Mask */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none opacity-0 group-hover/scroll:opacity-100 transition-opacity duration-300"></div>

              {/* Bottom Fade Mask */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none opacity-0 group-hover/scroll:opacity-100 transition-opacity duration-300"></div>

              {/* Scrollable Grid - Fixed height showing 2 rows */}
              <div className="max-h-[280px] md:max-h-[320px] overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent hover:scrollbar-thumb-foreground/20 transition-all">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 pb-4">
                  {[
                    { name: "EC2", desc: "Scalable compute capacity", slug: "ec2" },
                    { name: "S3", desc: "Object storage service", slug: "s3" },
                    { name: "EMR", desc: "Big data processing", slug: "emr" },
                    { name: "VPC", desc: "Isolated cloud resources", slug: "vpc" },
                    { name: "IAM", desc: "Identity & access management", slug: "iam" },
                    { name: "SageMaker", desc: "Build, train & deploy ML models", slug: "sagemaker" },
                    { name: "Bedrock", desc: "Foundation models via API", slug: "bedrock" },
                    { name: "CloudFront", desc: "Content delivery network", slug: "cloudfront" },
                    { name: "CloudFormation", desc: "Infrastructure as code", slug: "cloudformation" },
                    { name: "Athena", desc: "Serverless query service", slug: "athena" },
                    { name: "QuickSight", desc: "Business intelligence", slug: "quicksight" },
                    { name: "Ollama", desc: "Run LLMs locally", slug: "ollama" },
                    { name: "Cognito", desc: "User authentication", slug: "cognito" },
                    { name: "Lambda", desc: "Serverless compute", slug: "lambda" },
                    { name: "Rekognition", desc: "Image & video analysis", slug: "rekognition" },
                    { name: "Comprehend", desc: "Natural language processing", slug: "comprehend" },
                    { name: "Textract", desc: "Extract text from documents", slug: "textract" },
                    { name: "Polly", desc: "Text-to-speech service", slug: "polly" },
                    { name: "Lex", desc: "Conversational AI", slug: "lex" },
                    { name: "Kendra", desc: "Intelligent search", slug: "kendra" },
                    { name: "Step Functions", desc: "Workflow orchestration", slug: "step-functions" },
                    { name: "EventBridge", desc: "Event-driven architecture", slug: "eventbridge" },
                    { name: "DynamoDB", desc: "NoSQL database", slug: "dynamodb" },
                    { name: "RDS", desc: "Relational database service", slug: "rds" }
                  ].map((tech, index) => (
                    <Link key={tech.slug} href={`/tech/${tech.slug}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="group relative border border-border p-6 md:p-8 hover:border-foreground/50 transition-all cursor-pointer overflow-hidden bg-background hover:bg-muted/5"
                      >
                        <div className="relative z-10 flex flex-col h-full justify-between gap-4">
                          <span className="font-display font-bold text-sm md:text-base uppercase tracking-tight group-hover:text-primary transition-colors">
                            {tech.name}
                          </span>
                          <p className="font-mono text-[10px] md:text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-tight">
                            {tech.desc}
                          </p>
                        </div>
                        {/* Subtle corner accent */}
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-transparent group-hover:border-foreground transition-all duration-300"></div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Scroll Hint */}
              <div className="mt-4 text-center opacity-0 group-hover/scroll:opacity-100 transition-opacity duration-300">
                <p className="text-xs font-mono text-muted-foreground">Scroll to explore more →</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Gallery Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 md:mb-32">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={project.route}
              className="group relative cursor-pointer"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden bg-zinc-950 border border-white/10 aspect-video mb-6 group-hover:border-primary/50 transition-colors duration-500">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10 pointer-events-none" />
                  <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out">
                    <project.Component />
                  </div>
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
        <section className="py-20 md:py-48 border-t border-border">
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
