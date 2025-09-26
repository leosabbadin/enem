'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { correctEssayAction } from './actions';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Loader2 } from 'lucide-react';

interface CorrectionResult {
  notaFinal: number;
  feedbackGeral: string;
  competencias: {
    nome: string;
    nota: number;
    feedback: string;
  }[];
}

interface FormState {
  result?: CorrectionResult;
  error?: string;
}

const initialState: FormState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className="w-full font-bold" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {pending ? 'Analisando...' : 'Corrigir Redação'}
    </Button>
  );
}

export default function EssayCorrectionForm() {
  const [state, formAction] = useFormState(correctEssayAction, initialState);

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Área de Correção</CardTitle>
          <CardDescription>Cole sua redação abaixo e clique em "Corrigir Redação" para obter sua análise completa.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <div className="grid w-full gap-4">
              <Textarea
                name="essay"
                placeholder="Digite ou cole sua redação aqui..."
                className="min-h-[300px] text-base bg-secondary/30"
                required
                minLength={50}
              />
              <SubmitButton />
            </div>
          </form>
        </CardContent>
      </Card>

      {state.error && (
        <Card className="border-destructive bg-destructive/10">
          <CardHeader>
            <CardTitle className="text-destructive font-headline">Ocorreu um Erro</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive-foreground">{state.error}</p>
          </CardContent>
        </Card>
      )}

      {state.result && (
        <Card className="shadow-lg animate-in fade-in-50 duration-500">
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Resultado da Correção</CardTitle>
            <CardDescription>Aqui está o feedback detalhado para sua redação.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center bg-muted p-6 rounded-lg">
              <p className="text-lg text-muted-foreground font-headline">Nota Final</p>
              <p className="text-6xl font-bold text-primary font-headline">{state.result.notaFinal}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 font-headline">Feedback Geral</h3>
              <p className="text-muted-foreground leading-relaxed">{state.result.feedbackGeral}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 font-headline">Análise por Competência</h3>
              <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
                {state.result.competencias.map((c, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex justify-between w-full pr-4 items-center">
                        <span className="font-bold font-headline">{c.nome}</span>
                        <span className="text-primary font-bold text-lg">{c.nota}/200</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {c.feedback}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
