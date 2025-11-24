import React from 'react';
import { Lock, Eye } from 'lucide-react';

interface ExampleResultProps {
  content: string;
  label: string;
}

export const ExampleResult: React.FC<ExampleResultProps> = ({ content, label }) => {
  return (
    <div className="relative group my-4 rounded-xl border border-brand-200 dark:border-brand-800 bg-brand-50/50 dark:bg-brand-900/20 opacity-80 select-none cursor-not-allowed">
      <div className="flex items-center justify-between px-4 py-2 border-b border-brand-200 dark:border-brand-800 bg-brand-100/50 dark:bg-brand-900/50 rounded-t-xl">
        <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-400 dark:text-brand-500">
            {label}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-200 dark:bg-brand-800 text-brand-600 dark:text-brand-400 font-medium">
            Exemplo
            </span>
        </div>
        <div className="flex items-center gap-1 text-brand-400">
            <Lock className="w-3 h-3" />
            <span className="text-[10px] uppercase">Apenas Leitura</span>
        </div>
      </div>
      <div className="relative p-4 overflow-hidden">
        <pre className="text-xs md:text-sm font-mono text-brand-500 dark:text-brand-500 whitespace-pre-wrap leading-relaxed blur-[0.3px]">
          {content}
        </pre>
        {/* Overlay to further discourage interaction */}
        <div className="absolute inset-0 bg-transparent z-10" />
      </div>
    </div>
  );
};