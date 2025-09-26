export default function Footer() {
  return (
    <footer className="bg-card/50 border-t mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} Redação AI Pro. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
