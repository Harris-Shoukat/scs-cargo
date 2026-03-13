import Link from "next/link";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <section className="pt-24 pb-16 md:pt-28 md:pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-block text-sm font-medium text-gray-500 transition-colors hover:text-red-600"
        >
          ← Back to Home
        </Link>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: {lastUpdated}</p>
        <div className="legal-prose mt-10">{children}</div>
      </div>
    </section>
  );
}
