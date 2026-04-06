"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { resumeData } from '../../data/resume';
import { cn } from '../../lib/utils';

export const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">Work Experience</h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          A timeline of my professional journey and key contributions.
        </p>
      </motion.div>

      <div className="space-y-6">
        {resumeData.work.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "group relative rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl overflow-hidden transition-all hover:border-blue-500/30",
              expandedIndex === index ? "ring-1 ring-blue-500/20" : ""
            )}
          >
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="w-full text-left p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {item.position}
                  </h3>
                  <p className="text-slate-400 font-medium">{item.company}</p>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6">
                <div className="text-right">
                  <p className="text-sm font-mono text-slate-500 uppercase tracking-wider">
                    {item.startDate} — {item.endDate}
                  </p>
                </div>
                {expandedIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-slate-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500" />
                )}
              </div>
            </button>

            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 md:p-8 pt-0 border-t border-slate-800/50">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-2 space-y-4">
                        <ul className="space-y-3">
                          {item.highlights.map((bullet, i) => (
                            <li key={i} className="flex gap-3 text-slate-400 leading-relaxed">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">
                            Impact Metrics
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.metrics.map((metric, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20"
                              >
                                {metric}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
