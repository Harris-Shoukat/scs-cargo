import Image from "next/image";

const teamMembers = [
  {
    name: "Mobeen Ahmed Qureshi",
    role: "Manage Sales",
    phone: "+92 300 4535707",
    image: "/author-4.jpg",
  },
  {
    name: "Shahid Mobeen",
    role: "Branch Manager",
    phone: "+92 306 4647950",
    image: "/author-4.jpg",
  },
  {
    name: "Fahad Mobeen",
    role: "Branch Manager",
    phone: "+92 313 4935899",
    image: "/author-4.jpg",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-12 md:py-16" dir="ltr">
      <div
        className="mx-auto w-full max-w-7xl rounded-2xl px-4 py-12 md:w-[90%] md:px-8 md:py-16 lg:px-12 lg:py-16"
        style={{
          background: "linear-gradient(180deg, #e9e5ff 0%, #f3e8ff 18%, #fce7f3 35%, #fde1e8 50%, #fed7aa 68%, #fdba74 85%, #fb923c 95%, #ea580c 100%)",
        }}
      >
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
            Our Team
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Meet the people behind SCS Cargo
          </h2>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:scale-105 hover:shadow-md"
            >
              <div className="relative size-24 overflow-hidden rounded-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-red-600">
                {member.role}
              </p>
              <p className="mt-1 font-semibold text-gray-900">{member.name}</p>
              <a
                href={`tel:${member.phone.replace(/\s/g, "")}`}
                className="mt-2 text-sm text-gray-600 transition-colors hover:text-red-600"
              >
                {member.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
