import { Project, SkillCategory, ExperienceItem, CertificationItem } from '../types';

export const CANDIDATE_INFO = {
  name: 'Mohamed Islam Khaled',
  firstName: 'Mohamed',
  role: 'AI / ML Engineer & Frontend Developer',
  email: 'mohamedislamm21@gmail.com',
  location: 'Giza, Egypt',
  timezone: 'Africa/Cairo',
  status: 'Open to Full-Time Roles • Available Immediately',
  militaryStatus: 'Exempt from Military Service',
  languages: [
    { name: 'Arabic', proficiency: 'Native' },
    { name: 'English', proficiency: 'Professional' },
  ],
  tagline: 'Autonomous AI Agents, Responsive Web Applications & Intelligent ML Pipelines.',
  bio: 'AI graduate from Cairo University specializing in autonomous AI agents (Google ADK & Claude Computer Use), vector retrieval (RAG), and full-stack web applications with Python, React, FastAPI, and Docker.',
  summarySentences: [
    'Cairo University Artificial Intelligence graduate with proven experience engineering autonomous AI systems and responsive web applications.',
    'Specialized in autonomous agents (Google ADK & Claude Computer Use API), vector retrieval (RAG) pipelines, and full-stack development with Python, React, FastAPI, and Docker.',
    'Exempt from military service, fluent in English, and committed to high performance, low latency, and clean modular code.',
  ],
  github: 'https://github.com/Mohamedislamm',
  githubUsername: 'Mohamedislamm',
  linkedin: 'https://linkedin.com/in/mohamed-islamm',
  linkedinHandle: 'mohamed-islamm',
};

export const SHOWCASE_PROJECTS: Project[] = [
  {
    id: 'notive-computer-use',
    title: 'Notive — Autonomous Computer-Use Agent',
    tagline: 'Autonomous desktop assistant executing GUI workflows via Claude 3.5 Sonnet and Docker sandbox.',
    year: '2026',
    category: 'Autonomous AI & Agents',
    featured: true,
    badge: 'Flagship Agentic AI',
    shortDescription: 'Autonomous AI agent translating natural language commands into desktop GUI mouse clicks, keystrokes, and multi-step OS workflows inside isolated Docker sandboxes.',
    fullDescription: 'Notive bridges high-level natural language instructions with desktop graphical execution. Powered by Claude 3.5 Sonnet Computer Use API, the system perceives desktop states, maps coordinates, and runs multi-step tasks within an isolated Docker runtime with real-time feedback loops.',
    metrics: [
      { label: 'Sandbox Isolation', value: '100% Secure', subtext: 'Docker Containerized' },
      { label: 'Agent Model', value: 'Claude 3.5 Sonnet', subtext: 'Computer Use API' },
      { label: 'Action Latency', value: '<450ms', subtext: 'Perception Loop' },
    ],
    techStack: ['Python', 'FastAPI', 'Electron', 'Docker', 'Claude 3.5 Sonnet', 'CUA Agent SDK', 'REST APIs'],
    githubUrl: 'https://github.com/Mohamedislamm',
    interactiveDemoType: 'computer-use',
    architectureDetails: {
      problem: 'Repetitive cross-application desktop workflows are slow and prone to human error.',
      solution: 'Engineered an autonomous multi-modal agent loop with screen perception, coordinate mapping, keyboard/mouse emulation, and Docker sandboxing.',
      keyInnovations: [
        'Claude 3.5 Sonnet Computer Use API for precise GUI perception and click coordinate planning.',
        'Decoupled FastAPI backend paired with Electron for native OS interactions.',
        'Docker sandboxing to execute automations safely with rollback capabilities.',
        'Streaming execution logs for real-time user monitoring.',
      ],
      performanceGains: 'Automates multi-step file transformations and data extraction up to 85% faster.',
    },
    sampleCodeSnippet: {
      language: 'python',
      filename: 'agent_runner.py',
      code: `import asyncio
from fastapi import FastAPI
from cua_agent import ComputerUseAgent, DockerSandbox

app = FastAPI(title="Notive Agent Backend")
sandbox = DockerSandbox(image="desktop-env:latest")

@app.post("/api/v1/execute")
async def execute_task(instruction: str):
    agent = ComputerUseAgent(
        model="claude-3-5-sonnet-20241022",
        sandbox=sandbox,
        max_steps=20
    )
    async for event in agent.run_stream(instruction):
        yield {"step": event.step, "action": event.action, "coords": event.coordinates}
`,
    },
  },
  {
    id: 'google-adk-agents',
    title: 'Autonomous Agents with Google ADK',
    tagline: 'Multi-target autonomous AI agents built with Google Agent Development Kit and Gemini 2.5 Flash.',
    year: '2026',
    category: 'Autonomous AI & Agents',
    featured: true,
    badge: 'Google Certified',
    shortDescription: 'Modular AI agents built with Google Agent Development Kit (google-adk) and Gemini 2.5 Flash, running across terminal CLIs, web UIs, and REST APIs.',
    fullDescription: 'Production-ready autonomous AI agents designed with Google Agent Development Kit (google-adk) and Gemini 2.5 Flash. Utilizes programmatic Python execution (Runner, InMemorySessionService) and YAML schemas to deploy across terminal CLIs (adk run), web browsers (adk web), and REST APIs (adk api_server).',
    metrics: [
      { label: 'Agent Engine', value: 'Google ADK', subtext: 'Gemini 2.5 Flash' },
      { label: 'Targets', value: 'CLI, Web & REST', subtext: 'Multi-Target Deploy' },
      { label: 'Session Memory', value: 'Stateful', subtext: 'InMemorySessionService' },
    ],
    techStack: ['Python', 'google-adk', 'Gemini 2.5 Flash', 'YAML Schemas', 'Runner', 'InMemorySessionService', 'REST APIs'],
    githubUrl: 'https://github.com/Mohamedislamm',
    interactiveDemoType: 'google-adk',
    architectureDetails: {
      problem: 'AI agents often lack standardized tool calling, memory persistence, and multi-interface deployment.',
      solution: 'Employed Google ADK to standardize agent blueprints, tool definitions, and session state management.',
      keyInnovations: [
        'Programmatic Python execution with Runner and InMemorySessionService for multi-turn dialogue.',
        'Declarative YAML configuration schemas for clean, maintainable agent definitions.',
        'Unified deployment pipeline supporting adk run (CLI), adk web (Web UI), and adk api_server (REST).',
        'Gemini 2.5 Flash integration for fast reasoning and deterministic tool invocation.',
      ],
      performanceGains: 'Achieved sub-200ms tool execution with persistent conversational state.',
    },
    sampleCodeSnippet: {
      language: 'python',
      filename: 'adk_agent_service.py',
      code: `from google.adk.agents import Agent
from google.adk.runners import Runner
from google.adk.sessions import InMemorySessionService

agent = Agent(
    name="enterprise_analyst",
    model="gemini-2.5-flash",
    system_instruction="You are an autonomous research and workflow assistant.",
    tools=[fetch_records, execute_sql_query, calculate_metrics]
)

session_service = InMemorySessionService()
runner = Runner(agent=agent, session_service=session_service)
response = runner.run(session_id="user-session-101", prompt="Analyze Q3 variance")
`,
    },
  },
  {
    id: 'fullstack-task-tracker',
    title: 'Full-Stack Task Tracker & CLI',
    tagline: 'Decoupled web app with React/Vite frontend, Flask REST API, SQLite, and CLI automation.',
    year: '2026',
    category: 'Full-Stack & Web Apps',
    featured: true,
    badge: 'Full-Stack & CLI',
    shortDescription: 'Decoupled full-stack application featuring a 60 FPS React frontend (Vite), modular Flask REST backend, SQLite storage, and a python cli.py management tool.',
    fullDescription: 'A modern, modular task and workflow tracking system. Built with a fast React frontend with Tailwind CSS and a Python/Flask REST API backend with SQLite persistence. Includes a dedicated CLI utility (cli.py) for terminal-driven administrative operations.',
    metrics: [
      { label: 'Frontend', value: 'React + Vite', subtext: 'Tailwind CSS' },
      { label: 'Backend API', value: 'Flask REST', subtext: 'Modular Blueprints' },
      { label: 'Control Channels', value: 'Web + CLI', subtext: 'Dual Administration' },
    ],
    techStack: ['Python', 'Flask', 'React', 'Vite', 'SQLite', 'REST APIs', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Mohamedislamm',
    interactiveDemoType: 'task-tracker',
    architectureDetails: {
      problem: 'Teams need both graphical web dashboards and fast scriptable terminal tools.',
      solution: 'Built a decoupled architecture sharing unified SQLite data models between Flask endpoints and a standalone python cli.py tool.',
      keyInnovations: [
        'Modular architectural layers: isolated controllers, models, and service helpers.',
        'Custom cli.py for terminal power users to batch-manage tasks without browser overhead.',
        'Optimistic React state updates with background synchronization.',
        'Comprehensive REST API contracts with JSON input validation.',
      ],
      performanceGains: 'Zero-latency UI updates with <15ms REST API query execution.',
    },
    sampleCodeSnippet: {
      language: 'python',
      filename: 'cli.py',
      code: `import argparse
from models import Task, db_session

parser = argparse.ArgumentParser(description="Task Tracker CLI")
parser.add_argument("--add", help="Title of task to add")
parser.add_argument("--priority", choices=["low", "medium", "high"], default="medium")
parser.add_argument("--list", action="store_true", help="List all active tasks")

args = parser.parse_args()
if args.add:
    new_task = Task(title=args.add, priority=args.priority, status="pending")
    db_session.add(new_task)
    db_session.commit()
    print(f"Task created: ID #{new_task.id}")
`,
    },
  },
  {
    id: 'readit-library-system',
    title: 'ReadIT — Role-Based Library Platform',
    tagline: 'Django platform with role-based access control, ISBN cataloging, and automated lending workflows.',
    year: '2025',
    category: 'Full-Stack & Web Apps',
    featured: false,
    badge: 'Django RBAC',
    shortDescription: 'Django library management platform featuring dual-role authentication (Publishers vs Readers), ISBN cataloging, inventory counts, and automated lending lifecycles.',
    fullDescription: 'A scalable Django web application with role-based access control. Publishers manage book inventory, metadata, and circulation metrics, while Readers search catalogs, borrow books, and view reading histories with SQLite relational schema models.',
    metrics: [
      { label: 'Framework', value: 'Django MVT', subtext: 'RBAC Security' },
      { label: 'Database', value: 'SQLite Relational', subtext: 'Normalized Schemas' },
      { label: 'Role Matrix', value: 'Dual Role', subtext: 'Publishers & Readers' },
    ],
    techStack: ['Django', 'Python', 'SQLite', 'HTML5', 'CSS3', 'JavaScript', 'RBAC'],
    githubUrl: 'https://github.com/Mohamedislamm',
    interactiveDemoType: 'library-mgmt',
    architectureDetails: {
      problem: 'Traditional library software struggles with stock tracking, overdue calculations, and role separation.',
      solution: 'Engineered a Django system with custom user models, role middleware, and automated borrowing validations.',
      keyInnovations: [
        'Strict role-based permission decorators for publisher vs customer endpoints.',
        'Automated real-time inventory count decrementing and return validation.',
        'Dynamic search filtering across Title, Author, Genre, and ISBN index.',
        'Clean responsive UI for mobile and desktop devices.',
      ],
      performanceGains: 'Automated lending lifecycle with instant catalog search.',
    },
    sampleCodeSnippet: {
      language: 'python',
      filename: 'views.py',
      code: `from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404, redirect
from .models import Book, BorrowRecord

@login_required
def borrow_book(request, book_id):
    book = get_object_or_404(Book, id=book_id)
    if book.available_copies > 0 and request.user.profile.is_customer:
        book.available_copies -= 1
        book.save()
        BorrowRecord.objects.create(user=request.user, book=book)
        return redirect('my_borrowed_books')
    return render(request, 'error.html', {'message': 'Book unavailable'})
`,
    },
  },
  {
    id: 'tetris-ai-genetic-algo',
    title: 'Tetris AI — Genetic Algorithm Optimization',
    tagline: 'Autonomous AI gameplay optimization using heuristic evaluation and evolutionary algorithms.',
    year: '2024',
    category: 'ML, Data & Algorithms',
    featured: true,
    badge: 'Evolutionary AI',
    shortDescription: 'Autonomous Tetris AI using Genetic Algorithms to evolve optimal heuristic weights across board height, hole count, bumpiness, and cleared lines.',
    fullDescription: 'An autonomous Tetris agent using evolutionary computing in Python and NumPy. Formulates an evaluation function assessing prospective piece placements by computing aggregate column heights, holes, surface bumpiness, and line clears. Evolved weights clear over 10,000 continuous lines.',
    metrics: [
      { label: 'Continuous Play', value: '>10,000 Lines', subtext: 'Zero Human Help' },
      { label: 'Eval Latency', value: '<2.1ms / Drop', subtext: 'NumPy Vectorized' },
      { label: 'Convergence', value: 'Generation 45', subtext: 'Optimal Heuristic' },
    ],
    techStack: ['Python', 'NumPy', 'Genetic Algorithms', 'Heuristic Optimization'],
    githubUrl: 'https://github.com/Mohamedislamm',
    interactiveDemoType: 'tetris-ai',
    architectureDetails: {
      problem: 'Rule-based controllers for Tetris struggle because immediate line clears often create unfillable holes.',
      solution: 'Formulated a multi-variable heuristic fitness function and evolved weights using genetic population selection.',
      keyInnovations: [
        '4-parameter heuristic vector: [Aggregate Height, Holes, Bumpiness, Cleared Lines].',
        'Vectorized NumPy board simulation for high-speed parallel training.',
        'Adaptive mutation rate and elitism to prevent genetic drift.',
        'Real-time visualization of heuristic scoring and placement choices.',
      ],
      performanceGains: '300x line clear improvement over standard greedy heuristics.',
    },
    sampleCodeSnippet: {
      language: 'python',
      filename: 'tetris_genetic_agent.py',
      code: `import numpy as np

class TetrisAI:
    def __init__(self, weights=[-0.51, -0.36, -0.18, 0.76]):
        # [Aggregate Height, Holes, Bumpiness, Cleared Lines]
        self.weights = np.array(weights)

    def evaluate_board(self, board, cleared_lines):
        agg_height = self._get_aggregate_height(board)
        holes = self._get_holes_count(board)
        bumpiness = self._get_bumpiness(board)
        features = np.array([agg_height, holes, bumpiness, cleared_lines])
        return np.dot(self.weights, features)
`,
    },
  },
  {
    id: 'dart-tech-dedup-forecasting',
    title: 'Enterprise Deduplication & Time-Series Forecasting',
    tagline: 'DBSCAN clustering + RAG deduplication pipeline and Prophet forecasting for enterprise datasets.',
    year: '2025',
    category: 'Enterprise & Systems',
    featured: false,
    badge: 'Industry Experience',
    shortDescription: 'AI-powered deduplication pipeline combining DBSCAN clustering with RAG semantic verification, alongside Prophet time-series models for enterprise business metric forecasting.',
    fullDescription: 'Engineered during my AI & Data Science internship at DART Technology. Designed a two-stage deduplication pipeline: DBSCAN unsupervised spatial clustering for candidate grouping, followed by RAG vector embeddings to confirm matches and assign unified identifiers. Built seasonal forecasting models using Facebook Prophet and Exponential Smoothing.',
    metrics: [
      { label: 'Precision', value: '98.4%', subtext: 'DBSCAN + RAG' },
      { label: 'Forecasting', value: 'Prophet + Holt-Winters', subtext: 'Time-Series' },
      { label: 'Speedup', value: '4.2x Faster', subtext: 'Vectorized Batch' },
    ],
    techStack: ['Python', 'DBSCAN', 'RAG', 'Prophet', 'Scikit-learn', 'Pandas', 'NumPy', 'LangChain'],
    githubUrl: 'https://github.com/Mohamedislamm',
    interactiveDemoType: 'dbscan-forecasting',
    architectureDetails: {
      problem: 'Enterprise databases contain duplicate noisy records, and business teams lacked multi-month trend forecasts.',
      solution: 'Implemented hybrid DBSCAN clustering with semantic RAG embeddings for deduplication, plus automated Prophet time-series forecasting.',
      keyInnovations: [
        'Two-stage pipeline: fast DBSCAN clustering followed by RAG vector similarity verification.',
        'Automated unified ID assignment resolving multi-table data fragmentation.',
        'Time-series forecasting with seasonal decomposition using Prophet.',
        'Seamless integration into production pandas and scikit-learn pipelines.',
      ],
      performanceGains: 'Eliminated duplicate records by 98.4% with validated quarterly forecasts.',
    },
    sampleCodeSnippet: {
      language: 'python',
      filename: 'dedup_pipeline.py',
      code: `import pandas as pd
from sklearn.cluster import DBSCAN
from langchain.embeddings import OpenAIEmbeddings

def deduplicate_records(df, eps=0.25, min_samples=2):
    embeddings = generate_vector_embeddings(df['record_text'].tolist())
    clustering = DBSCAN(eps=eps, min_samples=min_samples, metric='cosine')
    df['cluster_id'] = clustering.fit_predict(embeddings)
    return assign_unified_identifiers(df)
`,
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI, Machine Learning & Agentic Systems',
    description: 'Autonomous agents, RAG retrieval pipelines, LLM APIs, and ML models.',
    iconName: 'Cpu',
    skills: [
      { name: 'Google Agent Dev Kit (google-adk)', level: 'Core', context: 'Multi-target agents with Runner & InMemorySessionService', category: 'AI' },
      { name: 'Claude 3.5 Sonnet Computer Use API', level: 'Core', context: 'Autonomous desktop GUI action automation', category: 'AI' },
      { name: 'RAG & Vector Retrieval', level: 'Core', context: 'Semantic retrieval, FAISS, LangChain pipelines', category: 'AI' },
      { name: 'LangChain & Agentic Workflows', level: 'Core', context: 'Chaining tools, memory states, multi-step agents', category: 'AI' },
      { name: 'DBSCAN & Clustering', level: 'Advanced', context: 'Unsupervised spatial clustering for record deduplication', category: 'AI' },
      { name: 'Prophet & Time-Series', level: 'Advanced', context: 'Trend forecasting, Exponential Smoothing, Statsmodels', category: 'AI' },
      { name: 'Scikit-learn, Pandas & NumPy', level: 'Core', context: 'Data preprocessing, feature engineering & modeling', category: 'AI' },
      { name: 'Genetic Algorithms', level: 'Advanced', context: 'Heuristic optimization, mutation & tournament selection', category: 'AI' },
      { name: 'Linear Regression & Classification', level: 'Core', context: 'Supervised predictive modeling & evaluation metrics', category: 'AI' },
    ],
  },
  {
    title: 'Frontend & Interactive Web Engineering',
    description: 'Responsive, component-driven UI, state management, and modern developer tooling.',
    iconName: 'Code2',
    skills: [
      { name: 'React 19 / 18', level: 'Core', context: 'Hooks, reactive state, custom UI libraries, 60 FPS', category: 'Frontend' },
      { name: 'Next.js', level: 'Advanced', context: 'Server-side rendering, routing & API handlers', category: 'Frontend' },
      { name: 'TypeScript & JavaScript', level: 'Core', context: 'Strict typing, async/await, modular design', category: 'Frontend' },
      { name: 'Tailwind CSS', level: 'Core', context: 'Utility-first modern layouts, design tokens & dark themes', category: 'Frontend' },
      { name: 'Vite & Build Tooling', level: 'Core', context: 'Fast HMR, optimized production bundles', category: 'Frontend' },
      { name: 'Electron', level: 'Advanced', context: 'Desktop wrapper development with IPC communication', category: 'Frontend' },
      { name: 'HTML5 & Responsive CSS3', level: 'Core', context: 'Accessible semantics, Flexbox & CSS Grid', category: 'Frontend' },
    ],
  },
  {
    title: 'Backend, Microservices & Databases',
    description: 'High-throughput APIs, modular route blueprints, and persistent relational stores.',
    iconName: 'Server',
    skills: [
      { name: 'FastAPI', level: 'Core', context: 'Asynchronous Python endpoints, Pydantic validation', category: 'Backend' },
      { name: 'Django', level: 'Core', context: 'MVT architecture, ORM, RBAC & custom user models', category: 'Backend' },
      { name: 'Flask', level: 'Core', context: 'Decoupled REST APIs, CLI integration, modular blueprints', category: 'Backend' },
      { name: 'RESTful API Design', level: 'Core', context: 'Clean contracts, JSON payload validation, status codes', category: 'Backend' },
      { name: 'SQLite', level: 'Core', context: 'Embedded database architecture, migrations & indexing', category: 'Backend' },
      { name: 'MySQL & MS SQL Server', level: 'Advanced', context: 'Complex queries, relational schemas & constraints', category: 'Backend' },
      { name: 'Oracle Cloud Foundations', level: 'Proficient', context: 'Cloud infrastructure & foundational services', category: 'Backend' },
    ],
  },
  {
    title: 'Programming Languages & Systems',
    description: 'Multi-paradigm languages, system-level concepts, and developer workflows.',
    iconName: 'Terminal',
    skills: [
      { name: 'Python', level: 'Core', context: 'Primary language for AI, Data Science & Backend', category: 'Languages' },
      { name: 'SQL', level: 'Core', context: 'Relational data query, aggregations & joins', category: 'Languages' },
      { name: 'C / C++', level: 'Advanced', context: 'Data structures, algorithms & memory principles', category: 'Languages' },
      { name: 'Java', level: 'Advanced', context: 'Object-oriented software development & patterns', category: 'Languages' },
      { name: 'Go (Golang)', level: 'Proficient', context: 'Concurrency, goroutines & performant services', category: 'Languages' },
      { name: 'MATLAB', level: 'Proficient', context: 'Numerical computing & mathematical simulations', category: 'Languages' },
      { name: 'Docker', level: 'Core', context: 'Containerization, sandbox environments & deployments', category: 'Languages' },
      { name: 'Git & GitHub', level: 'Core', context: 'Version control, branch workflows & code review', category: 'Languages' },
      { name: 'Postman & VS Code', level: 'Core', context: 'API testing, debugging & developer productivity', category: 'Languages' },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'dart-tech',
    role: 'AI & Data Science Intern',
    company: 'DART Technology',
    location: 'Giza, Egypt',
    period: '09/2025 – 10/2025',
    type: 'Internship',
    logoText: 'DART',
    highlights: [
      'Engineered an AI-powered deduplication pipeline with DBSCAN clustering and RAG semantic verification for enterprise records.',
      'Constructed time-series forecasting models using Prophet and Exponential Smoothing to predict seasonal business metrics.',
      'Collaborated with senior engineers to deploy machine learning models directly into production workflows.',
    ],
    skills: ['Python', 'DBSCAN', 'RAG', 'Prophet', 'Exponential Smoothing', 'Scikit-learn', 'Pandas'],
  },
  {
    id: 'faisal-bank',
    role: 'IT Specialist Intern',
    company: 'Faisal Islamic Bank',
    location: 'Giza, Egypt',
    period: '08/2024 – 09/2024',
    type: 'Internship',
    logoText: 'FIB',
    highlights: [
      'Maintained enterprise banking IT infrastructure, workstation support, and networking systems.',
      'Troubleshot hardware, software, and connectivity issues under strict banking security standards.',
    ],
    skills: ['IT Operations', 'Networking', 'Cybersecurity', 'Infrastructure Support', 'Troubleshooting'],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'google-adk-cert',
    title: 'Building AI Agents with ADK',
    issuer: 'Google Skills',
    period: '2026',
    description: 'Designed and deployed autonomous AI agents with Google Agent Development Kit and Gemini 2.5 Flash across CLI, Web UI, and REST APIs.',
    skills: ['google-adk', 'Gemini 2.5 Flash', 'Agentic Workflows', 'Runner', 'YAML Schemas'],
    credentialBadge: 'Google Certified',
  },
  {
    id: 'zewail-ai-cert',
    title: 'Studying AI and its Applications',
    issuer: 'Impact - Zewail City for Science and Technology',
    period: '03/2023 – 11/2024',
    description: 'Theoretical foundations in machine learning paradigms and applied software systems.',
    skills: ['Machine Learning', 'Deep Learning', 'Applied AI Systems'],
    credentialBadge: 'Zewail City Certified',
  },
  {
    id: 'zewail-pm-cert',
    title: 'Project Management',
    issuer: 'Impact - Zewail City for Science and Technology',
    period: '08/2023 – 11/2024',
    description: 'Agile and Waterfall methodologies, software project lifecycles, and risk mitigation.',
    skills: ['Agile / Scrum', 'Waterfall', 'Risk Management'],
    credentialBadge: 'Zewail City Certified',
  },
  {
    id: 'cbe-cert',
    title: 'Training for IT Specialist Employment',
    issuer: 'Central Bank of Egypt',
    period: '08/2024 – 09/2024',
    description: 'Banking IT operations, cybersecurity protocols, and enterprise infrastructure management.',
    skills: ['Banking IT', 'Cybersecurity', 'Enterprise Infrastructure'],
    credentialBadge: 'Central Bank of Egypt',
  },
];

export const EDUCATION = {
  degree: "Bachelor's Degree in Artificial Intelligence",
  faculty: 'Faculty of Computers and Artificial Intelligence',
  institution: 'Cairo University',
  location: 'Giza, Egypt',
  period: '2022 – 2026',
  relevantCoursework: [
    'Machine Learning',
    'Deep Learning',
    'NLP',
    'Information Retrieval',
    'Algorithms & Data Structures',
    'Software Engineering',
    'Operating Systems',
    'Databases',
  ],
  extracurricular: 'BAZARNA Pop-Up Society — Volunteer Helper (05/2024 – 09/2025)',
};
