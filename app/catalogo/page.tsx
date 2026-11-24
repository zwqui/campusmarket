import Link from "next/link";
import ListingCard from "@/components/ListingCard";
import { listings } from "@/lib/mock-data";

const filters = [
  { value: "", label: "Todo" },
  { value: "venta", label: "Venta" },
  { value: "prestamo", label: "Préstamo" },
  { value: "servicio", label: "Servicio" },
];

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ tipo?: string; q?: string }>;
}) {
  const { tipo = "", q = "" } = await searchParams;
  const items = listings.filter(
    (l) =>
      (!tipo || l.type === tipo) &&
      l.title.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Catálogo</h1>
      <form action="/catalogo" className="flex gap-2">
        <input
          name="q"
          defaultValue={q}
          placeholder="Buscar libros, comida, tutorías"
          className="w-full rounded-lg border border-gray-300 px-3 py-2"
        />
        <button className="rounded-lg bg-emerald-600 px-4 py-2 text-white">
          Buscar
        </button>
      </form>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <Link
            key={f.label}
            href={f.value ? `/catalogo?tipo=${f.value}` : "/catalogo"}
            className={`rounded-full border px-4 py-1.5 text-sm ${
              f.value === tipo
                ? "border-emerald-600 bg-emerald-50 text-emerald-800"
                : "border-gray-300 bg-white"
            }`}
          >
            {f.label}
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {items.map((l) => (
          <ListingCard key={l.id} listing={l} />
        ))}
      </div>
    </div>
  );
}