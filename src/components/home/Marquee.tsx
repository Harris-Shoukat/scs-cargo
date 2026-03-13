export function Marquee() {
  const text = "     --     this ramadan send your gifts to your loved ones     --     ";
  const chunk = text.repeat(3);
  const repeated = chunk + chunk; // Duplicate for seamless loop

  return (
    <section className="relative overflow-hidden border-y border-gray-200 bg-white py-1.5">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        <span className="whitespace-pre mx-6 text-xs font-semibold uppercase tracking-widest text-gray-800 sm:text-sm">
          {repeated}
        </span>
      </div>
    </section>
  );
}
