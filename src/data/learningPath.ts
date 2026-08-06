import type { LearningPhase } from '../types';

export const LEARNING_PATH: LearningPhase[] = [
  {
    id: "p1", title: "ML / DL Foundations", desc: "Backprop, gradients, embeddings, attention — first principles.",
    resources: [
      { id: "p1r1", title: "Neural Networks: Zero to Hero (full playlist)", src: "Andrej Karpathy · YouTube", type: "VIDEO", url: "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ", embed: "https://www.youtube.com/embed/videoseries?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ" },
      { id: "p1r2", title: "But what is a neural network? — Deep Learning Ch.1", src: "3Blue1Brown · YouTube", type: "VIDEO", url: "https://www.youtube.com/watch?v=aircAruvnKk", embed: "https://www.youtube.com/embed/aircAruvnKk" },
      { id: "p1r3", title: "Zero to Hero — course page & exercises", src: "karpathy.ai", type: "DOCS", url: "https://karpathy.ai/zero-to-hero.html" },
      { id: "p1r4", title: "nn-zero-to-hero source code", src: "GitHub · karpathy", type: "REPO", url: "https://github.com/karpathy/nn-zero-to-hero" },
    ],
  },
  {
    id: "p2", title: "LLM Engineering Fundamentals", desc: "Tokenization, structured prompting, tool-calling mechanics.",
    resources: [
      { id: "p2r1", title: "Prompt Engineering Overview", src: "Anthropic Docs", type: "DOCS", url: "https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview" },
      { id: "p2r2", title: "Anthropic Courses hub (prompting, MCP, agents)", src: "anthropic.skilljar.com", type: "COURSE", url: "https://anthropic.skilljar.com" },
      { id: "p2r3", title: "DeepLearning.AI — full course catalog", src: "deeplearning.ai", type: "COURSE", url: "https://www.deeplearning.ai/courses" },
    ],
  },
  {
    id: "p3", title: "RAG Systems", desc: "Embeddings, chunking, hybrid retrieval, vector databases.",
    resources: [
      { id: "p3r1", title: "Retrieval Augmented Generation (RAG)", src: "DeepLearning.AI", type: "COURSE", url: "https://www.deeplearning.ai/courses/retrieval-augmented-generation" },
      { id: "p3r2", title: "Building Agentic RAG with LlamaIndex", src: "DeepLearning.AI", type: "COURSE", url: "https://www.deeplearning.ai/courses/building-agentic-rag-with-llamaindex" },
      { id: "p3r3", title: "pgvector — Postgres vector search", src: "GitHub", type: "REPO", url: "https://github.com/pgvector/pgvector" },
    ],
  },
  {
    id: "p4", title: "Agents & Tool Use", desc: "ReAct, LangGraph state machines, MCP servers — your current frontier.",
    resources: [
      { id: "p4r1", title: "Complete Agentic AI Course (LangChain, LangGraph, RAG, Evals)", src: "YouTube", type: "VIDEO", url: "https://www.youtube.com/watch?v=rV3HJ4LEZ7k", embed: "https://www.youtube.com/embed/rV3HJ4LEZ7k" },
      { id: "p4r2", title: "AI Agents in LangGraph", src: "DeepLearning.AI · Harrison Chase", type: "COURSE", url: "https://www.deeplearning.ai/courses/ai-agents-in-langgraph" },
      { id: "p4r3", title: "LangGraph overview", src: "LangChain Docs", type: "DOCS", url: "https://docs.langchain.com/oss/python/langgraph/overview" },
      { id: "p4r4", title: "Agents Course — Unit 2: LangGraph", src: "Hugging Face", type: "COURSE", url: "https://huggingface.co/learn/agents-course/unit2/langgraph/introduction" },
      { id: "p4r5", title: "Build an MCP server", src: "modelcontextprotocol.io", type: "DOCS", url: "https://modelcontextprotocol.io/docs/develop/build-server" },
      { id: "p4r6", title: "Reference MCP servers", src: "GitHub · modelcontextprotocol", type: "REPO", url: "https://github.com/modelcontextprotocol/servers" },
      { id: "p4r7", title: "Introduction to Model Context Protocol", src: "Anthropic Course", type: "COURSE", url: "https://anthropic.skilljar.com/introduction-to-model-context-protocol" },
    ],
  },
  {
    id: "p5", title: "Eval & Observability", desc: "Golden datasets, LLM-as-judge, tracing — directly feeds Faultline.ai.",
    resources: [
      { id: "p5r1", title: "OpenTelemetry documentation", src: "opentelemetry.io", type: "DOCS", url: "https://opentelemetry.io/docs/" },
      { id: "p5r2", title: "promptfoo — prompt/eval testing", src: "promptfoo.dev", type: "REPO", url: "https://www.promptfoo.dev/" },
      { id: "p5r3", title: "Essays on ML systems design & evals", src: "Chip Huyen", type: "DOCS", url: "https://huyenchip.com/" },
    ],
  },
  {
    id: "p6", title: "Fine-Tuning & Adaptation", desc: "LoRA/PEFT, and when NOT to fine-tune.",
    resources: [
      { id: "p6r1", title: "PEFT — parameter-efficient fine-tuning", src: "Hugging Face Docs", type: "DOCS", url: "https://huggingface.co/docs/peft/index" },
      { id: "p6r2", title: "Ollama — local model serving", src: "GitHub", type: "REPO", url: "https://github.com/ollama/ollama" },
    ],
  },
  {
    id: "p7", title: "AI-Native Production Engineering", desc: "Guardrails, multi-tenant isolation, reliability patterns.",
    resources: [
      { id: "p7r1", title: "OWASP Top 10 for LLM Applications", src: "owasp.org", type: "DOCS", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/" },
      { id: "p7r2", title: "Building Effective Agents", src: "Anthropic Engineering", type: "DOCS", url: "https://www.anthropic.com/research/building-effective-agents" },
    ],
  },
  {
    id: "p8", title: "Portfolio & Positioning", desc: "Turn Faultline.ai + healthcare SaaS into your differentiation story.",
    resources: [
      { id: "p8r1", title: "YC Startup Library", src: "ycombinator.com", type: "DOCS", url: "https://www.ycombinator.com/library" },
      { id: "p8r2", title: "Apply to YC", src: "ycombinator.com", type: "DOCS", url: "https://www.ycombinator.com/apply" },
    ],
  },
];
