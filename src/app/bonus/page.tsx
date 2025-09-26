
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Gift, Lightbulb, Swords, BookCheck, CheckCircle2, ChevronRight, Crown } from 'lucide-react';

const bonusItems = [
    {
        id: 'bonus-1',
        icon: <Gift className="h-10 w-10 text-primary" />,
        title: "Bônus 1 – Banco Aristocrata de Temas",
        description: "5 Possíveis Temas de Redação para o ENEM 2025. Cada tema já vem com tese pronta + repertório sugerido.",
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
