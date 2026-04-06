"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Code, Layout, Database, Cloud, Settings, Users } from 'lucide-react';
import { resumeData } from '../../data/resume';

export const Skills: React.FC = () => {
  const icons = [Code, Layout, Database, Cloud, Settings, Users];

  return (
    <section id="skills" className="py-24 px-4 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">Technical Arsenal</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A comprehensive overview of my technical stack and professional capabilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.skills.map((skillGroup, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-8 rounded-3xl border border-slate-800 bg-slate-900/30 backdrop-blur-xl transition-all hover:border-blue-500/30 hover:bg-slate-900/50"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {skillGroup.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.keywords.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-xl bg-slate-800/50 text-slate-300 text-xs font-medium border border-slate-700/50 hover:border-blue-500/30 hover:text-white transition-all"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
