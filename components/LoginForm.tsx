"use client";

import { useActionState } from "react";
import { login, type LoginState } from "@/app/login/actions";

const initialState: LoginState = {};

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <form action={formAction} className="space-y-3">
      <input
        name="code"
        type="password"
        required
        placeholder="Ingrese su código de acceso"
        className="w-full rounded-lg border border-gray-300 px-3 py-2"
      />
      {state.error && <p className="text-sm text-red-600">{state.error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-lg bg-gray-900 py-2 text-white disabled:opacity-50"
      >
        {pending ? "Verificando..." : "ACCEDER"}
      </button>
    </form>
  );
}