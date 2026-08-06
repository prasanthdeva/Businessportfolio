import type { TimelineItem } from '../types';

/* Bullet strings support a single **bold** lead-in, parsed by <Bullet/>. */
export const CAREER: TimelineItem[] = [
  {
    role: "Lead Software Engineer / GenAI Engineer",
    org: "SORIM.AI — Present",
    desc: "Leading a small team on a Ford Credit (BFSI) mainframe-to-cloud modernization engagement.",
    bullets: [
      "Driving GenAI-accelerated development workflows (Claude Code, Gemini) to move faster on legacy COBOL/batch migration",
      "Architecting the cloud target-state for fixed-width mainframe record processing (536-byte COBOL layouts) into modern batch pipelines",
      "Owning delivery across a small engineering team on a regulated BFSI engagement",
    ],
  },
  {
    role: "Software Engineer",
    org: "CloudBees — Remote · Sep 2024 – transition date pending",
    desc: "Product: Continuous Delivery and Release Orchestrations.",
    bullets: [
      "**Groovy DSL hardening:** built a strict execution environment for the Groovy DSL engine — field/keyword whitelisting, a disabled recursive compiler, and locked-down access to internal Groovy classes to close arbitrary code execution and sandbox-escape paths",
      "**Jetty 12 migration:** led the architectural migration (Jetty 11.0.19 → 12.0.23), moving the core backend to Jakarta EE 10 (Servlet 6.0) with a dual-stack networking layer on Jetty Native APIs for high-throughput performance",
      "**Kubernetes scaling orchestration:** replaced a static \"always-on\" agent fleet with ephemeral GKE-provisioned agent pods that spin up only when a job triggers",
      "**Security-hardened auth bootstrapping:** restricted default-admin access across 6 session types and enforced mandatory password rotation before unlocking full API access, with zero disruption to agent/webhook/service traffic",
    ],
  },
  {
    role: "Software Analyst",
    org: "Agilysys Private Limited — Chennai, India · Mar 2023 – Sep 2024",
    desc: "Product: rGuest Stay — hospitality property management (reservations, housekeeping, charges, third-party key/booking/rate-engine integrations).",
    bullets: [
      "Built on Angular + Java Spring Boot with event-based communication for loose coupling and horizontal scalability",
      "Integrated Comtrol device communication via Azure Function App + Event Grid, connecting third-party apps to port-associated hardware",
      "Became the single point of contact for the India Development Centre's Comtrol integration",
      "Worked on sensitive core features: reservation key creation, Automated Digital Check-In, and Batch Check-In",
    ],
  },
  {
    role: "System Engineer",
    org: "Tata Consultancy Services — Chennai, India · Jul 2021 – Mar 2023",
    bullets: [
      "Built core business logic for a fund summarization module processing $2B+ in transactions monthly",
      "Automated General Ledger processing with a Spring Batch solution at 99.9% accuracy",
      "Developed backend transformations for precise proof-data generation for institutional clients",
      "Ongoing bug fixes, refactoring, and feature delivery on the platform",
    ],
  },
  {
    role: "Project Engineer",
    org: "Wipro — Pune, India · Nov 2020 – May 2021",
    desc: "Testing and project coordination — quality assurance, team communication, and delivery management — before transitioning into development-focused roles.",
  },
];

export const EDUCATION = "B.E. Computer Science, Muthayammal Engineering College · Aug 2016 – Mar 2020 · CGPA 7.8";

export const STACK = [
  "Java / Spring Boot / Batch", "Go", "Python / FastAPI", "Kafka", "RabbitMQ", "Docker",
  "GCP", "Azure Pipelines / DevOps", "Azure Functions (Serverless)", "React",
  "Claude Code", "LangGraph", "MCP", "OpenTelemetry", "Postgres", "MongoDB", "MySQL",
];

export const FAULTLINE_BUILT = [
  "Multi-tenant FastAPI/SQLite backend",
  "Real OTel SDK instrumentation across a demo checkout → payment → inventory call chain",
  "Severity/trend-based alerting to Slack, PagerDuty, and email",
  "Pluggable LLM backend (Ollama for local, Claude API for production)",
  "A SigNoz-inspired dark-theme dashboard",
  "A production architecture blueprint built around ClickHouse and Jaeger",
];
