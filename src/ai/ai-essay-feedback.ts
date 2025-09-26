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
    nome: z.string().describe('Nome da competência (e.g., "Competência 1: Domínio da norma culta").'),
    nota: z.number().describe('Nota para esta competência, de 0 a 200.'),
    feedback: z.string().describe('Feedback específico para esta competência.'),
});

const AnalyzeEssayOutputSchema = z.object({
  notaFinal: z.number().describe('A nota final da redação, de 0 a 1000, que é a soma das notas das competências.'),
  feedbackGeral: z.string().describe('Um feedback geral e conciso sobre a redação.'),
  competencias: z.array(CompetenciaSchema).length(5).describe('Uma lista com a análise detalhada de cada uma das 5 competências do ENEM.'),
});

export type AnalyzeEssayOutput = z.infer<typeof AnalyzeEssayOutputSchema>;

export async function analyzeEssay(input: AnalyzeEssayInput): Promise<AnalyzeEssayOutput> {
  return analyzeEssayFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeEssayPrompt',
  input: {schema: AnalyzeEssayInputSchema},
  output: {schema: AnalyzeEssayOutputSchema},
  prompt: `Você é um corretor especialista em redações do ENEM. Analise a redação a seguir com base nas 5 competências do ENEM.

Redação:
{{{essayText}}}

Para cada uma das 5 competências, forneça uma nota de 0 a 200 e um feedback construtivo.
- Competência 1: Demonstrar domínio da modalidade escrita formal da língua portuguesa.
- Competência 2: Compreender a proposta de redação e aplicar conceitos das várias áreas de conhecimento para desenvolver o tema, dentro dos limites estruturais do texto dissertativo-argumentativo em prosa.
- Competência 3: Selecionar, relacionar, organizar e interpretar informações, fatos, opiniões e argumentos em defesa de um ponto de vista.
- Competência 4: Demonstrar conhecimento dos mecanismos linguísticos necessários para a construção da argumentação.
- Competência 5: Elaborar proposta de intervenção para o problema abordado, respeitando os direitos humanos.

A nota final deve ser a soma das notas das 5 competências. O feedback geral deve ser um resumo dos pontos fortes e fracos da redação.`,
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
