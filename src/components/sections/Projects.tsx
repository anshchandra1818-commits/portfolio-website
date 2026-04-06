"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Code2, Database, BarChart3 } from 'lucide-react';
import { resumeData } from '../../data/resume';

export const Projects: React.FC = () => {
  const icons = [Code2, BarChart3, Database];

  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">Featured Projects</h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Showcasing my technical expertise through real-world applications.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resumeData.projects.map((project, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl overflow-hidden transition-all hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex gap-2">
                    {project.keywords.slice(0, 2).map((keyword, i) => (
                      <span key={i} className="text-[10px] font-mono text-slate-500 uppercase tracking-widest px-2 py-1 rounded border border-slate-800">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-xs text-slate-500 leading-relaxed">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-blue-500 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.keywords.map((keyword, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-[10px] font-medium border border-slate-700/50">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
