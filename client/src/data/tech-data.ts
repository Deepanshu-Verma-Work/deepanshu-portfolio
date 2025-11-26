
export interface TechData {
    name: string;
    category: string;
    description: string;
    whatItIs: string;
    howWeUsedIt: string[];
    bestPractices: string[];
    whyNeeded: string;
    connections: {
        name: string;
        slug: string;
        role: "source" | "destination" | "integration"; // source=inputs to this, destination=outputs from this
        description: string;
    }[];
}

export const techData: Record<string, TechData> = {
    "ec2": {
        name: "Amazon EC2",
        category: "Compute & Serverless",
        description: "Secure, scalable virtual servers in the cloud.",
        whatItIs: "Amazon Elastic Compute Cloud (Amazon EC2) provides resizable compute capacity in the cloud. It allows enterprises to run workloads ranging from batch processing to custom GenAI model hosting with complete control over the OS, networking, and resource configuration.",
        howWeUsedIt: [
            "Hosting GPU-optimized instances (G5/P4) for custom GenAI model fine-tuning",
            "Running microservices and backend APIs for model orchestration",
            "Creating auto-scaling groups for high-availability inference clusters",
            "Launching spot fleets for distributed model training workloads",
            "Running containerized workloads using EC2 + ECS/EKS combination"
        ],
        bestPractices: [
            "Use placement groups for low-latency distributed training",
            "Leverage EC2 Image Builder for consistent AMI pipelines",
            "Use IAM roles for EC2 instead of static credentials",
            "Enable detailed monitoring + CloudWatch alarms for auto-recovery",
            "Run GPU workloads on DLAMI or optimized AMIs to reduce overhead"
        ],
        whyNeeded: "EC2 gives complete control and flexibility necessary for custom GenAI infrastructure—especially when managing GPU clusters, distributed training, or high-performance inference workloads that aren't possible with fully managed services.",
        connections: [
            { name: "Amazon VPC", slug: "vpc", role: "integration", description: "Runs securely within isolated network" },
            { name: "Amazon S3", slug: "s3", role: "integration", description: "Accesses training data and artifacts" },
            { name: "AWS IAM", slug: "iam", role: "integration", description: "Managed identity and permissions" }
        ]
    },
    "s3": {
        name: "Amazon S3",
        category: "Storage & Database",
        description: "Object storage built to store and retrieve any amount of data.",
        whatItIs: "Amazon Simple Storage Service (Amazon S3) is an object storage service offering industry-leading scalability, data availability, security, and performance. It is the foundational storage layer for data lakes and GenAI datasets.",
        howWeUsedIt: [
            "Storing massive training datasets for LLM/NLP model pipelines",
            "Hosting model artifacts for SageMaker and Bedrock custom models",
            "Serving static assets for portfolio, dashboards, and web apps",
            "Integrating with Athena for serverless querying of logs and data",
            "Managing secure data lake layers: Raw → Curated → Feature"
        ],
        bestPractices: [
            "Use S3 encryption (SSE-KMS) for all enterprise workloads",
            "Implement lifecycle rules to reduce storage cost on cold data",
            "Enable versioning for model artifacts and data governance",
            "Use S3 Access Points and VPC Endpoints for secure access",
            "Integrate S3 with EventBridge for automatic pipeline triggers"
        ],
        whyNeeded: "S3 is the foundation of data architecture for any GenAI ecosystem—serving as the unified storage layer for training data, embeddings, documents, and model outputs in enterprise-scale environments.",
        connections: [
            { name: "Amazon Athena", slug: "athena", role: "destination", description: "Data source for SQL queries" },
            { name: "AWS Lambda", slug: "lambda", role: "source", description: "Triggers functions on upload" },
            { name: "Amazon CloudFront", slug: "cloudfront", role: "destination", description: "Origin for content delivery" },
            { name: "Amazon SageMaker", slug: "sagemaker", role: "integration", description: "Stores model artifacts" }
        ]
    },
    "emr": {
        name: "Amazon EMR",
        category: "Data & Analytics",
        description: "Cloud big data platform for running large-scale distributed data processing jobs.",
        whatItIs: "Amazon EMR is the industry-leading cloud big data platform for processing vast amounts of data using open source tools such as Apache Spark, Apache Hive, Apache HBase, Apache Flink, and Presto.",
        howWeUsedIt: [
            "Running distributed preprocessing for large training corpora",
            "Transforming raw enterprise data for NLP model ingestion",
            "Building scalable ETL pipelines integrated with S3 and Glue",
            "Executing Spark jobs for document chunking and embedding generation",
            "Creating ML feature pipelines consumed by SageMaker"
        ],
        bestPractices: [
            "Use EMR on EKS for consistent containerized compute",
            "Enable spot instances + auto-scaling for cost-efficiency",
            "Store data in S3 instead of HDFS for decoupled architecture",
            "Use EMR managed scaling and instance fleets",
            "Integrate with Lake Formation for enterprise access control"
        ],
        whyNeeded: "EMR is critical when preparing large-scale datasets for GenAI and analytics workloads, enabling scalable, cost-efficient data processing pipelines for enterprise-level AI systems.",
        connections: [
            { name: "Amazon S3", slug: "s3", role: "integration", description: "Reads/Writes data lake content" },
            { name: "Amazon EC2", slug: "ec2", role: "integration", description: "Runs on compute instances" }
        ]
    },
    "vpc": {
        name: "Amazon VPC",
        category: "Networking & Security",
        description: "Define and launch AWS resources in a logically isolated virtual network.",
        whatItIs: "Amazon Virtual Private Cloud (Amazon VPC) gives you full control over your virtual networking environment, including resource placement, connectivity, and security. It is the network foundation for secure cloud applications.",
        howWeUsedIt: [
            "Creating isolated subnets for private AI inference endpoints",
            "Configuring VPC Endpoints for Bedrock, S3, DynamoDB",
            "Running secure multi-tier architectures (ALB → App → DB)",
            "Implementing peering + Transit Gateway for multi-account AI setups",
            "Ensuring hybrid connectivity with on-prem networks over VPN/Direct Connect"
        ],
        bestPractices: [
            "Use separate public/private subnets with NAT Gateways",
            "Enforce least-privilege security group rules",
            "Use VPC Lattice for secure service-to-service networking",
            "Enable Flow Logs for compliance and threat monitoring",
            "Use PrivateLink for accessing AI services privately"
        ],
        whyNeeded: "GenAI workloads must be deployed in secure, compliant network zones—VPC ensures isolation, controlled access, and enterprise-grade governance for sensitive AI ecosystems.",
        connections: [
            { name: "Amazon EC2", slug: "ec2", role: "destination", description: "Hosts compute instances" },
            { name: "AWS Lambda", slug: "lambda", role: "destination", description: "Secure execution environment" },
            { name: "Amazon RDS", slug: "rds", role: "destination", description: "Network isolation for DB" }
        ]
    },
    "iam": {
        name: "AWS IAM",
        category: "Networking & Security",
        description: "Securely manage identities and access to AWS services and resources.",
        whatItIs: "AWS Identity and Access Management (IAM) enables you to manage access to AWS services and resources securely. Using IAM, you can create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources.",
        howWeUsedIt: [
            "Defining least-privilege roles for Bedrock, S3, SageMaker",
            "Managing cross-account roles for enterprise AI workloads",
            "Securing Lambda, Step Functions, and EventBridge integrations",
            "Setting up role chaining for CI/CD pipelines",
            "Using IAM Identity Center for centralized SSO"
        ],
        bestPractices: [
            "Always prefer IAM roles over access keys",
            "Use permissions boundaries for developers",
            "Enforce MFA and identity federation",
            "Enable AWS Organizations SCPs for security governance",
            "Rotate and audit IAM access regularly"
        ],
        whyNeeded: "IAM forms the backbone of security across AI workflows—protecting training data, restricting model endpoints, and ensuring compliance with enterprise security standards.",
        connections: [
            { name: "Amazon S3", slug: "s3", role: "integration", description: "Controls bucket access" },
            { name: "Amazon Bedrock", slug: "bedrock", role: "integration", description: "Manages model invocation permissions" },
            { name: "Amazon Cognito", slug: "cognito", role: "integration", description: "Identity federation" }
        ]
    },
    "sagemaker": {
        name: "Amazon SageMaker",
        category: "AI & Machine Learning",
        description: "Build, train, and deploy machine learning models for any use case.",
        whatItIs: "Amazon SageMaker is a fully managed service that brings together a broad set of tools to enable high-performance, low-cost machine learning for any use case. It covers the entire ML lifecycle from labeling to deployment.",
        howWeUsedIt: [
            "Training custom NLP models for document classification",
            "Deploying real-time inference endpoints for production workloads",
            "Using SageMaker Pipelines for ML workflow orchestration",
            "Implementing A/B testing for model variants",
            "Leveraging SageMaker Feature Store for feature engineering"
        ],
        bestPractices: [
            "Use SageMaker Experiments to track model training runs",
            "Implement model monitoring with SageMaker Model Monitor",
            "Leverage spot instances for cost-effective training",
            "Use SageMaker Debugger to identify training issues early",
            "Implement proper IAM roles with least privilege access"
        ],
        whyNeeded: "SageMaker accelerates the ML development lifecycle by providing pre-built algorithms, managed infrastructure, and integrated tools. It reduces time-to-market for ML models from months to weeks, while ensuring scalability and cost-efficiency.",
        connections: [
            { name: "Amazon S3", slug: "s3", role: "integration", description: "Stores training data & artifacts" },
            { name: "AWS IAM", slug: "iam", role: "integration", description: "Manages access & permissions" },
            { name: "Amazon EC2", slug: "ec2", role: "integration", description: "Runs training jobs" },
            { name: "Amazon VPC", slug: "vpc", role: "integration", description: "Network isolation" },
            { name: "AWS Step Functions", slug: "step-functions", role: "source", description: "Orchestrates ML pipelines" }
        ]
    },
    "bedrock": {
        name: "Amazon Bedrock",
        category: "AI & Machine Learning",
        description: "The easiest way to build and scale generative AI applications with foundation models.",
        whatItIs: "Amazon Bedrock is a fully managed service that makes high-performing foundation models (FMs) from leading AI startups and Amazon available via a single API, along with a broad set of capabilities to build generative AI applications with security, privacy, and responsible AI.",
        howWeUsedIt: [
            "Building enterprise RAG pipelines using Knowledge Bases",
            "Creating domain-specific agents for workflow automation",
            "Running secure text, image, and embedding inference",
            "Building multilingual document processing pipelines",
            "Integrating models with Lambda, Step Functions, and private networks"
        ],
        bestPractices: [
            "Use Guardrails to enforce enterprise compliance",
            "Store embeddings in DynamoDB or OpenSearch",
            "Use Bedrock Agents for workflow-driven automation",
            "Enable VPC endpoints for private model invocation",
            "Use caching layers (Lambda/ElastiCache) for low-latency inference"
        ],
        whyNeeded: "Bedrock is the center of the enterprise GenAI ecosystem—offering secure, scalable, compliant foundation models without requiring GPU management. It accelerates GenAI adoption while maintaining strict security boundaries.",
        connections: [
            { name: "AWS Lambda", slug: "lambda", role: "source", description: "Invokes models via API" },
            { name: "Amazon S3", slug: "s3", role: "integration", description: "Knowledge base data source" },
            { name: "Amazon Kendra", slug: "kendra", role: "integration", description: "RAG retrieval backend" }
        ]
    },
    "cloudfront": {
        name: "Amazon CloudFront",
        category: "Networking & Security",
        description: "Securely deliver content with low latency and high transfer speeds.",
        whatItIs: "Amazon CloudFront is a content delivery network (CDN) service built for high performance, security, and developer convenience. It delivers data, videos, applications, and APIs to customers globally with low latency.",
        howWeUsedIt: [
            "Deploying performant frontend for GenAI applications",
            "Caching static responses from RAG-powered endpoints",
            "Serving preprocessed images/documents globally",
            "Integrating with S3 for secure static website hosting",
            "Protecting APIs with AWS WAF"
        ],
        bestPractices: [
            "Enable CloudFront OAC for secure S3 access",
            "Use Lambda@Edge for on-the-fly request manipulation",
            "Configure caching policies for GenAI inference results",
            "Enable WAF with bot control for protection",
            "Use compression and HTTP/3 for performance"
        ],
        whyNeeded: "CloudFront enhances the performance and security of GenAI apps, ensuring global low-latency access to AI dashboards, portals, and model-driven APIs.",
        connections: [
            { name: "Amazon S3", slug: "s3", role: "source", description: "Origin bucket" },
            { name: "AWS Lambda", slug: "lambda", role: "integration", description: "Edge compute (Lambda@Edge)" }
        ]
    },
    "cloudformation": {
        name: "AWS CloudFormation",
        category: "DevOps & Infrastructure",
        description: "Speed up cloud provisioning with infrastructure as code.",
        whatItIs: "AWS CloudFormation lets you model, provision, and manage AWS and third-party resources by treating infrastructure as code. It allows you to build and rebuild your infrastructure and applications, without having to perform manual actions or write custom scripts.",
        howWeUsedIt: [
            "Provisioning secure VPCs for AI workloads",
            "Deploying SageMaker pipelines and inference infrastructure",
            "Automating Bedrock integrations and VPC endpoints",
            "Creating step-function RAG orchestration stacks",
            "Managing IAM roles, Lambda functions, and event triggers"
        ],
        bestPractices: [
            "Use nested stacks for modular architecture",
            "Always version-control templates",
            "Integrate with CI/CD (CodePipeline/GitHub Actions)",
            "Use parameters and mappings for multi-environment setups",
            "Avoid manual changes — use drift detection"
        ],
        whyNeeded: "Enterprise GenAI ecosystems require consistency and compliance. CloudFormation ensures predictable provisioning of the entire stack from networking to AI services.",
        connections: [
            { name: "Amazon VPC", slug: "vpc", role: "destination", description: "Provisions network" },
            { name: "Amazon EC2", slug: "ec2", role: "destination", description: "Provisions compute" },
            { name: "AWS Lambda", slug: "lambda", role: "destination", description: "Provisions functions" }
        ]
    },
    "athena": {
        name: "Amazon Athena",
        category: "Data & Analytics",
        description: "Serverless, interactive analytics service built on open-source frameworks.",
        whatItIs: "Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL. It is serverless, so there is no infrastructure to manage, and you pay only for the queries that you run.",
        howWeUsedIt: [
            "Querying curated datasets for GenAI training and evaluation",
            "Performing metadata extraction from document repositories",
            "Analyzing RAG usage logs and improving retrieval quality",
            "Running serverless analytics without cluster management",
            "Integrating with Glue Data Catalog for schema governance"
        ],
        bestPractices: [
            "Use optimized data formats such as Parquet",
            "Partition data to reduce query costs",
            "Use CTAS queries to generate curated training datasets",
            "Secure queries using S3 bucket policies and IAM controls",
            "Integrate with Lake Formation for fine-grained governance"
        ],
        whyNeeded: "Athena enables enterprise-scale analytics that support GenAI training, evaluation, observability, and data preparation — all without maintaining infrastructure.",
        connections: [
            { name: "Amazon S3", slug: "s3", role: "source", description: "Queries data from" },
            { name: "Amazon QuickSight", slug: "quicksight", role: "destination", description: "Visualizes results" }
        ]
    },
    "quicksight": {
        name: "Amazon QuickSight",
        category: "Data & Analytics",
        description: "Unified business intelligence at hyperscale.",
        whatItIs: "Amazon QuickSight powers data-driven organizations with unified business intelligence (BI) at hyperscale. With QuickSight, all users can meet varying analytic needs from the same source of truth through modern interactive dashboards, paginated reports, embedded analytics, and natural language queries.",
        howWeUsedIt: [
            "Creating dashboards for GenAI usage analytics",
            "Visualizing model performance, latency, costs",
            "Embedding dashboards into internal enterprise portals",
            "Automating periodic reporting using QuickSight Q",
            "Integrating with Athena for real-time insights"
        ],
        bestPractices: [
            "Use SPICE for fast in-memory analytics",
            "Enable row-level security for sensitive datasets",
            "Use Q for natural language querying over metrics",
            "Automate dataset refreshes through EventBridge",
            "Organize dashboards using namespaces for enterprises"
        ],
        whyNeeded: "QuickSight provides business-level visibility into GenAI operations—helping organizations track usage, cost, and performance at scale.",
        connections: [
            { name: "Amazon Athena", slug: "athena", role: "source", description: "Data source" },
            { name: "Amazon RDS", slug: "rds", role: "source", description: "Data source" }
        ]
    },
    "ollama": {
        name: "Ollama",
        category: "AI & Machine Learning",
        description: "Get up and running with large language models locally.",
        whatItIs: "Ollama is an open-source tool that allows you to run open-source large language models, such as Llama 3, Mistral, and Gemma, locally on your machine. It simplifies the process of downloading, managing, and interacting with these models.",
        howWeUsedIt: [
            "Running local inference pipelines for PoC LLMs",
            "Hosting lightweight models on EC2 GPU instances",
            "Embedding open-source LLMs into enterprise workflows",
            "Benchmarking vs. Bedrock-provided models",
            "Building offline-capable AI tools for internal teams"
        ],
        bestPractices: [
            "Use GPU EC2 instances (g5/g6) for optimal inference",
            "Combine Ollama with Docker for reproducible deployments",
            "Secure local endpoints behind VPC or private network",
            "Compare latency/cost vs Bedrock before productionizing",
            "Use quantized models for cost-efficient serving"
        ],
        whyNeeded: "Ollama gives enterprises flexibility to run custom or open-source models without relying entirely on managed services — essential for hybrid, private, or cost-optimized GenAI ecosystems.",
        connections: [
            { name: "Amazon EC2", slug: "ec2", role: "integration", description: "Runs on" },
            { name: "Amazon S3", slug: "s3", role: "integration", description: "Stores model weights" }
        ]
    },
    "cognito": {
        name: "Amazon Cognito",
        category: "Networking & Security",
        description: "Customer identity and access management for any application.",
        whatItIs: "Amazon Cognito delivers frictionless customer identity and access management (CIAM) with a cost-effective and customizable platform. It handles user authentication and authorization for your web and mobile apps.",
        howWeUsedIt: [
            "Enabling secure sign-in for GenAI dashboards and portals",
            "Implementing user-level access control for RAG applications",
            "Integrating with API Gateway + Lambda for JWT validation",
            "Federating enterprise identities via SSO and SAML",
            "Using Cognito Hosted UI for secure OAuth2 flows"
        ],
        bestPractices: [
            "Enable MFA and enforce strong password policies",
            "Use hosted UI to avoid maintaining auth screens",
            "Integrate with IAM Identity Center for corporate SSO",
            "Use Lambda triggers for custom authentication flows",
            "Store minimal user data to maintain security compliance"
        ],
        whyNeeded: "Enterprise GenAI apps require secure user identification, fine-grained access, and governance. Cognito provides a scalable, compliant identity layer without building authentication from scratch.",
        connections: [
            { name: "AWS IAM", slug: "iam", role: "integration", description: "Vends credentials" },
            { name: "AWS Lambda", slug: "lambda", role: "integration", description: "Custom auth triggers" }
        ]
    },
    "lambda": {
        name: "AWS Lambda",
        category: "Compute & Serverless",
        description: "Run code without thinking about servers or clusters.",
        whatItIs: "AWS Lambda is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers. You can trigger Lambda from over 200 AWS services and SaaS applications.",
        howWeUsedIt: [
            "Chunking documents before embedding generation",
            "Calling Bedrock models for inference via serverless APIs",
            "Running lightweight RAG logic and transformation steps",
            "Automating model pipeline triggers from EventBridge",
            "Validating user inputs before hitting model endpoints"
        ],
        bestPractices: [
            "Use environment variables for configuration",
            "Optimize package size and cold-start performance",
            "Use DLQ for error handling",
            "Restrict Lambda permissions using least privilege",
            "Use Lambda with VPC endpoints for private AI workflows"
        ],
        whyNeeded: "Lambda enables scalable, cost-efficient orchestration and glue logic for GenAI systems — ideal for serverless AI microservices and automated workflows.",
        connections: [
            { name: "Amazon S3", slug: "s3", role: "source", description: "Triggered by upload" },
            { name: "Amazon DynamoDB", slug: "dynamodb", role: "integration", description: "Reads/Writes state" },
            { name: "Amazon Bedrock", slug: "bedrock", role: "destination", description: "Invokes models" },
            { name: "Amazon EventBridge", slug: "eventbridge", role: "source", description: "Triggered by events" },
            { name: "AWS IAM", slug: "iam", role: "integration", description: "Execution permissions" },
            { name: "Amazon VPC", slug: "vpc", role: "integration", description: "Private network access" }
        ]
    },
    "rekognition": {
        name: "Amazon Rekognition",
        category: "AI & Machine Learning",
        description: "Automate image and video analysis with machine learning.",
        whatItIs: "Amazon Rekognition offers pre-trained and customizable computer vision (CV) capabilities to extract information and insights from your images and videos. It can identify objects, people, text, scenes, and activities.",
        howWeUsedIt: [
            "Extracting images and metadata for GenAI-enhanced search",
            "Performing OCR on visual documents before feeding into RAG",
            "Detecting sensitive content for compliance workflows",
            "Automating tagging and classification of enterprise media",
            "Integrating with Bedrock for multimodal AI pipelines"
        ],
        bestPractices: [
            "Use asynchronous video jobs for large processing",
            "Enable KMS encryption for uploaded media",
            "Combine with Textract for richer document analysis",
            "Use IAM permission boundaries to limit data exposure",
            "Store results in DynamoDB for fast retrieval"
        ],
        whyNeeded: "Rekognition is essential for computer-vision-supported GenAI use cases — enabling multimodal RAG, automated tagging, and intelligent document workflows.",
        connections: [
            { name: "Amazon S3", slug: "s3", role: "source", description: "Image source" },
            { name: "AWS Lambda", slug: "lambda", role: "source", description: "Triggered by" }
        ]
    },
    "comprehend": {
        name: "Amazon Comprehend",
        category: "AI & Machine Learning",
        description: "Derive and understand valuable insights from text within documents.",
        whatItIs: "Amazon Comprehend is a natural-language processing (NLP) service that uses machine learning to uncover valuable insights and connections in text. It can extract sentiment, entities, key phrases, and PII.",
        howWeUsedIt: [
            "Extracting entities before feeding data into embedding pipelines",
            "Detecting PII in documents processed by GenAI models",
            "Performing topic clustering for enterprise datasets",
            "Combining Comprehend outputs with RAG to improve context",
            "Running custom classification models for domain-specific insights"
        ],
        bestPractices: [
            "Use custom models for domain-specific terminology",
            "Enable real-time PII redaction for compliance",
            "Integrate with Step Functions for scalable NLP workflows",
            "Secure datasets using KMS and VPC endpoints",
            "Combine with Bedrock for enriched semantic understanding"
        ],
        whyNeeded: "Comprehend enhances GenAI systems with classical NLP signals — essential for compliance, data preprocessing, and building structured understanding.",
        connections: [
            { name: "Amazon S3", slug: "s3", role: "source", description: "Document source" },
            { name: "AWS Lambda", slug: "lambda", role: "source", description: "Triggered by" }
        ]
    },
    "textract": {
        name: "Amazon Textract",
        category: "AI & Machine Learning",
        description: "Automatically extract printed text, handwriting, and data from any document.",
        whatItIs: "Amazon Textract is a machine learning (ML) service that automatically extracts text, handwriting, and data from scanned documents. It goes beyond simple OCR to identify, understand, and extract data from forms and tables.",
        howWeUsedIt: [
            "Digitizing enterprise PDFs for RAG ingestion",
            "Extracting table data for downstream analytics",
            "Processing identity documents securely",
            "Feeding structured outputs to Bedrock Knowledge Bases",
            "Automating OCR pipelines using Step Functions"
        ],
        bestPractices: [
            "Use asynchronous operations for large PDFs",
            "Combine with Comprehend for entity extraction",
            "Store extracted text in S3 with proper partitioning",
            "Trigger pipelines using EventBridge",
            "Use encryption and access control for sensitive docs"
        ],
        whyNeeded: "Textract is crucial for enterprise RAG and document intelligence workflows — turning unstructured PDFs into structured data usable by GenAI models.",
        connections: [
            { name: "Amazon S3", slug: "s3", role: "source", description: "Document source" },
            { name: "AWS Lambda", slug: "lambda", role: "source", description: "Triggered by" }
        ]
    },
    "polly": {
        name: "Amazon Polly",
        category: "AI & Machine Learning",
        description: "Turn text into lifelike speech using deep learning.",
        whatItIs: "Amazon Polly is a service that turns text into lifelike speech, allowing you to create applications that talk, and build entirely new categories of speech-enabled products. It uses advanced deep learning technologies to synthesize natural-sounding human speech.",
        howWeUsedIt: [
            "Generating narration for enterprise training content",
            "Voice responses for conversational agents powered by LLMs",
            "Creating audio summaries for knowledge portals",
            "Integrating voice outputs in mobile AI applications",
            "Automating podcast-style content creation"
        ],
        bestPractices: [
            "Use neural voices for higher quality",
            "Cache repeated responses for cost optimization",
            "Store outputs in S3 with versioning",
            "Use Cognito for authenticated user TTS access",
            "Limit input-size using streaming APIs"
        ],
        whyNeeded: "Polly adds voice capabilities to GenAI solutions, enabling multimodal and accessible AI applications in enterprise environments.",
        connections: [
            { name: "AWS Lambda", slug: "lambda", role: "source", description: "Invoked by" },
            { name: "Amazon S3", slug: "s3", role: "destination", description: "Stores audio" }
        ]
    },
    "lex": {
        name: "Amazon Lex",
        category: "AI & Machine Learning",
        description: "Build voice and text chatbots with conversational AI.",
        whatItIs: "Amazon Lex is a fully managed AI service with advanced natural language models to design, build, test, and deploy conversational interfaces in applications. It provides the deep functionality and flexibility of automatic speech recognition (ASR) and natural language understanding (NLU).",
        howWeUsedIt: [
            "Building voice-enabled customer support bots",
            "Routing user queries to Bedrock for complex reasoning",
            "Creating front-door conversational flows",
            "Customizing intent detection using Lex V2",
            "Integrating with Contact Center workflows"
        ],
        bestPractices: [
            "Use slot elicitation for structured data gathering",
            "Implement fallback intents to hand off to GenAI models",
            "Use Lambda for backend fulfillment logic",
            "Continuously monitor missed utterances to improve NLU",
            "Enable sentiment analysis for better user experience"
        ],
        whyNeeded: "Lex provides the structured conversational interface layer, handling user intent and routing before handing off complex queries to Bedrock or other backend systems.",
        connections: [
            { name: "AWS Lambda", slug: "lambda", role: "integration", description: "Fulfillment logic" },
            { name: "Amazon Bedrock", slug: "bedrock", role: "integration", description: "Fallback for complex queries" }
        ]
    },
    "kendra": {
        name: "Amazon Kendra",
        category: "AI & Machine Learning",
        description: "Intelligent search service powered by machine learning.",
        whatItIs: "Amazon Kendra is an intelligent search service powered by machine learning. It reimagines enterprise search for your websites and applications so your employees and customers can easily find the content they are looking for, even when it's scattered across multiple locations and content repositories.",
        howWeUsedIt: [
            "Indexing enterprise wikis and SharePoint for RAG retrieval",
            "Providing semantic search capabilities for internal portals",
            "Filtering search results based on user access rights",
            "Integrating with Bedrock as a retriever for RAG pipelines",
            "Tuning relevance for domain-specific jargon"
        ],
        bestPractices: [
            "Use data source connectors for auto-syncing",
            "Implement document enrichment during ingestion",
            "Use query suggestions for better UX",
            "Monitor search analytics to identify content gaps",
            "Secure indices with IAM and VPC endpoints"
        ],
        whyNeeded: "Kendra provides the high-accuracy retrieval layer essential for RAG architectures, ensuring GenAI models have access to the most relevant and up-to-date enterprise knowledge.",
        connections: [
            { name: "Amazon S3", slug: "s3", role: "source", description: "Data source" },
            { name: "Amazon Bedrock", slug: "bedrock", role: "destination", description: "Retriever for RAG" }
        ]
    },
    "step-functions": {
        name: "AWS Step Functions",
        category: "App Integration",
        description: "Visual workflow service that helps developers use AWS services to build distributed applications.",
        whatItIs: "AWS Step Functions is a visual workflow service that helps developers use AWS services to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning (ML) pipelines.",
        howWeUsedIt: [
            "Orchestrating complex RAG ingestion pipelines (S3 -> Textract -> Embedding -> Vector DB)",
            "Managing long-running model training workflows",
            "Handling human-in-the-loop approval steps for GenAI outputs",
            "Retrying failed API calls to Bedrock or Lambda",
            "Coordinating multi-step agentic workflows"
        ],
        bestPractices: [
            "Use Express Workflows for high-volume, short-duration events",
            "Implement catch/retry logic for robust error handling",
            "Pass state efficiently between steps to minimize payload size",
            "Use Standard Workflows for long-running processes (>5 mins)",
            "Integrate with X-Ray for end-to-end tracing"
        ],
        whyNeeded: "Step Functions is the nervous system of complex GenAI applications—managing state, retries, and orchestration across distributed services to ensure reliability.",
        connections: [
            { name: "AWS Lambda", slug: "lambda", role: "destination", description: "Orchestrates" },
            { name: "Amazon SageMaker", slug: "sagemaker", role: "destination", description: "Orchestrates training" },
            { name: "Amazon DynamoDB", slug: "dynamodb", role: "integration", description: "Stores state" }
        ]
    },
    "eventbridge": {
        name: "Amazon EventBridge",
        category: "App Integration",
        description: "Serverless event bus that makes it easier to build event-driven applications.",
        whatItIs: "Amazon EventBridge is a serverless event bus that makes it easier to build event-driven applications at scale using events generated from your applications, integrated SaaS applications, and AWS services.",
        howWeUsedIt: [
            "Triggering model retraining pipelines on S3 data upload",
            "Decoupling GenAI microservices for scalability",
            "Scheduling periodic batch inference jobs",
            "Routing alerts from CloudWatch to notification systems",
            "Integrating third-party SaaS events into AI workflows"
        ],
        bestPractices: [
            "Use schema registry to validate event structures",
            "Implement archive and replay for debugging",
            "Use rules to filter events at the source",
            "Monitor dead-letter queues for failed deliveries",
            "Tag resources for cost allocation"
        ],
        whyNeeded: "EventBridge enables loose coupling in GenAI architectures, allowing systems to react to changes (like new data or model drift) in real-time without tight dependencies.",
        connections: [
            { name: "AWS Lambda", slug: "lambda", role: "destination", description: "Triggers" },
            { name: "Amazon S3", slug: "s3", role: "source", description: "Events from" },
            { name: "AWS Step Functions", slug: "step-functions", role: "destination", description: "Triggers workflows" }
        ]
    },
    "dynamodb": {
        name: "Amazon DynamoDB",
        category: "Storage & Database",
        description: "Fast, flexible NoSQL database service for any scale.",
        whatItIs: "Amazon DynamoDB is a fully managed, serverless, key-value NoSQL database designed to run high-performance applications at any scale. It offers built-in security, continuous backups, and automated multi-region replication.",
        howWeUsedIt: [
            "Storing user session history for conversational AI bots",
            "Caching frequent RAG query results for low latency",
            "Managing state for Step Functions workflows",
            "Storing metadata for document ingestion pipelines",
            "Serving high-concurrency read requests for feature stores"
        ],
        bestPractices: [
            "Design partition keys for uniform data distribution",
            "Use On-Demand capacity for unpredictable GenAI workloads",
            "Enable point-in-time recovery (PITR) for data safety",
            "Use TTL to automatically expire old session data",
            "Integrate with DAX for microsecond response times"
        ],
        whyNeeded: "DynamoDB provides the low-latency, high-throughput storage layer required for real-time GenAI applications, session management, and state tracking.",
        connections: [
            { name: "AWS Lambda", slug: "lambda", role: "source", description: "Accessed by" },
            { name: "AWS Step Functions", slug: "step-functions", role: "source", description: "Accessed by" }
        ]
    },
    "rds": {
        name: "Amazon RDS",
        category: "Storage & Database",
        description: "Managed relational database service for MySQL, PostgreSQL, MariaDB, Oracle BYOL, or SQL Server.",
        whatItIs: "Amazon Relational Database Service (Amazon RDS) makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity while automating time-consuming administration tasks.",
        howWeUsedIt: [
            "Storing structured business data for SQL-based RAG",
            "Managing user profiles and application settings",
            "Using pgvector on RDS PostgreSQL for vector embeddings",
            "Transactional storage for billing and usage tracking",
            "Integrating with QuickSight for business reporting"
        ],
        bestPractices: [
            "Use Multi-AZ deployments for high availability",
            "Enable Performance Insights to optimize queries",
            "Use RDS Proxy to manage connection pools from Lambda",
            "Encrypt data at rest and in transit",
            "Schedule automated backups and snapshots"
        ],
        whyNeeded: "RDS is the backbone for structured data in enterprise applications. With vector extensions (like pgvector), it also serves as a robust, familiar vector store for RAG implementations.",
        connections: [
            { name: "AWS Lambda", slug: "lambda", role: "source", description: "Accessed by" },
            { name: "Amazon VPC", slug: "vpc", role: "integration", description: "Secured by" },
            { name: "Amazon QuickSight", slug: "quicksight", role: "destination", description: "Visualized by" }
        ]
    }
};
