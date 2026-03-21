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
    role: "Python Full Stack Developer",
    location: "PUNE, INDIA",
    experienceLevel: "LVL 3+ FULL STACK DEV",
    experienceYears: "3+",
    missionsCompleted: "10+",
    readiness: "READY",
    status: "ACTIVE",
    availabilityHeadline: "AVAILABLE",
    availabilitySubtext: "FOR HIRE",
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
      prefix: "PYTHON",
      accent: "FULL STACK",
      suffix: "DEVELOPER",
    },
    tags: [
      { name: "Python", color: "#00d4ff" },
      { name: "Django", color: "#00ff88" },
      { name: "FastAPI", color: "#ff3366" },
      { name: "React", color: "#ffaa00" },
      { name: "AWS", color: "#aa44ff" },
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
      { label: "YEARS EXP", value: "3+", icon: Calendar, color: "#00d4ff" },
      { label: "MISSIONS", value: "10+", icon: Award, color: "#ff3366" },
      { label: "TECH STACK", value: "20+", icon: Cpu, color: "#00ff88" },
      { label: "LOCATION", value: "PUNE", icon: MapPin, color: "#ffaa00" },
    ],
    bio: {
      paragraphs: [
        "Python Full Stack Developer with 3+ years of experience designing, building, and scaling enterprise-grade web applications.",
        "Expert in Python, Django, FastAPI, React, and TypeScript. Strong background in RESTful APIs, microservice architectures, multi-tenant SaaS systems, secure authentication, and performance optimization.",
        "Hands-on experience developing cloud-native and AI/ML-powered platforms using Python ecosystem that deliver real business value.",
      ],
    },
    education: {
      degree: "BSc in Computer Science",
      institution: "K K Wagh Arts Commerce and Science College, Nashik",
      completionLabel: "COMPLETED Oct 2022",
    },
  },
  skills: {
    categories: [
      {
        title: "LANGUAGES",
        icon: Crosshair,
        color: "#00d4ff",
        skills: [
          { name: "Python", level: 95 },
          { name: "TypeScript", level: 90 },
          { name: "JavaScript", level: 90 },
          { name: "SQL", level: 85 },
        ],
      },
      {
        title: "BACKEND",
        icon: Shield,
        color: "#ff3366",
        skills: [
          { name: "Django", level: 95 },
          { name: "FastAPI", level: 90 },
          { name: "Flask", level: 85 },
          { name: "REST APIs", level: 90 },
          { name: "Celery", level: 85 },
        ],
      },
      {
        title: "FRONTEND",
        icon: Zap,
        color: "#00ff88",
        skills: [
          { name: "React.js", level: 90 },
          { name: "Next.js", level: 85 },
          { name: "Tailwind CSS", level: 90 },
          { name: "HTML5/CSS3", level: 95 },
        ],
      },
      {
        title: "CLOUD & DEVOPS",
        icon: Flame,
        color: "#ffaa00",
        skills: [
          { name: "AWS", level: 85 },
          { name: "Docker", level: 85 },
          { name: "CI/CD", level: 85 },
          { name: "Kubernetes", level: 75 },
        ],
      },
      {
        title: "DATABASES",
        icon: Shield,
        color: "#aa44ff",
        skills: [
          { name: "PostgreSQL", level: 90 },
          { name: "MongoDB", level: 85 },
          { name: "Redis", level: 85 },
          { name: "SQLAlchemy", level: 90 },
        ],
      },
      {
        title: "AI & ML",
        icon: Zap,
        color: "#00d4ff",
        skills: [
          { name: "Pandas/NumPy", level: 85 },
          { name: "Scikit-learn", level: 80 },
          { name: "NLP (spaCy)", level: 80 },
          { name: "TensorFlow", level: 75 },
        ],
      },
    ],
    perks: [
      "Django REST Framework",
      "Pydantic",
      "JWT Auth",
      "RBAC",
      "SOLID",
      "Clean Architecture",
      "Agile/Scrum",
      "Swagger/OpenAPI",
      "Pytest",
      "Git",
      "RabbitMQ",
      "Gunicorn/Uvicorn",
      "Alembic",
    ],
  },
  experience: [
    {
      title: "Python Full Stack Developer",
      subtitle: "Django & React Specialist",
      company: "BotByte AI",
      period: "Oct 2022 – Present",
      status: "ACTIVE MISSION",
      achievements: [
        "Designed and delivered enterprise SaaS and AI-driven platforms supporting multiple tenants and user roles",
        "Built scalable backend services using Django, FastAPI, and Celery-based task queues",
        "Developed modern, responsive frontend applications using React and TypeScript",
        "Implemented secure authentication and authorization using Django REST Framework, JWT, and RBAC",
        "Optimized PostgreSQL and MongoDB queries to improve latency and throughput",
        "Deployed and maintained cloud infrastructure on AWS with Docker and CI/CD automation",
        "Collaborated closely with QA, UX, and DevOps teams in Agile/Scrum environments",
      ],
    },
  ],
  projects: [
    {
      title: "WorkForcePro",
      subtitle: "Multi-Tenant SaaS Platform",
      description: "Enterprise workforce management platform for employee scheduling, attendance tracking, task management, and real-time analytics.",
      icon: Server,
      color: "#00d4ff",
      difficulty: "LEGENDARY",
      reward: "50K XP",
      techStack: ["Django", "Django REST Framework", "React", "PostgreSQL", "Celery"],
      highlights: [
        "Multi-tenant architecture with complete data isolation",
        "Real-time operational dashboards",
        "AWS ECS deployment with Docker & CI/CD",
      ],
    },
    {
      title: "CloudScale",
      subtitle: "Event-Driven Backend Platform",
      description: "High-performance cloud-native backend system designed for high-volume API traffic with auto-scaling capabilities.",
      icon: Cloud,
      color: "#00ff88",
      difficulty: "LEGENDARY",
      reward: "45K XP",
      techStack: ["FastAPI", "AWS Lambda", "Docker", "PostgreSQL", "RabbitMQ"],
      highlights: [
        "AWS serverless infrastructure with auto-scaling",
        "Asynchronous processing with Celery & RabbitMQ",
        "Centralized logging with ELK Stack",
      ],
    },
    {
      title: "AI Support Insights",
      subtitle: "Predictive Analytics Module",
      description: "Internal AI module for analyzing historical support data and predicting intent trends for intelligent ticket routing.",
      icon: Brain,
      color: "#ffaa00",
      difficulty: "RARE",
      reward: "35K XP",
      techStack: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "Jupyter"],
      highlights: [
        "Automated ticket tagging & prioritization with ML models",
        "Intent trend prediction using Scikit-learn",
        "Intelligent routing system with custom Python pipelines",
      ],
    },
  ],
  contact: {
    info: [
      {
        icon: Mail,
        label: "EMAIL",
        value: "riteshpatel3554@gmail.com",
        href: "mailto:riteshpatel3554@gmail.com",
        color: "#00d4ff",
      },
      {
        icon: Phone,
        label: "PHONE",
        value: "+91-9209349885",
        href: "tel:+919209349885",
        color: "#ff3366",
      },
      {
        icon: MapPin,
        label: "LOCATION",
        value: "Pune, India",
        href: "#",
        color: "#00ff88",
      },
    ],
    languages: ["English", "Hindi", "Marathi"],
    cta: {
      headlinePrefix: "Ready to Start a",
      headlineAccent: "Mission?",
      body: "I'm currently available for new opportunities and exciting projects. Whether you need a Python full-stack solution, cloud architecture, or AI/ML integration - let's build something amazing together.",
      ctaLabel: "SEND MESSAGE",
      ctaHref: "mailto:riteshpatel3554@gmail.com",
      statusLabel: "Status: Available for Work",
      responseTime: "Response time: Within 24 hours",
    },
  },
}
