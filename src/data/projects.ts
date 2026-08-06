import type { Project } from '../types';

export const PROJECTS: Project[] = [
  { title: "Faultline.ai", status: "BUILDING", desc: "AI-native observability platform. Root-cause reasoning over OTel traces/logs/deploys. YC application in progress.", tags: ["FastAPI", "OTel", "ClickHouse", "Claude API"] },
  { title: "Healthcare SaaS Platform", status: "BUILDING", desc: "Hospital-to-TPA/insurer orchestration. NHCX / FHIR / ABDM compliant, with a local Ollama layer for document intelligence.", tags: ["FastAPI", "Spring Batch", "Kafka", "Postgres RLS"] },
  { title: "Personal Finance Tracker", status: "ACTIVE", desc: "A finance tracking PWA for personal capital gains, budgeting, and portfolio review.", tags: ["FastAPI", "React", "SQLite"] },
  { title: "LearnOrbit", status: "LIVE", desc: "Personal learning portfolio tracking progress across trading, programming, and astrophysics with a deep-space visual aesthetic.", tags: ["Personal Site", "Deep-space UI"] },
  { title: "Tiny Tales Wondernest Kids", status: "ACTIVE", desc: "A kids' YouTube channel — a creative project built alongside the engineering work.", tags: ["YouTube", "Creative"] },
  { title: "Zerodha Portfolio Heat Map", status: "BUILDING", desc: "Exploring the Zerodha Kite MCP server with Claude Desktop to visualize live portfolio data as a heat map.", tags: ["MCP", "Kite API", "Trading"] },
];

export const STATUS_CLASS: Record<Project['status'], string> = {
  BUILDING: 'st-build',
  ACTIVE: 'st-active',
  LIVE: 'st-live',
};
