
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CheckCircle2, BookCopy, ChevronRight, GraduationCap, History, Target, PenTool, Swords, Crown, BrainCircuit, Blocks, TrendingUp, Users, ClipboardCheck, ThumbsDown } from 'lucide-react';

const studyContent = {
  mainTitle: "Capítulos de Estudo",
  mainDescription: "Navegue pelos capítulos para dominar cada aspecto da redação do ENEM, do básico ao avançado.",
  chapters: [
    {
      id: 'chapter-1',
      title: "Capítulo 1 – Fundamentos da Redação Nota 1000",
      description: "Domine as bases essenciais para construir uma redação impecável, desde a estrutura até o repertório.",
      icon: <BookCopy className="h-10 w-10 text-primary" />,
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
              text: '“No cenário contemporâneo, [tema] tem se tornado um desafio recorrente. Essa questão envolve fatores como [argumento 1] e [argumento 2], exigindo uma análise crítica.”'
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
                title: 'Tema: “Os impactos da automação no mercado de trabalho”',
                text: ''
            },
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
                  title: '',
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
    },
    {
      id: 'chapter-2',
      title: "Capítulo 2 – Filosofia e História como Arsenal",
      description: "Aprenda a usar repertório de filosofia e história para dar peso e autoridade aos seus argumentos.",
      icon: <BrainCircuit className="h-10 w-10 text-primary" />,
      subchapters: [
        {
          title: "O que é repertório válido?",
          icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
          content: [
            { type: 'paragraph', text: 'Repertório sociocultural é toda referência externa que se conecta ao tema da redação.' },
            { type: 'paragraph', text: 'Pode vir de: Filosofia, Sociologia, História, Literatura, Constituição, ONU, IBGE, filmes, músicas e até séries.' },
            { type: 'paragraph', text: 'O segredo é: não basta citar, tem que relacionar com o tema.' },
            { type: 'examples', title: '', items: [
                { label: 'Exemplo ruim:', text: '“Segundo Platão, a caverna mostra a ignorância humana.”' },
                { label: 'Exemplo bom:', text: '“A alegoria da caverna, descrita por Platão, revela como a falta de acesso à informação limita a visão crítica do indivíduo — situação semelhante à exclusão digital no Brasil.”' }
            ]}
          ]
        },
        {
          title: "Filosofia aplicada na redação",
          icon: <BrainCircuit className="h-6 w-6 text-primary" />,
          content: [
            { type: 'paragraph', text: 'Aqui estão autores-chave, frases prontas e aplicação prática:' },
            { type: 'list', title: '', items: [
                'Platão (Alegoria da Caverna): “A falta de acesso à informação mantém indivíduos presos na ignorância, como prisioneiros na caverna de Platão.”',
                'Aristóteles (Política e ética): “O homem é um ser político, e a exclusão digital compromete sua plena participação na vida social.”',
                'Kant (Autonomia e razão): “Para Kant, o uso da razão é essencial à liberdade, mas sem acesso à tecnologia esse direito é limitado.”',
                'Bauman (Modernidade líquida): “Na sociedade líquida descrita por Bauman, a falta de inclusão digital amplia a instabilidade e a exclusão.”',
                'Foucault (Vigilância e poder): “Segundo Foucault, o poder se exerce pela vigilância. Nas redes sociais, isso se traduz no controle dos dados pessoais.”',
                'Adorno e Horkheimer (Indústria Cultural): “A indústria cultural, como apontaram Adorno e Horkheimer, transforma informação em produto, o que reforça desigualdades digitais.”'
            ]}
          ]
        },
        {
          title: "História aplicada na redação",
          icon: <History className="h-6 w-6 text-primary" />,
          content: [
            { type: 'paragraph', text: 'Eventos e períodos históricos que podem ser usados como espelho do presente:' },
            { type: 'list', title: '', items: [
                'Revolução Francesa (1789) – igualdade, liberdade, fraternidade → exclusão digital fere esses princípios.',
                'Iluminismo (século XVIII) – valorização da razão e do conhecimento → internet como acesso à informação.',
                'Revolução Industrial (século XIX) – máquinas substituindo trabalhadores → hoje, automação + inteligência artificial.',
                'Ditadura Militar (1964–1985) – censura e falta de informação → paralelo com fake news e bolhas digitais.',
                'Constituição de 1988 – garante direitos sociais → inclusão digital como extensão da cidadania.'
            ]}
          ]
        },
        {
            title: "Temas prováveis e como usar repertório",
            icon: <Target className="h-6 w-6 text-primary" />,
            content: [
                { type: 'list', title: 'Inteligência artificial e ética', items: ['Kant: razão e moral', 'Revolução Industrial: desemprego estrutural'] },
                { type: 'list', title: 'Violência escolar no Brasil', items: ['Durkheim: falha da educação na integração social', 'Constituição 1988: direito à segurança'] },
                { type: 'list', title: 'Desafios da inclusão digital', items: ['Platão: caverna (ignorância)', 'ONU/UNESCO: direito à informação'] },
                { type: 'list', title: 'Mudanças climáticas e responsabilidade social', items: ['Rousseau: contrato social', 'Revolução Industrial: impacto ambiental histórico'] },
            ]
        },
        {
          title: "Exercícios práticos",
          icon: <PenTool className="h-6 w-6 text-primary" />,
          content: [
            { type: 'exercise', title: '', text: 'Escreva uma introdução para o tema “Os desafios da inclusão digital no Brasil” citando Platão.' },
            { type: 'exercise', title: '', text: 'Monte um parágrafo de desenvolvimento para o tema “Inteligência artificial e ética” usando Kant.' },
            { type: 'exercise', title: '', text: 'Relacione a Revolução Francesa ao tema “Desigualdade social no Brasil”.' },
            { type: 'exercise', title: '', text: 'Explique em 3 linhas como Bauman pode ser usado no tema “Relacionamentos líquidos nas redes sociais”.' }
          ]
        }
      ],
      summary: {
        title: 'Resumo Aristocrata',
        icon: <Crown className="h-6 w-6 text-primary" />,
        points: [
          'Repertório não é enfeite, é arma de guerra.',
          'Cite autores e eventos históricos com conexão lógica ao tema.',
          'Filosofia dá profundidade, História dá contexto, Atualidade dá força de prova.'
        ],
        catchphrase: '“Quem domina repertório, domina a banca.”'
      }
    },
    {
      id: 'chapter-3',
      title: "Capítulo 3 – Estrutura de Argumentos Irresistíveis",
      description: "Construa parágrafos que são verdadeiras máquinas de pontuação, seguindo uma fórmula clara e eficaz.",
      icon: <Blocks className="h-10 w-10 text-primary" />,
      subchapters: [
        {
          title: "Fórmula do parágrafo de desenvolvimento",
          icon: <PenTool className="h-6 w-6 text-primary" />,
          content: [
            { type: 'paragraph', title: 'Um parágrafo forte segue a fórmula:', text: '' },
            {
              type: 'list', title: '', items: [
                'Tópico frasal (tese do parágrafo) → Frase curta que apresenta o argumento.',
                'Explicação/Contextualização → Aprofunda a ideia inicial.',
                'Repertório (autor, dado, história, lei, filme, série) → Dá legitimidade ao argumento.',
                'Mini conclusão (amarra o raciocínio) → Mostra como o argumento se conecta ao tema.',
              ]
            }
          ]
        },
        {
          title: "Exemplo prático",
          icon: <GraduationCap className="h-6 w-6 text-primary" />,
          content: [
            { type: 'quote', title: 'Tema: “Os desafios da inclusão digital no Brasil”', text: 'Em primeiro lugar, a falta de infraestrutura tecnológica é um dos principais fatores que dificultam a inclusão digital no Brasil. Em regiões mais afastadas, a ausência de internet de qualidade impede que estudantes e trabalhadores participem ativamente da sociedade digital. Segundo relatório da ONU (2021), cerca de 40% da população mundial ainda não possui acesso regular à internet, o que agrava desigualdades sociais. Assim, enquanto parte da população avança no ambiente digital, outra permanece excluída, ampliando a desigualdade.' },
          ]
        },
        {
          title: "Modelos de Tópicos Frasais (para começar bem)",
          icon: <BookCopy className="h-6 w-6 text-primary" />,
          content: [
            { type: 'list', title: '', items: [
                '“Em primeiro lugar, [problema central] é um dos fatores que dificultam [tema].”',
                '“Além disso, destaca-se [problema central], que compromete [impacto].”',
                '“Outro aspecto importante é [problema central], pois [explicação breve].”',
            ] },
            { type: 'paragraph', title: '', text: '👉 Só de variar essas frases, o aluno evita começar sempre igual e ganha ponto de coesão.' },
          ]
        },
        {
          title: "Tipos de repertório aplicáveis",
          icon: <History className="h-6 w-6 text-primary" />,
          content: [
            {
              type: 'list', title: '', items: [
                'Autoridade: filósofos, sociólogos, economistas (Bauman, Durkheim, Foucault).',
                'Histórico: Iluminismo, Revolução Industrial, Constituição de 1988.',
                'Dados: IBGE, UNESCO, ONU, relatórios oficiais.',
                'Cultural: filmes, séries, músicas, literatura.',
                'Atualidade: notícias recentes (ex.: IA no mercado de trabalho, fake news).',
              ]
            }
          ]
        },
        {
          title: "Exercícios práticos",
          icon: <Target className="h-6 w-6 text-primary" />,
          content: [
            { type: 'exercise', title: '', text: 'Monte um parágrafo de desenvolvimento sobre “Violência escolar no Brasil”, usando Durkheim como repertório.' },
            { type: 'exercise', title: '', text: 'Escreva um tópico frasal para o tema “Inteligência artificial e mercado de trabalho”.' },
            { type: 'exercise', title: '', text: 'Use um evento histórico (Revolução Industrial) em um parágrafo sobre “Desafios da automação no Brasil”.' },
            { type: 'exercise', title: '', text: 'Crie uma mini conclusão conectando um dado estatístico ao tema “Saúde mental na juventude”.' },
          ]
        },
        {
          title: "Checklist do Parágrafo Irresistível",
          icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
          content: [
            { type: 'list', title: '', items: [
                '✅ Tem tópico frasal claro?',
                '✅ Aprofundou a ideia com explicação?',
                '✅ Usou repertório válido e conectado?',
                '✅ Fechou com mini conclusão que amarra?',
            ] },
            { type: 'paragraph', title: '', text: 'Se 4x sim, esse parágrafo é máquina de nota.' },
          ]
        },
      ],
      summary: {
        title: 'Resumo Aristocrata',
        icon: <Crown className="h-6 w-6 text-primary" />,
        points: [
          'Parágrafo não é enrolação: é argumento com arma na mão.',
          'Cada desenvolvimento deve ser uma muralha contra a caneta vermelha.',
          'Fórmula salva do branco, repertório dá peso, mini conclusão garante ponto.',
        ],
        catchphrase: '“Quem domina um parágrafo, domina a redação inteira.”'
      }
    },
    {
      id: 'chapter-4',
      title: "Capítulo 4 – Temas Prováveis do ENEM 2025",
      description: "Antecipe os temas mais quentes para o ENEM 2025 e saiba como adaptar seu repertório para qualquer desafio.",
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      subchapters: [
        {
          title: "Por que prever temas?",
          icon: <BrainCircuit className="h-6 w-6 text-primary" />,
          content: [
            { type: 'paragraph', text: 'O ENEM sempre escolhe temas sociais relevantes e atuais, ligados a direitos humanos.' },
            { type: 'paragraph', text: 'O aluno não precisa acertar o tema exato, mas deve estar pronto para adaptar repertórios a temas próximos.' },
            { type: 'examples', title: '', items: [{ label: 'Exemplo:', text: 'Se cair “inclusão digital”, dá pra usar o mesmo arsenal em “inteligência artificial e desigualdade”.' }] }
          ]
        },
        {
          title: "Temas prováveis de 2025 (com análises)",
          icon: <Target className="h-6 w-6 text-primary" />,
          content: [
            { type: 'list', title: '1. Mudanças Climáticas e Sustentabilidade Urbana', items: [
              'Por que pode cair? Brasil será sede da COP-30 em 2025.',
              'Tese pronta: A falta de políticas sustentáveis compromete o futuro das cidades brasileiras.',
              'Repertório: Papa Francisco (Encíclica Laudato Si, cuidado com a casa comum), Revolução Industrial → início da degradação ambiental, Agenda 2030 da ONU.',
              'Proposta: Investimento em mobilidade sustentável + gestão de resíduos urbanos.'
            ]},
            { type: 'list', title: '2. Inteligência Artificial e Ética', items: [
              'Por que pode cair? Debate global sobre impactos da IA no trabalho, privacidade e educação.',
              'Tese pronta: O avanço da inteligência artificial sem regulamentação ética ameaça direitos fundamentais.',
              'Repertório: Kant → uso da razão com responsabilidade moral, Foucault → vigilância e controle dos dados, Revolução Industrial → impacto tecnológico no emprego.',
              'Proposta: Criação de leis para uso ético da IA + capacitação profissional.'
            ]},
            { type: 'list', title: '3. Saúde Mental dos Jovens e Redes Sociais', items: [
              'Por que pode cair? Dados crescentes de ansiedade e depressão na juventude.',
              'Tese pronta: O uso desregulado das redes sociais tem agravado problemas de saúde mental entre jovens brasileiros.',
              'Repertório: Freud → conflitos psíquicos, Bauman → liquidez dos relacionamentos virtuais, Constituição 1988 → direito à saúde.',
              'Proposta: Programas escolares de educação emocional + campanhas de uso consciente das redes.'
            ]},
            { type: 'list', title: '4. Desinformação e Fake News', items: [
              'Por que pode cair? Deepfakes, eleições municipais e crise de confiança na informação.',
              'Tese pronta: A proliferação de fake news ameaça a democracia e exige alfabetização midiática.',
              'Repertório: Hannah Arendt → banalização da verdade, Constituição 1988 → liberdade de expressão vs. responsabilidade, Exemplos atuais: eleições, pandemia.',
              'Proposta: Projetos de educação midiática + regulação das plataformas digitais.'
            ]},
            { type: 'list', title: '5. Direito à Moradia e à Cidade', items: [
              'Por que pode cair? Crise habitacional e urbanização desordenada.',
              'Tese pronta: A falta de políticas habitacionais efetivas compromete a dignidade humana nas cidades brasileiras.',
              'Repertório: Constituição 1988 (art. 6º: moradia como direito social), Revolução Industrial → favelização urbana histórica, Relatórios da ONU-Habitat.',
              'Proposta: Programas de habitação popular + urbanização sustentável.'
            ]}
          ]
        },
        {
          title: "Fórmula de adaptação",
          icon: <PenTool className="h-6 w-6 text-primary" />,
          content: [
            { type: 'list', title: 'Para qualquer tema novo, o aluno deve:', items: [
              'Definir tese clara (problema + impacto).',
              'Escolher 1 filósofo ou dado histórico aplicável.',
              'Amarrar com Constituição ou ONU (direito humano).',
              'Fechar com proposta detalhada (quem, como, para quê).'
            ]}
          ]
        },
        {
          title: "Exercícios práticos",
          icon: <Target className="h-6 w-6 text-primary" />,
          content: [
            { type: 'exercise', text: 'Escreva uma introdução para o tema “Desinformação no Brasil” usando Hannah Arendt.' },
            { type: 'exercise', text: 'Monte um parágrafo de desenvolvimento para o tema “Saúde mental e juventude” com Bauman.' },
            { type: 'exercise', text: 'Crie uma proposta de intervenção para o tema “Inteligência artificial e ética”, detalhando ator, ação e objetivo.' },
            { type: 'exercise', text: 'Adapte um repertório da Revolução Industrial para o tema “Mudanças climáticas atuais”.' }
          ]
        }
      ],
      summary: {
        title: 'Resumo Aristocrata',
        icon: <Crown className="h-6 w-6 text-primary" />,
        points: [
          'O ENEM 2025 deve girar em torno de meio ambiente, tecnologia, informação ou direitos sociais.',
          'Quem estuda temas prováveis tem vantagem, mas o segredo é saber adaptar repertório.',
          'Um Aristocrata não é surpreendido: ele já tem munição para qualquer guerra.'
        ],
        catchphrase: '“Quem prevê, domina. Quem improvisa, arrisca.”'
      }
    },
    {
      id: 'chapter-5',
      title: "Capítulo 5 – Treino Intensivo de Conclusões",
      description: "Aprenda a fórmula para criar propostas de intervenção perfeitas e garanta a nota máxima na Competência 5.",
      icon: <ClipboardCheck className="h-10 w-10 text-primary" />,
      subchapters: [
        {
          title: "Estrutura da conclusão",
          icon: <BookCopy className="h-6 w-6 text-primary" />,
          content: [
            { type: 'quote', title: 'Fórmula padrão:', text: 'Portanto, é essencial que [quem] promova [o quê], por meio de [como], com o objetivo de [para quê]. Assim, será possível [impacto positivo].' }
          ]
        },
        {
          title: "Exemplos aplicados",
          icon: <GraduationCap className="h-6 w-6 text-primary" />,
          content: [
            { type: 'examples', title: '1. Tema: Inclusão digital no Brasil', items: [{ label: '', text: 'Portanto, é essencial que o Ministério das Comunicações amplie o acesso à internet no país, por meio de investimentos em infraestrutura tecnológica nas áreas rurais e periféricas, com o objetivo de garantir igualdade de oportunidades educacionais e profissionais. Assim, será possível reduzir a exclusão digital e social.'}] },
            { type: 'examples', title: '2. Tema: Saúde mental dos jovens', items: [{ label: '', text: 'Portanto, é fundamental que o Ministério da Educação, em parceria com o Ministério da Saúde, desenvolva programas de apoio psicológico nas escolas, por meio da contratação de profissionais capacitados e campanhas de conscientização, com o objetivo de promover o bem-estar emocional dos estudantes. Dessa forma, será possível prevenir casos de depressão e ansiedade na juventude.'}] },
            { type: 'examples', title: '3. Tema: Desinformação e fake news', items: [{ label: '', text: 'Portanto, é necessário que o Congresso Nacional crie legislações mais rígidas contra a propagação de notícias falsas, por meio de regulamentação das plataformas digitais e incentivo à educação midiática nas escolas, com o objetivo de garantir a circulação de informações verdadeiras. Assim, a sociedade poderá se proteger da manipulação e fortalecer a democracia.'}] },
            { type: 'examples', title: '4. Tema: Mudanças climáticas', items: [{ label: '', text: 'Portanto, é imprescindível que o governo federal, em parceria com empresas privadas e ONGs ambientais, invista em políticas sustentáveis, por meio da ampliação da coleta seletiva, incentivo a energias limpas e transporte público eficiente, com o objetivo de minimizar os impactos ambientais urbanos. Dessa maneira, será possível assegurar qualidade de vida para as próximas gerações.'}] }
          ]
        },
        {
          title: "Tabelas de atores sociais para usar em qualquer tema",
          icon: <Users className="h-6 w-6 text-primary" />,
          content: [
            { type: 'list', title: '', items: [
                'Governo federal → criar leis, políticas públicas, programas nacionais.',
                'Ministério da Educação → melhorar escolas, incluir disciplinas, capacitar professores.',
                'Ministério da Saúde → campanhas de conscientização, atendimento gratuito.',
                'ONGs → ações locais, projetos sociais.',
                'Mídia → campanhas educativas, divulgação.',
                'Família e escola → formação de valores, apoio psicológico.',
                'Empresas privadas → financiar projetos, investir em inovação.',
            ]}
          ]
        },
        {
          title: "Erros que derrubam nota",
          icon: <ThumbsDown className="h-6 w-6 text-primary" />,
          content: [
            { type: 'list', title: '', items: [
              '❌ Conclusão vaga: “O governo deve melhorar a educação.”',
              '❌ Sem detalhar como: “A sociedade precisa mudar.”',
              '❌ Sem objetivo: “É importante resolver isso.”',
              '❌ Repetição da introdução sem proposta nova.'
            ]}
          ]
        },
        {
          title: "Exercícios práticos",
          icon: <PenTool className="h-6 w-6 text-primary" />,
          content: [
            { type: 'exercise', title: '', text: 'Crie uma proposta de intervenção detalhada para o tema “Violência escolar no Brasil”.' },
            { type: 'exercise', title: '', text: 'Escreva 2 conclusões diferentes para o tema “Inteligência artificial e mercado de trabalho”, cada uma com atores sociais distintos.' },
            { type: 'exercise', title: '', text: 'Reescreva esta proposta vaga em formato detalhado:\n\n“O governo deve investir em saúde mental.”' }
          ]
        }
      ],
      summary: {
        title: 'Resumo Aristocrata',
        icon: <Crown className="h-6 w-6 text-primary" />,
        points: [
          'A conclusão é a cereja da redação: se faltar, perde ponto alto.',
          'Fórmula salva do improviso: Quem + O quê + Como + Para quê.',
          'Ter modelos prontos é como entrar na prova com armas carregadas.'
        ],
        catchphrase: '“Quem fecha com força, abre o caminho para o mil.”'
      }
    }
  ]
};

const renderContent = (contentItem: any, index: number) => {
  switch (contentItem.type) {
    case 'paragraph':
      return (
        <div key={index}>
          {contentItem.title && <h4 className="font-bold text-foreground mt-4 mb-2">{contentItem.title}</h4>}
          <p className="text-foreground/90 whitespace-pre-line">{contentItem.text}</p>
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
                <span className="text-foreground/90">{item}</span>
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
                    <div key={i} className="p-3 bg-card/50 rounded-md border">
                        <p className="font-semibold text-foreground/80 text-sm">{item.label}</p>
                        <p className="text-foreground/90 whitespace-pre-line">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
       );
    case 'exercise':
      return (
        <div key={index} className="mt-6 p-4 border-l-4 border-primary bg-primary/10 rounded-r-md">
            {contentItem.title && <h4 className="font-bold text-primary mb-2">{contentItem.title}</h4>}
            <p className="text-foreground/90 whitespace-pre-line">{contentItem.text}</p>
        </div>
      );
    case 'quote':
        return (
            <blockquote key={index} className="mt-4 border-l-4 border-border pl-4 italic text-foreground/80">
                {contentItem.title && <h4 className="font-bold text-foreground not-italic mb-2">{contentItem.title}</h4>}
                {contentItem.text && <p className="whitespace-pre-line">{contentItem.text}</p>}
            </blockquote>
        );
    default:
      return null;
  }
};

const ChapterModal = ({ chapter }: { chapter: typeof studyContent.chapters[0] }) => {
    return (
        <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
            <DialogHeader>
                <DialogTitle className="font-headline text-3xl tracking-tight text-primary">{chapter.title}</DialogTitle>
            </DialogHeader>
            <ScrollArea className="flex-grow pr-6">
                <div className="space-y-8">
                    {chapter.subchapters.map((sub, index) => (
                        <section key={index} className="space-y-4 border-b border-border/50 pb-6 last:border-b-0 last:pb-0">
                            <h3 className="text-2xl font-bold font-headline flex items-center gap-3">{sub.icon} {sub.title}</h3>
                            <div className="pl-9 space-y-4">
                                {sub.content.map(renderContent)}
                            </div>
                        </section>
                    ))}
                    <section>
                         <Card className="bg-card/80 border-primary border-2">
                            <CardHeader className="flex flex-row items-center gap-4">
                                {chapter.summary.icon}
                                <CardTitle className="font-headline text-2xl tracking-tight text-primary">{chapter.summary.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    {chapter.summary.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span className="text-foreground/90">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                                <blockquote className="border-l-4 border-primary pl-4 italic text-primary font-semibold text-lg flex items-center gap-3">
                                    <Swords className="h-6 w-6" />
                                    {chapter.summary.catchphrase}
                                </blockquote>
                            </CardContent>
                        </Card>
                    </section>
                </div>
            </ScrollArea>
        </DialogContent>
    )
}


export default function EstudoPage() {
  const [openChapter, setOpenChapter] = useState<string | null>(null);

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline mb-4 text-primary">{studyContent.mainTitle}</h1>
        <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto">
            {studyContent.mainDescription}
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {studyContent.chapters.map((chapter) => (
            <Dialog key={chapter.id} onOpenChange={(isOpen) => !isOpen && setOpenChapter(null)}>
                <DialogTrigger asChild>
                    <Card
                        className="bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col"
                        onClick={() => setOpenChapter(chapter.id)}
                    >
                        <CardHeader className="flex-grow">
                            <div className="mb-4">{chapter.icon}</div>
                            <CardTitle className="font-headline text-xl tracking-tight">{chapter.title}</CardTitle>
                            <CardDescription className="text-foreground/90">{chapter.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button variant="link" className="p-0">
                                Abrir Capítulo
                                <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                        </CardContent>
                    </Card>
                </DialogTrigger>
                {openChapter === chapter.id && <ChapterModal chapter={chapter} />}
            </Dialog>
        ))}
      </div>
    </div>
  );
}

    