import { notFound } from "next/navigation";
import { listings, typeLabel } from "@/lib/mock-data";
import { formatPrice } from "@/lib/format";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const listing = listings.find((l) => l.id === id);
  if (!listing) notFound();

  return (
    <article className="grid gap-8 md:grid-cols-2">
      <div className="h-64 rounded-xl bg-gray-100" />
      <div className="space-y-4">
        <span className="text-sm text-emerald-700">
          {typeLabel[listing.type]}
        </span>
        <h1 className="text-2xl font-semibold">{listing.title}</h1>
        <p className="text-gray-600">{listing.description}</p>
        <p className="text-2xl font-semibold">{formatPrice(listing.price)}</p>
        <p className="text-sm text-gray-500">Vendedor: {listing.seller}</p>
      </div>
    </article>
  );
}