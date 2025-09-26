
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Gift, Lightbulb, Swords, BookCheck, CheckCircle2 } from 'lucide-react';

const bonusItems = [
    {
        icon: <Gift className="h-10 w-10 text-primary" />,
        title: "Bônus 1 – Banco Aristocrata de Temas",
        description: "5 Possíveis Temas de Redação para o ENEM 2025. Cada tema já vem com tese pronta + repertório sugerido.",
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
];

export default function BonusPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline mb-4 text-primary">Conteúdo Bônus</h1>
        <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto">
          Explore nossos materiais extras para refinar suas habilidades e ganhar uma vantagem competitiva.
        </p>
      </section>

      <section className="space-y-8 max-w-4xl mx-auto">
        {bonusItems.map((item, index) => (
            <Card key={index} className="bg-card/80 border-primary/20">
                <CardHeader>
                    <div className="flex items-start gap-4">
                        {item.icon}
                        <div className="flex-1">
                            <CardTitle className="font-headline text-2xl tracking-tight">{item.title}</CardTitle>
                            <CardDescription className="text-foreground/90">{item.description}</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <Accordion type="single" collapsible className="w-full">
                        {item.themes.map((theme, themeIndex) => (
                             <AccordionItem value={`item-${themeIndex}`} key={themeIndex}>
                                <AccordionTrigger className="text-left hover:no-underline font-headline font-semibold">
                                    <div className="flex items-center gap-3">
                                        <BookCheck className="h-5 w-5 text-primary flex-shrink-0" />
                                        <span>{theme.title}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-foreground/90 leading-relaxed space-y-3 pt-2 pl-4 border-l-2 border-primary/50 ml-4">
                                     <div>
                                        <h4 className="font-semibold text-foreground mb-1">Tese:</h4>
                                        <p>{theme.tese}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-1">Repertório:</h4>
                                        <p>{theme.repertorio}</p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    
                    <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg space-y-4">
                        <div className="flex items-start gap-3">
                            <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold mb-2 font-headline text-primary-foreground tracking-tight">Benefício para o aluno</h3>
                                <ul className="space-y-1">
                                    {item.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                                            <span className="text-foreground/90">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <blockquote className="border-l-4 border-primary pl-4 italic text-primary font-semibold text-lg flex items-center gap-3">
                        <Swords className="h-6 w-6" />
                        {item.catchphrase}
                    </blockquote>

                </CardContent>
            </Card>
        ))}
      </section>
    </div>
  );
}
