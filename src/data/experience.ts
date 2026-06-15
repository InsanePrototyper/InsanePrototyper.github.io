export type Job = {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
};

// Pulled from your LinkedIn. Trim / expand freely.
export const EXPERIENCE: Job[] = [
  {
    company: 'Wolfia (YC)',
    role: 'AI Software Engineer',
    period: 'Sep 2025 to Present',
    location: 'Remote',
    highlights: [
      'AI agents (Claude Agent SDK) for filling PDFs/DOCX in original form and answering questionnaires with copy-pastable answers.',
      'Graph RAG for higher answer quality using LLM-generated Cypher queries.',
      'Redis-based worker pool for agent execution, KEDA-scaled, with output streaming over Redis pub/sub.',
      'Self-serve signup + Stripe payments, crawler service for website integration, and API/service-level rate limiting.',
      'Customer-specific evals + a configurable evals dashboard so customers track Wolfia’s performance over time.',
    ],
  },
  {
    company: 'Safe Security',
    role: 'Software Development Engineer II',
    period: 'May 2024 to Sep 2025',
    location: 'Bengaluru, India',
    highlights: [
      'safeX, an LLM and RAG chat interface for Safe users.',
      'Peer Insights and a data lake on S3 Tables.',
      'Document analysis using AWS Bedrock; daily digest pipeline.',
    ],
  },
  {
    company: 'Flipkart',
    role: 'Software Development Engineer I',
    period: 'Jul 2022 to May 2024',
    location: 'Bengaluru, India',
    highlights: [
      'Designed & built the Offers service: offer listing, application on cart/checkout/order, savings pass, activation codes.',
      'Cart service: offer integration and checkout migration from PHP to Java.',
      'Redis stability: POC + SOP for scaling Redis under constrained RAM for master-slave switchover.',
    ],
  },
];
