'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, MessageSquare } from 'lucide-react';

// QR code image embedded as a base64 data URI
const qrCodeDataUri = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEYAQAAAAASt31nAAACs0lEQVR4nO2YQW7jMAwE//8y+8A6KSDEMa2666oHgoGk2CTLy1fsvj5+fX8+f7/6P/k//y//5X/8n/+X//J//s//+T//L//nf/yf//N//l/+z//5P/8v/+f//J//83/+X//J//k//+f//L//n/+X//N//s//+b+pf3/6/f3sADjzK5/XWf9vY/BP83+Q+A83/7Yb3L/l8N/k+Yt/uvk//4/JAW55A+O/U8HuT7W//Jf/839V/bVH+XSB//xD/yv5//Yh+CPN37P8GxT88+a/d8Pi/xOB/0ny/APg/pb/fdUv/+X//J9Rft3/8//8/Jfk+X/l/z/8/0vw3yT/f7n5K/9p/7+1AP558n/1f3Qp/G7z/+Uf/Jf/89duXv4uwJ/m/03yt7/5pfC7zT/4L//nf+TvJ7/6/AH4Z83/4c+/zf/nv/yX//N/zvK3/w+E/2n5i7+3+QP4J/8v/+X//J//lbby9zZ/gP9I83du83V/8xf+y3/5P5B/0wfwnyT/afPB7V8g/KfNX/kv/+f//K8kj11/3+ZfkP9vfzcC/5/k/4Z/y/8H/Ju+5f+t8mf+YfOfbv5s8xf+y3/5/1vy7/p/5S/NH2/+y3/5P/8n+fdd+X/l/wPwzyT/7v+8+S//5X/8n8gfe/7W33wB/Jfk/+j/5X/8n/+X/2PJL/7mzTb/V+DflL/0v/yX//P/TfJX/8t/+S//9W/+V/7L//l/K/k3/S//5X/8n/+X//J//s//+T//L//nf/yf//N//l/+z//5P/8v/+f//J//83/+X//J//k//+f//L//n/+X//J//s//+T//5//8n//zP/5P825E/gEZj4J/GFtvUQAAAABJRU5ErkJggg==";

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
