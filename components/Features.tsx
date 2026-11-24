const features = [
  { title: "Comunidad cerrada", text: "Solo entra quien tiene el código de acceso." },
  { title: "Entregas en el campus", text: "Sin costos de envío." },
  { title: "Compra, vende y presta", text: "Libros, equipos, comida y tutorías en un solo lugar." },
  { title: "Espacio para emprendedores", text: "Cada emprendimiento tiene su lugar visible." },
];

export default function Features() {
  return (
    <section>
      <h2 className="mb-4 text-lg font-medium">Por qué CampusMarket</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-gray-200 bg-white p-4"
          >
            <h3 className="font-medium">{f.title}</h3>
            <p className="text-sm text-gray-500">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}