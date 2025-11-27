export type RiskLevel = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

export interface FlaggedClause {
    id: string;
    text: string; // The raw text from the contract
    type: "INDEMNITY" | "TERMINATION" | "LIABILITY" | "CONFIDENTIALITY" | "OTHER";
    risk_level: RiskLevel;
    explanation: string; // AI-generated explanation of why this is risky
    suggestion?: string; // AI-generated suggestion for rephrasing
}

export interface ContractAnalysis {
    contract_id: string;
    filename: string;
    upload_date: string; // ISO timestamp
    status: "PENDING" | "PROCESSING" | "ANALYZED" | "FAILED";
    risk_score: number; // 0-100 (0 = Safe, 100 = Dangerous)
    summary: string; // Executive summary of the contract
    flagged_clauses: FlaggedClause[];
    metadata?: {
        page_count: number;
        parties_involved?: string[];
        effective_date?: string;
    };
}
