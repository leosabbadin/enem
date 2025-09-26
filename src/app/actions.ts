'use server';
import { analyzeEssay } from '@/ai/ai-essay-feedback';

export async function correctEssayAction(prevState: any, formData: FormData) {
  const essay = formData.get('essay') as string;
  try {
     if (!essay || essay.trim().length < 50) {
      throw new Error('A redação é muito curta para ser avaliada. Por favor, insira um texto com pelo menos 50 caracteres.');
    }
    const result = await analyzeEssay({ essayText: essay });
    return { result };
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
        return { error: error.message };
    }
    return { error: 'Ocorreu um erro desconhecido ao processar sua redação.' };
  }
}
