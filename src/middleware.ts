// OPTION:1
// export const middleware = async () => {
//     console.log('Hello from middleware..');
// }

import { NextRequest, NextResponse } from "next/server";

// export const config = {
//     matcher: ["/about"],
// }

// OPTION: 2
// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL('/', request.url))
// }

// export const config = {
//     matcher: '/about'
// }

// OPTION: 3
export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboard"] }