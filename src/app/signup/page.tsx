'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, MessageSquare } from 'lucide-react';

// QR code image embedded as a base64 data URI
const qrCodeDataUri = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEYAQAAAAASt31nAAAC/UlEQVR4nO2YUWrjMBAA4/z/T7fnB0FCIITdOqur1XpiBlhA2ElLd9/x+93v5+c3f5K/8kf+yh/5K3/kr/yVv/JX/spf+St/5a/8lb/yV/7KX/krf+Wv/JW/8lf+yl/5K3/l3z952t9+f3oA2PzK53XW/9sA/6T5P1D8h5t/2w3u3wD4b/L8xT/d/I//Y3IAt9yA8d+pYPfH2l/5K3/lf1f5tUf5dAH8/kP/K/n/9gD4I83fs/wbAfzz5r93w+L/EwD/k+T5B8D+lv99q1/5K3/lf0b5df/P//P8S/L8v/L/G/7/AP6b5P8v2/xX/tP+f2sA/Hnyf/V/dAF8t/n/8g/8lf/yl29e/i4An+b/TfK3v/kC+G7zD/krf+St/O/kV58/AP+s+T/8+bf5//IX/spf+f/O8rf/D8D/tPzF39v8AfyT/5W/8lf+yl/5VvL3Nn8A/0jzd27zdX/zF/7KX/lfkL/pA/hvkv+0+eD2D8D/tPlX/spf+St/5X8seXb7923+C/L/zW8A/D/J/w3/lv8P+Tf9yv9b5c/9w+Y/3fzZ5i/8lf/y/y35d/2/8pfmjzd/5a/8lf+T/H1X/l/5/wD8M8m/+z9v8lf+yl/5X5A/3vytv/kC+C/J/+j/lT/yV/7K/7HkF3/zZ5v/Afg3yV/6X/krf+X/Jvmr/+Wv/NW/f/K/8lf+yv9W8m/6X/krf+Wv/JW/8lf+yl/5K3/lr/yVv/JX/spf+St/5a/8lf+yl/5K3/lr/yVv/JX/spf+St/5a/8lf+yl/5K3/lr/yVv/J//POf/B85S2n8g7e2PAAAAABJRU5ErkJggg==";

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
