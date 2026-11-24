import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  if (!request.cookies.get("cm_session")) {
    return new NextResponse(null, {
      status: 307,
      headers: { Location: "/login" },
    });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/catalogo/:path*", "/producto/:path*", "/panel/:path*"],
};