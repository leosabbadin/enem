'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { correctEssayAction } from './actions';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Lightbulb, ListChecks, Loader2, Target, Edit } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface CorrectionResult {
  resumoGeral: string;
  notaFinal: number;
  competencias: {
    nome: string;
    nota: number;
    porque: string;
    comoMelhorar: string;
  }[];
  errosRecorrentes: {
    trechoProblematico: string;
    sugestaoReescrita: string;
  }[];
  planoDeTreino7Dias: string[];
  oQueMelhorar: string;
}

interface FormState {
  result?: CorrectionResult;
  error?: string;
}

const initialState: FormState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className="w-full font-bold uppercase tracking-wider" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {pending ? 'Analisando...' : 'Corrigir Redação'}
    </Button>
  );
}

export default function EssayCorrectionForm() {
  const [state, formAction] = useActionState(correctEssayAction, initialState);

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl tracking-tight">Área de Correção</CardTitle>
          <CardDescription>Cole sua redação abaixo para obter sua análise completa.</CardDescription>
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
            <p>{state.error}</p>
          </CardContent>
        </Card>
      )}

      {state.result && (
        <Card className="animate-in fade-in-50 duration-500">
          <CardHeader>
            <CardTitle className="font-headline text-3xl tracking-tight">Resultado da Correção</CardTitle>
            <CardDescription>Aqui está o feedback detalhado para sua redação.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center bg-card-foreground p-6 rounded-lg">
              <p className="text-lg text-muted-foreground font-headline">Nota Final</p>
              <p className="text-6xl font-bold text-primary font-headline">{state.result.notaFinal}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 font-headline tracking-tight">Resumo Geral</h3>
              <p className="text-muted-foreground leading-relaxed">{state.result.resumoGeral}</p>
            </div>

            <Separator />

             <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 font-headline text-primary-foreground tracking-tight">O que Melhorar?</h3>
                  <p className="text-muted-foreground leading-relaxed">{state.result.oQueMelhorar}</p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-2xl font-bold mb-4 font-headline tracking-tight">Análise por Competência</h3>
              <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
                {state.result.competencias.map((c, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex justify-between w-full pr-4 items-center">
                        <span className="font-bold font-headline">{c.nome}</span>
                        <span className="text-primary font-bold text-lg">{c.nota}/200</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed space-y-4 pt-2">
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Por que recebeu essa nota:</h4>
                        <p>{c.porque}</p>
                      </div>
                       <div>
                        <h4 className="font-semibold text-foreground mb-1">Como melhorar:</h4>
                        <p>{c.comoMelhorar}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <Separator />

            <div>
              <h3 className="text-2xl font-bold mb-4 font-headline flex items-center gap-2 tracking-tight"><Edit className="h-6 w-6" /> Erros Recorrentes e Reescritas</h3>
              <div className="space-y-4">
                {state.result.errosRecorrentes.map((erro, index) => (
                  <div key={index} className="p-4 border rounded-lg bg-secondary/30">
                    <p className="text-sm text-muted-foreground line-through">"{erro.trechoProblematico}"</p>
                    <p className="mt-2 text-primary-foreground bg-primary/90 p-2 rounded-md">
                      <span className="font-bold">Sugestão:</span> "{erro.sugestaoReescrita}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Separator />
            
            <div>
              <h3 className="text-2xl font-bold mb-4 font-headline flex items-center gap-2 tracking-tight"><ListChecks className="h-6 w-6" /> Plano de Treino para 7 Dias</h3>
              <ul className="space-y-2">
                {state.result.planoDeTreino7Dias.map((task, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><span className="font-bold text-foreground">Dia {index + 1}:</span> {task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
