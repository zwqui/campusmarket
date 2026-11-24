const plans = [
  {
    name: "Gratis",
    audience: "Compradores",
    features: ["Ver publicaciones", "Comprar", "Pedir préstamos"],
    highlight: false,
  },
  {
    name: "Emprendedor",
    audience: "Vendedores",
    features: ["Perfil de tienda", "Hasta 20 productos"],
    highlight: true,
  },
  {
    name: "Pro",
    audience: "Vendedores frecuentes",
    features: ["Productos ilimitados", "Productos destacados", "Estadísticas"],
    highlight: false,
  },
];

export default function PlansPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-center text-2xl font-semibold">
        Planes de CampusMarket
      </h1>
      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`rounded-xl border bg-white p-6 ${
              p.highlight ? "border-2 border-emerald-600" : "border-gray-200"
            }`}
          >
            <h2 className="text-lg font-medium">{p.name}</h2>
            <p className="text-sm text-gray-500">{p.audience}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {p.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}