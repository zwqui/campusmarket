import Link from "next/link";
import { typeLabel, type Listing } from "@/lib/mock-data";
import { formatPrice } from "@/lib/format";

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Link
      href={`/producto/${listing.id}`}
      className="block rounded-xl border border-gray-200 bg-white p-4 hover:shadow-md"
    >
      <div className="mb-3 h-24 rounded-lg bg-gray-100" />
      <h3 className="font-medium">{listing.title}</h3>
      <p className="text-sm text-gray-500">{listing.category}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="font-semibold">{formatPrice(listing.price)}</span>
        <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-xs text-emerald-800">
          {typeLabel[listing.type]}
        </span>
      </div>
    </Link>
  );
}