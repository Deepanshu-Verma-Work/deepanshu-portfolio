import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { ArrowLeft, Cloud, Server, Database, Cpu, Shield, Zap } from "lucide-react";
import { Link } from "wouter";

export default function CloudInfrastructure() {
    return (
        <Layout>
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
                {/* Back Button */}
                <Link href="/">
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="font-mono text-sm">Back to Projects</span>
                    </motion.button>
                </Link>

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h1 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-6">
                        Cloud<br />Infrastructure
                    </h1>
                    <p className="text-xl text-muted-foreground font-heading max-w-2xl">
                        Scalable microservices architecture on AWS, leveraging core services and AI/ML capabilities for enterprise-grade systems.
                    </p>
                </motion.div>

                {/* AWS Core Services */}
                <section className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-display font-bold uppercase tracking-tight mb-8 border-b border-border pb-4"
                    >
                        AWS Core Services
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: Server,
                                title: "EC2 & ECS",
                                description: "Elastic Compute Cloud for scalable virtual servers and Elastic Container Service for Docker container orchestration. Enables auto-scaling groups with load balancing for high availability."
                            },
                            {
                                icon: Zap,
                                title: "Lambda",
                                description: "Serverless compute for event-driven architectures. Run code without provisioning servers, with automatic scaling and pay-per-execution pricing model."
                            },
                            {
                                icon: Database,
                                title: "S3 & RDS",
                                description: "Simple Storage Service for object storage with 99.999999999% durability. Relational Database Service supporting PostgreSQL, MySQL, and Aurora for managed databases."
                            },
                            {
                                icon: Cloud,
                                title: "VPC & CloudFront",
                                description: "Virtual Private Cloud for isolated network environments with custom IP ranges, subnets, and security groups. CloudFront CDN for global content delivery with low latency."
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 border border-border hover:border-foreground/20 transition-colors"
                            >
                                <service.icon className="w-8 h-8 mb-4 text-muted-foreground" />
                                <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
                                <p className="text-muted-foreground font-heading leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* AI/ML Services */}
                <section className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-display font-bold uppercase tracking-tight mb-8 border-b border-border pb-4"
                    >
                        AI & Machine Learning
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "SageMaker",
                                description: "End-to-end ML platform for building, training, and deploying models at scale. Includes built-in algorithms, notebook instances, and automated model tuning."
                            },
                            {
                                title: "Rekognition",
                                description: "Computer vision service for image and video analysis. Detect objects, scenes, faces, and extract text with pre-trained deep learning models."
                            },
                            {
                                title: "Comprehend",
                                description: "Natural language processing service for text analysis. Extract insights, sentiment, entities, and key phrases from unstructured data."
                            },
                            {
                                title: "Bedrock",
                                description: "Foundation models from AI21, Anthropic, and Stability AI. Build generative AI applications with pre-trained LLMs via simple API calls."
                            },
                            {
                                title: "Textract",
                                description: "Automatically extract text, handwriting, and data from scanned documents. Goes beyond OCR to identify forms and tables."
                            },
                            {
                                title: "Forecast",
                                description: "Time-series forecasting service using machine learning. Predict business outcomes with higher accuracy than traditional methods."
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 bg-secondary/30 border border-border"
                            >
                                <h3 className="text-lg font-display font-bold mb-2">{service.title}</h3>
                                <p className="text-sm text-muted-foreground font-heading leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Architecture Patterns */}
                <section className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-display font-bold uppercase tracking-tight mb-8 border-b border-border pb-4"
                    >
                        Architecture Best Practices
                    </motion.h2>

                    <div className="space-y-6">
                        {[
                            {
                                title: "Microservices Design",
                                points: [
                                    "Service decomposition by business capability",
                                    "API Gateway for unified entry point (AWS API Gateway)",
                                    "Service mesh for inter-service communication (AWS App Mesh)",
                                    "Event-driven architecture with SNS/SQS for async messaging"
                                ]
                            },
                            {
                                title: "Scalability & Performance",
                                points: [
                                    "Horizontal scaling with Auto Scaling Groups",
                                    "Elastic Load Balancing (ALB/NLB) for traffic distribution",
                                    "ElastiCache (Redis/Memcached) for caching layer",
                                    "CloudWatch for monitoring and auto-scaling triggers"
                                ]
                            },
                            {
                                title: "Security & Compliance",
                                points: [
                                    "IAM roles and policies for least privilege access",
                                    "VPC security groups and NACLs for network isolation",
                                    "KMS for encryption at rest and in transit",
                                    "AWS Config and CloudTrail for compliance auditing"
                                ]
                            },
                            {
                                title: "Cost Optimization",
                                points: [
                                    "Reserved Instances and Savings Plans for predictable workloads",
                                    "Spot Instances for fault-tolerant batch processing",
                                    "S3 Intelligent-Tiering for automatic storage optimization",
                                    "Cost Explorer and Budgets for spend monitoring"
                                ]
                            }
                        ].map((section, index) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="border-l-2 border-foreground/20 pl-6"
                            >
                                <h3 className="text-xl font-display font-bold mb-4">{section.title}</h3>
                                <ul className="space-y-2">
                                    {section.points.map((point, i) => (
                                        <li key={i} className="text-muted-foreground font-heading flex items-start">
                                            <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-foreground/40 rounded-full flex-shrink-0" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Implementation Strategy */}
                <section>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-display font-bold uppercase tracking-tight mb-8 border-b border-border pb-4"
                    >
                        Implementation Strategy
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="prose prose-invert max-w-none"
                    >
                        <div className="bg-secondary/20 p-8 border border-border">
                            <p className="text-muted-foreground font-heading leading-relaxed mb-4">
                                Modern cloud infrastructure requires a multi-layered approach combining compute, storage, networking, and AI/ML services. The architecture follows a microservices pattern with containerized applications running on ECS Fargate, backed by RDS Aurora for relational data and DynamoDB for NoSQL requirements.
                            </p>
                            <p className="text-muted-foreground font-heading leading-relaxed mb-4">
                                CI/CD pipelines leverage CodePipeline and CodeBuild for automated deployments, with infrastructure as code managed through CloudFormation or Terraform. Monitoring and observability are achieved through CloudWatch, X-Ray for distributed tracing, and third-party tools like Datadog or New Relic.
                            </p>
                            <p className="text-muted-foreground font-heading leading-relaxed">
                                AI/ML workloads are integrated using SageMaker for custom models and managed services like Rekognition and Comprehend for common use cases. This hybrid approach balances customization with time-to-market, allowing rapid iteration while maintaining production-grade reliability.
                            </p>
                        </div>
                    </motion.div>
                </section>
            </div>
        </Layout>
    );
}
