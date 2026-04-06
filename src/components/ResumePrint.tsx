"use client";

import React from 'react';
import { resumeData } from '../data/resume';

export const ResumePrint: React.FC = () => {
  const { basics, work, projects, skills, education, certifications } = resumeData;

  return (
    <div className="hidden print:block p-8 bg-white text-black font-sans text-[11px] leading-snug">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold uppercase tracking-widest mb-1">{basics.name}</h1>
        <div className="flex justify-center gap-3 text-[10px] text-gray-700">
          <span>{basics.email}</span>
          <span>•</span>
          <span>{basics.phone}</span>
          <span>•</span>
          <span>{basics.location}</span>
        </div>
        <div className="flex justify-center gap-3 text-[10px] text-gray-700 mt-0.5">
          {basics.profiles.map(p => (
            <span key={p.network}>{p.url}</span>
          ))}
        </div>
      </div>

      <section className="mb-4">
        <h2 className="text-base font-bold border-b border-gray-300 mb-2 uppercase tracking-wide">Skills</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-xs">
          {skills.map(s => (
            <div key={s.name}>
              <span className="font-bold">{s.name}:</span> {s.keywords.join(', ')}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-4">
        <h2 className="text-base font-bold border-b border-gray-300 mb-2 uppercase tracking-wide">Work Experience</h2>
        {work.map((w, i) => (
          <div key={i} className="mb-3">
            <div className="flex justify-between font-bold text-xs">
              <span>{w.position}, {w.company}</span>
              <span>{w.startDate} — {w.endDate}</span>
            </div>
            <ul className="list-disc ml-5 mt-0.5 text-xs">
              {w.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-4">
        <h2 className="text-base font-bold border-b border-gray-300 mb-2 uppercase tracking-wide">Projects</h2>
        {projects.map((p, i) => (
          <div key={i} className="mb-3">
            <div className="font-bold text-xs">{p.name}</div>
            <p className="italic text-[10px] text-gray-600 mb-0.5">{p.keywords.join(', ')}</p>
            <ul className="list-disc ml-5 text-xs">
              {p.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-4">
        <h2 className="text-base font-bold border-b border-gray-300 mb-2 uppercase tracking-wide">Certifications</h2>
        <ul className="list-disc ml-5 text-xs">
          {certifications.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-base font-bold border-b border-gray-300 mb-2 uppercase tracking-wide">Education</h2>
        {education.map((e, i) => (
          <div key={i} className="flex justify-between mb-1 text-xs">
            <span>
              <span className="font-bold">{e.institution}</span> — {e.area} {e.studyType && `(${e.studyType})`}
            </span>
            <span>{e.startDate ? `${e.startDate} — ${e.endDate}` : e.endDate}</span>
          </div>
        ))}
      </section>
    </div>
  );
};
