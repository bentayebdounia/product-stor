import { ReactNode } from "react";
import { Box, Container, Paper } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import RequireAuth from "@/lib/features/authentication/requireAuth";
import AppBar from "@/app/components/appBar";

type Props = {
  children: ReactNode;
  params: { locale: string };
};
export default function PortalLayout({ children, params }: Props) {
  return (
    <RequireAuth>
      <main>
        {/* Include shared UI here e.g. a header or sidebar */}
        <Box sx={{ pt: 1 }}>
          <Box width={"100%"} >
            <AppBar />{" "}
          </Box>
          <CssBaseline />
          <Box component="main" sx={{ flexGrow: 1,display: "flex" }}>
            <Container maxWidth={false}>{children}</Container>
          </Box>
        </Box>
      </main>
    </RequireAuth>
  );
}
