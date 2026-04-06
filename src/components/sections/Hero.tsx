"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '../../data/resume';

export const Hero: React.FC = () => {
  const { basics } = resumeData;

  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center z-10 max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium backdrop-blur-sm"
        >
          {basics.label}
        </motion.div>

        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 bg-gradient-to-br from-white via-slate-300 to-slate-500 bg-clip-text text-transparent">
          {basics.name}
        </h1>

        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {basics.summary}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={scrollToExperience}
            className="group relative px-8 py-4 bg-white text-slate-950 font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Experience <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <button
            onClick={() => window.print()}
            className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full border border-slate-800 hover:bg-slate-800 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
          >
            <Download className="w-4 h-4" /> Download Resume
          </button>
        </div>

        <div className="flex items-center justify-center gap-6">
          {basics.profiles.map((profile) => (
            <a
              key={profile.network}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-slate-800/50 rounded-full"
            >
              {profile.network === 'GitHub' && <Github className="w-6 h-6" />}
              {profile.network === 'LinkedIn' && <Linkedin className="w-6 h-6" />}
            </a>
          ))}
          <a
            href={`mailto:${basics.email}`}
            className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-slate-800/50 rounded-full"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-slate-600" />
      </motion.div>
    </section>
  );
};
