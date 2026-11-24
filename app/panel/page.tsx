import { listings, typeLabel } from "@/lib/mock-data";
import { formatPrice } from "@/lib/format";

export default function PanelPage() {
  const count = (type: string) =>
    listings.filter((l) => l.type === type).length;

  const stats = [
    { label: "Publicaciones", value: listings.length },
    { label: "En venta", value: count("venta") },
    { label: "En préstamo", value: count("prestamo") },
    { label: "Servicios", value: count("servicio") },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Mi panel</h1>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-gray-200 bg-white p-4"
          >
            <p className="text-sm text-gray-500">{s.label}</p>
            <p className="mt-1 text-2xl font-semibold">{s.value}</p>
          </div>
        ))}
      </div>
      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-gray-200 text-gray-500">
            <tr>
              <th className="p-3">Título</th>
              <th className="p-3">Tipo</th>
              <th className="p-3">Precio</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((l) => (
              <tr key={l.id} className="border-b border-gray-100">
                <td className="p-3">{l.title}</td>
                <td className="p-3">{typeLabel[l.type]}</td>
                <td className="p-3">{formatPrice(l.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}