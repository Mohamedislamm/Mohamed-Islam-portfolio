import React, { useState } from 'react';
import { CANDIDATE_INFO, SHOWCASE_PROJECTS, EXPERIENCES, CERTIFICATIONS, EDUCATION, SKILL_CATEGORIES } from '../data/portfolioData';
import { X, Download, Printer, Copy, Check, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadMarkdown = () => {
    const resumeText = `# ${CANDIDATE_INFO.name}
**${CANDIDATE_INFO.role}**
- Location: ${CANDIDATE_INFO.location}
- Email: ${CANDIDATE_INFO.email}
- LinkedIn: ${CANDIDATE_INFO.linkedin}
- GitHub: ${CANDIDATE_INFO.github}
- Status: ${CANDIDATE_INFO.status}
- Military Status: ${CANDIDATE_INFO.militaryStatus}
- Languages: Arabic (Native), English (Professional Working Proficiency)

---

## PROFESSIONAL SUMMARY
${CANDIDATE_INFO.summarySentences.join('\n\n')}

---

## EDUCATION
**${EDUCATION.degree}**
*${EDUCATION.institution} — ${EDUCATION.faculty}* | Giza, Egypt (${EDUCATION.period})
- Relevant Coursework: ${EDUCATION.relevantCoursework.join(', ')}
- Extracurricular: ${EDUCATION.extracurricular}

---

## PROFESSIONAL EXPERIENCE
${EXPERIENCES.map((exp) => `### ${exp.role} — ${exp.company}
*${exp.location} | ${exp.period}*
${exp.highlights.map((h) => `- ${h}`).join('\n')}
**Technologies Used:** ${exp.skills.join(', ')}
`).join('\n')}

---

## CERTIFICATIONS & PROFESSIONAL TRAINING
${CERTIFICATIONS.map((cert) => `### ${cert.title} — ${cert.issuer} (${cert.period})
${cert.description}
**Skills:** ${cert.skills.join(', ')}
`).join('\n')}

---

## FEATURED PROJECTS
${SHOWCASE_PROJECTS.map((proj) => `### ${proj.title} (${proj.year})
*${proj.tagline}*
- ${proj.shortDescription}
- **Impact/Metrics:** ${proj.metrics.map((m) => `${m.label}: ${m.value}`).join(' | ')}
- **Technologies:** ${proj.techStack.join(', ')}
- **GitHub:** ${proj.githubUrl}
`).join('\n')}

---

## TECHNICAL SKILLS
${SKILL_CATEGORIES.map((cat) => `- **${cat.title}:** ${cat.skills.map((s) => s.name).join(', ')}`).join('\n')}
`;

    const blob = new Blob([resumeText], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Mohamed_Islam_Khaled_CV.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyPlainText = () => {
    const plain = `${CANDIDATE_INFO.name} - ${CANDIDATE_INFO.role}
Email: ${CANDIDATE_INFO.email} | Location: ${CANDIDATE_INFO.location}
LinkedIn: ${CANDIDATE_INFO.linkedin} | GitHub: ${CANDIDATE_INFO.github}
Military Status: ${CANDIDATE_INFO.militaryStatus}

Summary:
${CANDIDATE_INFO.summarySentences.join(' ')}

Education:
${EDUCATION.degree}, ${EDUCATION.institution} (${EDUCATION.period})

Experience:
${EXPERIENCES.map((e) => `${e.role} at ${e.company} (${e.period}) - ${e.highlights.join('; ')}`).join('\n\n')}

Skills:
${SKILL_CATEGORIES.map((c) => `${c.title}: ${c.skills.map((s) => s.name).join(', ')}`).join('\n')}`;

    navigator.clipboard.writeText(plain);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto card-editorial p-6 sm:p-10 space-y-8 text-zinc-200 shadow-2xl">
        
        {/* Top Floating Control Bar */}
        <div className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-3 bg-[#161922]/95 backdrop-blur-md pb-4 border-b border-[#2e3646] -mt-2">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#12141c] border border-[#2e3646] text-white font-bold text-xs">
              CV
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-white">Curriculum Vitae</span>
              <span className="text-[10px] text-zinc-400 block font-mono">Mohamed Islam Khaled</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyPlainText}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#12141c] border border-[#2e3646] hover:bg-[#1c202d] px-3.5 py-1.5 text-xs font-mono font-bold text-zinc-200 transition-colors cursor-pointer"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handleDownloadMarkdown}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#12141c] border border-[#2e3646] hover:bg-[#1c202d] px-3.5 py-1.5 text-xs font-mono font-bold text-zinc-200 transition-colors cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Markdown</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-xl bg-white px-3.5 py-1.5 text-xs font-mono font-bold text-zinc-950 hover:bg-zinc-200 transition-colors cursor-pointer shadow"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-[#12141c] border border-[#2e3646] text-zinc-400 hover:text-white hover:bg-[#1c202d] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body Container */}
        <div id="printable-resume" className="space-y-8 bg-[#12141c] p-6 sm:p-8 rounded-xl border border-[#2e3646] font-sans">
          
          {/* Header */}
          <div className="border-b border-[#2e3646] pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{CANDIDATE_INFO.name}</h1>
              <p className="text-sm font-semibold text-zinc-300 mt-1">{CANDIDATE_INFO.role}</p>
            </div>
            <div className="text-xs font-mono text-zinc-400 space-y-1 sm:text-right">
              <div>{CANDIDATE_INFO.email}</div>
              <div>{CANDIDATE_INFO.location}</div>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-800 pb-1">Professional Summary</h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {CANDIDATE_INFO.summarySentences.join(' ')}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-800 pb-1">Education</h2>
            <div className="space-y-1">
              <div className="flex justify-between items-start text-xs sm:text-sm font-bold text-white">
                <span>{EDUCATION.degree} — {EDUCATION.institution}</span>
                <span className="font-mono text-xs text-zinc-400">{EDUCATION.period}</span>
              </div>
              <div className="text-xs text-zinc-400">{EDUCATION.faculty}, Giza, Egypt</div>
              <div className="text-xs text-zinc-400 pt-1">
                <span className="font-semibold text-zinc-300">Relevant Coursework:</span> {EDUCATION.relevantCoursework.join(', ')}
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-800 pb-1">Professional Experience</h2>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-white">{exp.role} <span className="text-zinc-400 font-normal">at {exp.company}</span></span>
                    <span className="font-mono text-xs text-zinc-400">{exp.period} | {exp.location}</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-zinc-300 list-disc list-inside">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx} className="leading-relaxed">{h}</li>
                    ))}
                  </ul>
                  <div className="text-[11px] font-mono text-zinc-500 pt-1">
                    Stack: {exp.skills.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-800 pb-1">Certifications & Training</h2>
            <div className="space-y-3">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="space-y-1 text-xs">
                  <div className="flex justify-between font-bold text-white">
                    <span>{cert.title} — {cert.issuer}</span>
                    <span className="font-mono text-zinc-400">{cert.period}</span>
                  </div>
                  <div className="text-zinc-400">{cert.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 border-b border-zinc-800 pb-1">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="p-3 rounded bg-zinc-900 border border-zinc-800">
                  <div className="font-bold text-white mb-1">{cat.title}</div>
                  <div className="text-zinc-400">{cat.skills.map((s) => s.name).join(', ')}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Close */}
        <div className="pt-4 border-t border-zinc-800 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-lg bg-zinc-100 px-6 py-2.5 text-xs font-bold text-zinc-950 hover:bg-white transition-colors cursor-pointer"
          >
            Close Resume Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
