import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { CopyBlockProps } from '../types';

export const CopyBlock: React.FC<CopyBlockProps> = ({ content, label = "Prompt", rows = 6 }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative group my-4 rounded-xl border border-brand-200 dark:border-brand-800 bg-white dark:bg-brand-900 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="flex items-center justify-between px-4 py-2 border-b border-brand-100 dark:border-brand-800 bg-brand-50/50 dark:bg-brand-900/50 rounded-t-xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-500 dark:text-brand-400">
          {label}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 text-xs font-medium text-brand-600 dark:text-brand-300 bg-white dark:bg-brand-800 border border-brand-200 dark:border-brand-700 rounded-md hover:bg-brand-50 dark:hover:bg-brand-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          aria-label="Copy to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-500" />
              <span className="text-green-600 dark:text-green-400">Copiado</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>
      <div className="relative">
        <textarea
          readOnly
          value={content}
          rows={rows}
          className="w-full px-4 py-3 text-sm font-mono text-brand-700 dark:text-brand-300 bg-transparent resize-none focus:outline-none custom-scrollbar leading-relaxed"
          spellCheck={false}
        />
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white dark:from-brand-900 to-transparent pointer-events-none rounded-b-xl" />
      </div>
    </div>
  );
};