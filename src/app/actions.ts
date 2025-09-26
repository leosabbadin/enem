'use server';

export async function correctEssayAction(prevState: any, formData: FormData) {
  const essay = formData.get('essay') as string;
  try {
     if (!essay || essay.trim().length < 50) {
      throw new Error('A redação é muito curta para ser avaliada. Por favor, insira um texto com pelo menos 50 caracteres.');
    }
    // Simulating an AI response for static export
    const result = {
      resumoGeral: 'Esta é uma resposta simulada para o modo de exportação estática. A funcionalidade completa de IA requer um servidor.',
      notaFinal: 960,
      competencias: [
        { nome: 'C1 – Domínio da norma padrão', nota: 200, porque: 'Demonstra excelente domínio da modalidade escrita formal.', comoMelhorar: 'Continue praticando a escrita formal.' },
        { nome: 'C2 – Compreensão do tema e repertório', nota: 200, porque: 'Compreende bem o tema e utiliza repertório sociocultural produtivo.', comoMelhorar: 'Amplie ainda mais seu repertório.' },
        { nome: 'C3 – Organização e argumentação', nota: 160, porque: 'Apresenta informações, fatos e opiniões de forma organizada.', comoMelhorar: 'Trabalhe na progressão lógica entre os parágrafos.' },
        { nome: 'C4 – Coesão', nota: 200, porque: 'Demonstra conhecimento dos mecanismos linguísticos necessários para a construção da argumentação.', comoMelhorar: 'Continue utilizando conectivos variados.' },
        { nome: 'C5 – Proposta de intervenção', nota: 200, porque: 'Elabora muito bem a proposta de intervenção.', comoMelhorar: 'Mantenha o detalhamento dos elementos da proposta.' }
      ],
      errosRecorrentes: [
        { trechoProblematico: 'Onde que a gente vai...', sugestaoReescrita: 'Onde nós vamos...' }
      ],
      planoDeTreino7Dias: Array(7).fill('Revisar a estrutura da redação e praticar um tema por dia.'),
      oQueMelhorar: 'Focar na organização dos argumentos para garantir uma progressão textual mais fluida.'
    };
    return { result };
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
        return { error: error.message };
    }
    return { error: 'Ocorreu um erro desconhecido ao processar sua redação.' };
  }
}
