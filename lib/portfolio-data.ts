import { type LucideIcon } from "lucide-react"
import {
  Award,
  Bot,
  Brain,
  Briefcase,
  Calendar,
  Cloud,
  Code,
  Cpu,
  Crosshair,
  Flame,
  Mail,
  Linkedin,
  MapPin,
  Phone,
  Server,
  Shield,
  Target,
  User,
  Zap,
} from "lucide-react"

export interface HeroTag {
  name: string
  color: string
}

export interface StatCard {
  label: string
  value: string
  icon: LucideIcon
  color: string
}

export interface BioSection {
  paragraphs: string[]
}

export interface EducationDetail {
  degree: string
  institution: string
  completionLabel: string
}

export interface SkillCategory {
  title: string
  icon: LucideIcon
  color: string
  skills: Array<{ name: string; level: number }>
}

export interface ExperienceAchievement {
  title: string
  subtitle: string
  company: string
  period: string
  status: string
  achievements: string[]
}

export interface ProjectDetail {
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  color: string
  difficulty: "LEGENDARY" | "EPIC" | "RARE"
  reward: string
  techStack: string[]
  highlights: string[]
}

export interface ContactItem {
  icon: LucideIcon
  label: string
  value: string
  href: string
  color: string
}

export interface HudMenuItem {
  id: string
  label: string
  icon: LucideIcon
  color: string
}

export interface PortfolioData {
  media: {
    appleMusicTrackId: string
  }
  personal: {
    initials: string
    fullName: string
    role: string
    location: string
    experienceLevel: string
    experienceYears: string
    missionsCompleted: string
    readiness: string
    status: string
    availabilityHeadline: string
    availabilitySubtext: string
    coordinates: {
      lat: string
      lng: string
      cityLabel: string
    }
  }
  hero: {
    preTitle: string
    ctaLabel: string
    title: string
    subtitle: {
      prefix: string
      accent: string
      suffix: string
    }
    tags: HeroTag[]
  }
  hud: {
    menuItems: HudMenuItem[]
  }
  about: {
    stats: StatCard[]
    bio: BioSection
    education: EducationDetail
  }
  skills: {
    categories: SkillCategory[]
    perks: string[]
  }
  experience: ExperienceAchievement[]
  projects: ProjectDetail[]
  contact: {
    info: ContactItem[]
    languages: string[]
    cta: {
      headlinePrefix: string
      headlineAccent: string
      body: string
      ctaLabel: string
      ctaHref: string
      statusLabel: string
      responseTime: string
    }
  }
}

export const portfolioData: PortfolioData = {
  media: {
    appleMusicTrackId: "1703240477",
  },
  personal: {
    initials: "RP",
    fullName: "Ritesh Patel",
    role: "AI Engineer | Generative AI | Full Stack",
    location: "PUNE, INDIA",
    experienceLevel: "LVL 2+ AI ENGINEER",
    experienceYears: "2.2",
    missionsCompleted: "8+",
    readiness: "AI READY",
    status: "ACTIVE",
    availabilityHeadline: "OPEN",
    availabilitySubtext: "TO OPPORTUNITIES",
    coordinates: {
      lat: "18.5204",
      lng: "73.8567",
      cityLabel: "PUNE, MH",
    },
  },
  hero: {
    preTitle: "WELCOME TO THE PORTFOLIO OF",
    ctaLabel: "ENTER GAME",
    title: "Ritesh Patel",
    subtitle: {
      prefix: "AI",
      accent: "ENGINEER",
      suffix: "| FULL STACK",
    },
    tags: [
      { name: "Generative AI", color: "#00d4ff" },
      { name: "RAG", color: "#00ff88" },
      { name: "LangGraph", color: "#ff3366" },
      { name: "FastAPI", color: "#ffaa00" },
      { name: "AWS Bedrock", color: "#aa44ff" },
    ],
  },
  hud: {
    menuItems: [
      { id: "about", label: "PROFILE", icon: User, color: "#00d4ff" },
      { id: "skills", label: "ARSENAL", icon: Code, color: "#00ff88" },
      { id: "experience", label: "MISSIONS", icon: Briefcase, color: "#ff3366" },
      { id: "projects", label: "HEISTS", icon: Target, color: "#ffaa00" },
      { id: "contact", label: "CONTACT", icon: Phone, color: "#aa44ff" },
    ],
  },
  about: {
    stats: [
      { label: "YEARS EXP", value: "2.2", icon: Calendar, color: "#00d4ff" },
      { label: "PROJECTS", value: "8+", icon: Award, color: "#ff3366" },
      { label: "AI STACK", value: "30+", icon: Cpu, color: "#00ff88" },
      { label: "LOCATION", value: "PUNE", icon: MapPin, color: "#ffaa00" },
    ],
    bio: {
      paragraphs: [
        "AI Engineer and Full Stack Developer with 2.2 years of experience building AI-powered applications, intelligent backend services, and scalable web platforms.",
        "Specialized in Generative AI, LLMs, RAG, prompt engineering, embeddings, semantic search, conversational AI, and agent orchestration with LangChain and LangGraph.",
        "Focused on production-ready AI systems with guardrails, evaluation, observability, secure tool execution, and reliable full-stack delivery.",
      ],
    },
    education: {
      degree: "Master of Computer Applications (MCA)",
      institution: "Dr. A.P.J. Abdul Kalam University, Indore",
      completionLabel: "COMPLETED 2024",
    },
  },
  skills: {
    categories: [
      {
        title: "AI & LLM",
        icon: Crosshair,
        color: "#00d4ff",
        skills: [
          { name: "LLM APIs", level: 95 },
          { name: "Prompt Engineering", level: 92 },
          { name: "Gemini", level: 88 },
          { name: "AWS Bedrock", level: 85 },
        ],
      },
      {
        title: "RAG & RETRIEVAL",
        icon: Shield,
        color: "#ff3366",
        skills: [
          { name: "RAG Pipelines", level: 95 },
          { name: "Embeddings", level: 90 },
          { name: "Vector Search", level: 88 },
          { name: "Semantic Search", level: 90 },
          { name: "Context Assembly", level: 85 },
        ],
      },
      {
        title: "AGENTS & ORCHESTRATION",
        icon: Zap,
        color: "#00ff88",
        skills: [
          { name: "LangGraph", level: 92 },
          { name: "LangChain", level: 92 },
          { name: "Tool Calling", level: 88 },
          { name: "Multi-Agent Workflows", level: 85 },
        ],
      },
      {
        title: "BACKEND & FRONTEND",
        icon: Flame,
        color: "#ffaa00",
        skills: [
          { name: "Python / FastAPI", level: 95 },
          { name: "React / Next.js", level: 90 },
          { name: "Node.js", level: 82 },
          { name: "TypeScript", level: 88 },
        ],
      },
      {
        title: "GUARDRAILS & EVALS",
        icon: Shield,
        color: "#aa44ff",
        skills: [
          { name: "Prompt Injection Defense", level: 88 },
          { name: "PII Redaction", level: 82 },
          { name: "RAG Evaluation", level: 85 },
          { name: "Hallucination Mitigation", level: 82 },
        ],
      },
      {
        title: "CLOUD & DATA",
        icon: Zap,
        color: "#00d4ff",
        skills: [
          { name: "AWS", level: 88 },
          { name: "PostgreSQL", level: 88 },
          { name: "MongoDB", level: 82 },
          { name: "Docker", level: 85 },
        ],
      },
    ],
    perks: [
      "LLMOps",
      "AIOps",
      "Prompt Versioning",
      "Token Optimization",
      "Structured Outputs",
      "Human-in-the-Loop",
      "API Security",
      "RBAC",
      "Multi-Tenant SaaS",
      "Supabase",
      "Drizzle ORM",
      "Vitest",
      "GitHub API",
    ],
  },
  experience: [
    {
      title: "AI Engineer / Full Stack Developer",
      subtitle: "Generative AI & Production Systems",
      company: "SOFREGO PRIVATE LIMITED",
      period: "Sep 2024 – Present",
      status: "ACTIVE MISSION",
      achievements: [
        "Design and develop end-to-end product features across AI services, backend APIs, databases, and web interfaces",
        "Build RAG workflows covering ingestion, extraction, chunking, embeddings, vector indexing, retrieval, and grounded generation",
        "Develop stateful LangGraph and LangChain agent workflows with tools, validation, retries, and controlled completion paths",
        "Implement guardrails for input/output validation, structured schemas, prompt-injection defense, and safe tool execution",
        "Apply LLM evaluation strategies for relevance, faithfulness, groundedness, and response consistency",
        "Build REST APIs with authentication, role-based authorization, reusable business logic, and consistent error handling",
        "Model PostgreSQL and MongoDB data with indexing, pagination, transactions, and query optimization",
        "Build responsive React and Next.js interfaces and deploy services using Docker and AWS infrastructure",
      ],
    },
  ],
  projects: [
    {
      title: "Sentinel",
      subtitle: "AI Quality Engineering Platform",
      description: "Multi-tenant platform that transforms natural-language testing instructions into durable, reviewable test workflows with AI-powered quality gates.",
      icon: Server,
      color: "#00d4ff",
      difficulty: "LEGENDARY",
      reward: "50K XP",
      techStack: ["Next.js", "TypeScript", "LangGraph", "Supabase", "PostgreSQL", "Drizzle ORM"],
      highlights: [
        "Multi-tenant authorization with organization, project, repository, and run boundaries",
        "Multi-agent test generation with Inngest, LangGraph, and E2B sandbox execution",
        "Guardrails, evaluations, human approval, and GitHub pull-request workflows",
      ],
    },
    {
      title: "AI Support Automation",
      subtitle: "RAG & Conversational AI Platform",
      description: "AI support automation workflow that retrieves relevant business knowledge and generates context-aware responses to user queries.",
      icon: Cloud,
      color: "#00ff88",
      difficulty: "LEGENDARY",
      reward: "45K XP",
      techStack: ["Python", "FastAPI", "React.js", "LangChain", "LLM APIs", "Vector Search"],
      highlights: [
        "End-to-end document ingestion, chunking, embeddings, and semantic retrieval",
        "Backend APIs connecting AI capabilities to conversational workflows",
        "Response-quality controls for relevant, complete, and grounded answers",
      ],
    },
    {
      title: "LLMOps & AIOps",
      subtitle: "Reliable AI Operations",
      description: "Production practices for making AI workflows observable, measurable, secure, and reliable across their lifecycle.",
      icon: Brain,
      color: "#ffaa00",
      difficulty: "RARE",
      reward: "35K XP",
      techStack: ["LLMOps", "AIOps", "Tracing", "Evaluations", "CloudWatch"],
      highlights: [
        "Prompt and model configuration tracking with token and cost monitoring",
        "Tracing, latency analysis, failure classification, and regression-oriented quality checks",
        "Operational monitoring and anomaly identification for AI-assisted systems",
      ],
    },
    {
      title: "Document Intelligence",
      subtitle: "Enterprise Document Analysis",
      description: "AI system that extracts, structures, searches, and summarizes information from long PDFs and unstructured business documents.",
      icon: Bot,
      color: "#00d4ff",
      difficulty: "EPIC",
      reward: "30K XP",
      techStack: ["Python", "FastAPI", "Gemini", "LangChain", "PostgreSQL", "Vector Search"],
      highlights: [
        "Robust document ingestion with extraction, chunking, and metadata enrichment",
        "Grounded answers with source references and structured JSON responses",
        "Validation and PII controls for reliable document processing",
      ],
    },
    {
      title: "Multi-Agent Copilot",
      subtitle: "Tool-Orchestrated AI Assistant",
      description: "Stateful AI assistant that plans tasks, calls approved tools, validates results, and routes work between specialized agents.",
      icon: Brain,
      color: "#aa44ff",
      difficulty: "LEGENDARY",
      reward: "40K XP",
      techStack: ["LangGraph", "LangChain", "FastAPI", "LLM APIs", "Redis", "React"],
      highlights: [
        "Conditional agent routing with shared state and workflow checkpoints",
        "Retry-aware tool execution with validation and human-in-the-loop approval",
        "Tracing and failure analysis for debugging complex agent workflows",
      ],
    },
    {
      title: "AI Security Guard",
      subtitle: "LLM Input & Output Protection",
      description: "Security layer for detecting prompt injection, sensitive data, unsafe requests, and unsupported or hallucinated model responses.",
      icon: Shield,
      color: "#ff3366",
      difficulty: "EPIC",
      reward: "32K XP",
      techStack: ["Python", "FastAPI", "Gemini", "LLM Guardrails", "PII Detection", "AWS"],
      highlights: [
        "Prompt-injection and jailbreak pattern detection before model execution",
        "PII redaction, schema validation, and controlled tool permissions",
        "Hallucination checks and groundedness evaluation for safer responses",
      ],
    },
  ],
  contact: {
    info: [
      {
        icon: Mail,
        label: "EMAIL",
        value: "riteshhh6301@gmail.com",
        href: "mailto:riteshhh6301@gmail.com",
        color: "#00d4ff",
      },
      {
        icon: Phone,
        label: "PHONE",
        value: "+91-7746926301",
        href: "tel:+917746926301",
        color: "#ff3366",
      },
      {
        icon: MapPin,
        label: "LOCATION",
        value: "Pune, India",
        href: "#",
        color: "#00ff88",
      },
      {
        icon: Linkedin,
        label: "LINKEDIN",
        value: "linkedin.com/in/riteshhh",
        href: "https://linkedin.com/in/riteshhh",
        color: "#aa44ff",
      },
    ],
    languages: ["English", "Hindi", "Marathi"],
    cta: {
      headlinePrefix: "Ready to Start a",
      headlineAccent: "Mission?",
      body: "I'm open to opportunities involving Generative AI, RAG systems, agent workflows, backend engineering, and full-stack product development. Let's build reliable AI systems together.",
      ctaLabel: "SEND MESSAGE",
      ctaHref: "mailto:riteshhh6301@gmail.com",
      statusLabel: "Status: Open to Opportunities",
      responseTime: "Response time: Within 24 hours",
    },
  },
}
