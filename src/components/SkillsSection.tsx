import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Cpu, Code2, Server, Terminal, Search, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterTabs = [
    'All',
    'AI, Machine Learning & Agentic Systems',
    'Frontend & Interactive Web Engineering',
    'Backend, Microservices & Databases',
    'Programming Languages & Systems',
  ];

  const filteredCategories = SKILL_CATEGORIES.map((category) => {
    if (activeFilter !== 'All' && category.title !== activeFilter) {
      return { ...category, skills: [] };
    }

    const filteredSkills = category.skills.filter((skill) => {
      const q = searchQuery.toLowerCase();
      return (
        skill.name.toLowerCase().includes(q) ||
        skill.context.toLowerCase().includes(q) ||
        skill.level.toLowerCase().includes(q)
      );
    });

    return {
      ...category,
      skills: filteredSkills,
    };
  }).filter((cat) => cat.skills.length > 0);

  const getCategoryIcon = (title: string) => {
    if (title.includes('AI')) return <Cpu className="h-5 w-5 text-white" />;
    if (title.includes('Frontend')) return <Code2 className="h-5 w-5 text-white" />;
    if (title.includes('Backend')) return <Server className="h-5 w-5 text-white" />;
    return <Terminal className="h-5 w-5 text-white" />;
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-[#2e3646] bg-[#0f1117] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-5 pb-4 border-b border-[#2e3646]"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-xl bg-[#161922] border border-[#2e3646] px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white mb-2.5 shadow">
              <Sparkles className="h-3.5 w-3.5 text-zinc-300" />
              <span>Full Stack & AI Arsenal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Skills & Technical Stack
            </h2>
            <p className="text-sm text-zinc-400 mt-1 max-w-2xl leading-relaxed">
              Agent architectures, vector pipelines, machine learning models, and modern full-stack developer tools.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Filter skills (e.g. Python, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl bg-[#12141c] border border-[#2e3646] pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-zinc-400 focus:outline-none transition-all font-mono shadow-inner"
            />
          </div>
        </motion.div>

        {/* Filter Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap items-center gap-2"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all whitespace-nowrap cursor-pointer border shadow ${
                activeFilter === tab
                  ? 'bg-white text-zinc-950 border-white'
                  : 'bg-[#161922] text-zinc-400 border-[#2e3646] hover:text-white hover:border-zinc-400'
              }`}
            >
              {tab === 'All' ? 'All Skills' : tab.split('&')[0].trim()}
            </button>
          ))}
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card-editorial p-7 space-y-5 shadow-xl"
              >
                {/* Category Title */}
                <div className="flex items-center justify-between border-b border-[#2e3646] pb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#12141c] border border-[#2e3646] text-white shadow">
                      {getCategoryIcon(category.title)}
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-white">
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-zinc-400 font-mono">{category.description}</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-white bg-[#12141c] px-3 py-1 rounded-xl border border-[#2e3646] shadow">
                    {category.skills.length}
                  </span>
                </div>

                {/* Badge-style Skill Items */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.04, y: -2 }}
                      className="group relative flex items-center gap-2 px-3.5 py-2 bg-[#12141c] border border-[#2e3646] rounded-xl hover:border-zinc-400 transition-all cursor-default shadow-sm"
                    >
                      <span className="text-xs font-bold text-white">
                        {skill.name}
                      </span>
                      <span
                        className={`text-[9px] px-2 py-0.5 rounded font-mono font-black uppercase tracking-wider ${
                          skill.level === 'Core'
                            ? 'bg-white text-zinc-950'
                            : skill.level === 'Advanced'
                            ? 'bg-[#1f2430] text-zinc-200 border border-[#323b4d]'
                            : 'bg-[#181c25] text-zinc-400'
                        }`}
                      >
                        {skill.level}
                      </span>

                      {/* Tooltip on hover */}
                      <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-56 rounded-xl bg-[#161922] border border-[#2e3646] text-white p-3 text-xs shadow-2xl z-20 font-mono">
                        <div className="font-bold text-white">{skill.name}</div>
                        <div className="text-zinc-300 text-[11px] mt-1">{skill.context}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12 text-zinc-400 text-xs font-mono">
              No matching skills found for "{searchQuery}".
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
