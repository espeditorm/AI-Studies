export const PROMPT_STEP_1_PRD = `Você é um especialista em Product Management. Quero sua ajuda para criar um Product Requirements Document.
Este PRD será entregue para um agente de IA especializado na criação de produtos digitais. Portanto, escreva apenas informações que importam para um agente de IA trabalhar. Você não precisa incluir métricas, histórias de usuário ou qualquer outra informação ampla que será ignorada.

Foque em definir as funcionalidades, dados de entrada e dados de saída, modelo de dados para cada entidade, fluxos principais e casos extremos.

## Objetivo
[DESCREVA O OBJETIVO]

## Tecnologia
O backend suportado pelo agente de IA é o Supabase.

## Design
Utilize shadcn para os componentes.

## Funcionalidades
[DESCREVA AS FUNCIONALIDADES]

## Considerações
O que você criar será utilizado como o prompt inicial do agente de IA.
Não foque em elementos como autenticação ou conexão com bancos de dados agora.`;

export const EXAMPLE_PRD_CONTENT = `PRD: TheStarterPay (MVP)

1. Visão Geral
Aplicativo web de gestão financeira pessoal focado em simplicidade. Permite controle de fluxo de caixa e visualização gráfica de despesas.

2. Tecnologias
- Frontend: React + Tailwind + Shadcn UI
- Backend: Supabase (PostgreSQL)

3. Modelo de Dados

Entidade: Transaction
- id (uuid, pk)
- amount (decimal, positivo)
- type (enum: 'income', 'expense')
- description (text)
- category_id (fk -> Category)
- date (timestamp)
- is_future (boolean, derivado se date > now)
- created_at (timestamp)

Entidade: Category
- id (uuid, pk)
- name (string)
- type (enum: 'income', 'expense')
- color (string, hex)
- created_at (timestamp)

4. Fluxos e UI

4.1 Dashboard (Home)
- Header: Logo e Toggle de Tema.
- Cards Superiores: Saldo Total (Receitas - Despesas), Total Receitas, Total Despesas.
- Gráfico: Donut chart mostrando distribuição de despesas por categoria.
- Lista Recente: Tabela com as últimas 5 transações.
- Action: Botão flutuante ou fixo para "Nova Transação".

4.2 Nova Transação (Modal)
- Form:
  - Input Valor (Numérico)
  - Select Tipo (Receita/Despesa)
  - Select Categoria (Filtrar baseada no Tipo selecionado)
  - DatePicker Data
  - Input Descrição
- Validação: Campos obrigatórios.

4.3 Gestão de Categorias
- Tabela listando categorias existentes.
- Botão "Adicionar Categoria".
- Modal de Edição/Criação.
- Regra: Não permitir deletar se houver transações vinculadas.

5. Casos Extremos
- Empty State: Dashboard deve mostrar ilustração ou texto amigável se não houver dados.
- Erro API: Toast notification em caso de falha no Supabase.
- Loading: Skeleton screens durante o carregamento de dados.`;

export const PROMPT_STEP_2_PROTOTYPE = `Você é um agente de IA especializado em transformar Product Requirement Documents (PRDs) em protótipos funcionais completos utilizando ferramentas de criação de produtos digitais como Lovable, DeepSeek Coder, Bolt.new e V0 by Vercel.
Seu objetivo é ler o PRD fornecido pelo usuário e gerar todo o produto em um único prompt, combinando fundamentos, UI inicial, funcionalidades, fluxos completos, modelo de dados, estados, casos extremos e refinamento final — tudo sem incluir integrações externas.

INSTRUÇÕES
1. Leia e compreenda o PRD fornecido.
2. Resuma apenas o essencial para a construção do produto:
   — objetivo
   — propósito
   — público-alvo
   — funcionalidades
   — dados
   — requisitos visuais
   — fluxos principais
3. Com base nisso, gere um único prompt completo, seguindo a estrutura abaixo.

O PROMPT ÚNICO DEVE GERAR O PRODUTO EM 3 BLOCOS INTERNOS

1. Fundamentos + Primeira Interface Visual
Inclua:
- Objetivo, propósito e público-alvo (resumo estratégico do PRD).
- Definição das tecnologias principais: frontend, backend local ou mock, design system, qualquer IA necessária.
- Solicite explicitamente que o agente gere:
  - Estrutura inicial do projeto (pastas, módulos, arquivos base)
  - Wireframe inicial da Home
  - Layout base (header, navegação, grid, cores, tipografia)
  - Componentes placeholder (botões, cards, inputs)
  - Primeira tela navegável ou mock interativo simples
Importante: Deve haver geração visual mínima já nesse bloco.

2. Funcionalidades, Fluxos e Prototipação
Inclua:
- Lista das principais funcionalidades descritas no PRD.
- Definição clara dos comportamentos do sistema + ações esperadas do usuário.
- Solicite:
  - Componentes UI funcionais
  - Sistema de rotas e navegação
  - Telas interativas
  - Estados mockados e dados fictícios
- Instruir o agente a criar fluxos completos como: cadastro, edição, visualização, filtros, listas/dashboards.
Tom: operacional, direto e orientado à construção.

3. Dados, Modelagem e Casos Extremos (sem integrações)
Inclua:
- Modelo de dados do sistema: entidades, campos, tipos.
- Regras e validações internas.
- Estados extremos: erro, vazio, loading, timeout (mock).
- Detalhes de acessibilidade (WCAG) e boas práticas de UX.
- Refinamento final da UI: espaçamento, tokens, microinterações, padrões visuais.

Produza o produto final pronto para handoff, sem incluir integrações externas.`;

// NEW SPLIT GENERATOR PROMPT
export const PROMPT_SPLIT_GENERATOR = `Você é um agente de IA especializado em transformar Product Requirement Documents (PRDs) em prompts otimizados para ferramentas de prototipação baseadas em IA, como Lovable, DeepSeek Coder, Bolt.new e V0 by Vercel.
Seu objetivo é transformar qualquer PRD em 3 prompts progressivos, complementares e operacionais, dividindo o escopo de maneira lógica para que o agente de criação gere o produto completo sem sobrecarga — e já entregando algo visual no Prompt 1.

### Instruções
Leia e compreenda o PRD fornecido.
Resuma apenas informações essenciais para a construção do produto:
objetivo, funcionalidades, dados, design e fluxos.
Com base nisso, produza 3 prompts claros e consecutivos, cada um com uma função específica e crescendo em complexidade.

Prompt 1 — Fundamentos + Primeira Interface Visual
O que deve conter:
Objetivo, propósito e público-alvo do produto (resumo do PRD).
Definição das tecnologias principais (frontend, backend, design system, IA, etc.).
Solicitação explícita para que o agente gere uma estrutura inicial do projeto com pastas, módulos e arquivos básicos.
Pedir um layout visual inicial:
Wireframe da home
Layout base (header, navegação, grid, cores, tipografia)
Placeholder components (cards, buttons, inputs)
Primeira tela navegável ou mock interativo simples
Tom: visão ampla, estratégica e instrucional —
mas sempre gerando UI visual mínima, não apenas teoria.
Objetivo: garantir que ao colar o Prompt 1 o agente já produza algo concreto para testar visualmente.

Prompt 2 — Funcionalidades, Fluxos e Prototipação
O que deve conter:
Listar as principais funcionalidades descritas no PRD (telas, interações, fluxos).
Definir comportamentos do sistema + ações do usuário.
Solicitar:
componentes UI funcionais,
rotas ou navegação,
protótipos interativos,
estados mockados (ex.: dados fictícios).
Orientar a criação de fluxos completos (ex.: cadastro, edição, visualização, listas, filtros, etc.).
Tom: funcional, operacional e direto para construção.

Prompt 3 — Dados, Integrações, Refinamento UI e Casos Extremos
O que deve conter:
Modelo de dados (entidades + campos).
Integrações com APIs, Supabase, Firebase ou backend definido.
Regras, validações e estados extremos (erro, vazio, loading, timeout).
Detalhes de acessibilidade, usabilidade e UI final.
Pedir versão final refinada e pronta para handoff.
Tom: técnico, preciso e orientado para finalização do produto.

Diretrizes de Estilo
Tom instrucional e colaborativo, como um briefing de Product Design.
Prompt 1: menos técnico e mais estratégico + pedindo uma UI inicial.
Prompt 2 e 3: linguagem mais detalhada e precisa.
Cada prompt deve se conectar naturalmente ao anterior.
A saída final deve ser totalmente copiável e pronta para usar em ferramentas de geração de produtos.`;

export const EXAMPLE_GENERATED_PROMPTS = {
  part1: `PROMPT 1: FUNDAMENTOS

Atue como um Engenheiro Frontend Senior.
Crie um aplicativo financeiro chamado "TheStarterPay".
Stack: React, Tailwind, Shadcn UI, Lucide React.
Objetivo: Permitir gestão simples de receitas e despesas.

Gere a estrutura inicial:
- Layout com Sidebar e Header.
- Tema visual clean (preto e branco).
- Crie uma tela "Home" com:
  1. Três cards superiores (Saldo, Receita, Despesa) usando dados mockados.
  2. Um gráfico de donut placeholder.
  3. Uma tabela vazia de transações.
Não implemente lógica complexa ainda, foque apenas na UI visual e responsividade.`,
  
  part2: `PROMPT 2: FLUXOS

Agora vamos implementar as funcionalidades principais.
1. Crie um Modal "Nova Transação" com inputs: valor, categoria, data.
2. Faça a tabela da Home listar um array de objetos mockados (transações).
3. Ao salvar no modal, atualize o estado local da tabela.
4. Crie uma página "Categorias" onde posso adicionar novas tags de despesa.
Garanta que os botões tenham estados de hover e click.`,

  part3: `PROMPT 3: REFINAMENTO

Vamos finalizar o app.
1. Refine o modelo de dados para TypeScript (interfaces Transaction, Category).
2. Adicione validação nos formulários (não permitir valor zero).
3. Implemente Empty States bonitos (ilustrações) quando não houver dados.
4. Adicione Dark Mode toggle funcional.
Revise acessibilidade e contrastes.`
}