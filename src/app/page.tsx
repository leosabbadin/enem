import EssayCorrectionForm from './essay-correction-form';

export default function Home() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight font-headline mb-4 text-primary">Potencialize sua Nota no ENEM</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Envie sua redação e receba uma correção detalhada, com nota e feedbacks baseados nos critérios do ENEM, tudo feito por nossa Inteligência Artificial.
        </p>
      </section>
      <EssayCorrectionForm />
    </div>
  );
}
