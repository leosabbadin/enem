'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, MessageSquare } from 'lucide-react';

// QR code image embedded as a base64 data URI
const qrCodeDataUri = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZoAAAGaAQAAAABfoOMzAAAB0ElEQVR4nO2YQY7DIAwEwPz/07vDFpZQtImE2NleKqY8YkBCiWDB+f0S8fz9x+T8v2Yk/2Yk/2Yk/2Yk/2Yk/2Yk/2Yk/2Yk/2Yk/2Yk/2Yk/2Yk/2Yk/2Yk/2b8Yc7J5gA+nJ2cbaB/3A3/OAPhT7x/v5eTnN7dYPIV28+1bE8wOXE+uTzYnsP9A/y/T3ZzY07q+X6H4P8m/DnI/1A8P+zWd533A8Y4VweHHV8O3gB4c+zGgDPx2/g+b/d+HMQ/t8kf2x253Z+3+0APpydnI/h/g+GPwfxz3D+3jB7YvaAPpydnLbBb27+c/zLwf/X+XnOTm4Yv85/APJ/E/4cxD+f+ceD8+n2gT7czYV9YE+x/gGC32/g+X+78ech/I+T/L97YOeL7QPyYHt2Aezk5N3P+ceD82G7eWB3/gDCnxP+HMQ/xvm7A/Z/p3cGwJ9n/h8b4PjJ7h/sYPYH/gDCnxP+HOR/mPB3A/Z/4n1wcgfs7Pgzx/nHhv/nhC1eTq57gP8Lwp+D8OeYf7b5g+/ZA/pwd3K2gR/23wH2P9g8+NkB9v8l+HPI/98m+X+z2c0De/A2J/9mJP9mJP9mJP9mJP9mJP9mJP9mJP9mJP9mJP9mJP9mJP9mJP9mJP9mJP9mJP9m/PNz/q/vH4D+4Q/0X84f/AAAAABJRU5ErkJggg==";

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-headline tracking-tight">Adquira seu Acesso</CardTitle>
          <CardDescription>
            Use o QR Code ou clique no botão abaixo para falar conosco no WhatsApp e solicitar seu login e senha.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6">
          <div className="p-2 border rounded-lg bg-white">
            <Image
              src={qrCodeDataUri}
              alt="QR Code para contato no WhatsApp"
              width={250}
              height={250}
              priority
            />
          </div>
          <Button asChild className="w-full font-bold">
            <a
              href="https://wa.me/5562996564956?text=Ol%C3%A1!%20Adquiri%20o%20m%C3%A9todo%20Hackeando%20a%20Reda%C3%A7%C3%A3o%20do%20Enem%20e%20quero%20meu%20Login%20e%20Senha.%20Meu%20e-mail%20%C3%A9%3A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Solicitar Acesso no WhatsApp
            </a>
          </Button>
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
