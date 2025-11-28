import { Cpu, Database, Server, Globe, Shield, Zap, Layers, Box, Workflow, Search, MessageSquare, Image, Mic, FileText } from "lucide-react";

export const techData = {
    "ec2": {
        name: "Amazon EC2",
        icon: Server,
        category: "Compute",
        description: "Secure and resizable compute capacity for any workload.",
        features: ["Auto Scaling", "Load Balancing", "Spot Instances"],
        useCases: ["Web Hosting", "Batch Processing", "High Performance Computing"]
    },
    "s3": {
        name: "Amazon S3",
        icon: Database,
        category: "Storage",
        description: "Object storage built to retrieve any amount of data from anywhere.",
        features: ["99.999999999% Durability", "Lifecycle Policies", "Intelligent Tiering"],
        useCases: ["Data Lakes", "Backup & Restore", "Static Website Hosting"]
    },
    "emr": {
        name: "Amazon EMR",
        icon: Layers,
        category: "Analytics",
        description: "Cloud big data platform for processing vast amounts of data using open source tools.",
        features: ["Spark & Hadoop", "Serverless Option", "Cluster Scaling"],
        useCases: ["Machine Learning", "Real-time Analytics", "Data Transformation"]
    },
    "vpc": {
        name: "Amazon VPC",
        icon: Globe,
        category: "Networking",
        description: "Logically isolated section of the AWS Cloud where you can launch AWS resources.",
        features: ["Subnets & Route Tables", "Security Groups", "VPN Connection"],
        useCases: ["Network Isolation", "Hybrid Cloud", "Secure Access"]
    },
    "iam": {
        name: "AWS IAM",
        icon: Shield,
        category: "Security",
        description: "Securely manage access to services and resources.",
        features: ["Fine-grained Permissions", "MFA", "Identity Federation"],
        useCases: ["Access Control", "Role Assumption", "Security Auditing"]
    },
    "sagemaker": {
        name: "Amazon SageMaker",
        icon: Cpu,
        category: "Machine Learning",
        description: "Build, train, and deploy machine learning models for any use case.",
        features: ["Jupyter Notebooks", "AutoML", "Model Monitoring"],
        useCases: ["Predictive Maintenance", "Computer Vision", "Fraud Detection"]
    },
    "bedrock": {
        name: "Amazon Bedrock",
        icon: Zap,
        category: "Generative AI",
        description: "The easiest way to build and scale generative AI applications with foundation models.",
        features: ["Access to Top FMs", "Serverless", "Knowledge Bases"],
        useCases: ["Text Generation", "Chatbots", "Image Generation"]
    },
    "cloudfront": {
        name: "Amazon CloudFront",
        icon: Globe,
        category: "Networking",
        description: "Fast, highly secure and programmable content delivery network.",
        features: ["Global Edge Network", "DDoS Protection", "Lambda@Edge"],
        useCases: ["Video Streaming", "Static Content Delivery", "API Acceleration"]
    },
    "cloudformation": {
        name: "AWS CloudFormation",
        icon: Workflow,
        category: "Management",
        description: "Model and provision all your cloud infrastructure resources.",
        features: ["Infrastructure as Code", "Drift Detection", "StackSets"],
        useCases: ["Environment Replication", "Disaster Recovery", "Compliance"]
    },
    "athena": {
        name: "Amazon Athena",
        icon: Search,
        category: "Analytics",
        description: "Serverless, interactive analytics service built on open-source frameworks.",
        features: ["SQL Queries", "Serverless", "Data Lake Integration"],
        useCases: ["Log Analysis", "Ad-hoc Reporting", "Data Exploration"]
    },
    "quicksight": {
        name: "Amazon QuickSight",
        icon: Box,
        category: "Analytics",
        description: "Unified business intelligence at hyperscale.",
        features: ["Interactive Dashboards", "ML Insights", "Embedded Analytics"],
        useCases: ["Business Reporting", "Visualizing Trends", "Data Storytelling"]
    },
    "ollama": {
        name: "Ollama",
        icon: MessageSquare,
        category: "Generative AI",
        description: "Get up and running with large language models locally.",
        features: ["Local Inference", "Model Customization", "Privacy Focused"],
        useCases: ["Offline AI", "Development & Testing", "Private Data Processing"]
    },
    "cognito": {
        name: "Amazon Cognito",
        icon: Shield,
        category: "Security",
        description: "Identity management for your apps.",
        features: ["User Pools", "Social Sign-in", "MFA"],
        useCases: ["App Authentication", "User Management", "Secure Access"]
    },
    "lambda": {
        name: "AWS Lambda",
        icon: Zap,
        category: "Compute",
        description: "Run code without thinking about servers.",
        features: ["Event-driven", "Auto-scaling", "Pay-per-use"],
        useCases: ["Microservices", "Data Processing", "Backend Logic"]
    },
    "rekognition": {
        name: "Amazon Rekognition",
        icon: Image,
        category: "Machine Learning",
        description: "Automate your image and video analysis with machine learning.",
        features: ["Face Detection", "Content Moderation", "Text in Image"],
        useCases: ["Identity Verification", "Media Analysis", "Safety Monitoring"]
    },
    "comprehend": {
        name: "Amazon Comprehend",
        icon: FileText,
        category: "Machine Learning",
        description: "Derive and understand valuable insights from text within documents.",
        features: ["Sentiment Analysis", "Entity Recognition", "Topic Modeling"],
        useCases: ["Customer Feedback Analysis", "Document Classification", "Content Tagging"]
    },
    "textract": {
        name: "Amazon Textract",
        icon: FileText,
        category: "Machine Learning",
        description: "Automatically extract printed text, handwriting, and data from any document.",
        features: ["OCR", "Table Extraction", "Form Processing"],
        useCases: ["Digitizing Documents", "Automated Data Entry", "Compliance Checks"]
    },
    "polly": {
        name: "Amazon Polly",
        icon: Mic,
        category: "Machine Learning",
        description: "Turn text into lifelike speech using deep learning.",
        features: ["Neural TTS", "Multiple Languages", "Custom Voices"],
        useCases: ["Content Creation", "Accessibility", "Interactive Voice Response"]
    },
    "lex": {
        name: "Amazon Lex",
        icon: MessageSquare,
        category: "Machine Learning",
        description: "Build conversational interfaces into any application using voice and text.",
        features: ["Natural Language Understanding", "Automatic Speech Recognition", "Chatbots"],
        useCases: ["Customer Support", "Voice Assistants", "Booking Systems"]
    },
    "kendra": {
        name: "Amazon Kendra",
        icon: Search,
        category: "Machine Learning",
        description: "Intelligent search service powered by machine learning.",
        features: ["Natural Language Search", "Document Indexing", "Connectors"],
        useCases: ["Enterprise Search", "Knowledge Management", "Q&A Systems"]
    },
    "step-functions": {
        name: "AWS Step Functions",
        icon: Workflow,
        category: "Application Integration",
        description: "Visual workflow service that helps developers use AWS services to build distributed applications.",
        features: ["Visual Workflows", "State Management", "Error Handling"],
        useCases: ["Microservices Orchestration", "Data Pipelines", "Business Process Automation"]
    },
    "eventbridge": {
        name: "Amazon EventBridge",
        icon: Zap,
        category: "Application Integration",
        description: "Serverless event bus that makes it easier to build event-driven applications at scale.",
        features: ["Event Routing", "Schema Registry", "SaaS Integration"],
        useCases: ["Event-Driven Architecture", "Application Decoupling", "Real-time Notifications"]
    },
    "dynamodb": {
        name: "Amazon DynamoDB",
        icon: Database,
        category: "Database",
        description: "Fast, flexible NoSQL database service for any scale.",
        features: ["Single-digit millisecond latency", "Serverless", "Global Tables"],
        useCases: ["High-traffic Apps", "Gaming", "IoT"]
    },
    "rds": {
        name: "Amazon RDS",
        icon: Database,
        category: "Database",
        description: "Managed relational database service for MySQL, PostgreSQL, MariaDB, Oracle BYOL, or SQL Server.",
        features: ["Automated Backups", "Multi-AZ Deployments", "Read Replicas"],
        useCases: ["Web Applications", "E-commerce", "Enterprise Apps"]
    }
    "iot-core": {
        name: "AWS IoT Core",
        icon: Cpu,
        category: "Internet of Things",
        description: "Connect devices to the cloud securely and at scale.",
        features: ["Device Gateway", "Message Broker", "Rules Engine"],
        useCases: ["Smart Home", "Industrial IoT", "Fleet Management"]
    },
    "kinesis-video": {
        name: "Kinesis Video Streams",
        icon: Server,
        category: "Media Services",
        description: "Securely stream video from connected devices to AWS for analytics and machine learning.",
        features: ["Real-time Streaming", "HLS/DASH Support", "ML Integration"],
        useCases: ["Security Monitoring", "Smart City", "Industrial Automation"]
    }
};
