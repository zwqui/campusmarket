import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-2xl font-semibold">Página no encontrada</h1>
      <p className="mt-2 text-gray-500">La página que buscas no existe.</p>
      <Link href="/" className="mt-4 inline-block text-emerald-700">
        Volver al inicio
      </Link>
    </div>
  );
}