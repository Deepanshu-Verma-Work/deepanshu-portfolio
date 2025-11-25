import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { ArrowLeft, Database, Layers, GitBranch, Shield, Workflow, BarChart3 } from "lucide-react";
import { Link } from "wouter";

export default function DataLakehouse() {
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
                        Data<br />Lakehouse
                    </h1>
                    <p className="text-xl text-muted-foreground font-heading max-w-2xl">
                        Unified storage layer combining the best of data warehouses and data lakes for modern analytics.
                    </p>
                </motion.div>

                {/* Architecture Principles */}
                <section className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-display font-bold uppercase tracking-tight mb-8 border-b border-border pb-4"
                    >
                        Lakehouse Architecture Principles
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: Layers,
                                title: "Unified Storage",
                                description: "Single source of truth for structured and unstructured data. Open file formats (Parquet, ORC) on object storage (S3, ADLS). Eliminates data silos and duplication between lakes and warehouses."
                            },
                            {
                                icon: Database,
                                title: "ACID Transactions",
                                description: "Delta Lake, Apache Iceberg, or Apache Hudi for transactional guarantees. Time travel and versioning for data lineage. Schema evolution without breaking downstream consumers."
                            },
                            {
                                icon: BarChart3,
                                title: "BI & Analytics",
                                description: "Direct SQL queries on data lake using Presto, Trino, or Spark SQL. Support for BI tools (Tableau, Power BI, Looker). Real-time and batch analytics on same platform."
                            },
                            {
                                icon: Workflow,
                                title: "Data Governance",
                                description: "Centralized metadata catalog (AWS Glue, Databricks Unity Catalog). Fine-grained access control with attribute-based policies. Data quality monitoring and validation."
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

                {/* Technology Stack */}
                <section className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-display font-bold uppercase tracking-tight mb-8 border-b border-border pb-4"
                    >
                        Technology Stack
                    </motion.h2>

                    <div className="space-y-6">
                        {[
                            {
                                title: "Delta Lake (Databricks)",
                                description: "Open-source storage layer bringing ACID transactions to Apache Spark and big data workloads. Scalable metadata handling for petabyte-scale tables.",
                                features: ["ACID transactions", "Time travel", "Schema enforcement", "Unified batch/streaming"]
                            },
                            {
                                title: "Apache Iceberg",
                                description: "Table format for huge analytic datasets. Designed for high-performance analytics with efficient metadata operations. Multi-engine support (Spark, Trino, Flink).",
                                features: ["Hidden partitioning", "Snapshot isolation", "Schema evolution", "Partition evolution"]
                            },
                            {
                                title: "Apache Hudi",
                                description: "Transactional data lake platform with incremental processing. Optimized for streaming ingestion and near real-time analytics. Copy-on-write and merge-on-read storage.",
                                features: ["Upserts & deletes", "Incremental queries", "Compaction", "Clustering"]
                            },
                            {
                                title: "Databricks Lakehouse Platform",
                                description: "Unified analytics platform combining data engineering, ML, and BI. Delta Lake native with Unity Catalog for governance. Photon engine for accelerated queries.",
                                features: ["Auto-scaling clusters", "Collaborative notebooks", "MLflow integration", "Unity Catalog"]
                            }
                        ].map((tech, index) => (
                            <motion.div
                                key={tech.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-secondary/20 p-6 border border-border"
                            >
                                <h3 className="text-xl font-display font-bold mb-2">{tech.title}</h3>
                                <p className="text-muted-foreground font-heading mb-4">{tech.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {tech.features.map((feature) => (
                                        <span key={feature} className="px-3 py-1 bg-secondary border border-border text-xs font-mono">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Data Processing */}
                <section className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-display font-bold uppercase tracking-tight mb-8 border-b border-border pb-4"
                    >
                        Data Storage & Processing
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Ingestion Layer",
                                items: [
                                    "Apache Kafka for streaming",
                                    "AWS Kinesis for real-time",
                                    "Airbyte/Fivetran for ETL",
                                    "Change Data Capture (CDC)"
                                ]
                            },
                            {
                                title: "Processing Engines",
                                items: [
                                    "Apache Spark for batch",
                                    "Apache Flink for streaming",
                                    "Presto/Trino for queries",
                                    "dbt for transformations"
                                ]
                            },
                            {
                                title: "Storage Formats",
                                items: [
                                    "Parquet for columnar",
                                    "ORC for Hive workloads",
                                    "Avro for schema evolution",
                                    "JSON for semi-structured"
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
                                    {section.items.map((item) => (
                                        <li key={item} className="text-sm text-muted-foreground font-heading flex items-start">
                                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-foreground/40 rounded-full flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Query Optimization */}
                <section className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-display font-bold uppercase tracking-tight mb-8 border-b border-border pb-4"
                    >
                        Query Optimization
                    </motion.h2>

                    <div className="space-y-6">
                        {[
                            {
                                title: "Partitioning Strategies",
                                points: [
                                    "Date-based partitioning for time-series data (YYYY/MM/DD hierarchy)",
                                    "Hash partitioning for even data distribution",
                                    "Range partitioning for ordered data access",
                                    "Dynamic partition pruning to skip irrelevant partitions"
                                ]
                            },
                            {
                                title: "Indexing & Caching",
                                points: [
                                    "Z-ordering (multi-dimensional clustering) for co-located data",
                                    "Bloom filters for existence checks",
                                    "Column statistics for query planning",
                                    "Result caching for repeated queries"
                                ]
                            },
                            {
                                title: "Compaction & Optimization",
                                points: [
                                    "Small file compaction to reduce metadata overhead",
                                    "Bin-packing for optimal file sizes (128MB-1GB)",
                                    "Vacuum operations to clean up old versions",
                                    "Optimize commands for file layout reorganization"
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

                {/* Governance & Security */}
                <section>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-display font-bold uppercase tracking-tight mb-8 border-b border-border pb-4"
                    >
                        Governance & Security
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-secondary/20 p-8 border border-border"
                    >
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h3 className="text-lg font-display font-bold mb-3">Data Catalog</h3>
                                <ul className="space-y-2 text-muted-foreground font-heading">
                                    <li>• Centralized metadata repository (AWS Glue, Databricks Unity Catalog)</li>
                                    <li>• Automatic schema discovery and lineage tracking</li>
                                    <li>• Business glossary and data dictionary</li>
                                    <li>• Search and discovery for self-service analytics</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-display font-bold mb-3">Access Control</h3>
                                <ul className="space-y-2 text-muted-foreground font-heading">
                                    <li>• Row-level and column-level security</li>
                                    <li>• Attribute-based access control (ABAC)</li>
                                    <li>• Dynamic data masking for PII</li>
                                    <li>• Audit logging for compliance (GDPR, HIPAA)</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-display font-bold mb-3">Data Quality</h3>
                            <p className="text-muted-foreground font-heading leading-relaxed">
                                Implement data quality checks at ingestion and transformation stages using Great Expectations or Deequ.
                                Monitor data freshness, completeness, and accuracy with automated alerts. Use data contracts to enforce
                                schema validation and prevent breaking changes. Maintain data lineage graphs to trace data flow from
                                source to consumption.
                            </p>
                        </div>
                    </motion.div>
                </section>
            </div>
        </Layout>
    );
}
