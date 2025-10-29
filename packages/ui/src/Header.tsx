export function Header({ title }: { title: string }) {
  return (
    <header>
      <h1 className="btn btn-red p-4 text-pink-300">{title}</h1>
    </header>
  );
}
