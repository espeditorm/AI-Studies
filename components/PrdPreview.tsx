import React from 'react';
import { FileText, Download, AlertCircle } from 'lucide-react';
import { EXAMPLE_PRD_CONTENT } from '../constants';

export const PrdPreview: React.FC = () => {
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([EXAMPLE_PRD_CONTENT], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "PRD_TheStarterPay.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="mt-4 p-6 rounded-xl border border-dashed border-brand-300 dark:border-brand-700 bg-brand-50 dark:bg-brand-900/30">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-white dark:bg-brand-800 rounded-lg shadow-sm">
          <FileText className="w-6 h-6 text-brand-600 dark:text-brand-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-brand-900 dark:text-brand-100">
            Documento de Exemplo Gerado (PRD)
          </h3>
          <p className="text-xs text-brand-500 dark:text-brand-400 mt-1 mb-3">
            Este é o resultado esperado do Passo 1. Você deve anexar este conteúdo ao prompt final.
          </p>
          
          <div className="flex flex-wrap gap-3">
             <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-brand-900 dark:bg-brand-100 dark:text-brand-900 rounded-lg shadow-sm hover:bg-brand-800 dark:hover:bg-white transition-all transform hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              Baixar .txt
            </button>
          </div>
        </div>
      </div>
      
      {/* Mini Preview Window */}
      <div className="mt-6 relative h-48 overflow-hidden rounded-lg border border-brand-200 dark:border-brand-800 bg-white dark:bg-brand-950 opacity-80 select-none">
        <div className="p-4 text-[10px] leading-relaxed font-mono text-brand-400 dark:text-brand-500 whitespace-pre-wrap">
          {EXAMPLE_PRD_CONTENT}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-50 dark:from-brand-900/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="px-3 py-1 text-xs font-medium bg-brand-100 dark:bg-brand-800 text-brand-600 dark:text-brand-300 rounded-full">
            Preview do Arquivo
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-amber-600 dark:text-amber-500">
        <AlertCircle className="w-4 h-4" />
        <span>Importante: Valide se as informações do PRD gerado estão corretas antes de prosseguir.</span>
      </div>
    </div>
  );
};