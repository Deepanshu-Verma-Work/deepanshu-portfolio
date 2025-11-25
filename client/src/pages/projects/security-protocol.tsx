import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Lock, Key, Eye, FileCheck, AlertTriangle } from "lucide-react";
import { Link } from "wouter";

export default function SecurityProtocol() {
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
                        Security<br />Protocol
                    </h1>
                    <p className="text-xl text-muted-foreground font-heading max-w-2xl">
                        Zero-trust architecture implementation for distributed remote teams with comprehensive security controls.
                    </p>
                </motion.div>

                {/* Zero-Trust Principles */}
                <section className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-display font-bold uppercase tracking-tight mb-8 border-b border-border pb-4"
                    >
                        Zero-Trust Architecture
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: "Never Trust, Always Verify",
                                description: "Continuous authentication and authorization for every request. No implicit trust based on network location. Micro-segmentation to limit lateral movement."
                            },
                            {
                                icon: Eye,
                                title: "Least Privilege Access",
                                description: "Just-in-time (JIT) access provisioning. Role-based access control (RBAC) with attribute-based policies. Regular access reviews and automated deprovisioning."
                            },
                            {
                                icon: Lock,
                                title: "Assume Breach",
                                description: "Design systems assuming attackers are already inside. Encrypt data at rest and in transit. Implement detection and response mechanisms for anomalies."
                            },
                            {
                                icon: FileCheck,
                                title: "Verify Explicitly",
                                description: "Multi-factor authentication (MFA) for all users. Device health checks before granting access. Contextual access decisions based on risk signals."
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

                {/* Authentication & Authorization */}
                <section className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-display font-bold uppercase tracking-tight mb-8 border-b border-border pb-4"
                    >
                        Authentication & Authorization
                    </motion.h2>

                    <div className="space-y-6">
                        {[
                            {
                                title: "Identity & Access Management (IAM)",
                                description: "Centralized identity provider using OAuth 2.0 and OpenID Connect. Single Sign-On (SSO) with SAML 2.0 for enterprise applications.",
                                features: ["OAuth 2.0 / OIDC", "SAML 2.0 SSO", "Multi-factor auth", "Passwordless login"]
                            },
                            {
                                title: "Multi-Factor Authentication",
                                description: "Hardware tokens (YubiKey, Titan), TOTP apps (Google Authenticator, Authy), and biometric authentication. Adaptive MFA based on risk score.",
                                features: ["Hardware tokens", "TOTP", "Biometrics", "Risk-based MFA"]
                            },
                            {
                                title: "Authorization Models",
                                description: "Role-Based Access Control (RBAC) for static permissions. Attribute-Based Access Control (ABAC) for dynamic policies. Policy-as-Code with Open Policy Agent (OPA).",
                                features: ["RBAC", "ABAC", "OPA policies", "Dynamic permissions"]
                            },
                            {
                                title: "Session Management",
                                description: "Short-lived access tokens with refresh token rotation. Secure cookie handling with HttpOnly and SameSite flags. Session timeout and concurrent session limits.",
                                features: ["JWT tokens", "Token rotation", "Secure cookies", "Session limits"]
                            }
                        ].map((auth, index) => (
                            <motion.div
                                key={auth.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-secondary/20 p-6 border border-border"
                            >
                                <h3 className="text-xl font-display font-bold mb-2">{auth.title}</h3>
                                <p className="text-muted-foreground font-heading mb-4">{auth.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {auth.features.map((feature) => (
                                        <span key={feature} className="px-3 py-1 bg-secondary border border-border text-xs font-mono">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Network Security */}
                <section className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-display font-bold uppercase tracking-tight mb-8 border-b border-border pb-4"
                    >
                        Network Security
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Perimeter Defense",
                                items: [
                                    "Web Application Firewall (WAF)",
                                    "DDoS protection (CloudFlare, AWS Shield)",
                                    "Intrusion Detection/Prevention (IDS/IPS)",
                                    "Rate limiting & throttling"
                                ]
                            },
                            {
                                title: "Network Segmentation",
                                items: [
                                    "VPC isolation with private subnets",
                                    "Security groups & NACLs",
                                    "Service mesh (Istio) for mTLS",
                                    "Microsegmentation with Cilium"
                                ]
                            },
                            {
                                title: "Encryption",
                                items: [
                                    "TLS 1.3 for data in transit",
                                    "AES-256 for data at rest",
                                    "End-to-end encryption (E2EE)",
                                    "Certificate management (Let's Encrypt, ACM)"
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

                {/* Compliance & Auditing */}
                <section className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-display font-bold uppercase tracking-tight mb-8 border-b border-border pb-4"
                    >
                        Compliance & Auditing
                    </motion.h2>

                    <div className="space-y-6">
                        {[
                            {
                                title: "Regulatory Compliance",
                                points: [
                                    "GDPR compliance with data residency and right to deletion",
                                    "HIPAA for healthcare data with encryption and audit trails",
                                    "SOC 2 Type II certification for security controls",
                                    "PCI DSS for payment card data handling"
                                ]
                            },
                            {
                                title: "Audit Logging",
                                points: [
                                    "Centralized logging with ELK stack or Splunk",
                                    "Immutable audit trails with blockchain or WORM storage",
                                    "User activity monitoring and session recording",
                                    "Automated compliance reporting and dashboards"
                                ]
                            },
                            {
                                title: "Vulnerability Management",
                                points: [
                                    "Regular penetration testing and security assessments",
                                    "Automated vulnerability scanning (Nessus, Qualys)",
                                    "Dependency scanning for open-source libraries (Snyk, Dependabot)",
                                    "Bug bounty programs for responsible disclosure"
                                ]
                            }
                        ].map((compliance, index) => (
                            <motion.div
                                key={compliance.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="border-l-2 border-foreground/20 pl-6"
                            >
                                <h3 className="text-xl font-display font-bold mb-4">{compliance.title}</h3>
                                <ul className="space-y-2">
                                    {compliance.points.map((point, i) => (
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

                {/* Incident Response */}
                <section>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-display font-bold uppercase tracking-tight mb-8 border-b border-border pb-4"
                    >
                        Incident Response & Recovery
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-secondary/20 p-8 border border-border"
                    >
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h3 className="text-lg font-display font-bold mb-3">Detection & Response</h3>
                                <ul className="space-y-2 text-muted-foreground font-heading">
                                    <li>• SIEM (Security Information and Event Management) with Splunk or Elastic</li>
                                    <li>• Automated threat detection with machine learning</li>
                                    <li>• Incident response playbooks and runbooks</li>
                                    <li>• 24/7 Security Operations Center (SOC)</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-display font-bold mb-3">Business Continuity</h3>
                                <ul className="space-y-2 text-muted-foreground font-heading">
                                    <li>• Disaster recovery plan with RTO/RPO targets</li>
                                    <li>• Regular backup and restore testing</li>
                                    <li>• Failover to secondary regions</li>
                                    <li>• Incident communication protocols</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-display font-bold mb-3">Security Culture</h3>
                            <p className="text-muted-foreground font-heading leading-relaxed">
                                Foster a security-first culture with regular training and awareness programs. Conduct phishing simulations
                                and security drills. Implement secure development practices with SAST/DAST tools in CI/CD pipelines.
                                Encourage responsible disclosure and reward security contributions. Maintain transparent communication
                                about security incidents and remediation efforts.
                            </p>
                        </div>
                    </motion.div>
                </section>
            </div>
        </Layout>
    );
}
