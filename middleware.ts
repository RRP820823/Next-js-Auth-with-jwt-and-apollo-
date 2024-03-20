import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // const currentUser = request.cookies.get("token")
  const currentUser = request.cookies.get("token")?.value
  console.log(currentUser)
  // if (currentUser && !request.nextUrl.pathname.startsWith("/Welcomepage")) {
  //   return Response.redirect(new URL("/Welcomepage", request.url))
  // }

  //to acess any oter page than dahboard

  if (currentUser && request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect("/dashboard")
  }
  // if (!currentUser && !request.nextUrl.pathname.startsWith("/Login")) {
  //   // return Response.redirect(new URL("/Login", request.url))
  //   return Response.redirect(new URL("/SignUp", request.url))
  // }
  Response.redirect(new URL("/", request.url))
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
}
