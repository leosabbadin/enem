import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, FileText, Link2, ThumbsDown } from 'lucide-react';

const bonusContent = [
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: 'Modelos de Redação Nota 1000',
    description: 'Analise redações que alcançaram a nota máxima em edições anteriores do ENEM e inspire-se para criar a sua.'
  },
  {
    icon: <Link2 className="h-10 w-10 text-primary" />,
    title: 'Guia de Conectivos Essenciais',
    description: 'Uma lista completa de conectivos para iniciar parágrafos, conectar ideias e garantir a coesão do seu texto.'
  },
  {
    icon: <ThumbsDown className="h-10 w-10 text-primary" />,
    title: 'Os Erros Mais Comuns (e como evitá-los)',
    description: 'Conheça os erros que mais tiram pontos dos candidatos e aprenda estratégias para não cometê-los.'
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: 'Prompts Gerados por IA',
    description: 'Pratique com uma variedade infinita de temas de redação gerados por nossa IA, simulando possíveis propostas do ENEM.'
  }
];

export default function BonusPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline mb-4 text-primary">Conteúdo Bônus</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore nossos materiais extras para refinar suas habilidades e ganhar uma vantagem competitiva.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {bonusContent.map((item, index) => (
           <Card key={index} className="bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              {item.icon}
              <div className="flex-1">
                <CardTitle className="font-headline text-xl tracking-tight">{item.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
