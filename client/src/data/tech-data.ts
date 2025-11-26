
export interface TechData {
    name: string;
    category: string;
    description: string;
    whatItIs: string;
    howWeUsedIt: string[];
    bestPractices: string[];
    whyNeeded: string;
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
        whyNeeded: "EC2 gives complete control and flexibility necessary for custom GenAI infrastructure—especially when managing GPU clusters, distributed training, or high-performance inference workloads that aren't possible with fully managed services."
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
        whyNeeded: "S3 is the foundation of data architecture for any GenAI ecosystem—serving as the unified storage layer for training data, embeddings, documents, and model outputs in enterprise-scale environments."
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
        whyNeeded: "EMR is critical when preparing large-scale datasets for GenAI and analytics workloads, enabling scalable, cost-efficient data processing pipelines for enterprise-level AI systems."
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
        whyNeeded: "GenAI workloads must be deployed in secure, compliant network zones—VPC ensures isolation, controlled access, and enterprise-grade governance for sensitive AI ecosystems."
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
        whyNeeded: "IAM forms the backbone of security across AI workflows—protecting training data, restricting model endpoints, and ensuring compliance with enterprise security standards."
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
        whyNeeded: "SageMaker accelerates the ML development lifecycle by providing pre-built algorithms, managed infrastructure, and integrated tools. It reduces time-to-market for ML models from months to weeks, while ensuring scalability and cost-efficiency."
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
        whyNeeded: "Bedrock is the center of the enterprise GenAI ecosystem—offering secure, scalable, compliant foundation models without requiring GPU management. It accelerates GenAI adoption while maintaining strict security boundaries."
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
        whyNeeded: "CloudFront enhances the performance and security of GenAI apps, ensuring global low-latency access to AI dashboards, portals, and model-driven APIs."
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
        whyNeeded: "Enterprise GenAI ecosystems require consistency and compliance. CloudFormation ensures predictable provisioning of the entire stack from networking to AI services."
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
        whyNeeded: "Athena enables enterprise-scale analytics that support GenAI training, evaluation, observability, and data preparation — all without maintaining infrastructure."
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
        whyNeeded: "QuickSight provides business-level visibility into GenAI operations—helping organizations track usage, cost, and performance at scale."
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
        whyNeeded: "Ollama gives enterprises flexibility to run custom or open-source models without relying entirely on managed services — essential for hybrid, private, or cost-optimized GenAI ecosystems."
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
        whyNeeded: "Enterprise GenAI apps require secure user identification, fine-grained access, and governance. Cognito provides a scalable, compliant identity layer without building authentication from scratch."
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
        whyNeeded: "Lambda enables scalable, cost-efficient orchestration and glue logic for GenAI systems — ideal for serverless AI microservices and automated workflows."
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
        whyNeeded: "Rekognition is essential for computer-vision-supported GenAI use cases — enabling multimodal RAG, automated tagging, and intelligent document workflows."
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
        whyNeeded: "Comprehend enhances GenAI systems with classical NLP signals — essential for compliance, data preprocessing, and building structured understanding."
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
        whyNeeded: "Textract is crucial for enterprise RAG and document intelligence workflows — turning unstructured PDFs into structured data usable by GenAI models."
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
        whyNeeded: "Polly adds voice capabilities to GenAI solutions, enabling multimodal and accessible AI applications in enterprise environments."
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
            "Offload reasoning to LLMs while using Lex for intent routing",
            "Use session attributes for maintaining context",
            "Integrate Lex with Lambda for dynamic fulfillment",
            "Enable audio streaming for real-time responses",
            "Use Lex for guardrail-driven initial user filtering"
        ],
        whyNeeded: "Lex provides structured dialogue management and voice infrastructure for chatbots, while LLMs handle reasoning — ideal for enterprise conversational AI architectures."
    },
    "kendra": {
        name: "Amazon Kendra",
        category: "AI & Machine Learning",
        description: "Intelligent enterprise search powered by machine learning.",
        whatItIs: "Amazon Kendra is an intelligent search service powered by machine learning. It reimagines enterprise search for your websites and applications so your employees and customers can easily find the content they are looking for, even when it's scattered across multiple locations.",
        howWeUsedIt: [
            "Building retrieval pipelines for GenAI-assisted search",
            "Integrating with Bedrock RAG to improve accuracy",
            "Creating semantic workplace search for employees",
            "Connecting SharePoint, S3, Confluence, and DB sources",
            "Using custom ranking profiles for domain-specific search"
        ],
        bestPractices: [
            "Use incremental sync for large enterprise collections",
            "Optimize metadata fields for better ranking",
            "Use Kendra as retrieval backend and Bedrock for reasoning",
            "Enable query suggestions and relevancy tuning",
            "Use access control filters for compliance"
        ],
        whyNeeded: "Kendra enhances GenAI with deep retrieval accuracy — essential for complex enterprise RAG systems requiring high-quality search."
    },
    "step-functions": {
        name: "AWS Step Functions",
        category: "Compute & Serverless",
        description: "Visual workflow orchestration for distributed applications.",
        whatItIs: "AWS Step Functions is a visual workflow service that helps developers use AWS services to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning (ML) pipelines.",
        howWeUsedIt: [
            "Building end-to-end RAG workflows (ingest → chunk → embed → store)",
            "Coordinating document processing pipelines with Textract + Comprehend",
            "Automating model evaluation, testing, and rollout workflows",
            "Parallel processing of training data transformations",
            "Managing long-running AI workloads via asynchronous patterns"
        ],
        bestPractices: [
            "Use Map states for parallel workloads",
            "Add error handling and retry logic for resilience",
            "Store workflow metadata in DynamoDB",
            "Use Step Functions Express for high-throughput tasks",
            "Keep tasks small and idempotent"
        ],
        whyNeeded: "AI systems require multi-step orchestration — Step Functions ensures reliability, observability, and scalable automation across GenAI pipelines."
    },
    "eventbridge": {
        name: "Amazon EventBridge",
        category: "Compute & Serverless",
        description: "Serverless event bus that connects application data from your own apps, SaaS, and AWS services.",
        whatItIs: "Amazon EventBridge is a serverless event bus that makes it easier to build event-driven applications at scale using events generated from your applications, integrated Software-as-a-Service (SaaS) applications, and AWS services.",
        howWeUsedIt: [
            "Triggering document ingestion workflows",
            "Orchestrating GenAI microservices",
            "Automating model retraining on new data arrival",
            "Connecting CRM/ERP events to AI pipelines",
            "Integrating Bedrock logs for observability dashboards"
        ],
        bestPractices: [
            "Use schema registry for event governance",
            "Keep payloads minimal and pass S3 references",
            "Use retry policies to avoid dropped events",
            "Use fine-grained access for event buses",
            "Integrate with Step Functions for advanced workflows"
        ],
        whyNeeded: "EventBridge enables real-time, decoupled GenAI architectures where ingestion, processing, and inference systems communicate reliably and scalably."
    },
    "dynamodb": {
        name: "Amazon DynamoDB",
        category: "Storage & Database",
        description: "Fast, flexible NoSQL database service for single-digit millisecond performance at any scale.",
        whatItIs: "Amazon DynamoDB is a fully managed, serverless, key-value NoSQL database designed to run high-performance applications at any scale. It offers built-in security, continuous backups, automated multi-Region replication, in-memory caching, and data export tools.",
        howWeUsedIt: [
            "Storing vector embeddings for retrieval-augmented generation",
            "Caching frequent query results with DynamoDB Accelerator (DAX)",
            "Maintaining conversation memory for LLM-driven agents",
            "Storing document metadata before RAG execution",
            "Supporting serverless apps via Lambda + DynamoDB"
        ],
        bestPractices: [
            "Use partition key design to avoid hot partitions",
            "Enable Auto Scaling or On-Demand capacity",
            "Use DynamoDB Streams for event-driven updates",
            "Encrypt tables with KMS and enable PITR",
            "Use DAX for low-latency read-heavy workloads"
        ],
        whyNeeded: "DynamoDB is perfect for GenAI apps requiring fast retrieval, embeddings storage, or agent memory systems with massive scale and low latency."
    },
    "rds": {
        name: "Amazon RDS",
        category: "Storage & Database",
        description: "Set up, operate, and scale a relational database in the cloud with just a few clicks.",
        whatItIs: "Amazon Relational Database Service (Amazon RDS) is a collection of managed services that makes it simple to set up, operate, and scale databases in the cloud. It supports popular engines like PostgreSQL, MySQL, MariaDB, Oracle Database, and SQL Server.",
        howWeUsedIt: [
            "Storing structured enterprise records used in GenAI knowledge bases",
            "Running metadata queries for preprocessing content",
            "Maintaining user preferences and personalization data",
            "Integrating relational datasets into LLM workflows",
            "Acting as source-of-truth for enterprise systems feeding GenAI"
        ],
        bestPractices: [
            "Enable Multi-AZ for high availability",
            "Use read replicas for scaling read-heavy workloads",
            "Restrict public access and enforce VPC-only connectivity",
            "Enable performance insights for query optimization",
            "Automate backups and apply IAM authentication"
        ],
        whyNeeded: "RDS provides reliable and secure structured storage powering enterprise GenAI pipelines — ensuring consistent, durable access to transactional data feeding AI systems."
    }
};
