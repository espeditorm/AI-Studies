import React from 'react';
import { motion } from 'framer-motion';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  children: React.ReactNode;
}

export const StepCard: React.FC<StepCardProps> = ({ number, title, description, children }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="flex gap-4 md:gap-6 mb-16 relative"
    >
      {/* Timeline Line */}
      <div className="hidden md:block absolute left-[19px] top-12 bottom-[-64px] w-[2px] bg-brand-200 dark:bg-brand-800 last:hidden" />

      {/* Number Bubble */}
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-900 dark:bg-brand-50 text-brand-50 dark:text-brand-900 font-bold text-lg shadow-lg z-10 relative">
          {number}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pt-1">
        <h2 className="text-xl font-bold text-brand-900 dark:text-white mb-2">
          {title}
        </h2>
        <p className="text-brand-600 dark:text-brand-400 mb-6 leading-relaxed">
          {description}
        </p>
        <div className="w-full">
          {children}
        </div>
      </div>
    </motion.div>
  );
};