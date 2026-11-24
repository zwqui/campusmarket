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
  searchParams: Promise<{ tipo?: string }>;
}) {
  const { tipo = "" } = await searchParams;
  const items = tipo ? listings.filter((l) => l.type === tipo) : listings;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Catálogo</h1>
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