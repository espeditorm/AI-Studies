import React, { useState } from 'react';
import { Moon, Sun, Terminal, ChevronRight, Zap, Layers, FileText, Bot } from 'lucide-react';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import { StepCard } from './components/StepCard';
import { CopyBlock } from './components/CopyBlock';
import { PrdPreview } from './components/PrdPreview';
import { ExampleResult } from './components/ExampleResult';
import { 
  PROMPT_STEP_1_PRD, 
  PROMPT_STEP_2_PROTOTYPE,
  PROMPT_SPLIT_GENERATOR,
  EXAMPLE_GENERATED_PROMPTS
} from './constants';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-brand-950/80 backdrop-blur-md border-b border-brand-200 dark:border-brand-800">
      <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-brand-900 dark:bg-white rounded-lg">
            <Terminal className="w-5 h-5 text-white dark:text-brand-900" />
          </div>
          <span className="font-bold text-lg tracking-tight text-brand-900 dark:text-white">
            AI.Playbook
          </span>
        </div>
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-brand-500 hover:bg-brand-100 dark:hover:bg-brand-800 transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          <span className="text-sm font-medium">Mudar tema</span>
        </button>
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <div className="pt-32 pb-16 px-6 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-brand-600 uppercase bg-brand-100 rounded-full dark:bg-brand-900 dark:text-brand-300">
          Manual de Instruções v1.0
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-900 dark:text-white leading-tight mb-6">
          Prototipação & Prompt Engineering. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400 dark:from-brand-200 dark:to-brand-500">
             Em minutos.
          </span>
        </h1>
        <p className="text-lg text-brand-600 dark:text-brand-400 leading-relaxed max-w-xl">
          Um guia passo a passo para transformar suas ideias em código funcional utilizando agentes de IA modernos. Siga o fluxo abaixo.
        </p>
      </motion.div>
    </div>
  );
};

const Content: React.FC = () => {
  const [promptMode, setPromptMode] = useState<'unified' | 'split'>('unified');

  return (
    <main className="max-w-3xl mx-auto px-6 pb-32">
      
      <StepCard
        number={1}
        title="Definição de Requisitos (PRD)"
        description="O primeiro passo é estruturar sua ideia. Copie o prompt abaixo e envie para o seu chat de IA favorito (ChatGPT, Gemini, DeepSeek, Claude) para gerar um Product Requirements Document otimizado."
      >
        <div className="bg-brand-100 dark:bg-brand-800/50 p-4 rounded-lg mb-4 text-sm text-brand-700 dark:text-brand-300 flex items-start gap-3">
          <Zap className="w-5 h-5 flex-shrink-0 text-amber-500" />
          <p>Dica: Substitua as seções de <strong>Objetivo</strong> e <strong>Funcionalidades</strong> no texto abaixo caso queira criar um app diferente do 'TheStarterPay'.</p>
        </div>
        <CopyBlock content={PROMPT_STEP_1_PRD} label="Prompt Inicial: Gerador de PRD" rows={12} />
      </StepCard>

      <StepCard
        number={2}
        title="Validar e Exportar o PRD"
        description="A IA irá responder com um documento estruturado. Revise o conteúdo. Se estiver correto, salve-o como um arquivo de texto (.txt) ou mantenha-o copiado. Abaixo está um exemplo do que esperar. Seu resultado pode ter mais informações, não há nenhum problema"
      >
        <PrdPreview />
      </StepCard>

      <StepCard
        number={3}
        title="Estratégia de Prompting"
        description="Este passo ainda não é no construtor (Lovable/Bolt). Você voltará ao ChatGPT/Claude. Seu objetivo aqui é transformar o PRD (Passo 2) em comandos técnicos otimizados para a IA construtora."
      >
        <div className="border-l-4 border-brand-900 dark:border-brand-100 pl-4 py-1 mb-6">
          <p className="font-medium text-brand-900 dark:text-brand-100">
            Fluxo no Chat (ChatGPT/Claude):
          </p>
          <ol className="list-decimal list-inside text-sm text-brand-600 dark:text-brand-400 mt-2 space-y-1">
            <li>Abra um novo chat.</li>
            <li>Anexe o arquivo <code>PRD.txt</code> gerado no passo anterior.</li>
            <li>Copie e envie o prompt de estratégia abaixo.</li>
          </ol>
        </div>

        {/* Toggle Controls */}
        <div className="flex bg-brand-100 dark:bg-brand-800/50 p-1 rounded-lg mb-6 w-full sm:w-fit">
          <button
            onClick={() => setPromptMode('unified')}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all ${
              promptMode === 'unified'
                ? 'bg-white dark:bg-brand-700 text-brand-900 dark:text-white shadow-sm'
                : 'text-brand-500 dark:text-brand-400 hover:text-brand-900 dark:hover:text-brand-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            Prompt Único (One-Shot)
          </button>
          <button
            onClick={() => setPromptMode('split')}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all ${
              promptMode === 'split'
                ? 'bg-white dark:bg-brand-700 text-brand-900 dark:text-white shadow-sm'
                : 'text-brand-500 dark:text-brand-400 hover:text-brand-900 dark:hover:text-brand-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            Passo a Passo (Chain)
          </button>
        </div>

        {promptMode === 'unified' ? (
          <motion.div
            key="unified"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-2 text-sm text-brand-500 dark:text-brand-400">
              Solicita à IA que escreva um único comando gigante para o construtor.
            </div>
            <CopyBlock content={PROMPT_STEP_2_PROTOTYPE} label="Prompt de Estratégia Única" rows={16} />
          </motion.div>
        ) : (
          <motion.div
            key="split"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4 text-sm text-brand-600 dark:text-brand-400 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-3 rounded-md">
              <span className="font-semibold block mb-1 text-amber-800 dark:text-amber-400">Recomendado para apps complexos:</span>
              Solicita à IA que quebre o desenvolvimento em 3 fases lógicas. O ChatGPT irá gerar 3 blocos de texto como resposta.
            </div>
            <CopyBlock content={PROMPT_SPLIT_GENERATOR} label="Prompt de Estratégia Sequencial" rows={16} />
          </motion.div>
        )}

      </StepCard>

      <StepCard
        number={4}
        title="Execução no Agente Criador"
        description="Esta é a etapa final. O ChatGPT (Passo 3) gerou prompts específicos como resposta. Agora você deve copiar essa resposta e colar no Lovable, Bolt.new ou V0."
      >
        <div className="flex items-center gap-3 p-4 bg-brand-900 dark:bg-brand-100 rounded-xl mb-8 shadow-md">
          <div className="p-2 bg-brand-800 dark:bg-white rounded-lg">
             <Bot className="w-5 h-5 text-white dark:text-brand-900" />
          </div>
          <div>
            <h3 className="font-semibold text-white dark:text-brand-900 text-sm">Hora do Handoff</h3>
            <p className="text-brand-300 dark:text-brand-600 text-xs mt-0.5">
              Copie o resultado gerado pelo seu chat e cole na ferramenta de criação.
            </p>
          </div>
        </div>

        <h4 className="text-sm font-bold text-brand-900 dark:text-white mb-4 uppercase tracking-wider">
          Exemplo de Resultado Esperado
        </h4>
        <p className="text-sm text-brand-500 mb-4">
          Abaixo está uma <strong>simulação visual</strong> (não copiável) de como o ChatGPT deve responder ao prompt do passo anterior. Você terá 3 partes para executar uma por uma.
        </p>

        <div className="space-y-6">
          <ExampleResult 
            label="Parte 1: Fundamentos (Exemplo de Saída)" 
            content={EXAMPLE_GENERATED_PROMPTS.part1} 
          />
          <div className="flex justify-center">
            <div className="h-8 w-0.5 bg-brand-200 dark:bg-brand-800"></div>
          </div>
          <ExampleResult 
            label="Parte 2: Funcionalidades (Exemplo de Saída)" 
            content={EXAMPLE_GENERATED_PROMPTS.part2} 
          />
          <div className="flex justify-center">
            <div className="h-8 w-0.5 bg-brand-200 dark:bg-brand-800"></div>
          </div>
          <ExampleResult 
            label="Parte 3: Refinamento (Exemplo de Saída)" 
            content={EXAMPLE_GENERATED_PROMPTS.part3} 
          />
        </div>
      </StepCard>

      <div className="mt-20 pt-10 border-t border-brand-200 dark:border-brand-800 text-center">
        <p className="text-brand-500 dark:text-brand-500 text-sm mb-4">
          Pronto para construir o próximo grande produto?
        </p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center gap-2 text-brand-900 dark:text-white font-semibold hover:underline"
        >
          Voltar ao topo <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </main>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-brand-50 dark:bg-brand-950 transition-colors duration-300">
        <Header />
        <Hero />
        <Content />
      </div>
    </ThemeProvider>
  );
};

export default App;