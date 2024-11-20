import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // `/items/123` 같은 경로를 `/items?id=123`로 rewrite
  if (pathname.startsWith("/items/") && pathname.split("/").length === 3) {
    const itemId = pathname.split("/")[2];
    const url = request.nextUrl.clone();
    url.pathname = "/items";
    url.searchParams.set("id", itemId);
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}