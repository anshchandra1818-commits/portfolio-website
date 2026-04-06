"use client";

import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { resumeData } from '../../data/resume';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">Education & Certifications</h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          My academic foundation and professional certifications.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-8">
            <Award className="w-6 h-6 text-emerald-400" /> Certifications
          </h3>
          
          <div className="grid gap-4">
            {resumeData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl border border-slate-800 bg-slate-900/30 backdrop-blur-xl hover:border-emerald-500/30 transition-all flex items-center gap-4"
              >
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <p className="text-slate-300 font-medium group-hover:text-white transition-colors">
                  {cert}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-8">
            <GraduationCap className="w-6 h-6 text-blue-400" /> Academic Journey
          </h3>
          
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l border-slate-800 pb-8 last:pb-0"
            >
              <div className="absolute left-[-5px] top-0 h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/30 backdrop-blur-xl hover:border-blue-500/30 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h4 className="text-xl font-bold text-white">{edu.institution}</h4>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-mono uppercase tracking-widest border border-blue-500/20">
                    {edu.startDate ? `${edu.startDate} — ${edu.endDate}` : edu.endDate}
                  </span>
                </div>
                
                <p className="text-slate-400 font-medium">{edu.area}</p>
                {edu.studyType && (
                  <p className="text-sm text-slate-500 mt-1">{edu.studyType}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
