import Link from 'next/link';
import { BookOpen, BotMessageSquare, Menu, PenSquare, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

export default function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 text-xl font-headline font-bold text-primary">
              <PenSquare className="h-7 w-7" />
              <span>Hackeando a Redação</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
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

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <div className="flex flex-col space-y-4 pt-8">
                  <SheetClose asChild>
                    <Button variant="ghost" asChild className="justify-start text-lg">
                      <Link href="/estudo">
                        <BookOpen className="mr-3 h-5 w-5" />
                        Estudo
                      </Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button variant="ghost" asChild className="justify-start text-lg">
                      <Link href="/bonus">
                        <Sparkles className="mr-3 h-5 w-5" />
                        Bônus
                      </Link>
                    </Button>
                  </SheetClose>
                   <SheetClose asChild>
                    <Button asChild className="text-lg justify-start">
                      <Link href="/">
                        <BotMessageSquare className="mr-3 h-5 w-5" />
                        Corrigir Redação
                      </Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
