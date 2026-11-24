import Link from "next/link";
import { cookies } from "next/headers";
import { logout } from "@/app/login/actions";

export default async function Navbar() {
  const session = (await cookies()).get("cm_session");

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-semibold text-emerald-700">
          CampusMarket
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/catalogo">Catálogo</Link>
          <Link href="/planes">Planes</Link>
          {session && <Link href="/panel">Panel</Link>}
          {session ? (
            <form action={logout}>
              <button className="rounded-lg border border-gray-300 px-3 py-1.5">
                Salir
              </button>
            </form>
          ) : (
            <Link
              href="/login"
              className="rounded-lg bg-emerald-600 px-3 py-1.5 text-white"
            >
              Ingresar
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}