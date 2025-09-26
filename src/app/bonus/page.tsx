
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Gift, Lightbulb, Swords, BookCheck, CheckCircle2, ChevronRight, MessagesSquare, ClipboardCheck, Projector, Brain } from 'lucide-react';

const bonusItems = [
    {
        id: 'bonus-1',
        icon: <Gift className="h-10 w-10 text-primary" />,
        title: "Bônus 1 – Banco Aristocrata de Temas",
        description: "5 Possíveis Temas de Redação para o ENEM 2025. Cada tema já vem com tese pronta + repertório sugerido.",
        type: 'themes',
        content: {
            themes: [
                {
                    title: "1. Os desafios da inclusão digital no Brasil",
                    tese: "A exclusão digital aprofunda desigualdades sociais e compromete o exercício da cidadania.",
                    repertorio: "ONU (dados de acesso à internet), Pierre Bourdieu (capital cultural), Constituição de 1988 (direito à educação e ao trabalho)."
                },
                {
                    title: "2. Saúde mental dos jovens na era digital",
                    tese: "A negligência em relação à saúde mental dos jovens é agravada pelo uso excessivo das redes sociais.",
                    repertorio: "OMS (dados sobre saúde mental), Zygmunt Bauman (modernidade líquida), Paulo Freire (importância da educação crítica)."
                },
                {
                    title: "3. O combate à desinformação no Brasil",
                    tese: "A proliferação de fake news ameaça a democracia e exige políticas públicas de educação midiática.",
                    repertorio: "Hannah Arendt (banalidade do mal), Habermas (esfera pública e diálogo crítico), Constituição de 1988 (liberdade de expressão vs. responsabilidade)."
                },
                {
                    title: "4. A valorização da cultura indígena no Brasil contemporâneo",
                    tese: "A invisibilidade das culturas indígenas reforça desigualdades históricas e ameaça a diversidade nacional.",
                    repertorio: "Darcy Ribeiro (povos indígenas e identidade nacional), Gilberto Freyre (formação cultural brasileira), UNESCO (preservação do patrimônio cultural)."
                },
                {
                    title: "5. O impacto da inteligência artificial no mercado de trabalho",
                    tese: "O avanço da inteligência artificial exige políticas públicas para equilibrar inovação e empregabilidade.",
                    repertorio: "Karl Marx (trabalho e alienação), Anthony Giddens (modernidade reflexiva), Relatórios do Fórum Econômico Mundial."
                }
            ],
            benefits: [
                "Já entra no ENEM com argumentos prontos para possíveis temas.",
                "Evita travar e ganha confiança na hora de começar o texto.",
                "Treino direcionado que aumenta as chances de acerto."
            ],
            catchphrase: "“Quem estuda no escuro depende da sorte. Quem tem o Banco Aristocrata de Temas chega no ENEM com munição carregada.”"
        }
    },
    {
        id: 'bonus-2',
        icon: <MessagesSquare className="h-10 w-10 text-primary" />,
        title: "Bônus 2 – 50 Frases Prontas de Filosofia e Sociologia",
        description: "Um arsenal de citações de autoridade para aplicar em qualquer tema e impressionar a banca.",
        type: 'phrases',
        content: {
            sections: [
                { title: 'Filosofia', items: ['Platão – “A falta de conhecimento aprisiona o homem na ignorância.”', 'Aristóteles – “O homem é um ser político; sem cidadania, não há vida plena.”', 'Kant – “O homem deve ser tratado sempre como fim, nunca apenas como meio.”', 'Rousseau – “O contrato social garante liberdade e igualdade.”', 'Hobbes – “Sem organização social, a vida é caótica.”', 'Descartes – “O conhecimento é a base da liberdade.”', 'Sócrates – “A vida sem reflexão não merece ser vivida.”', 'Nietzsche – “Sem crítica, a sociedade se afunda na mediocridade.”', 'Hegel – “A história é o desenvolvimento da razão.”', 'Santo Agostinho – “O amor é a base da justiça verdadeira.”'] },
                { title: 'Sociologia', items: ['Durkheim – “A educação integra o indivíduo à sociedade.”', 'Marx – “A estrutura econômica molda a vida social.”', 'Weber – “A burocracia é o pilar do mundo moderno.”', 'Bourdieu – “O capital cultural perpetua desigualdades.”', 'Bauman – “Na modernidade líquida, tudo é instável e superficial.”', 'Adorno – “A indústria cultural limita o pensamento crítico.”', 'Horkheimer – “A cultura de massa reforça desigualdades.”', 'Foucault – “O poder atua por meio da vigilância e do controle dos corpos.”', 'Habermas – “O diálogo é essencial para a democracia.”', 'Giddens – “A globalização redefine relações sociais.”'] },
                { title: 'Política e Direitos', items: ['Montesquieu – “A separação de poderes garante a liberdade.”', 'Thomas More – “Uma sociedade justa combate desigualdades.”', 'Norberto Bobbio – “Direitos humanos são conquistas históricas.”', 'Tocqueville – “A democracia só existe com participação ativa.”', 'Hannah Arendt – “A indiferença alimenta a banalidade do mal.”'] },
                { title: 'Cultura e Sociedade', items: ['Stuart Hall – “A identidade é construída socialmente.”', 'Michel de Certeau – “O consumo também é resistência.”', 'Paulo Freire – “A educação deve ser libertadora.”', 'Gilberto Freyre – “O Brasil nasceu da mistura de culturas.”', 'Sérgio Buarque de Holanda – “O homem cordial revela contradições sociais.”'] },
                { title: 'Frases Curtas e Impactantes', items: ['“Sem conhecimento, não há liberdade.”', '“A exclusão social fere a democracia.”', '“Tecnologia deve servir ao homem, não o contrário.”', '“A desigualdade é a marca do Brasil.”', '“Educação é o caminho da transformação.”', '“Quem controla a informação, controla o poder.”', '“A cidadania só é plena com igualdade de direitos.”', '“O progresso sem ética gera retrocesso.”', '“A juventude reflete os valores da sociedade.”', '“A democracia exige participação crítica.”'] },
                { title: 'Aplicações em Atualidades', items: ['“A exclusão digital amplia desigualdades.”', '“As mudanças climáticas exigem políticas sustentáveis.”', '“As redes sociais podem fortalecer ou ameaçar a democracia.”', '“A saúde mental dos jovens é desafio urgente.”', '“A inteligência artificial redefine o trabalho.”', '“O direito à moradia garante cidadania.”', '“Sem acesso à cultura, não há pensamento crítico.”', '“A violência estrutural é fruto de falhas históricas.”', '“A globalização aproxima e divide ao mesmo tempo.”', '“O futuro das nações depende da educação inclusiva.”'] },
            ],
            benefits: [
                "Nunca mais ficar sem repertório.",
                "Impacto imediato na redação com citações de autoridade.",
                "Pode ser aplicado em qualquer tema."
            ],
            catchphrase: "“Repertório é arma: quem tem as frases certas vence a banca.”"
        }
    },
    {
        id: 'bonus-3',
        icon: <ClipboardCheck className="h-10 w-10 text-primary" />,
        title: "Bônus 3 – Guia de Propostas de Intervenção (Melhor visualização no PC)",
        description: "Aprenda a fórmula para criar propostas de intervenção perfeitas e garanta a nota máxima na Competência 5.",
        type: 'proposals',
        content: {
            structure: {
                title: 'Estrutura da Conclusão Nota 1000',
                formula: 'Todo modelo segue a fórmula: Ação + Agente (quem) + Modo (como) + Finalidade (para quê).',
                example: '“Portanto, cabe ao Ministério da Educação implementar programas de letramento digital, por meio da inclusão de disciplinas específicas nas escolas públicas, a fim de garantir que os jovens usem a internet de forma crítica e produtiva.”'
            },
            actors: {
                title: 'Tabela de Atores Sociais',
                headers: ['Agente (Quem)', 'Ação (O que deve fazer)', 'Finalidade (Para quê)'],
                rows: [
                    ['Governo Federal', 'Investir em políticas públicas', 'Reduzir desigualdades sociais'],
                    ['Ministério da Educação (MEC)', 'Criar programas educacionais', 'Formar cidadãos críticos e preparados'],
                    ['Ministério da Saúde', 'Promover campanhas de conscientização', 'Prevenir doenças e cuidar da saúde mental'],
                    ['ONGs', 'Desenvolver projetos comunitários', 'Apoiar populações vulneráveis'],
                    ['Mídia', 'Difundir informações verídicas', 'Combater fake news e promover educação midiática'],
                    ['Família', 'Orientar e apoiar os jovens', 'Estimular valores éticos e responsabilidade'],
                    ['Escolas e professores', 'Inserir práticas pedagógicas inovadoras', 'Melhorar o processo de aprendizagem'],
                    ['Empresas privadas', 'Financiar iniciativas sociais', 'Cumprir responsabilidade social'],
                    ['Sociedade civil', 'Exigir políticas mais inclusivas', 'Garantir cidadania plena']
                ]
            },
            models: {
                title: 'Modelos Prontos de Conclusão',
                items: [
                    { title: '1. Inclusão Digital', text: '“Portanto, cabe ao Ministério das Comunicações ampliar a infraestrutura tecnológica em áreas periféricas, por meio da instalação de fibra óptica em parceria com empresas privadas, a fim de reduzir desigualdades sociais.”' },
                    { title: '2. Saúde Mental', text: '“Logo, é necessário que o Ministério da Saúde implemente campanhas nacionais de conscientização sobre saúde mental, utilizando veículos midiáticos de ampla circulação, para promover o bem-estar da população jovem.”' },
                    { title: '3. Combate às Fake News', text: '“Assim, compete à mídia, em parceria com o MEC, promover programas de educação midiática nas escolas, por meio de palestras e materiais didáticos, com o objetivo de formar cidadãos críticos diante da desinformação.”' },
                    { title: '4. Valorização da Cultura Indígena', text: '“Dessa forma, cabe ao Ministério da Cultura criar políticas de valorização das comunidades indígenas, por meio de investimentos em projetos culturais e preservação de línguas nativas, a fim de proteger a diversidade nacional.”' },
                    { title: '5. Impacto da Inteligência Artificial', text: '“Em vista disso, o Ministério da Ciência e Tecnologia deve incentivar programas de capacitação profissional, em parceria com universidades e empresas, com o intuito de preparar trabalhadores para os desafios da automação.”' }
                ]
            },
            benefits: [
                "Nunca mais entregar conclusão vaga.",
                "Garante os 200 pontos da Competência V.",
                "Tem sempre modelos prontos para adaptar a qualquer tema."
            ],
            catchphrase: "“Quem fecha a redação com proposta sólida, abre a porta para a nota 1000.”"
        }
    },
    {
        id: 'bonus-4',
        icon: <Projector className="h-10 w-10 text-primary" />,
        title: "Bônus 4 – Mapa Mental da Estrutura Nota 1000",
        description: "Visualize a estrutura completa da redação para nunca mais se perder no texto.",
        type: 'mindmap',
        content: {
            sections: [
                {
                    title: 'Estrutura Geral',
                    items: [
                        { subtitle: '1. Introdução', points: ['Apresentar o tema.', 'Contextualizar com repertório (filosofia, história, dados).', 'Tese clara: “Esse problema precisa ser resolvido porque X e Y.”', '👉 Frase-chave: “É notório que...” ou “Diante desse cenário...”'] },
                        { subtitle: '2. Desenvolvimento 1 (1º argumento)', points: ['Ideia principal.', 'Explicação do problema.', 'Exemplo ou repertório.', 'Mini-conclusão conectando com a tese.', '👉 Use conectores: “Primeiramente”, “Convém ressaltar que”.'] },
                        { subtitle: '3. Desenvolvimento 2 (2º argumento)', points: ['Outro aspecto relevante.', 'Explicação do impacto.', 'Repertório (autor, lei, dados, caso histórico).', 'Mini-conclusão ligando ao tema central.', '👉 Use conectores: “Ademais”, “Além disso”, “Outrossim”.'] },
                        { subtitle: '4. Conclusão (Proposta de intervenção)', points: ['Reforço da tese.', 'Proposta no modelo quem + como + para quê.', 'Detalhamento com pelo menos 2 agentes sociais.', '👉 Use conectores: “Portanto”, “Logo”, “Dessa forma”.'] }
                    ]
                },
                {
                    title: 'Versão Visual (Mapa Mental)',
                    items: [
                        { subtitle: '🎯 Estrutura Nota 1000 = 4 blocos conectados:', points: ['[INTRODUÇÃO] → [DESENVOLVIMENTO 1] → [DESENVOLVIMENTO 2] → [CONCLUSÃO]'] },
                        { subtitle: 'Introdução = tema + repertório + tese.' },
                        { subtitle: 'Desenvolvimento = argumento + explicação + repertório.' },
                        { subtitle: 'Conclusão = proposta detalhada.' },
                    ]
                },
                {
                    title: 'Dicas Rápidas (para fixar no mapa mental)',
                    items: [
                        { points: ['1h é suficiente: 10min planejar, 40min escrever, 10min revisar.', 'Use sempre 2 repertórios diferentes (um filosófico e um atual).', 'Nunca feche sem proposta detalhada → custa até 200 pontos.', 'Respeite o limite: mínimo 7 linhas, máximo 30 linhas.'] }
                    ]
                }
            ],
            benefits: [
                "Clareza total da estrutura, sem precisar decorar fórmulas complicadas.",
                "Facilita o treino e a revisão.",
                "Pode ser impresso e colado na parede como lembrete visual."
            ],
            catchphrase: "“Quem domina a estrutura, escreve no automático e vence o relógio do ENEM.”"
        }
    }
];

const BonusModal = ({ bonus }: { bonus: typeof bonusItems[0] }) => {
    return (
        <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
            <DialogHeader>
                <DialogTitle className="font-headline text-3xl tracking-tight text-primary">{bonus.title}</DialogTitle>
            </DialogHeader>
            <ScrollArea className="flex-grow pr-6">
                <div className="space-y-8">
                    {bonus.type === 'themes' && (
                        <section className="space-y-4">
                            <h3 className="text-2xl font-bold font-headline flex items-center gap-3"><BookCheck className="h-6 w-6 text-primary" /> Temas e Análises</h3>
                            <div className="pl-9 space-y-4">
                                {bonus.content.themes.map((theme, index) => (
                                    <div key={index} className="p-4 border rounded-lg bg-card/50">
                                        <h4 className="font-bold text-foreground mb-2">{theme.title}</h4>
                                        <div className="text-foreground/90 space-y-2">
                                            <p><span className="font-semibold text-primary/90">Tese:</span> {theme.tese}</p>
                                            <p><span className="font-semibold text-primary/90">Repertório:</span> {theme.repertorio}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {bonus.type === 'phrases' && (
                         <section className="space-y-6">
                            {bonus.content.sections.map((section, index) => (
                                <div key={index}>
                                    <h3 className="text-2xl font-bold font-headline flex items-center gap-3 mb-4"><ChevronRight className="h-5 w-5 text-primary" /> {section.title}</h3>
                                     <div className="pl-9 space-y-3">
                                        {section.items.map((item, i) => (
                                             <p key={i} className="text-foreground/90 border-l-2 border-primary/50 pl-4 italic">
                                                {item}
                                             </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </section>
                    )}

                    {bonus.type === 'proposals' && (
                        <>
                            <section className="space-y-4">
                                <h3 className="text-2xl font-bold font-headline flex items-center gap-3"><ChevronRight className="h-5 w-5 text-primary" /> {bonus.content.structure.title}</h3>
                                <div className="pl-9 space-y-3">
                                    <p className="text-foreground/90">{bonus.content.structure.formula}</p>
                                    <blockquote className="border-l-4 border-primary/50 pl-4 italic text-foreground/90">
                                        {bonus.content.structure.example}
                                    </blockquote>
                                </div>
                            </section>
                            <section className="space-y-4">
                                <h3 className="text-2xl font-bold font-headline flex items-center gap-3"><ChevronRight className="h-5 w-5 text-primary" /> {bonus.content.actors.title}</h3>
                                <div className="pl-9">
                                     <Table>
                                        <TableHeader>
                                            <TableRow>
                                                {bonus.content.actors.headers.map((header, i) => <TableHead key={i}>{header}</TableHead>)}
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {bonus.content.actors.rows.map((row, i) => (
                                                <TableRow key={i}>
                                                    {row.map((cell, j) => <TableCell key={j}>{cell}</TableCell>)}
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </section>
                             <section className="space-y-4">
                                <h3 className="text-2xl font-bold font-headline flex items-center gap-3"><ChevronRight className="h-5 w-5 text-primary" /> {bonus.content.models.title}</h3>
                                <div className="pl-9 space-y-4">
                                    {bonus.content.models.items.map((item, index) => (
                                        <div key={index} className="p-4 border rounded-lg bg-card/50">
                                            <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                                            <p className="text-foreground/90 italic">"{item.text}"</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </>
                    )}
                    
                    {bonus.type === 'mindmap' && (
                         <section className="space-y-6">
                            {bonus.content.sections.map((section, index) => (
                                <div key={index}>
                                    <h3 className="text-2xl font-bold font-headline flex items-center gap-3 mb-4"><Brain className="h-6 w-6 text-primary" /> {section.title}</h3>
                                     <div className="pl-9 space-y-4">
                                        {section.items.map((item, i) => (
                                            <div key={i} className="p-4 border rounded-lg bg-card/50">
                                                {item.subtitle && <h4 className="font-bold text-foreground mb-2">{item.subtitle}</h4>}
                                                {item.points && (
                                                    <ul className="space-y-2">
                                                        {item.points.map((point, pIndex) => (
                                                            <li key={pIndex} className="flex items-start gap-2">
                                                                <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                                                                <span className="text-foreground/90">{point}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </section>
                    )}


                    <section>
                         <Card className="bg-primary/10 border-primary/20">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <Lightbulb className="h-6 w-6 text-primary" />
                                <CardTitle className="font-headline text-2xl tracking-tight text-primary-foreground">Benefício para o aluno</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    {bonus.content.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span className="text-foreground/90">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                                <blockquote className="border-l-4 border-primary pl-4 italic text-primary font-semibold text-lg flex items-center gap-3">
                                    <Swords className="h-6 w-6" />
                                    {bonus.content.catchphrase}
                                </blockquote>
                            </CardContent>
                        </Card>
                    </section>
                </div>
            </ScrollArea>
        </DialogContent>
    )
}

export default function BonusPage() {
    const [openBonus, setOpenBonus] = useState<string | null>(null);

    return (
        <div className="space-y-12">
            <section className="text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline mb-4 text-primary">Conteúdo Bônus</h1>
                <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto">
                    Explore nossos materiais extras para refinar suas habilidades e ganhar uma vantagem competitiva.
                </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {bonusItems.map((bonus) => (
                    <Dialog key={bonus.id} onOpenChange={(isOpen) => !isOpen && setOpenBonus(null)}>
                        <DialogTrigger asChild>
                            <Card
                                className="bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col"
                                onClick={() => setOpenBonus(bonus.id)}
                            >
                                <CardHeader className="flex-grow">
                                    <div className="mb-4">{bonus.icon}</div>
                                    <CardTitle className="font-headline text-xl tracking-tight">{bonus.title}</CardTitle>
                                    <CardDescription className="text-foreground/90">{bonus.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button variant="link" className="p-0">
                                        Abrir Bônus
                                        <ChevronRight className="h-4 w-4 ml-1" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </DialogTrigger>
                        {openBonus === bonus.id && <BonusModal bonus={bonus} />}
                    </Dialog>
                ))}
            </div>
        </div>
    );
}

    