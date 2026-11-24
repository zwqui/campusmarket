"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type LoginState = { error?: string };

export async function login(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const code = String(formData.get("code") ?? "");
  const expected = process.env.ACCESS_CODE;

  if (!expected || code !== expected) {
    return { error: "Código de acceso incorrecto." };
  }

  (await cookies()).set("cm_session", "1", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
  redirect("/panel");
}

export async function logout() {
  (await cookies()).delete("cm_session");
  redirect("/");
}