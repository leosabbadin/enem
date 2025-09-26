'use server';

// A mock AI response function
async function getMockCorrection(essay: string) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 2500));

  if (!essay || essay.trim().length < 50) {
    throw new Error('A redação é muito curta para ser avaliada. Por favor, insira um texto com pelo menos 50 caracteres.');
  }

  // This is a mock response and should be replaced with a real call to a GenAI flow.
  return {
    notaFinal: 880,
    feedbackGeral: "Sua redação apresenta uma boa estrutura argumentativa e um entendimento claro do tema. No entanto, há espaço para melhorias na coesão entre os parágrafos e na diversificação do repertório sociocultural. Continue praticando para aprimorar esses pontos.",
    competencias: [
      {
        nome: "Competência 1: Domínio da norma culta",
        nota: 180,
        feedback: "Você demonstra bom domínio da norma culta, com poucos desvios gramaticais. Atente-se a algumas vírgulas e concordâncias pontuais para alcançar a nota máxima.",
      },
      {
        nome: "Competência 2: Compreensão da proposta",
        nota: 200,
        feedback: "Excelente! Você compreendeu perfeitamente o tema, aplicou conceitos de várias áreas do conhecimento e desenvolveu o texto dentro da estrutura dissertativo-argumentativa.",
      },
      {
        nome: "Competência 3: Seleção e organização de informações",
        nota: 160,
        feedback: "Seus argumentos são pertinentes, mas a organização das ideias poderia ser mais fluida. Tente conectar melhor os argumentos entre si e com a tese principal para fortalecer sua linha de raciocínio.",
      },
      {
        nome: "Competência 4: Coesão e coerência",
        nota: 160,
        feedback: "O uso de conectivos é adequado, mas pode ser mais variado. A repetição de alguns termos prejudica a fluidez da leitura. Busque sinônimos e articulações mais sofisticadas entre as frases e parágrafos.",
      },
      {
        nome: "Competência 5: Proposta de intervenção",
        nota: 180,
        feedback: "Sua proposta de intervenção é boa e bem detalhada, com agente, ação e meio. Para a nota máxima, tente detalhar ainda mais o 'efeito' esperado da sua proposta, mostrando como ela resolveria o problema de forma concreta.",
      },
    ],
  };
}


export async function correctEssayAction(prevState: any, formData: FormData) {
  const essay = formData.get('essay') as string;
  try {
    const result = await getMockCorrection(essay);
    return { result };
  } catch (error) {
    if (error instanceof Error) {
        return { error: error.message };
    }
    return { error: 'Ocorreu um erro desconhecido ao processar sua redação.' };
  }
}
