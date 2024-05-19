"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthentication } from "./authenticationSelectors";;
import { Grid } from "@mui/material";


export default function RequireAuth({ children }: any) {
  const [isAuthenticated, setAuthenticated] = useState<boolean | null>();
  const { access_token } = useAuthentication();
  const pathname = usePathname();
  const { push } = useRouter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
 

  useEffect(() => {
    if (!access_token )
      push("/");

    if (access_token ) setAuthenticated(true);
  }, [
    access_token,
    isAuthenticated,
    pathname,
    push,
  
  ]);
  if (isAuthenticated) {
    return <>{children}</>;
  }
  if (isAuthenticated == null) {
    return <Grid />;
  }
}
