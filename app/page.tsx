import Link from "next/link";
import ListingCard from "@/components/ListingCard";
import { listings } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-2xl bg-emerald-50 p-8">
        <h1 className="text-3xl font-semibold text-emerald-900">
          Compra, vende y presta en tu universidad
        </h1>
        <p className="mt-3 max-w-xl text-emerald-800">
          Una comunidad cerrada con entregas dentro del campus y sin costos de
          envío.
        </p>
        <div className="mt-6 flex gap-3">
          <Link
            href="/login"
            className="rounded-lg bg-emerald-700 px-5 py-2.5 text-white"
          >
            Ingresar
          </Link>
          <Link
            href="/planes"
            className="rounded-lg border border-emerald-700 px-5 py-2.5 text-emerald-800"
          >
            Ver planes
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-medium">Publicaciones recientes</h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {listings.map((l) => (
            <ListingCard key={l.id} listing={l} />
          ))}
        </div>
      </section>
    </div>
  );
}
