// src/ai/ai-essay-feedback.ts
'use server';
/**
 * @fileOverview An AI agent that scores an essay and provides feedback based on ENEM criteria.
 *
 * - analyzeEssay - A function that handles the essay analysis process.
 * - AnalyzeEssayInput - The input type for the analyzeEssay function.
 * - AnalyzeEssayOutput - The return type for the analyzeEssay function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeEssayInputSchema = z.object({
  essayText: z.string().describe('The text of the essay to be analyzed.'),
});
export type AnalyzeEssayInput = z.infer<typeof AnalyzeEssayInputSchema>;

const CompetenciaSchema = z.object({
    nome: z.string().describe('Nome da competência (e.g., "C1 – Domínio da norma padrão").'),
    nota: z.number().describe('Nota para esta competência, de 0 a 200.'),
    porque: z.string().describe('Explicação do porquê o aluno recebeu essa nota, com 2 a 4 pontos.'),
    comoMelhorar: z.string().describe('Dicas de como melhorar, com 2 a 4 exemplos curtos.'),
});

const ErroRecorrenteSchema = z.object({
    trechoProblematico: z.string().describe('O trecho original da redação com o erro.'),
    sugestaoReescrita: z.string().describe('A sugestão de reescrita para corrigir o erro.'),
});

const AnalyzeEssayOutputSchema = z.object({
  resumoGeral: z.string().describe('Diagnóstico inicial da redação em 3 a 5 linhas.'),
  notaFinal: z.number().describe('A nota final da redação, de 0 a 1000, que é a soma das notas das competências.'),
  competencias: z.array(CompetenciaSchema).length(5).describe('Uma lista com a análise detalhada de cada uma das 5 competências do ENEM.'),
  errosRecorrentes: z.array(ErroRecorrenteSchema).describe('Lista de trechos problemáticos com sugestões de reescrita.'),
  planoDeTreino7Dias: z.array(z.string()).length(7).describe('Um array com 7 microtarefas diárias, uma para cada dia, para melhorar nas falhas encontradas.'),
  oQueMelhorar: z.string().describe('Um parágrafo com os principais pontos que o aluno deve focar para melhorar nas próximas redações.'),
});

export type AnalyzeEssayOutput = z.infer<typeof AnalyzeEssayOutputSchema>;

export async function analyzeEssay(input: AnalyzeEssayInput): Promise<AnalyzeEssayOutput> {
  return analyzeEssayFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeEssayPrompt',
  input: {schema: AnalyzeEssayInputSchema},
  output: {schema: AnalyzeEssayOutputSchema},
  prompt: `Você é um corretor oficial simulado do ENEM e trabalha dentro do produto Redação Nota 1.000. Seu papel é avaliar, corrigir e orientar o aluno de forma clara, didática e com base nas 5 competências do ENEM. Use o tom direto e motivador, com rigor alto.

Redação para análise:
{{{essayText}}}

Avalie a redação seguindo estritamente os critérios do ENEM e retorne a análise no formato JSON especificado.

Critérios de Avaliação:
- C1 – Domínio da norma padrão (0–200): ortografia, concordância, regência, pontuação, vocabulário formal.
- C2 – Compreensão do tema e repertório (0–200): atendimento integral ao tema e ao tipo dissertativo-argumentativo; repertório sociocultural legítimo e pertinente.
- C3 – Organização e argumentação (0–200): tese clara, paragrafação lógica, argumentos consistentes.
- C4 – Coesão (0–200): conectivos variados, paralelismo, retomadas adequadas, progressão textual.
- C5 – Proposta de intervenção (0–200): precisa ter agente, ação, meio/modo, finalidade e detalhamento, além de respeitar os direitos humanos.

Estrutura de resposta obrigatória:
1.  **Resumo geral**: Faça um diagnóstico inicial da redação em 3 a 5 linhas.
2.  **Nota final**: A soma das notas das 5 competências.
3.  **Competência por competência (C1–C5)**:
    -   **Nota atribuída (0–200)**.
    -   **porque**: Explique por que o aluno recebeu essa nota (2–4 pontos).
    -   **comoMelhorar**: Dê 2 a 4 dicas com exemplos curtos de como melhorar.
4.  **Erros recorrentes e reescritas pontuais**: Liste 2 a 4 trechos problemáticos e sugira a reescrita.
5.  **Plano de treino para 7 dias**: Crie 7 microtarefas diárias, uma para cada dia, focadas nas falhas encontradas.
6.  **O que Melhorar**: Forneça um parágrafo consolidado com os principais pontos que o aluno deve focar para melhorar.

⚠️ Zere a redação (notaFinal = 0 e preencha o resumoGeral com a justificativa) se: fuga total ao tema; não for dissertativo-argumentativo; tiver até 7 linhas; conter desrespeito aos direitos humanos; cópia integral de textos motivadores; ou linguagem ofensiva.`,
});

const analyzeEssayFlow = ai.defineFlow(
  {
    name: 'analyzeEssayFlow',
    inputSchema: AnalyzeEssayInputSchema,
    outputSchema: AnalyzeEssayOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
