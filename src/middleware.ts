import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { getUser } from "./app/redux/user/userOperations";
import { useAppDispatch } from "./app/redux/hooks";

export async function middleware(request: NextRequest) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useAppDispatch();
  await dispatch(getUser());
  const cookiesStore = await cookies();
  if (cookiesStore.get("token")) {
    return NextResponse.redirect(new URL("/home", request.url));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/auth/signin", "/auth/signup/:path*"],
};
