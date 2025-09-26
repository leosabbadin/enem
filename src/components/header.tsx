
'use client';

import Link from 'next/link';
import { BookOpen, BotMessageSquare, Menu, PenSquare, Sparkles, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { ThemeToggle } from './theme-toggle';
import { useAuth } from '@/app/auth-provider';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    // Call the server-side logout endpoint
    await fetch('/api/logout', { method: 'POST' });
    // Sign out from the client-side Firebase instance
    await signOut(auth);
    // Redirect to login page
    router.push('/login');
  };
  
  // Render null or a placeholder if auth state is loading and user is not determined yet
  if (user === undefined) {
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
          </div>
        </nav>
      </header>
    )
  }

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
          {user && (
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
              <Button variant="outline" size="icon" onClick={handleLogout}>
                <LogOut className="h-4 w-4" />
                <span className="sr-only">Sair</span>
              </Button>
              <ThemeToggle />
            </div>
          )}


          {/* Mobile Navigation */}
           {user && (
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
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
                      <Link href="/estudo" className="flex items-center p-2 rounded-md text-lg hover:bg-accent">
                        <BookOpen className="mr-3 h-5 w-5" />
                        Estudo
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/bonus" className="flex items-center p-2 rounded-md text-lg hover:bg-accent">
                        <Sparkles className="mr-3 h-5 w-5" />
                        Bônus
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/" className="flex items-center p-2 rounded-md text-lg bg-primary text-primary-foreground font-semibold">
                        <BotMessageSquare className="mr-3 h-5 w-5" />
                        Corrigir Redação
                      </Link>
                    </SheetClose>
                     <SheetClose asChild>
                        <Button variant="ghost" onClick={handleLogout} className="justify-start text-lg h-auto p-2">
                          <LogOut className="mr-3 h-5 w-5" />
                          Sair
                        </Button>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
           )}
           {!user && <ThemeToggle />}
        </div>
      </nav>
    </header>
  );
}
