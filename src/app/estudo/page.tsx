import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, BookCopy, ChevronRight, GraduationCap, History, Target, PenTool, Swords, Crown } from 'lucide-react';

const studyContent = {
  title: "Capítulo 1 – Fundamentos da Redação Nota 1000",
  subchapters: [
    {
      title: "Como o ENEM Corrige sua Redação",
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      content: [
        { 
          type: 'paragraph',
          title: 'Explicação',
          text: 'A redação é corrigida por 2 avaliadores diferentes, cada um pode dar até 200 pontos em 5 competências. Se houver diferença grande, entra um terceiro corretor. A nota final é a média.' 
        },
        { 
          type: 'list',
          title: 'As 5 Competências:',
          items: [
            'Norma Culta da Língua Portuguesa – português correto, sem gírias, abreviações.',
            'Compreensão do Tema – não fugir do tema, não tangenciar.',
            'Seleção e Organização de Argumentos – coerência, defesa clara de uma tese.',
            'Coesão e Coerência – conectores, progressão de ideias.',
            'Proposta de Intervenção – solução detalhada: quem faz, como faz, para quê.'
          ] 
        },
        { 
          type: 'examples',
          title: 'Exemplos de erro que derrubam nota:',
          items: [
            { label: 'Competência 2', text: 'Tema “saúde mental” e o aluno fala só sobre “COVID”. → Fuga parcial.' },
            { label: 'Competência 5', text: 'Proposta vaga → “O governo deve melhorar a educação.” (sem como).' }
          ] 
        },
        { 
          type: 'exercise',
          title: 'Exercício',
          text: 'Leia o tema “Desafios para combater a violência escolar no Brasil”.\n👉 Escreva em uma frase qual seria sua tese principal.'
        }
      ]
    },
    {
      title: "A Estrutura que Nunca Falha",
      icon: <BookCopy className="h-6 w-6 text-primary" />,
      content: [
        { 
          type: 'list',
          title: 'Estrutura padrão:',
          items: [
            'Introdução: apresenta o tema + tese.',
            'Desenvolvimento 1: argumento + exemplo + análise.',
            'Desenvolvimento 2: segundo argumento + exemplo + análise.',
            'Conclusão: retomada + proposta de intervenção.'
          ]
        },
        {
          type: 'quote',
          title: 'Fórmula da introdução:',
          text: '“No cenário contemporâneo, [tema] has se tornado um desafio recorrente. Essa questão envolve fatores como [argumento 1] e [argumento 2], exigindo uma análise crítica.”'
        },
        {
          type: 'quote',
          title: 'Fórmula da conclusão:',
          text: '“Portanto, é essencial que [ator social] promova [ação], por meio de [meio detalhado], com o objetivo de [finalidade]. Assim, será possível [impacto positivo].”'
        },
        { 
          type: 'exercise',
          title: 'Exercício',
          text: 'Monte uma introdução para o tema “O impacto das redes sociais na democracia brasileira”.'
        }
      ]
    },
    {
      title: "Repertório de Autoridade",
      icon: <History className="h-6 w-6 text-primary" />,
      content: [
        {
            type: 'paragraph',
            title: 'O que é Repertório Sociocultural?',
            text: 'São referências externas (filosofia, literatura, história, leis, dados) que provam seu argumento.'
        },
        {
            type: 'list',
            title: 'Repertórios prontos para o aluno usar:',
            items: [
                'Bauman (sociedade líquida) → instabilidade dos laços sociais.',
                'Durkheim (educação e sociedade) → escola molda comportamento.',
                'Foucault (vigilância) → redes sociais como controle.',
                'Constituição de 1988 → direitos fundamentais (art. 6º: saúde, educação, lazer).',
                'ONU/UNESCO → relatórios sobre desigualdade, educação global.',
                'Adorno e Horkheimer → Indústria Cultural e manipulação de massa.'
            ]
        },
        {
            type: 'examples',
            title: 'Exemplo aplicado:',
            items: [
                { label: 'Tema: “Caminhos para combater a violência escolar”', text: '👉 “Segundo Durkheim, a educação é fundamental para a integração social, e sua falha pode gerar rupturas, como a violência nas escolas.”' }
            ]
        },
        {
            type: 'exercise',
            title: 'Exercício',
            text: 'Escolha 2 autores acima e crie frases aplicáveis ao tema “Desafios do uso da tecnologia na educação”.'
        }
      ]
    },
    {
      title: "Exemplo Comentado de Redação",
      icon: <PenTool className="h-6 w-6 text-primary" />,
      content: [
        {
            type: 'quote',
            title: 'Redação Nota 600 (ruim):',
            text: '“O trabalho está acabando porque a tecnologia está tomando os empregos. Isso é ruim para todo mundo. As pessoas vão ficar sem trabalho e isso vai gerar pobreza. O governo precisa ajudar.”'
        },
        {
            type: 'list',
            title: '⚠️ Problemas:',
            items: [
                'Argumento raso.',
                'Sem repertório.',
                'Proposta vaga (“governo precisa ajudar”).'
            ]
        },
        {
            type: 'quote',
            title: 'Redação Nota 960 (boa):',
            text: '“No cenário contemporâneo, a automação dos processos produtivos representa um avanço tecnológico significativo. Contudo, ela também gera desafios ao mercado de trabalho, como o aumento do desemprego estrutural.\nSegundo Karl Marx, as condições materiais moldam a vida social, o que explica a exclusão de trabalhadores sem qualificação tecnológica. Além disso, a 4ª Revolução Industrial repete o impacto social da 1ª, marcada pelo desemprego e precarização.\nPortanto, é essencial que o Ministério da Educação promova programas de capacitação digital por meio de cursos técnicos acessíveis, a fim de garantir a inclusão de trabalhadores e reduzir os efeitos da automação.”'
        },
        {
            type: 'list',
            title: '✅ Acertos:',
            items: [
                'Estrutura clara.',
                'Repertório bem usado (Marx + Revolução Industrial).',
                'Proposta detalhada (quem, como, para quê).'
            ]
        }
      ]
    },
    {
      title: "Atividades Práticas",
      icon: <Target className="h-6 w-6 text-primary" />,
      content: [
          {
              type: 'list',
              items: [
                  'Escreva uma introdução para o tema: “Inteligência artificial e desafios éticos no Brasil”.',
                  'Escolha 1 filósofo ou sociólogo e conecte-o ao tema acima.',
                  'Faça uma proposta de intervenção detalhada para resolver esse desafio.'
              ]
          }
      ]
    }
  ],
  summary: {
    title: 'Resumo Aristocrata',
    icon: <Crown className="h-6 w-6 text-primary" />,
    points: [
      'A redação do ENEM é uma fórmula: estrutura + repertório + intervenção detalhada.',
      'Quem entende as 5 competências evita erros básicos.',
      'Quem tem frases prontas e exemplos históricos sempre sai na frente.'
    ],
    catchphrase: '“Redação não é talento, é método. Quem segue a fórmula, chega no topo.”'
  }
};

const renderContent = (contentItem: any, index: number) => {
  switch (contentItem.type) {
    case 'paragraph':
      return (
        <div key={index}>
          {contentItem.title && <h4 className="font-bold text-foreground mt-4 mb-2">{contentItem.title}</h4>}
          <p className="text-muted-foreground whitespace-pre-line">{contentItem.text}</p>
        </div>
      );
    case 'list':
      return (
        <div key={index}>
          {contentItem.title && <h4 className="font-bold text-foreground mt-4 mb-2">{contentItem.title}</h4>}
          <ul className="space-y-2 pl-4">
            {contentItem.items.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case 'examples':
       return (
        <div key={index}>
            {contentItem.title && <h4 className="font-bold text-foreground mt-4 mb-2">{contentItem.title}</h4>}
            <div className="space-y-2">
                {contentItem.items.map((item: {label: string, text: string}, i: number) => (
                    <div key={i} className="p-3 bg-card/50 rounded-md">
                        <p className="font-semibold text-foreground/80 text-sm">{item.label}</p>
                        <p className="text-muted-foreground whitespace-pre-line">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
       );
    case 'exercise':
      return (
        <div key={index} className="mt-6 p-4 border-l-4 border-primary bg-primary/10 rounded-r-md">
            <h4 className="font-bold text-primary-foreground mb-2">{contentItem.title}</h4>
            <p className="text-muted-foreground whitespace-pre-line">{contentItem.text}</p>
        </div>
      );
    case 'quote':
        return (
            <blockquote key={index} className="mt-4 border-l-4 border-border pl-4 italic text-muted-foreground">
                <h4 className="font-bold text-foreground not-italic mb-2">{contentItem.title}</h4>
                <p className="whitespace-pre-line">{contentItem.text}</p>
            </blockquote>
        );
    default:
      return null;
  }
};


export default function EstudoPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline mb-4 text-primary">{studyContent.title}</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Navegue pelos capítulos para dominar cada aspecto da redação do ENEM, do básico ao avançado.
        </p>
      </section>

      <Accordion type="single" collapsible className="w-full space-y-4" defaultValue='subchapter-0'>
         {studyContent.subchapters.map((subchapter, index) => (
            <AccordionItem value={`subchapter-${index}`} key={index} className="border bg-card rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4">
                        {subchapter.icon}
                        <span className="text-xl font-headline font-bold text-left">{subchapter.title}</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4 space-y-4">
                    {subchapter.content.map(renderContent)}
                </AccordionContent>
            </AccordionItem>
         ))}
      </Accordion>

      <Card className="bg-card">
        <CardHeader className="flex flex-row items-center gap-4">
            {studyContent.summary.icon}
            <CardTitle className="font-headline text-2xl tracking-tight">{studyContent.summary.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <ul className="space-y-2">
                {studyContent.summary.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{point}</span>
                    </li>
                ))}
            </ul>
             <blockquote className="border-l-4 border-primary pl-4 italic text-primary-foreground font-semibold text-lg flex items-center gap-3">
                <Swords className="h-6 w-6" />
                {studyContent.summary.catchphrase}
            </blockquote>
        </CardContent>
      </Card>
    </div>
  );
}
