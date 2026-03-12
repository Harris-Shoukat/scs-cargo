export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-4 text-center text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} SCS Cargo
      </div>
    </footer>
  );
}
