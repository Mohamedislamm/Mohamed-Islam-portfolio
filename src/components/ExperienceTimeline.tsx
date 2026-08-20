import React from 'react';
import { EXPERIENCES, CERTIFICATIONS, EDUCATION } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, CheckCircle2, Calendar, MapPin, Sparkles, Building } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 border-b border-[#2e3646] bg-[#0f1117] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pb-4 border-b border-[#2e3646]"
        >
          <div className="inline-flex items-center gap-2 rounded-xl bg-[#161922] border border-[#2e3646] px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white mb-3 shadow">
            <Briefcase className="h-3.5 w-3.5 text-zinc-300" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Experience & Education
          </h2>
          <p className="text-sm text-zinc-400 mt-1 max-w-2xl leading-relaxed">
            Hands-on enterprise engineering in AI pipelines, data deduplication, and banking IT operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Work Experience Timeline (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-5"
          >
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white mb-1">
              <Building className="h-4 w-4 text-zinc-300" />
              <span>Industry Experience</span>
            </div>

            <div className="space-y-4">
              {EXPERIENCES.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card-editorial p-6 sm:p-7 group shadow-xl"
                >
                  {/* Top Role & Company Line */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#2e3646] pb-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#12141c] border border-[#2e3646] text-white font-mono font-black text-xs shadow">
                        {exp.logoText}
                      </div>
                      <div>
                        <h3 className="text-base font-black text-white group-hover:text-zinc-200 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="text-xs font-bold text-zinc-400 font-mono">
                          {exp.company}
                        </div>
                      </div>
                    </div>

                    <div className="flex sm:flex-col sm:items-end gap-2 sm:gap-1 text-xs text-zinc-400 font-mono">
                      <span className="flex items-center gap-1.5 font-bold">
                        <Calendar className="h-3.5 w-3.5 text-zinc-400" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-[11px] text-zinc-400">
                        <MapPin className="h-3.5 w-3.5 text-zinc-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2.5 mb-5 text-xs text-zinc-300 leading-relaxed font-sans">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-white shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Applied Skills Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#2e3646]">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="rounded-lg bg-[#12141c] px-2.5 py-1 text-[10px] font-mono font-bold text-zinc-300 border border-[#2e3646]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Education & Academic Foundation (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-5" 
          >
            
            {/* Cairo University Education Card */}
            <div className="card-editorial p-6 sm:p-7 space-y-4 shadow-xl">
              <div className="flex items-center gap-3 border-b border-[#2e3646] pb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#12141c] border border-[#2e3646] text-white shadow">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 block">
                    Degree
                  </span>
                  <h3 className="text-base font-black text-white">
                    {EDUCATION.degree}
                  </h3>
                  <div className="text-xs text-zinc-300 font-mono">
                    {EDUCATION.faculty}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="text-white font-bold">{EDUCATION.institution}</span>
                <span className="bg-[#12141c] px-3 py-1 rounded-xl text-[11px] font-bold text-white border border-[#2e3646] shadow">
                  {EDUCATION.period}
                </span>
              </div>

              {/* Coursework Matrix */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 block">
                  Relevant Coursework:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {EDUCATION.relevantCoursework.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="rounded-lg bg-[#12141c] px-2.5 py-1 text-[10px] font-mono font-bold text-zinc-300 border border-[#2e3646]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Extracurricular Note */}
              <div className="pt-3 border-t border-[#2e3646] text-xs text-zinc-300 flex items-center gap-2 font-mono">
                <Sparkles className="h-3.5 w-3.5 text-white shrink-0" />
                <span className="text-[11px]">{EDUCATION.extracurricular}</span>
              </div>
            </div>

            {/* Verified Certifications Stack */}
            <div className="card-editorial p-6 space-y-3.5 shadow-xl">
              <div className="flex items-center justify-between border-b border-[#2e3646] pb-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white">
                  <Award className="h-4 w-4 text-zinc-300" />
                  <span>Verified Credentials</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-zinc-400">2024 - 2026</span>
              </div>

              <div className="space-y-2.5">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.id} className="p-3.5 rounded-xl bg-[#12141c] border border-[#2e3646] space-y-1 shadow">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-black text-white">{cert.title}</h4>
                      <span className="text-[10px] font-mono font-bold text-zinc-400 bg-[#191d28] px-2 py-0.5 rounded border border-[#2e3646]">{cert.period}</span>
                    </div>
                    <div className="text-[11px] text-zinc-300 font-mono">{cert.issuer}</div>
                    {cert.credentialBadge && (
                      <div className="text-[10px] font-mono text-zinc-400 pt-0.5 font-bold">{cert.credentialBadge}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
