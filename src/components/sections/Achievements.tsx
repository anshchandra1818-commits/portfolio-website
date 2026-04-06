"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Star, TrendingUp, Zap } from 'lucide-react';
import { resumeData } from '../../data/resume';

export const Achievements: React.FC = () => {
  const icons = [Trophy, TrendingUp, Zap, Star];

  return (
    <section className="py-24 px-4 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">Key Achievements</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Measurable impact and professional milestones.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resumeData.achievements.map((achievement, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-8 rounded-3xl border border-slate-800 bg-slate-900/30 backdrop-blur-xl overflow-hidden transition-all hover:border-blue-500/30"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="w-16 h-16 text-blue-400" />
                </div>
                
                <div className="relative z-10">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {achievement.context}
                  </p>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
