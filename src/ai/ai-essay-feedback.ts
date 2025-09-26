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

const AnalyzeEssayOutputSchema = z.object({
  grade: z.number().describe('The overall grade of the essay based on ENEM criteria.'),
  feedback: z.string().describe('Detailed feedback on areas for improvement in the essay.'),
});
export type AnalyzeEssayOutput = z.infer<typeof AnalyzeEssayOutputSchema>;

export async function analyzeEssay(input: AnalyzeEssayInput): Promise<AnalyzeEssayOutput> {
  return analyzeEssayFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeEssayPrompt',
  input: {schema: AnalyzeEssayInputSchema},
  output: {schema: AnalyzeEssayOutputSchema},
  prompt: `You are an expert essay grader, specializing in ENEM essays.

You will be provided with an essay, and you will provide a grade and detailed feedback based on ENEM criteria.

Essay Text: {{{essayText}}}

Grade (0-1000): 
Feedback: `,
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
