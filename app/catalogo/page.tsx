import ListingCard from "@/components/ListingCard";
import { listings } from "@/lib/mock-data";

export default function CatalogPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Catálogo</h1>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {listings.map((l) => (
          <ListingCard key={l.id} listing={l} />
        ))}
      </div>
    </div>
  );
}