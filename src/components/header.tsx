import Link from 'next/link';
import { BookOpen, BotMessageSquare, PenSquare, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 text-2xl font-headline font-bold text-primary">
              <PenSquare className="h-8 w-8" />
              <span>Redação AI Pro</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Button variant="ghost" asChild>
              <Link href="/estudo">
                <BookOpen className="mr-2 h-4 w-4" />
                Estudo
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/bonus">
                <Sparkles className="mr-2 h-4 w-4" />
                Bônus
              </Link>
            </Button>
            <Button asChild className="font-bold uppercase tracking-wide">
              <Link href="/">
                <BotMessageSquare className="mr-2 h-4 w-4" />
                Corrigir Redação
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
