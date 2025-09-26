import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookText, BrainCircuit, MessageSquareQuote, PencilRuler } from 'lucide-react';

const studyChapters = [
  {
    icon: <PencilRuler className="h-10 w-10 text-primary" />,
    title: 'Estrutura da Redação Dissertativo-Argumentativa',
    description: 'Aprenda a base de toda redação do ENEM: introdução, desenvolvimento e conclusão. Domine o esqueleto do texto nota 1000.'
  },
  {
    icon: <MessageSquareQuote className="h-10 w-10 text-primary" />,
    title: 'A Tese: O Coração do seu Texto',
    description: 'Descubra como criar uma tese clara e forte que guiará toda a sua argumentação e impressionará o corretor.'
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: 'Argumentação e Repertório Sociocultural',
    description: 'Saiba como usar filmes, livros, dados e fatos históricos para construir argumentos sólidos e enriquecer sua redação.'
  },
  {
    icon: <BookText className="h-10 w-10 text-primary" />,
    title: 'As 5 Competências do ENEM',
    description: 'Entenda em detalhes o que os corretores avaliam em cada uma das cinco competências e como garantir a pontuação máxima em todas.'
  }
];

export default function EstudoPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-primary">Capítulos de Estudo</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Navegue pelos capítulos para dominar cada aspecto da redação do ENEM, do básico ao avançado.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {studyChapters.map((chapter, index) => (
          <Card key={index} className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              {chapter.icon}
              <div className="flex-1">
                <CardTitle className="font-headline text-xl">{chapter.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{chapter.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
