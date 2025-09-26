import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Sora } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Redação AI Pro',
  description: 'Estude e corrija suas redações do ENEM com inteligência artificial.',
};

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body className={`${sora.variable} font-body antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow container mx-auto px-6 py-12 md:px-8 md:py-16">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
