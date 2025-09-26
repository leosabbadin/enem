export default function Footer() {
  return (
    <footer className="bg-card/50 border-t mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-foreground/70 text-sm">
        <p>&copy; {new Date().getFullYear()} Hackeando a Redação do Enem. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
