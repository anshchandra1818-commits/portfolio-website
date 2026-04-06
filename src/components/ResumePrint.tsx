"use client";

import React from 'react';
import { resumeData } from '../data/resume';

export const ResumePrint: React.FC = () => {
  const { basics, work, projects, skills, education, certifications } = resumeData;

  return (
    <div className="hidden print:block p-12 bg-white text-black font-serif text-sm leading-relaxed">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold uppercase tracking-widest mb-2">{basics.name}</h1>
        <div className="flex justify-center gap-4 text-xs text-gray-600">
          <span>{basics.email}</span>
          <span>•</span>
          <span>{basics.phone}</span>
          <span>•</span>
          <span>{basics.location}</span>
        </div>
        <div className="flex justify-center gap-4 text-xs text-gray-600 mt-1">
          {basics.profiles.map(p => (
            <span key={p.network}>{p.url}</span>
          ))}
        </div>
      </div>

      <section className="mb-6">
        <h2 className="text-lg font-bold border-b-2 border-gray-300 mb-3 uppercase">Summary</h2>
        <p>{basics.summary}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold border-b-2 border-gray-300 mb-3 uppercase">Skills</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
          {skills.map(s => (
            <div key={s.name}>
              <span className="font-bold">{s.name}:</span> {s.keywords.join(', ')}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold border-b-2 border-gray-300 mb-3 uppercase">Work Experience</h2>
        {work.map((w, i) => (
          <div key={i} className="mb-4">
            <div className="flex justify-between font-bold">
              <span>{w.position}, {w.company}</span>
              <span>{w.startDate} — {w.endDate}</span>
            </div>
            <ul className="list-disc ml-5 mt-1">
              {w.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold border-b-2 border-gray-300 mb-3 uppercase">Projects</h2>
        {projects.map((p, i) => (
          <div key={i} className="mb-4">
            <div className="font-bold">{p.name}</div>
            <p className="italic text-xs text-gray-600 mb-1">{p.keywords.join(', ')}</p>
            <ul className="list-disc ml-5">
              {p.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold border-b-2 border-gray-300 mb-3 uppercase">Education</h2>
        {education.map((e, i) => (
          <div key={i} className="flex justify-between mb-1">
            <span>
              <span className="font-bold">{e.institution}</span> — {e.area} {e.studyType && `(${e.studyType})`}
            </span>
            <span>{e.startDate ? `${e.startDate} — ${e.endDate}` : e.endDate}</span>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-lg font-bold border-b-2 border-gray-300 mb-3 uppercase">Certifications</h2>
        <ul className="list-disc ml-5">
          {certifications.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};
