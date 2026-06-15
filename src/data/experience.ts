export type Job = {
  company: string;
  role: string;
  employment?: string;
  period: string;
  location?: string;
  intro?: string;
  highlights: string[];
  stack?: string;
};

// Full work history from LinkedIn, kept verbatim.
export const EXPERIENCE: Job[] = [
  {
    company: 'Wolfia (YC)',
    role: 'AI Software Engineer',
    employment: 'Full-time',
    period: 'Sep 2025 - Present',
    location: 'Austin, Texas, United States · Remote',
    intro: 'Worked on the following:',
    highlights: [
      'redis infra for caching',
      'tenant schema migration - https://status.wolfia.com/events?filter=maintenances',
      'Graph RAG for better answer quality (using cypher queries generated via LLMs)',
      'FlakorDB infra and internal tools',
      'Improved document extraction using Azure DI',
      'crawler service for website integration and UI for the same',
      'Self serve signup flow and stripe integration for payments flow',
      'Rate limiter on API level and service level - using redis',
      'An AI agent to fill PDFs and docx in original forms using claude agent sdk',
      'wolfia chat agent which gives accurate copy pastable answers for questionnaires, using claude agent sdk',
      'wolfia MCP (https://docs.wolfia.com/how-to/mcp-server)',
      'Built learnings: users edit answers in our product, wolfia will learn for the user edits and apply it to the future answer generation',
      'Redis based worker pool for agent execution - worker scaled based on keda aggressively - also agent output streaming via redis pub/sub',
      'Legal reiview product: Extraction, analysis, finding',
      "evals for customers, to make sure we ship fast enough and don't regress (customer specific evals)",
      "evals dashboard for customers, they can configure custom evals and evaluate wolfia's performance over time, they can add all the edge cases for different products",
      'Search functionality across our app features using fuse js',
      'scaled questionnaire processing and fixed memory issues',
    ],
  },
  {
    company: 'Safe Security',
    role: 'Software Development Engineer II',
    employment: 'Full-time',
    period: 'May 2024 - Sep 2025',
    location: 'Bengaluru, Karnataka, India · On-site',
    intro: 'Worked on the following:',
    highlights: [
      'Peer Insights and datalake ( s3tables )',
      'safeX ( LLM - RAG based chat interface for safe users)',
      'daily digest',
      'Document analysis using AWS bedrock',
    ],
    stack: 'TypeScript, Amazon Web Services (AWS) and +7 skills',
  },
  {
    company: 'Flipkart',
    role: 'Software Development Engineer I',
    employment: 'Full-time',
    period: 'Jul 2022 - May 2024',
    intro:
      'Worked on the design and implementation of an offers service with the following features:',
    highlights: [
      'Fetch offer List',
      'Offer Application (on cart, checkout, & order placement)',
      'Distance to redemption',
      'Savings Pass (offer application & validity handling)',
      'Activation Code',
      "Redis Stability - POC & SOP of scaling Redis given it doesn't have adequate RAM for master-slave switch",
      'Cart Service - Offer service Integration; checkout migration from PHP to Java',
    ],
    stack: 'Used Dropwizard, MSSQL, Redis, Java, Bigtable, GCP',
  },
  {
    company: 'Flipkart',
    role: 'Software Development Engineer Intern',
    employment: 'Internship',
    period: 'Jan 2022 - Jul 2022',
    location: 'Bangalore Urban, Karnataka, India',
    highlights: [
      'Locust as a service setup for fkh+ launch',
      'Benchmarking and solving bottlenecks for the fkh+ core stack scaleup',
      'Removing vulnerabilities & upgrading node, python, and PHP versions for the entire stack',
      'Used Python, PHP, Javascript, AWS, Redis, lambda, elastic beanstalk, Mongo DB',
    ],
  },
  {
    company: 'Indian Institute Of Information Technology',
    role: 'Teaching Assistant - Object Oriented Programming',
    employment: 'Part-time',
    period: 'Aug 2021 - Dec 2021',
    location: 'Prayagraj, Uttar Pradesh, India',
    highlights: [],
  },
  {
    company: 'Flipkart',
    role: 'Software Engineer',
    employment: 'Internship',
    period: 'May 2021 - Jul 2021',
    location: 'Bangalore Urban, Karnataka, India',
    highlights: [
      'POC of running gRPC-based service using Kubernetes and Istio service mesh',
      'Onboarding component black box testing framework on REST and gRPC-based microservices',
    ],
  },
];

export type Degree = {
  school: string;
  degree: string;
  period: string;
  detail?: string;
};

export const EDUCATION: Degree[] = [
  {
    school: 'Indian Institute Of Information Technology Allahabad',
    degree: 'Master of Technology - MTech',
    period: 'Jul 2021 - Jun 2022',
  },
  {
    school: 'Indian Institute Of Information Technology Allahabad',
    degree: 'Bachelor of Technology - BTech, Information Technology',
    period: 'Jan 2017 - Jun 2021',
    detail: 'Algorithms, C++ and +9 skills',
  },
];

export type Publication = {
  title: string;
  venue: string;
  date: string;
};

export const PUBLICATIONS: Publication[] = [
  {
    title:
      'A Lightweight Intrusion Detection and Electricity Theft Detection System for Smart Grid',
    venue: 'SpringerLink',
    date: 'Nov 2, 2023',
  },
];

export type Certification = {
  title: string;
  issuer: string;
  issued: string;
};

// 9 listed on LinkedIn; these are the ones with details available.
export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Advanced Prompt Engineering Techniques',
    issuer: 'LinkedIn',
    issued: 'Issued Aug 2024',
  },
  {
    title: 'Learning Amazon Bedrock',
    issuer: 'LinkedIn',
    issued: 'Issued Jun 2024',
  },
];
