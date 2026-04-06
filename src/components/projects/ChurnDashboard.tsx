import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
  PieChart, Pie,
} from 'recharts';
import { 
  X, Activity, Target, TrendingUp, AlertCircle, 
  UserPlus, UserMinus, ShieldCheck, BrainCircuit,
  Database, Zap
} from 'lucide-react';

interface ChurnDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

const featureImportanceData = [
  { name: 'Age', value: 0.28, color: '#3b82f6' },
  { name: 'Balance', value: 0.22, color: '#60a5fa' },
  { name: 'NumProducts', value: 0.18, color: '#93c5fd' },
  { name: 'IsActive', value: 0.12, color: '#bfdbfe' },
  { name: 'Tenure', value: 0.10, color: '#dbeafe' },
  { name: 'CreditScore', value: 0.06, color: '#eff6ff' },
  { name: 'HasCrCard', value: 0.04, color: '#f8fafc' },
];

const accuracyData = [
  { name: 'Correct', value: 86, color: '#10b981' },
  { name: 'Incorrect', value: 14, color: '#ef4444' },
];

export const ChurnDashboard: React.FC<ChurnDashboardProps> = ({ isOpen, onClose }) => {
  const [predictionInput, setPredictionInput] = useState({
    age: 35,
    balance: 50000,
    products: 2,
    isActive: true
  });

  const [predictionResult, setPredictionResult] = useState<number | null>(null);

  const handlePredict = () => {
    // Mock prediction logic based on feature importance
    let score = 0;
    if (predictionInput.age > 50) score += 0.4;
    if (predictionInput.balance > 100000) score += 0.3;
    if (predictionInput.products > 2) score += 0.2;
    if (!predictionInput.isActive) score += 0.3;
    
    setPredictionResult(Math.min(score, 0.95));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-950/90 backdrop-blur-xl overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-6xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/50">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Churn Prediction Analysis</h2>
                  <p className="text-xs text-slate-500 font-mono uppercase tracking-widest">TensorFlow Neural Network • 86% Accuracy</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8 grid lg:grid-cols-3 gap-8">
              {/* Left Column: Metrics & Feature Importance */}
              <div className="lg:col-span-2 space-y-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Accuracy', value: '86.4%', icon: Target, color: 'text-emerald-400' },
                    { label: 'Precision', value: '84.2%', icon: ShieldCheck, color: 'text-blue-400' },
                    { label: 'Recall', value: '81.5%', icon: Activity, color: 'text-purple-400' },
                    { label: 'F1 Score', value: '82.8%', icon: Zap, color: 'text-amber-400' },
                  ].map((stat, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                      <div className="flex items-center gap-2 mb-2">
                        <stat.icon className={`w-4 h-4 ${stat.color}`} />
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{stat.label}</span>
                      </div>
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Feature Importance Chart */}
                <div className="p-6 rounded-3xl bg-slate-800/30 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-400" /> Feature Importance
                    </h3>
                    <span className="text-[10px] font-mono text-slate-500">RANDOM FOREST ANALYSIS</span>
                  </div>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={featureImportanceData} layout="vertical" margin={{ left: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                        <XAxis type="number" hide />
                        <YAxis 
                          dataKey="name" 
                          type="category" 
                          stroke="#64748b" 
                          fontSize={12} 
                          tickLine={false} 
                          axisLine={false}
                        />
                        <Tooltip 
                          cursor={{ fill: '#1e293b' }}
                          contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                        />
                        <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                          {featureImportanceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Right Column: Prediction Simulator */}
              <div className="space-y-8">
                <div className="p-6 rounded-3xl bg-blue-500/5 border border-blue-500/20">
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-amber-400" /> Prediction Simulator
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">Customer Age: {predictionInput.age}</label>
                      <input 
                        type="range" min="18" max="80" 
                        value={predictionInput.age}
                        onChange={(e) => setPredictionInput({...predictionInput, age: parseInt(e.target.value)})}
                        className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">Account Balance: ${predictionInput.balance.toLocaleString()}</label>
                      <input 
                        type="range" min="0" max="200000" step="5000"
                        value={predictionInput.balance}
                        onChange={(e) => setPredictionInput({...predictionInput, balance: parseInt(e.target.value)})}
                        className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">Number of Products: {predictionInput.products}</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4].map(n => (
                          <button 
                            key={n}
                            onClick={() => setPredictionInput({...predictionInput, products: n})}
                            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${predictionInput.products === n ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                          >
                            {n}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                      <span className="text-xs font-bold text-slate-300">Active Member</span>
                      <button 
                        onClick={() => setPredictionInput({...predictionInput, isActive: !predictionInput.isActive})}
                        className={`w-12 h-6 rounded-full relative transition-colors ${predictionInput.isActive ? 'bg-emerald-500' : 'bg-slate-700'}`}
                      >
                        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${predictionInput.isActive ? 'left-7' : 'left-1'}`} />
                      </button>
                    </div>

                    <button 
                      onClick={handlePredict}
                      className="w-full py-4 rounded-2xl bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm transition-all shadow-lg shadow-blue-500/20 active:scale-95"
                    >
                      Run Prediction
                    </button>
                  </div>

                  {predictionResult !== null && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-6 rounded-2xl bg-slate-800 border border-slate-700 text-center"
                    >
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">Churn Probability</div>
                      <div className={`text-4xl font-bold mb-2 ${predictionResult > 0.5 ? 'text-red-400' : 'text-emerald-400'}`}>
                        {(predictionResult * 100).toFixed(1)}%
                      </div>
                      <div className="flex items-center justify-center gap-2 text-xs">
                        {predictionResult > 0.5 ? (
                          <>
                            <UserMinus className="w-4 h-4 text-red-400" />
                            <span className="text-red-400 font-bold">High Risk of Churn</span>
                          </>
                        ) : (
                          <>
                            <UserPlus className="w-4 h-4 text-emerald-400" />
                            <span className="text-emerald-400 font-bold">Likely to Stay</span>
                          </>
                        )}
                      </div>
                    </motion.div>
                  )}
                </div>

                <div className="p-6 rounded-3xl bg-slate-800/30 border border-slate-700/50">
                  <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-400" /> Model Summary
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    This model uses a 4-layer TensorFlow Neural Network trained on 10,000 bank records. It identifies patterns in customer demographics and financial behavior to predict attrition with 86% accuracy.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
