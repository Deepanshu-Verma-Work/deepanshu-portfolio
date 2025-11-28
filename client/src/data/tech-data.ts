import { Cpu, Database, Server, Globe, Shield, Zap, Layers, Box, Workflow, Search, MessageSquare, Image, Mic, FileText, Lock, Network, HardDrive, Share2, Code, Terminal } from "lucide-react";

export interface TechConnection {
    name: string;
    slug: string;
    role: 'source' | 'destination' | 'related';
    description: string;
}

export interface TechData {
    name: string;
    icon: any;
    category: string;
    description: string;
    whatItIs: string;
    whyNeeded: string;
    features: string[];
    useCases: string[];
    howWeUsedIt?: string[];
    bestPractices?: string[];
    connections?: TechConnection[];
}

export const techData: Record<string, TechData> = {
    "ec2": {
        name: "Amazon EC2",
        icon: Server,
        category: "Compute",
        description: "Secure and resizable compute capacity for any workload.",
        whatItIs: "Amazon Elastic Compute Cloud (Amazon EC2) provides scalable computing capacity in the Amazon Web Services (AWS) Cloud. It eliminates the need to invest in hardware up front, so you can develop and deploy applications faster.",
        whyNeeded: "It serves as the backbone for hosting applications, allowing for complete control over your computing resources. It's essential for running custom applications, web servers, and batch processing jobs that require specific OS configurations.",
        features: ["Auto Scaling", "Load Balancing", "Spot Instances", "Bare Metal Options"],
        useCases: ["Web Hosting", "Batch Processing", "High Performance Computing", "Application Servers"],
        howWeUsedIt: [
            "Hosted legacy backend services that required specific OS libraries.",
            "Ran worker nodes for heavy data processing tasks not suitable for Lambda.",
            "Deployed a self-managed Kubernetes cluster for specific compliance needs."
        ],
        bestPractices: [
            "Use Reserved Instances for steady-state workloads to save costs.",
            "Implement Auto Scaling groups to handle variable traffic.",
            "Use IAM roles for EC2 instead of hardcoding credentials."
        ],
        connections: [
            { name: "Amazon VPC", slug: "vpc", role: "related", description: "Runs within a VPC" },
            { name: "Amazon EBS", slug: "ebs", role: "related", description: "Attached storage" },
            { name: "ELB", slug: "elb", role: "source", description: "Traffic distribution" },
            { name: "Amazon RDS", slug: "rds", role: "destination", description: "Database connection" }
        ]
    },
    "s3": {
        name: "Amazon S3",
        icon: Database,
        category: "Storage",
        description: "Object storage built to retrieve any amount of data from anywhere.",
        whatItIs: "Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance.",
        whyNeeded: "It provides a highly durable and available place to store any amount of data, from static website assets to data lakes for analytics. It's the central hub for data in AWS.",
        features: ["99.999999999% Durability", "Lifecycle Policies", "Intelligent Tiering", "Event Notifications"],
        useCases: ["Data Lakes", "Backup & Restore", "Static Website Hosting", "Archive"],
        howWeUsedIt: [
            "Stored raw and processed video files for the Heimdall project.",
            "Hosted the frontend static assets (React app) for this portfolio.",
            "Served as the data lake storage for Athena query results."
        ],
        bestPractices: [
            "Enable Versioning to protect against accidental deletes.",
            "Use Lifecycle Policies to transition old data to cheaper storage classes.",
            "Block public access by default and use Bucket Policies carefully."
        ],
        connections: [
            { name: "Amazon CloudFront", slug: "cloudfront", role: "destination", description: "Content delivery" },
            { name: "AWS Lambda", slug: "lambda", role: "source", description: "Event triggers" },
            { name: "Amazon Athena", slug: "athena", role: "source", description: "Query data" },
            { name: "Amazon Polly", slug: "polly", role: "source", description: "Stores audio output" }
        ]
    },
    "emr": {
        name: "Amazon EMR",
        icon: Layers,
        category: "Analytics",
        description: "Cloud big data platform for processing vast amounts of data using open source tools.",
        whatItIs: "Amazon EMR is the industry-leading cloud big data platform for processing vast amounts of data using open source tools such as Apache Spark, Apache Hive, Apache HBase, Apache Flink, Apache Hudi, and Presto.",
        whyNeeded: "It simplifies running big data frameworks, allowing you to process and analyze petabytes of data without managing cluster infrastructure manually.",
        features: ["Spark & Hadoop Support", "Serverless Option", "Cluster Scaling", "Spot Instance Support"],
        useCases: ["Machine Learning", "Real-time Analytics", "Data Transformation", "Genomics"],
        howWeUsedIt: [
            "Processed large-scale network logs for the Real-time Monitoring project.",
            "Ran ETL jobs to prepare data for SageMaker training.",
            "Performed complex aggregations on historical data."
        ],
        bestPractices: [
            "Use EMR Serverless for sporadic workloads to avoid idle costs.",
            "Leverage Spot Instances for task nodes to reduce costs.",
            "Store persistent data in S3 (EMRFS) instead of HDFS."
        ],
        connections: [
            { name: "Amazon S3", slug: "s3", role: "source", description: "Data storage" },
            { name: "Amazon EC2", slug: "ec2", role: "related", description: "Underlying compute" },
            { name: "AWS Glue", slug: "glue", role: "related", description: "Metastore integration" },
            { name: "Amazon SageMaker", slug: "sagemaker", role: "destination", description: "Model training data" }
        ]
    },
    "vpc": {
        name: "Amazon VPC",
        icon: Network,
        category: "Networking",
        description: "Logically isolated section of the AWS Cloud where you can launch AWS resources.",
        whatItIs: "Amazon Virtual Private Cloud (Amazon VPC) gives you full control over your virtual networking environment, including resource placement, connectivity, and security.",
        whyNeeded: "It provides the network layer for your cloud resources, ensuring isolation, security, and connectivity control. Without it, resources would be publicly exposed or unable to communicate securely.",
        features: ["Subnets & Route Tables", "Security Groups", "VPN Connection", "VPC Peering"],
        useCases: ["Network Isolation", "Hybrid Cloud", "Secure Access", "Microservices Networking"],
        howWeUsedIt: [
            "Isolated the database layer in private subnets for security.",
            "Configured public subnets for load balancers and NAT gateways.",
            "Established VPC peering for shared services communication."
        ],
        bestPractices: [
            "Use private subnets for backend resources (databases, app servers).",
            "Minimize the attack surface using tight Security Group rules.",
            "Use VPC Endpoints to access AWS services privately."
        ],
        connections: [
            { name: "Amazon EC2", slug: "ec2", role: "destination", description: "Hosts instances" },
            { name: "Amazon RDS", slug: "rds", role: "destination", description: "Hosts databases" },
            { name: "AWS Lambda", slug: "lambda", role: "destination", description: "VPC-enabled functions" },
            { name: "Internet Gateway", slug: "igw", role: "source", description: "Public access" }
        ]
    },
    "iam": {
        name: "AWS IAM",
        icon: Shield,
        category: "Security",
        description: "Securely manage access to services and resources.",
        whatItIs: "AWS Identity and Access Management (IAM) enables you to manage access to AWS services and resources securely. You can create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources.",
        whyNeeded: "It is the foundation of AWS security. It ensures that only authorized entities (users, services, applications) can access specific resources, enforcing the principle of least privilege.",
        features: ["Fine-grained Permissions", "MFA Support", "Identity Federation", "Role-based Access Control"],
        useCases: ["Access Control", "Role Assumption", "Security Auditing", "Service-to-Service Auth"],
        howWeUsedIt: [
            "Created execution roles for Lambda functions to access S3 and DynamoDB.",
            "Managed developer access to the AWS console.",
            "Implemented cross-account roles for deployment pipelines."
        ],
        bestPractices: [
            "Grant least privilege permissions.",
            "Enable MFA for the root user and privileged users.",
            "Use IAM Roles for applications instead of long-term credentials."
        ],
        connections: [
            { name: "AWS Lambda", slug: "lambda", role: "destination", description: "Execution roles" },
            { name: "Amazon S3", slug: "s3", role: "destination", description: "Bucket policies" },
            { name: "Amazon EC2", slug: "ec2", role: "destination", description: "Instance profiles" },
            { name: "Amazon Cognito", slug: "cognito", role: "related", description: "Identity federation" }
        ]
    },
    "sagemaker": {
        name: "Amazon SageMaker",
        icon: Cpu,
        category: "Machine Learning",
        description: "Build, train, and deploy machine learning models for any use case.",
        whatItIs: "Amazon SageMaker is a fully managed service that provides every developer and data scientist with the ability to build, train, and deploy machine learning (ML) models quickly.",
        whyNeeded: "It removes the heavy lifting from each step of the machine learning process to make it easier to develop high-quality models.",
        features: ["Jupyter Notebooks", "AutoML", "Model Monitoring", "Managed Training/Inference"],
        useCases: ["Predictive Maintenance", "Computer Vision", "Fraud Detection", "Recommendation Engines"],
        howWeUsedIt: [
            "Trained custom object detection models for Project Heimdall.",
            "Deployed endpoints for real-time inference.",
            "Used SageMaker Studio for data exploration and model prototyping."
        ],
        bestPractices: [
            "Use Spot Instances for training to reduce costs.",
            "Enable Model Monitor to detect data drift in production.",
            "Use SageMaker Pipelines for reproducible ML workflows."
        ],
        connections: [
            { name: "Amazon S3", slug: "s3", role: "source", description: "Training data" },
            { name: "AWS Lambda", slug: "lambda", role: "source", description: "Inference triggers" },
            { name: "Amazon ECR", slug: "ecr", role: "source", description: "Container images" },
            { name: "Amazon CloudWatch", slug: "cloudwatch", role: "destination", description: "Metrics & logs" }
        ]
    },
    "bedrock": {
        name: "Amazon Bedrock",
        icon: Zap,
        category: "Generative AI",
        description: "The easiest way to build and scale generative AI applications with foundation models.",
        whatItIs: "Amazon Bedrock is a fully managed service that offers a choice of high-performing foundation models (FMs) from leading AI companies via a single API, along with a broad set of capabilities you need to build generative AI applications.",
        whyNeeded: "It democratizes access to powerful LLMs (like Claude, Titan, Llama) without the need to manage infrastructure, allowing developers to integrate GenAI capabilities quickly.",
        features: ["Access to Top FMs", "Serverless", "Knowledge Bases", "Agents"],
        useCases: ["Text Generation", "Chatbots", "Image Generation", "Search & Summarization"],
        howWeUsedIt: [
            "Powered the 'AI Conversational Bot' using Anthropic Claude via Bedrock.",
            "Generated summaries for the 'Multimodal RAG' project.",
            "Implemented RAG using Bedrock Knowledge Bases."
        ],
        bestPractices: [
            "Use Provisioned Throughput for production workloads requiring guaranteed performance.",
            "Implement guardrails to filter harmful content.",
            "Experiment with different models to find the best cost/performance balance."
        ],
        connections: [
            { name: "AWS Lambda", slug: "lambda", role: "source", description: "Invokes API" },
            { name: "Amazon S3", slug: "s3", role: "source", description: "Knowledge base data" },
            { name: "Amazon Kendra", slug: "kendra", role: "related", description: "Search integration" },
            { name: "Amazon CloudWatch", slug: "cloudwatch", role: "destination", description: "Model logging" }
        ]
    },
    "cloudfront": {
        name: "Amazon CloudFront",
        icon: Globe,
        category: "Networking",
        description: "Fast, highly secure and programmable content delivery network.",
        whatItIs: "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds.",
        whyNeeded: "It caches content at edge locations closer to users, significantly reducing latency and load on the origin server. It also provides security features like DDoS protection.",
        features: ["Global Edge Network", "DDoS Protection (Shield)", "Lambda@Edge", "Custom SSL"],
        useCases: ["Video Streaming", "Static Content Delivery", "API Acceleration", "Software Distribution"],
        howWeUsedIt: [
            "Cached the static assets of the portfolio website for global performance.",
            "Served video streams for the Heimdall project.",
            "Enforced HTTPS and managed SSL certificates."
        ],
        bestPractices: [
            "Use Origin Access Control (OAC) to restrict S3 access to CloudFront only.",
            "Set appropriate TTLs (Time-to-Live) for different content types.",
            "Enable WAF (Web Application Firewall) for security."
        ],
        connections: [
            { name: "Amazon S3", slug: "s3", role: "source", description: "Origin bucket" },
            { name: "Amazon EC2", slug: "ec2", role: "source", description: "Origin server" },
            { name: "AWS WAF", slug: "waf", role: "related", description: "Security layer" },
            { name: "Route 53", slug: "route53", role: "source", description: "DNS routing" }
        ]
    },
    "cloudformation": {
        name: "AWS CloudFormation",
        icon: Workflow,
        category: "Management",
        description: "Model and provision all your cloud infrastructure resources.",
        whatItIs: "AWS CloudFormation gives you an easy way to model a collection of related AWS and third-party resources, provision them quickly and consistently, and manage them throughout their lifecycles, by treating infrastructure as code.",
        whyNeeded: "It automates infrastructure deployment, ensuring consistency, repeatability, and version control. It eliminates manual configuration errors and drift.",
        features: ["Infrastructure as Code", "Drift Detection", "StackSets", "Designer"],
        useCases: ["Environment Replication", "Disaster Recovery", "Compliance", "CI/CD Integration"],
        howWeUsedIt: [
            "Defined the entire infrastructure for the 'Real-time Monitoring' project.",
            "Managed environment differences (dev, stage, prod) using parameters.",
            "Automated the deployment of the serverless stack."
        ],
        bestPractices: [
            "Use Change Sets to preview changes before applying them.",
            "Modularize templates using nested stacks.",
            "Protect production stacks from accidental deletion."
        ],
        connections: [
            { name: "AWS Lambda", slug: "lambda", role: "destination", description: "Provisions functions" },
            { name: "Amazon S3", slug: "s3", role: "destination", description: "Provisions buckets" },
            { name: "Amazon IAM", slug: "iam", role: "destination", description: "Provisions roles" },
            { name: "AWS CodePipeline", slug: "codepipeline", role: "source", description: "Deployment pipeline" }
        ]
    },
    "athena": {
        name: "Amazon Athena",
        icon: Search,
        category: "Analytics",
        description: "Serverless, interactive analytics service built on open-source frameworks.",
        whatItIs: "Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL. Athena is serverless, so there is no infrastructure to manage, and you pay only for the queries that you run.",
        whyNeeded: "It allows for ad-hoc analysis of vast amounts of data stored in S3 without the need for complex ETL pipelines or dedicated database clusters.",
        features: ["Standard SQL", "Serverless", "Data Lake Integration", "Federated Query"],
        useCases: ["Log Analysis", "Ad-hoc Reporting", "Data Exploration", "Cost Analysis"],
        howWeUsedIt: [
            "Queried VPC Flow Logs stored in S3 to troubleshoot network issues.",
            "Analyzed application logs for error patterns.",
            "Generated reports from raw data files."
        ],
        bestPractices: [
            "Partition data in S3 to reduce query costs and improve performance.",
            "Compress data (e.g., Snappy, GZIP) to speed up scans.",
            "Use columnar formats like Parquet or ORC."
        ],
        connections: [
            { name: "Amazon S3", slug: "s3", role: "source", description: "Data source" },
            { name: "AWS Glue", slug: "glue", role: "related", description: "Data catalog" },
            { name: "Amazon QuickSight", slug: "quicksight", role: "destination", description: "Visualization" },
            { name: "AWS Lambda", slug: "lambda", role: "source", description: "Query automation" }
        ]
    },
    "quicksight": {
        name: "Amazon QuickSight",
        icon: Box,
        category: "Analytics",
        description: "Unified business intelligence at hyperscale.",
        whatItIs: "Amazon QuickSight is a cloud-native, serverless, business intelligence service that lets you create and publish interactive dashboards that include ML-powered insights.",
        whyNeeded: "It turns data into actionable insights through visual dashboards. It scales automatically and integrates seamlessly with AWS data sources.",
        features: ["Interactive Dashboards", "ML Insights", "Embedded Analytics", "Natural Language Querying (Q)"],
        useCases: ["Business Reporting", "Visualizing Trends", "Data Storytelling", "Embedded BI"],
        howWeUsedIt: [
            "Visualized the metrics from the 'Real-time Monitoring' project.",
            "Created executive dashboards for cost and usage tracking.",
            "Embedded charts into the internal admin portal."
        ],
        bestPractices: [
            "Use SPICE (Super-fast, Parallel, In-memory Calculation Engine) for faster performance.",
            "Implement Row-Level Security (RLS) to control data access.",
            "Schedule email reports for stakeholders."
        ],
        connections: [
            { name: "Amazon Athena", slug: "athena", role: "source", description: "Data source" },
            { name: "Amazon RDS", slug: "rds", role: "source", description: "Data source" },
            { name: "Amazon S3", slug: "s3", role: "source", description: "Data source" },
            { name: "Amazon Redshift", slug: "redshift", role: "source", description: "Data source" }
        ]
    },
    "ollama": {
        name: "Ollama",
        icon: Terminal,
        category: "Generative AI",
        description: "Get up and running with large language models locally.",
        whatItIs: "Ollama is an open-source tool that allows you to run large language models (LLMs) like Llama 2, Mistral, and Code Llama locally on your own machine.",
        whyNeeded: "It enables local development and testing of LLM applications without incurring cloud costs or sending data externally. It's crucial for privacy-focused or offline AI workflows.",
        features: ["Local Inference", "Model Customization (Modelfile)", "Privacy Focused", "API Support"],
        useCases: ["Offline AI", "Development & Testing", "Private Data Processing", "Local RAG"],
        howWeUsedIt: [
            "Prototyped the 'LexGuard' contract analysis logic locally before deploying to Bedrock.",
            "Ran code generation models to assist with development.",
            "Tested RAG pipelines with local documents."
        ],
        bestPractices: [
            "Use quantized models to fit within local memory constraints.",
            "Leverage GPU acceleration if available.",
            "Use the API mode to integrate with local applications."
        ],
        connections: [
            { name: "Local Filesystem", slug: "local-fs", role: "source", description: "Model storage" },
            { name: "Python/JS Client", slug: "client-app", role: "destination", description: "API consumer" },
            { name: "Docker", slug: "docker", role: "related", description: "Containerization" }
        ]
    },
    "cognito": {
        name: "Amazon Cognito",
        icon: Shield,
        category: "Security",
        description: "Identity management for your apps.",
        whatItIs: "Amazon Cognito lets you add user sign-up, sign-in, and access control to your web and mobile apps quickly and easily. It scales to millions of users and supports sign-in with social identity providers.",
        whyNeeded: "It handles the complexity of user authentication and authorization, including password management, MFA, and token handling, so you don't have to build it from scratch.",
        features: ["User Pools", "Identity Pools", "Social Sign-in", "MFA", "Hosted UI"],
        useCases: ["App Authentication", "User Management", "Secure Access to AWS Resources", "B2B/B2C Identity"],
        howWeUsedIt: [
            "Managed user authentication for the portfolio admin dashboard.",
            "Provided temporary AWS credentials to the frontend app via Identity Pools.",
            "Implemented Google and Facebook login integration."
        ],
        bestPractices: [
            "Use Identity Pools to grant access to AWS resources.",
            "Customize the hosted UI to match your branding.",
            "Enable advanced security features to detect compromised credentials."
        ],
        connections: [
            { name: "AWS Lambda", slug: "lambda", role: "destination", description: "Auth triggers" },
            { name: "Amazon API Gateway", slug: "api-gateway", role: "destination", description: "Authorizer" },
            { name: "AWS IAM", slug: "iam", role: "related", description: "Role mapping" },
            { name: "Mobile/Web App", slug: "frontend", role: "source", description: "User interface" }
        ]
    },
    "lambda": {
        name: "AWS Lambda",
        icon: Zap,
        category: "Compute",
        description: "Run code without thinking about servers.",
        whatItIs: "AWS Lambda is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers.",
        whyNeeded: "It enables a microservices architecture where you pay only for the compute time you consume. It scales automatically from a few requests per day to thousands per second.",
        features: ["Event-driven", "Auto-scaling", "Pay-per-use", "Native Integrations"],
        useCases: ["Microservices", "Data Processing", "Backend Logic", "Real-time File Processing"],
        howWeUsedIt: [
            "Processed video frames for Project Heimdall.",
            "Handled API requests for the 'AI Conversational Bot'.",
            "Triggered text-to-speech conversion for the 'TTS Pipeline'."
        ],
        bestPractices: [
            "Keep functions small and focused (single responsibility).",
            "Optimize memory allocation for performance and cost.",
            "Use environment variables for configuration."
        ],
        connections: [
            { name: "Amazon S3", slug: "s3", role: "source", description: "Event trigger" },
            { name: "Amazon DynamoDB", slug: "dynamodb", role: "destination", description: "Data persistence" },
            { name: "Amazon API Gateway", slug: "api-gateway", role: "source", description: "HTTP trigger" },
            { name: "Amazon SNS", slug: "sns", role: "destination", description: "Notifications" }
        ]
    },
    "rekognition": {
        name: "Amazon Rekognition",
        icon: Image,
        category: "Machine Learning",
        description: "Automate your image and video analysis with machine learning.",
        whatItIs: "Amazon Rekognition offers pre-trained and customizable computer vision (CV) capabilities to extract information and insights from your images and videos.",
        whyNeeded: "It adds powerful visual analysis to applications without requiring deep learning expertise. It can identify objects, people, text, scenes, and activities.",
        features: ["Face Detection & Analysis", "Content Moderation", "Text in Image", "Label Detection", "Face Comparison"],
        useCases: ["Identity Verification", "Media Analysis", "Safety Monitoring", "Content Moderation"],
        howWeUsedIt: [
            "Detected PPE (helmets, vests) in the 'Project Heimdall' safety system.",
            "Identified persons in video feeds.",
            "Filtered inappropriate content in user uploads."
        ],
        bestPractices: [
            "Use Custom Labels for domain-specific object detection.",
            "Adjust confidence thresholds to balance precision and recall.",
            "Process video asynchronously for large files."
        ],
        connections: [
            { name: "Amazon S3", slug: "s3", role: "source", description: "Image storage" },
            { name: "AWS Lambda", slug: "lambda", role: "source", description: "API caller" },
            { name: "Amazon Kinesis Video", slug: "kinesis-video", role: "source", description: "Video stream" },
            { name: "Amazon SNS", slug: "sns", role: "destination", description: "Alerts" }
        ]
    },
    "comprehend": {
        name: "Amazon Comprehend",
        icon: FileText,
        category: "Machine Learning",
        description: "Derive and understand valuable insights from text within documents.",
        whatItIs: "Amazon Comprehend is a natural-language processing (NLP) service that uses machine learning to uncover valuable insights and connections in text.",
        whyNeeded: "It allows applications to understand the meaning, sentiment, and key elements of text, enabling automated analysis of customer feedback, documents, and more.",
        features: ["Sentiment Analysis", "Entity Recognition", "Key Phrase Extraction", "Topic Modeling", "PII Detection"],
        useCases: ["Customer Feedback Analysis", "Document Classification", "Content Tagging", "Compliance"],
        howWeUsedIt: [
            "Analyzed the sentiment of user interactions in the chatbot.",
            "Extracted key entities (dates, names, locations) from legal documents in 'LexGuard'.",
            "Categorized support tickets automatically."
        ],
        bestPractices: [
            "Use Custom Classification for domain-specific tagging.",
            "Redact PII (Personally Identifiable Information) automatically for privacy.",
            "Batch process large volumes of documents for efficiency."
        ],
        connections: [
            { name: "Amazon S3", slug: "s3", role: "source", description: "Document storage" },
            { name: "AWS Lambda", slug: "lambda", role: "source", description: "Processing logic" },
            { name: "Amazon Firehose", slug: "firehose", role: "source", description: "Data ingestion" },
            { name: "Amazon QuickSight", slug: "quicksight", role: "destination", description: "Visualization" }
        ]
    },
    "textract": {
        name: "Amazon Textract",
        icon: FileText,
        category: "Machine Learning",
        description: "Automatically extract printed text, handwriting, and data from any document.",
        whatItIs: "Amazon Textract is a machine learning service that automatically extracts text, handwriting, and data from scanned documents. It goes beyond simple OCR to identify the structure of documents.",
        whyNeeded: "It unlocks data trapped in image-based documents (PDFs, scans) and makes it usable for processing, search, and analysis.",
        features: ["OCR", "Table Extraction", "Form Processing (Key-Value Pairs)", "Handwriting Recognition"],
        useCases: ["Digitizing Documents", "Automated Data Entry", "Compliance Checks", "Invoice Processing"],
        howWeUsedIt: [
            "Extracted clauses and terms from scanned contracts in 'LexGuard'.",
            "Digitized paper forms for the intake system.",
            "Processed invoices for expense tracking."
        ],
        bestPractices: [
            "Use the AnalyzeDocument API for structured data (forms/tables).",
            "Implement human review (A2I) for low-confidence extractions.",
            "Pre-process images (deskew, denoise) for better results."
        ],
        connections: [
            { name: "Amazon S3", slug: "s3", role: "source", description: "Document source" },
            { name: "AWS Lambda", slug: "lambda", role: "source", description: "Orchestration" },
            { name: "Amazon Comprehend", slug: "comprehend", role: "destination", description: "NLP analysis" },
            { name: "Amazon DynamoDB", slug: "dynamodb", role: "destination", description: "Data storage" }
        ]
    },
    "polly": {
        name: "Amazon Polly",
        icon: Mic,
        category: "Machine Learning",
        description: "Turn text into lifelike speech using deep learning.",
        whatItIs: "Amazon Polly is a service that turns text into lifelike speech, allowing you to create applications that talk, and build entirely new categories of speech-enabled products.",
        whyNeeded: "It enhances user experience by providing audio output, improving accessibility, and enabling voice-first interfaces.",
        features: ["Neural TTS", "Multiple Languages & Voices", "Custom Brand Voices", "Speech Marks"],
        useCases: ["Content Creation", "Accessibility", "Interactive Voice Response (IVR)", "E-learning"],
        howWeUsedIt: [
            "Converted blog posts into audio for the 'TTS Pipeline' project.",
            "Provided voice feedback in the chatbot application.",
            "Generated audio alerts for the monitoring system."
        ],
        bestPractices: [
            "Use SSML (Speech Synthesis Markup Language) for fine-grained control over pronunciation and prosody.",
            "Cache generated audio in S3 to save costs on repeated requests.",
            "Choose Neural voices for the most natural sound."
        ],
        connections: [
            { name: "AWS Lambda", slug: "lambda", role: "source", description: "Request trigger" },
            { name: "Amazon S3", slug: "s3", role: "destination", description: "Audio storage" },
            { name: "Amazon Connect", slug: "connect", role: "related", description: "Contact center" },
            { name: "Amazon Translate", slug: "translate", role: "related", description: "Multilingual support" }
        ]
    },
    "lex": {
        name: "Amazon Lex",
        icon: MessageSquare,
        category: "Machine Learning",
        description: "Build conversational interfaces into any application using voice and text.",
        whatItIs: "Amazon Lex is a service for building conversational interfaces into any application using voice and text. It provides the advanced deep learning functionalities of automatic speech recognition (ASR) and natural language understanding (NLU).",
        whyNeeded: "It enables the creation of sophisticated chatbots and voice assistants that can understand user intent and maintain context, improving customer service and engagement.",
        features: ["Natural Language Understanding", "Automatic Speech Recognition", "Context Management", "Multi-turn Dialog"],
        useCases: ["Customer Support", "Voice Assistants", "Booking Systems", "Informational Bots"],
        howWeUsedIt: [
            "Built the core conversational interface for the 'AI Conversational Bot'.",
            "Handled intent recognition (e.g., 'Book a flight', 'Check status').",
            "Integrated with Lambda to fulfill user requests."
        ],
        bestPractices: [
            "Design for failure: handle 'fallback' intents gracefully.",
            "Use slot validation to ensure accurate data collection.",
            "Continuously improve the bot using conversation logs."
        ],
        connections: [
            { name: "AWS Lambda", slug: "lambda", role: "destination", description: "Fulfillment" },
            { name: "Amazon Connect", slug: "connect", role: "related", description: "Voice channel" },
            { name: "Amazon Kendra", slug: "kendra", role: "destination", description: "Fallback search" },
            { name: "Amazon Polly", slug: "polly", role: "related", description: "Voice output" }
        ]
    },
    "kendra": {
        name: "Amazon Kendra",
        icon: Search,
        category: "Machine Learning",
        description: "Intelligent search service powered by machine learning.",
        whatItIs: "Amazon Kendra is an intelligent search service powered by machine learning. It reimagines enterprise search for your websites and applications so your employees and customers can easily find the content they are looking for.",
        whyNeeded: "It solves the problem of information silos by connecting to multiple data sources and providing accurate, natural language answers instead of just a list of links.",
        features: ["Natural Language Search", "Document Indexing", "Built-in Connectors", "Incremental Learning"],
        useCases: ["Enterprise Search", "Knowledge Management", "Q&A Systems", "Regulatory Compliance"],
        howWeUsedIt: [
            "Provided the search backend for the 'Multimodal RAG' system.",
            "Indexed technical documentation for the developer portal.",
            "Enabled natural language queries like 'How do I configure VPC peering?'"
        ],
        bestPractices: [
            "Use FAQs to provide direct answers to common questions.",
            "Tune relevance using document attributes and user feedback.",
            "Secure content using Access Control Lists (ACLs)."
        ],
        connections: [
            { name: "Amazon S3", slug: "s3", role: "source", description: "Document source" },
            { name: "Amazon RDS", slug: "rds", role: "source", description: "Database source" },
            { name: "Amazon Lex", slug: "lex", role: "source", description: "Conversational search" },
            { name: "Salesforce", slug: "salesforce", role: "source", description: "External source" }
        ]
    },
    "step-functions": {
        name: "AWS Step Functions",
        icon: Workflow,
        category: "Application Integration",
        description: "Visual workflow service that helps developers use AWS services to build distributed applications.",
        whatItIs: "AWS Step Functions is a visual workflow service that helps developers use AWS services to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning (ML) pipelines.",
        whyNeeded: "It manages the state and logic of your application workflows, handling retries, error handling, and parallel execution, so you don't have to write complex glue code.",
        features: ["Visual Workflows", "State Management", "Error Handling", "Standard & Express Workflows"],
        useCases: ["Microservices Orchestration", "Data Pipelines", "Business Process Automation", "Saga Pattern"],
        howWeUsedIt: [
            "Orchestrated the multi-step 'TTS Pipeline' (transcribe -> translate -> synthesize).",
            "Managed the order fulfillment workflow in the demo e-commerce app.",
            "Coordinated long-running ETL jobs."
        ],
        bestPractices: [
            "Use Express Workflows for high-volume, short-duration events.",
            "Implement the Saga pattern for distributed transactions.",
            "Pass only necessary data between states to stay within payload limits."
        ],
        connections: [
            { name: "AWS Lambda", slug: "lambda", role: "destination", description: "Task execution" },
            { name: "Amazon ECS", slug: "ecs", role: "destination", description: "Container tasks" },
            { name: "Amazon SNS", slug: "sns", role: "destination", description: "Notifications" },
            { name: "Amazon DynamoDB", slug: "dynamodb", role: "destination", description: "State persistence" }
        ]
    },
    "eventbridge": {
        name: "Amazon EventBridge",
        icon: Zap,
        category: "Application Integration",
        description: "Serverless event bus that makes it easier to build event-driven applications at scale.",
        whatItIs: "Amazon EventBridge is a serverless event bus that makes it easier to build event-driven applications at scale using events from your own applications, integrated SaaS applications, and AWS services.",
        whyNeeded: "It decouples applications, allowing them to communicate via events. This improves scalability, reliability, and agility.",
        features: ["Event Routing", "Schema Registry", "SaaS Integration", "Event Replay"],
        useCases: ["Event-Driven Architecture", "Application Decoupling", "Real-time Notifications", "Scheduled Tasks"],
        howWeUsedIt: [
            "Routed events from S3 uploads to trigger processing pipelines.",
            "Integrated third-party SaaS alerts into the monitoring dashboard.",
            "Scheduled periodic maintenance tasks."
        ],
        bestPractices: [
            "Use the Schema Registry to discover and manage event structures.",
            "Implement dead-letter queues (DLQs) for failed events.",
            "Filter events at the source to reduce noise and cost."
        ],
        connections: [
            { name: "AWS Lambda", slug: "lambda", role: "destination", description: "Event target" },
            { name: "Amazon SNS", slug: "sns", role: "destination", description: "Fan-out" },
            { name: "Amazon Kinesis", slug: "kinesis", role: "destination", description: "Stream processing" },
            { name: "CloudWatch", slug: "cloudwatch", role: "source", description: "System events" }
        ]
    },
    "dynamodb": {
        name: "Amazon DynamoDB",
        icon: Database,
        category: "Database",
        description: "Fast, flexible NoSQL database service for any scale.",
        whatItIs: "Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale. It's a fully managed, multi-region, multi-active, durable database.",
        whyNeeded: "It provides consistent performance for applications with unlimited scale requirements, without the operational burden of managing database servers.",
        features: ["Single-digit millisecond latency", "Serverless", "Global Tables", "Streams"],
        useCases: ["High-traffic Apps", "Gaming", "IoT", "Session Management", "Metadata Store"],
        howWeUsedIt: [
            "Stored user session data and preferences.",
            "Maintained the metadata catalog for the 'TTS Pipeline' files.",
            "Logged high-velocity IoT events from 'Project Heimdall'."
        ],
        bestPractices: [
            "Design your schema based on access patterns (Single Table Design).",
            "Use Partition Keys effectively to avoid hot partitions.",
            "Enable On-Demand capacity for unpredictable workloads."
        ],
        connections: [
            { name: "AWS Lambda", slug: "lambda", role: "source", description: "Data access" },
            { name: "Amazon Kinesis", slug: "kinesis", role: "destination", description: "Change capture" },
            { name: "AWS AppSync", slug: "appsync", role: "source", description: "GraphQL API" },
            { name: "Amazon S3", slug: "s3", role: "related", description: "Backup/Export" }
        ]
    },
    "rds": {
        name: "Amazon RDS",
        icon: Database,
        category: "Database",
        description: "Managed relational database service for MySQL, PostgreSQL, MariaDB, Oracle BYOL, or SQL Server.",
        whatItIs: "Amazon Relational Database Service (Amazon RDS) makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity while automating time-consuming administration tasks.",
        whyNeeded: "It allows you to use familiar relational database engines without the hassle of hardware provisioning, database setup, patching, and backups.",
        features: ["Automated Backups", "Multi-AZ Deployments", "Read Replicas", "Performance Insights"],
        useCases: ["Web Applications", "E-commerce", "Enterprise Apps", "ERP/CRM"],
        howWeUsedIt: [
            "Hosted the primary transactional database for the e-commerce demo.",
            "Stored structured customer data.",
            "Managed complex relationships for the inventory system."
        ],
        bestPractices: [
            "Use Multi-AZ for high availability in production.",
            "Offload read traffic to Read Replicas.",
            "Enable Performance Insights to identify query bottlenecks."
        ],
        connections: [
            { name: "Amazon EC2", slug: "ec2", role: "source", description: "App server" },
            { name: "AWS Lambda", slug: "lambda", role: "source", description: "Data access" },
            { name: "Amazon ElastiCache", slug: "elasticache", role: "related", description: "Caching layer" },
            { name: "Amazon QuickSight", slug: "quicksight", role: "destination", description: "Reporting" }
        ]
    },
    "iot-core": {
        name: "AWS IoT Core",
        icon: Cpu,
        category: "Internet of Things",
        description: "Connect devices to the cloud securely and at scale.",
        whatItIs: "AWS IoT Core lets you connect IoT devices to the AWS cloud without the need to provision or manage servers. It can support billions of devices and trillions of messages.",
        whyNeeded: "It provides the secure communication layer between edge devices and the cloud, handling authentication, message routing, and device shadowing.",
        features: ["Device Gateway", "Message Broker (MQTT)", "Rules Engine", "Device Shadow"],
        useCases: ["Smart Home", "Industrial IoT", "Fleet Management", "Telemetry Collection"],
        howWeUsedIt: [
            "Connected simulated cameras for 'Project Heimdall'.",
            "Collected sensor data from edge devices.",
            "Sent command and control messages to remote actuators."
        ],
        bestPractices: [
            "Use X.509 certificates for strong device authentication.",
            "Use the Rules Engine to route data to other AWS services efficiently.",
            "Implement Device Shadows to handle intermittent connectivity."
        ],
        connections: [
            { name: "AWS Lambda", slug: "lambda", role: "destination", description: "Event processing" },
            { name: "Amazon Kinesis", slug: "kinesis", role: "destination", description: "Data streaming" },
            { name: "Amazon DynamoDB", slug: "dynamodb", role: "destination", description: "State storage" },
            { name: "Amazon SNS", slug: "sns", role: "destination", description: "Alerts" }
        ]
    },
    "kinesis-video": {
        name: "Kinesis Video Streams",
        icon: Server,
        category: "Media Services",
        description: "Securely stream video from connected devices to AWS for analytics and machine learning.",
        whatItIs: "Amazon Kinesis Video Streams makes it easy to securely stream video from connected devices to AWS for analytics, machine learning (ML), playback, and other processing.",
        whyNeeded: "It handles the ingestion and storage of video streams at scale, allowing you to build real-time computer vision applications.",
        features: ["Real-time Streaming", "HLS/DASH Support", "ML Integration", "Secure Storage"],
        useCases: ["Security Monitoring", "Smart City", "Industrial Automation", "Live Streaming"],
        howWeUsedIt: [
            "Ingested live video feeds for 'Project Heimdall'.",
            "Stored video history for playback and review.",
            "Fed video frames to Rekognition for analysis."
        ],
        bestPractices: [
            "Adjust retention periods to manage storage costs.",
            "Use the GStreamer plugin for easy device integration.",
            "Encrypt streams using KMS keys."
        ],
        connections: [
            { name: "Amazon Rekognition", slug: "rekognition", role: "destination", description: "Video analysis" },
            { name: "AWS IoT Core", slug: "iot-core", role: "related", description: "Device management" },
            { name: "Amazon SageMaker", slug: "sagemaker", role: "destination", description: "Custom ML models" },
            { name: "Client App", slug: "frontend", role: "destination", description: "Playback" }
        ]
    }
};
