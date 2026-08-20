import React, { useState } from 'react';
import { SHOWCASE_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { motion } from 'framer-motion';
import { 
  Search, 
  Github, 
  ExternalLink, 
  Zap, 
  Bot, 
  Code2, 
  Cpu, 
  Server, 
  Layers, 
  Play, 
  Terminal, 
  CheckCircle2, 
  Sliders, 
  RefreshCw, 
  ArrowRight,
  Check,
  Eye
} from 'lucide-react';

interface ShowcaseLibraryProps {
  onSelectProject: (project: Project) => void;
  recruiterMode: boolean;
}

export const ShowcaseLibrary: React.FC<ShowcaseLibraryProps> = ({ onSelectProject, recruiterMode }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'lab'>('grid');

  // Interactive State for Lab Simulators
  const [activeLabProject, setActiveLabProject] = useState<string>('notive-computer-use');

  // 1. Notive Simulator State
  const [notiveTask, setNotiveTask] = useState('Extract invoice totals from desktop PDF and append to Excel spreadsheet');
  const [notiveRunning, setNotiveRunning] = useState(false);
  const [notiveSteps, setNotiveSteps] = useState<Array<{ step: number; action: string; target: string; status: string }>>([
    { step: 1, action: 'Screen Perception', target: 'Captured 1920x1080 desktop frame', status: 'done' },
    { step: 2, action: 'Claude 3.5 Sonnet CUA', target: 'Computed click coordinates (x: 420, y: 310)', status: 'done' },
    { step: 3, action: 'Docker Sandbox', target: 'Isolated keystroke dispatch [Ctrl+P]', status: 'done' },
  ]);

  // 2. Google ADK Simulator State
  const [adkTarget, setAdkTarget] = useState<'cli' | 'web' | 'api'>('cli');
  const [adkPrompt, setAdkPrompt] = useState('Analyze monthly revenue metrics and summarize top growth sectors');
  const [adkResult, setAdkResult] = useState<string | null>(null);
  const [adkRunning, setAdkRunning] = useState(false);

  // 3. Tetris AI Simulator State
  const [tetrisWeights, setTetrisWeights] = useState({
    height: -0.51,
    holes: -0.36,
    bumpiness: -0.18,
    lines: 0.76,
  });

  // 4. Task Tracker Simulator State
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Deploy FastAPI service with Docker', priority: 'high', done: true },
    { id: 2, title: 'Optimize DBSCAN clustering epsilon value', priority: 'medium', done: false },
    { id: 3, title: 'Configure Google ADK InMemorySessionService', priority: 'high', done: false },
  ]);
  const [newTaskInput, setNewTaskInput] = useState('');
  const [taskViewType, setTaskViewType] = useState<'ui' | 'cli'>('ui');

  // 5. ReadIT Library Simulator State
  const [libraryRole, setLibraryRole] = useState<'customer' | 'publisher'>('customer');
  const [books, setBooks] = useState([
    { id: '1', title: 'Hands-On Machine Learning', author: 'Aurélien Géron', copies: 3, borrowed: false },
    { id: '2', title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', copies: 1, borrowed: true },
    { id: '3', title: 'Deep Learning with Python', author: 'François Chollet', copies: 5, borrowed: false },
  ]);

  // 6. DBSCAN & Forecasting State
  const [dbscanEps, setDbscanEps] = useState<number>(0.25);

  const categories = [
    'All',
    'Autonomous AI & Agents',
    'Full-Stack & Web Apps',
    'ML, Data & Algorithms',
    'Enterprise & Systems',
  ];

  const filteredProjects = SHOWCASE_PROJECTS.filter((p) => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      p.title.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.techStack.some((t) => t.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  const runNotiveSimulation = () => {
    setNotiveRunning(true);
    setTimeout(() => {
      setNotiveSteps([
        { step: 1, action: 'Perception Scan', target: 'Parsed desktop window hierarchy via Claude 3.5 Sonnet', status: 'done' },
        { step: 2, action: 'Coordinate Mapping', target: 'Located target PDF button at (x: 512, y: 280)', status: 'done' },
        { step: 3, action: 'Docker Emulation', target: 'Dispatched simulated mouse click inside container', status: 'done' },
        { step: 4, action: 'Data Extraction', target: 'Extracted 14 invoice rows into structured JSON', status: 'done' },
        { step: 5, action: 'Completion', target: 'Appended records to Excel target table with 0 errors', status: 'done' },
      ]);
      setNotiveRunning(false);
    }, 700);
  };

  const runAdkSimulation = () => {
    setAdkRunning(true);
    setAdkResult(null);
    setTimeout(() => {
      setAdkRunning(false);
      if (adkTarget === 'cli') {
        setAdkResult(`[adk run] Initialized Runner with Gemini 2.5 Flash
Session ID: sess-2026-cairo-09
> Calling Tool: 'fetch_enterprise_metrics(year=2026)'
> Output: Identified 38.5% YoY revenue growth in Cloud & AI services.
> InMemorySessionService updated: 4 turns recorded.`);
      } else if (adkTarget === 'web') {
        setAdkResult(`[adk web] UI Session Active on port 8080.
Agent Response: "Based on the verified financial records, Cloud & AI services generated $4.2M in Q3 with an operating margin of 31.4%."`);
      } else {
        setAdkResult(`[adk api_server] POST /api/v1/agent/execute - 200 OK (184ms)
{
  "status": "success",
  "model": "gemini-2.5-flash",
  "tool_calls_executed": 1,
  "response": "Identified 38.5% YoY revenue expansion in Cloud & AI."
}`);
      }
    }, 500);
  };

  const handleToggleTask = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskInput.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: newTaskInput.trim(), priority: 'medium', done: false }]);
    setNewTaskInput('');
  };

  return (
    <section id="library" className="py-16 md:py-24 border-b border-[#2e3646] bg-[#0f1117]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header & View Toggle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-5 border-b border-[#2e3646] pb-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-xl bg-[#161922] border border-[#2e3646] px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white mb-2.5 shadow">
              <Code2 className="h-3.5 w-3.5 text-zinc-300" />
              <span>Engineering Library & Sandbox</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Project Showcase & Lab
            </h2>
            <p className="text-sm text-zinc-400 mt-1 max-w-2xl leading-relaxed">
              Explore 6 flagship projects built with autonomous AI agents, React, Python FastAPI, and vector pipelines.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => setViewMode('grid')}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold font-mono transition-all border cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-white text-zinc-950 border-white shadow-md'
                  : 'bg-[#161922] border-[#2e3646] text-zinc-300 hover:border-zinc-400 hover:text-white'
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              <span>Grid View</span>
            </button>
            <button
              onClick={() => setViewMode('lab')}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold font-mono transition-all border cursor-pointer ${
                viewMode === 'lab'
                  ? 'bg-white text-zinc-950 border-white shadow-md'
                  : 'bg-[#161922] border-[#2e3646] text-zinc-300 hover:border-zinc-400 hover:text-white'
              }`}
            >
              <Play className="h-3.5 w-3.5" />
              <span>Interactive Simulators</span>
            </button>
          </div>
        </motion.div>

        {/* Filters & Search (Grid Mode Only) */}
        {viewMode === 'grid' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
              
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-xl px-4 py-2 text-xs font-mono transition-all border cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-white text-zinc-950 border-white font-bold shadow'
                        : 'bg-[#161922] border-[#2e3646] text-zinc-400 hover:text-white hover:border-zinc-400'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative min-w-[280px]">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search tech, title, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl bg-[#12141c] border border-[#2e3646] pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors font-mono shadow-inner"
                />
              </div>

            </div>
          </motion.div>
        )}

        {/* GRID VIEW MODE */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="card-editorial p-6 sm:p-7 flex flex-col justify-between group cursor-pointer shadow-lg hover:border-zinc-400"
                onClick={() => onSelectProject(project)}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-300 bg-[#12141c] px-2.5 py-1 rounded-lg border border-[#2e3646]">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-white bg-[#12141c] px-2.5 py-1 rounded-lg border border-[#2e3646]">
                      {project.year}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-white group-hover:text-zinc-200 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono bg-[#12141c] text-zinc-300 px-2.5 py-1 rounded-md border border-[#2e3646]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[10px] font-mono text-zinc-500 px-1 py-1">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#2e3646] flex items-center justify-between text-xs font-mono">
                  <span className="inline-flex items-center gap-1.5 text-zinc-300 font-bold group-hover:text-white">
                    <Eye className="h-3.5 w-3.5 text-zinc-400" />
                    <span>View Details</span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-zinc-400 group-hover:translate-x-1 group-hover:text-white transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* INTERACTIVE SIMULATORS (LAB) VIEW MODE */}
        {viewMode === 'lab' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            
            {/* Lab Project Switcher */}
            <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-[#2e3646]">
              <span className="text-xs font-mono text-zinc-400 uppercase mr-2 font-bold">Simulator:</span>
              {[
                { id: 'notive-computer-use', label: 'Notive AI Agent' },
                { id: 'google-adk-agents', label: 'Google ADK Agent' },
                { id: 'tetris-ai', label: 'Tetris AI Heuristic' },
                { id: 'fullstack-task-tracker', label: 'Task Tracker CLI' },
                { id: 'readit-library', label: 'ReadIT Library System' },
                { id: 'dbscan-rag', label: 'DART Deduplication & RAG' },
              ].map((lab) => (
                <button
                  key={lab.id}
                  onClick={() => setActiveLabProject(lab.id)}
                  className={`rounded-xl px-4 py-2 text-xs font-mono font-bold transition-all border cursor-pointer ${
                    activeLabProject === lab.id
                      ? 'bg-white text-zinc-950 border-white shadow'
                      : 'bg-[#161922] border-[#2e3646] text-zinc-400 hover:text-white hover:border-zinc-400'
                  }`}
                >
                  {lab.label}
                </button>
              ))}
            </div>

            {/* SIMULATOR 1: NOTIVE COMPUTER USE AGENT */}
            {activeLabProject === 'notive-computer-use' && (
              <div className="card-editorial p-6 sm:p-8 space-y-6 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#2e3646] pb-5">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">Autonomous Agent Sandbox</span>
                    <h3 className="text-lg font-black text-white">Notive — Claude 3.5 Sonnet Computer Use Agent</h3>
                    <p className="text-xs text-zinc-400 mt-1">Test natural language desktop instructions executed inside sandboxed Docker containers.</p>
                  </div>
                  <button
                    onClick={runNotiveSimulation}
                    disabled={notiveRunning}
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-black font-mono text-zinc-950 hover:bg-zinc-200 transition-colors disabled:opacity-50 cursor-pointer shadow"
                  >
                    {notiveRunning ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
                    <span>{notiveRunning ? 'Executing Agent Loop...' : 'Run Desktop Agent'}</span>
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5 font-bold">Desktop Workflow Instruction</label>
                    <input
                      type="text"
                      value={notiveTask}
                      onChange={(e) => setNotiveTask(e.target.value)}
                      className="w-full rounded-xl bg-[#12141c] border border-[#2e3646] px-4 py-3 text-xs text-white focus:outline-none focus:border-zinc-400 font-mono shadow-inner"
                    />
                  </div>

                  <div className="rounded-xl bg-[#12141c] border border-[#2e3646] p-5 font-mono text-xs space-y-3 shadow-inner">
                    <div className="flex items-center justify-between border-b border-[#2e3646] pb-2.5 text-[11px] text-zinc-400 font-bold">
                      <span>STEP LOGS (DOCKER SANDBOX)</span>
                      <span>STATUS: {notiveRunning ? 'RUNNING' : 'COMPLETED'}</span>
                    </div>
                    {notiveSteps.map((st) => (
                      <div key={st.step} className="flex items-start gap-3 py-1">
                        <span className="text-zinc-500 font-bold">[{st.step}]</span>
                        <div className="flex-1">
                          <span className="text-white font-bold">{st.action}:</span>{' '}
                          <span className="text-zinc-300">{st.target}</span>
                        </div>
                        <span className="text-zinc-300 text-[10px] bg-[#161922] px-2.5 py-0.5 rounded border border-[#2e3646] font-bold">
                          {st.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SIMULATOR 2: GOOGLE ADK AGENTS */}
            {activeLabProject === 'google-adk-agents' && (
              <div className="card-editorial p-6 sm:p-8 space-y-6 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#2e3646] pb-5">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">Google Agent Development Kit</span>
                    <h3 className="text-lg font-black text-white">Gemini 2.5 Flash Autonomous Agent</h3>
                    <p className="text-xs text-zinc-400 mt-1">Configure and deploy multi-target agents across CLI, Web, and REST endpoints.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {(['cli', 'web', 'api'] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setAdkTarget(t)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-mono uppercase font-bold transition-all border cursor-pointer ${
                          adkTarget === t
                            ? 'bg-white text-zinc-950 border-white shadow'
                            : 'bg-[#12141c] border-[#2e3646] text-zinc-400 hover:text-white'
                        }`}
                      >
                        adk {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={adkPrompt}
                      onChange={(e) => setAdkPrompt(e.target.value)}
                      className="flex-1 rounded-xl bg-[#12141c] border border-[#2e3646] px-4 py-3 text-xs text-white focus:outline-none focus:border-zinc-400 font-mono shadow-inner"
                    />
                    <button
                      onClick={runAdkSimulation}
                      disabled={adkRunning}
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-black font-mono text-zinc-950 hover:bg-zinc-200 transition-colors disabled:opacity-50 shrink-0 cursor-pointer shadow"
                    >
                      {adkRunning ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
                      <span>Execute Agent</span>
                    </button>
                  </div>

                  {adkResult && (
                    <div className="rounded-xl bg-[#12141c] border border-[#2e3646] p-5 font-mono text-xs text-zinc-200 whitespace-pre-wrap leading-relaxed shadow-inner">
                      {adkResult}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* SIMULATOR 3: TETRIS AI HEURISTIC */}
            {activeLabProject === 'tetris-ai' && (
              <div className="card-editorial p-6 sm:p-8 space-y-6 shadow-xl">
                <div className="border-b border-[#2e3646] pb-5">
                  <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">Machine Learning & Search Algorithms</span>
                  <h3 className="text-lg font-black text-white">Tetris AI Heuristic Optimization Simulator</h3>
                  <p className="text-xs text-zinc-400 mt-1">Tune genetic algorithm heuristic weights to evaluate board states and maximize cleared lines.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1 font-bold text-zinc-300">
                        <span>Aggregate Height Weight:</span>
                        <span>{tetrisWeights.height}</span>
                      </div>
                      <input
                        type="range"
                        min="-1"
                        max="0"
                        step="0.01"
                        value={tetrisWeights.height}
                        onChange={(e) => setTetrisWeights({ ...tetrisWeights, height: parseFloat(e.target.value) })}
                        className="w-full accent-white cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1 font-bold text-zinc-300">
                        <span>Holes Penalty Weight:</span>
                        <span>{tetrisWeights.holes}</span>
                      </div>
                      <input
                        type="range"
                        min="-1"
                        max="0"
                        step="0.01"
                        value={tetrisWeights.holes}
                        onChange={(e) => setTetrisWeights({ ...tetrisWeights, holes: parseFloat(e.target.value) })}
                        className="w-full accent-white cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1 font-bold text-zinc-300">
                        <span>Cleared Lines Reward:</span>
                        <span>{tetrisWeights.lines}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="2"
                        step="0.01"
                        value={tetrisWeights.lines}
                        onChange={(e) => setTetrisWeights({ ...tetrisWeights, lines: parseFloat(e.target.value) })}
                        className="w-full accent-white cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="rounded-xl bg-[#12141c] border border-[#2e3646] p-5 flex flex-col justify-between font-mono text-xs space-y-4 shadow-inner">
                    <div>
                      <span className="text-zinc-400 block mb-2 font-bold uppercase tracking-wider text-[10px]">Heuristic Evaluation Metrics</span>
                      <div className="space-y-2 text-zinc-300">
                        <div className="flex justify-between">
                          <span>Board Stability Score:</span>
                          <span className="text-white font-bold">98.4%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Avg Lines per Game:</span>
                          <span className="text-white font-bold">142.8</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Fitness Optimizer:</span>
                          <span className="text-emerald-400 font-bold">Converged</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-[11px] text-zinc-400 border-t border-[#2e3646] pt-3">
                      Formula: Score = (Lines * {tetrisWeights.lines}) + (Height * {tetrisWeights.height}) + (Holes * {tetrisWeights.holes})
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SIMULATOR 4: FULL-STACK TASK TRACKER */}
            {activeLabProject === 'fullstack-task-tracker' && (
              <div className="card-editorial p-6 sm:p-8 space-y-6 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#2e3646] pb-5">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">Full-Stack React & Flask App</span>
                    <h3 className="text-lg font-black text-white">Task Management & CLI Sync</h3>
                    <p className="text-xs text-zinc-400 mt-1">Manage tasks via React Web UI or inspect backend CLI commands.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setTaskViewType('ui')}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border cursor-pointer ${
                        taskViewType === 'ui' ? 'bg-white text-zinc-950 border-white shadow' : 'bg-[#12141c] border-[#2e3646] text-zinc-400 hover:text-white'
                      }`}
                    >
                      Web UI View
                    </button>
                    <button
                      onClick={() => setTaskViewType('cli')}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border cursor-pointer ${
                        taskViewType === 'cli' ? 'bg-white text-zinc-950 border-white shadow' : 'bg-[#12141c] border-[#2e3646] text-zinc-400 hover:text-white'
                      }`}
                    >
                      cli.py View
                    </button>
                  </div>
                </div>

                {taskViewType === 'ui' ? (
                  <div className="space-y-4">
                    <form onSubmit={handleAddTask} className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Add new task..."
                        value={newTaskInput}
                        onChange={(e) => setNewTaskInput(e.target.value)}
                        className="flex-1 rounded-xl bg-[#12141c] border border-[#2e3646] px-4 py-3 text-xs text-white focus:outline-none focus:border-zinc-400 shadow-inner"
                      />
                      <button
                        type="submit"
                        className="rounded-xl bg-white px-5 py-3 text-xs font-black font-mono text-zinc-950 hover:bg-zinc-200 transition-colors shrink-0 shadow cursor-pointer"
                      >
                        Add Task
                      </button>
                    </form>

                    <div className="space-y-2.5">
                      {tasks.map((t) => (
                        <div
                          key={t.id}
                          onClick={() => handleToggleTask(t.id)}
                          className="flex items-center justify-between p-4 rounded-xl bg-[#12141c] border border-[#2e3646] cursor-pointer hover:border-zinc-400 transition-colors shadow-sm"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`h-4 w-4 rounded flex items-center justify-center border ${t.done ? 'bg-white border-white text-zinc-950 font-bold' : 'border-zinc-500'}`}>
                              {t.done && <Check className="h-3 w-3 stroke-[3]" />}
                            </div>
                            <span className={`text-xs ${t.done ? 'line-through text-zinc-500' : 'text-white font-bold'}`}>
                              {t.title}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono uppercase bg-[#161922] px-2.5 py-1 rounded border border-[#2e3646] text-zinc-300 font-bold">
                            {t.priority}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl bg-[#12141c] border border-[#2e3646] p-5 font-mono text-xs text-zinc-300 space-y-2 shadow-inner">
                    <div className="text-zinc-500 border-b border-[#2e3646] pb-2 mb-2">$ python cli.py --list-tasks</div>
                    <div>ID | Title                                   | Priority | Status</div>
                    <div>----------------------------------------------------------------</div>
                    {tasks.map((t) => (
                      <div key={t.id}>
                        {t.id.toString().slice(-3)} | {t.title.padEnd(40)} | {t.priority.padEnd(8)} | {t.done ? 'DONE' : 'PENDING'}
                      </div>
                    ))}
                    <div className="text-zinc-500 pt-2 border-t border-[#2e3646]">$ python cli.py --add "Review pull request" --priority high</div>
                    <div className="text-white font-bold">Success: Task persisted to SQLite database.</div>
                  </div>
                )}
              </div>
            )}

            {/* SIMULATOR 5: READIT LIBRARY SYSTEM */}
            {activeLabProject === 'readit-library' && (
              <div className="card-editorial p-6 sm:p-8 space-y-6 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#2e3646] pb-5">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">Role-Based System</span>
                    <h3 className="text-lg font-black text-white">ReadIT Library Management System</h3>
                    <p className="text-xs text-zinc-400 mt-1">Switch roles to test Publisher stock management and Reader borrowing workflows.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {(['customer', 'publisher'] as const).map((r) => (
                      <button
                        key={r}
                        onClick={() => setLibraryRole(r)}
                        className={`px-4 py-2 rounded-xl text-xs font-mono font-bold capitalize transition-all border cursor-pointer ${
                          libraryRole === r ? 'bg-white text-zinc-950 border-white shadow' : 'bg-[#12141c] border-[#2e3646] text-zinc-400 hover:text-white'
                        }`}
                      >
                        Role: {r}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  {books.map((b) => (
                    <div key={b.id} className="flex items-center justify-between p-4 rounded-xl bg-[#12141c] border border-[#2e3646] shadow-sm">
                      <div>
                        <h4 className="text-sm font-bold text-white">{b.title}</h4>
                        <p className="text-xs text-zinc-400 font-mono">Author: {b.author} • Available: {b.copies}</p>
                      </div>
                      <div>
                        {libraryRole === 'customer' ? (
                          <button
                            onClick={() => {
                              setBooks(books.map((bk) => (bk.id === b.id ? { ...bk, copies: bk.borrowed ? bk.copies + 1 : Math.max(0, bk.copies - 1), borrowed: !bk.borrowed } : bk)));
                            }}
                            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-colors shadow cursor-pointer ${
                              b.borrowed ? 'bg-[#161922] text-zinc-300 border border-[#2e3646]' : 'bg-white text-zinc-950'
                            }`}
                          >
                            {b.borrowed ? 'Return Book' : 'Borrow Book'}
                          </button>
                        ) : (
                          <span className="text-xs font-mono text-white bg-[#161922] px-3 py-1.5 rounded-lg border border-[#2e3646] font-bold">
                            Stock: {b.copies}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SIMULATOR 6: DBSCAN & RAG */}
            {activeLabProject === 'dbscan-rag' && (
              <div className="card-editorial p-6 sm:p-8 space-y-6 shadow-xl">
                <div className="border-b border-[#2e3646] pb-5">
                  <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">DART Tech Data Deduplication</span>
                  <h3 className="text-lg font-black text-white">DBSCAN Clustering & Vector RAG Pipeline</h3>
                  <p className="text-xs text-zinc-400 mt-1">Adjust epsilon neighborhood threshold to observe clustering density and vector deduplication rates.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1 font-bold text-zinc-300">
                        <span>DBSCAN Epsilon (Eps):</span>
                        <span>{dbscanEps}</span>
                      </div>
                      <input
                        type="range"
                        min="0.05"
                        max="0.80"
                        step="0.01"
                        value={dbscanEps}
                        onChange={(e) => setDbscanEps(parseFloat(e.target.value))}
                        className="w-full accent-white cursor-pointer"
                      />
                    </div>
                    <div className="rounded-xl bg-[#12141c] border border-[#2e3646] p-4 text-xs font-mono text-zinc-400 space-y-1 shadow-inner">
                      <div>Algorithm: DBSCAN + Cosine Similarity</div>
                      <div>Target Dataset: Enterprise Records (N=10,000)</div>
                      <div>Vector Embedding Model: text-embedding-004</div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-[#12141c] border border-[#2e3646] p-5 flex flex-col justify-between font-mono text-xs space-y-4 shadow-inner">
                    <div>
                      <span className="text-zinc-400 block mb-2 font-bold uppercase tracking-wider text-[10px]">Cluster Metrics Output</span>
                      <div className="space-y-2 text-zinc-300">
                        <div className="flex justify-between">
                          <span>Identified Clusters:</span>
                          <span className="text-white font-bold">{Math.round(45 * (1 / dbscanEps))}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Noise / Outliers Detected:</span>
                          <span className="text-white font-bold">{Math.round(120 * dbscanEps)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Deduplication Efficiency:</span>
                          <span className="text-emerald-400 font-bold">99.2%</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-[11px] text-zinc-400 border-t border-[#2e3646] pt-3">
                      Status: Optimized for sub-second retrieval latency in RAG pipelines.
                    </div>
                  </div>
                </div>
              </div>
            )}

          </motion.div>
        )}

      </div>
    </section>
  );
};
