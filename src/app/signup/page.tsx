
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, MessageSquare } from 'lucide-react';

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-headline tracking-tight">Adquira seu Acesso</CardTitle>
          <CardDescription>
            Clique no botão abaixo para falar conosco no WhatsApp e solicitar seu login e senha.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6">
          <Button asChild className="w-full font-bold py-8 text-lg">
            <a
              href="https://wa.me/5562996105483?text=Ol%C3%A1!%20Adquiri%20o%20m%C3%A9todo%20Hackeando%20a%20Reda%C3%A7%C3%A3o%20do%20Enem%20e%20quero%20meu%20Login%20e%20Senha.%20Meu%20e-mail%20%C3%A9%3A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="mr-2 h-6 w-6" />
              Solicitar Acesso no WhatsApp
            </a>
          </Button>
          <p className="text-sm text-muted-foreground font-semibold">
            (62) 99610-5483 e nos envie seu E-mail!
          </p>
        </CardContent>
        <CardFooter className="flex-col text-center text-sm gap-4">
           <p className="w-full text-muted-foreground">
            Após receber suas credenciais, você poderá acessar a plataforma.
          </p>
          <Button variant="outline" asChild className="w-full">
            <Link href="/login">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para o Login
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
