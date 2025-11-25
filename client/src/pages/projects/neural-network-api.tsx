import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { ArrowLeft, Brain, Zap, Network, TrendingUp, Lock, Gauge } from "lucide-react";
import { Link } from "wouter";

export default function NeuralNetworkAPI() {
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
                        Neural<br />Network API
                    </h1>
                    <p className="text-xl text-muted-foreground font-heading max-w-2xl">
                        High-throughput inference engine architecture with sub-millisecond latency for production ML systems.
                    </p>
                </motion.div>

                {/* API Design Principles */}
                <section className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-display font-bold uppercase tracking-tight mb-8 border-b border-border pb-4"
                    >
                        API Design for ML Inference
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: Zap,
                                title: "RESTful Endpoints",
                                description: "Stateless HTTP APIs with versioning (/v1/predict, /v2/predict). JSON request/response format with schema validation. Batch prediction endpoints for throughput optimization."
                            },
                            {
                                icon: Network,
                                title: "gRPC for Low Latency",
                                description: "Protocol Buffers for efficient serialization. Bidirectional streaming for real-time inference. HTTP/2 multiplexing for concurrent requests with reduced overhead."
                            },
                            {
                                icon: Gauge,
                                title: "Async Processing",
                                description: "Message queues (RabbitMQ/Kafka) for decoupling. Webhook callbacks for long-running predictions. Job status tracking with unique request IDs."
                            },
                            {
                                icon: Lock,
                                title: "Authentication & Rate Limiting",
                                description: "API keys and JWT tokens for authentication. Per-client rate limiting with token bucket algorithm. Usage quotas and billing integration."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 border border-border hover:border-foreground/20 transition-colors"
                            >
                                <item.icon className="w-8 h-8 mb-4 text-muted-foreground" />
                                <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground font-heading leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Model Serving Architecture */}
                <section className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-display font-bold uppercase tracking-tight mb-8 border-b border-border pb-4"
                    >
                        Model Serving Architectures
                    </motion.h2>

                    <div className="space-y-6">
                        {[
                            {
                                title: "TensorFlow Serving",
                                description: "Production-ready serving system for TensorFlow models. Supports model versioning and hot-swapping without downtime. gRPC and REST APIs with batching for throughput.",
                                features: ["Model versioning", "Dynamic batching", "GPU acceleration", "Multi-model serving"]
                            },
                            {
                                title: "TorchServe",
                                description: "PyTorch model serving framework with built-in metrics and logging. Custom handlers for preprocessing and postprocessing. Horizontal scaling with Kubernetes.",
                                features: ["Custom handlers", "A/B testing", "Metrics export", "Auto-scaling"]
                            },
                            {
                                title: "ONNX Runtime",
                                description: "Cross-platform inference engine supporting multiple frameworks. Hardware acceleration (CPU, GPU, NPU). Optimized for edge deployment and cloud inference.",
                                features: ["Framework agnostic", "Hardware optimization", "Quantization", "Edge deployment"]
                            },
                            {
                                title: "Triton Inference Server",
                                description: "NVIDIA's multi-framework serving platform. Concurrent model execution with dynamic batching. Supports TensorFlow, PyTorch, ONNX, and custom backends.",
                                features: ["Multi-framework", "Dynamic batching", "Model ensemble", "GPU optimization"]
                            }
                        ].map((arch, index) => (
                            <motion.div
                                key={arch.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-secondary/20 p-6 border border-border"
                            >
                                <h3 className="text-xl font-display font-bold mb-2">{arch.title}</h3>
                                <p className="text-muted-foreground font-heading mb-4">{arch.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {arch.features.map((feature) => (
                                        <span key={feature} className="px-3 py-1 bg-secondary border border-border text-xs font-mono">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Performance Optimization */}
                <section className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-display font-bold uppercase tracking-tight mb-8 border-b border-border pb-4"
                    >
                        Performance Optimization
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Model Optimization",
                                techniques: [
                                    "Quantization (INT8/FP16)",
                                    "Pruning & distillation",
                                    "Graph optimization",
                                    "Operator fusion"
                                ]
                            },
                            {
                                title: "Caching Strategies",
                                techniques: [
                                    "Result caching with Redis",
                                    "Feature store integration",
                                    "Embedding cache",
                                    "CDN for static assets"
                                ]
                            },
                            {
                                title: "Batching & Parallelism",
                                techniques: [
                                    "Dynamic batching",
                                    "Request coalescing",
                                    "Multi-GPU inference",
                                    "Pipeline parallelism"
                                ]
                            }
                        ].map((section, index) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 border border-border"
                            >
                                <h3 className="text-lg font-display font-bold mb-4">{section.title}</h3>
                                <ul className="space-y-2">
                                    {section.techniques.map((tech) => (
                                        <li key={tech} className="text-sm text-muted-foreground font-heading flex items-start">
                                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-foreground/40 rounded-full flex-shrink-0" />
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Scaling Strategies */}
                <section className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-display font-bold uppercase tracking-tight mb-8 border-b border-border pb-4"
                    >
                        Scaling Strategies
                    </motion.h2>

                    <div className="space-y-6">
                        {[
                            {
                                title: "Horizontal Scaling",
                                points: [
                                    "Kubernetes-based auto-scaling with HPA (Horizontal Pod Autoscaler)",
                                    "Load balancing across multiple inference servers",
                                    "Stateless design for seamless replica addition",
                                    "Service mesh (Istio/Linkerd) for traffic management"
                                ]
                            },
                            {
                                title: "Vertical Scaling",
                                points: [
                                    "GPU instances (NVIDIA A100, V100) for compute-intensive models",
                                    "Memory-optimized instances for large models",
                                    "CPU optimization with AVX-512 instructions",
                                    "NVMe SSDs for fast model loading"
                                ]
                            },
                            {
                                title: "Edge Deployment",
                                points: [
                                    "Model compression for edge devices (TensorFlow Lite, ONNX)",
                                    "Federated learning for privacy-preserving training",
                                    "Edge caching to reduce latency",
                                    "Hybrid cloud-edge architecture for fallback"
                                ]
                            }
                        ].map((strategy, index) => (
                            <motion.div
                                key={strategy.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="border-l-2 border-foreground/20 pl-6"
                            >
                                <h3 className="text-xl font-display font-bold mb-4">{strategy.title}</h3>
                                <ul className="space-y-2">
                                    {strategy.points.map((point, i) => (
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

                {/* Monitoring & Observability */}
                <section>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-display font-bold uppercase tracking-tight mb-8 border-b border-border pb-4"
                    >
                        Monitoring & Observability
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-secondary/20 p-8 border border-border"
                    >
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-display font-bold mb-3">Key Metrics</h3>
                                <ul className="space-y-2 text-muted-foreground font-heading">
                                    <li>• Inference latency (p50, p95, p99)</li>
                                    <li>• Throughput (requests/second)</li>
                                    <li>• Model accuracy drift detection</li>
                                    <li>• GPU/CPU utilization</li>
                                    <li>• Error rates and failure modes</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-display font-bold mb-3">Tools & Platforms</h3>
                                <ul className="space-y-2 text-muted-foreground font-heading">
                                    <li>• Prometheus + Grafana for metrics</li>
                                    <li>• Jaeger/Zipkin for distributed tracing</li>
                                    <li>• ELK stack for log aggregation</li>
                                    <li>• MLflow for experiment tracking</li>
                                    <li>• Weights & Biases for model monitoring</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </div>
        </Layout>
    );
}
