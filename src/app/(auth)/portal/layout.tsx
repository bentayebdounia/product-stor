import { ReactNode } from "react";
import { Box, Container, Paper } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import RequireAuth from "@/lib/features/authentication/requireAuth";
import AppAppBar from "@/app/components/appAppBar";

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
            <AppAppBar  />
          </Box>
          <CssBaseline />
          <Box component="main" sx={{ flexGrow: 1, pt:10,display: "flex" }}>
            <Container maxWidth={false}>{children}</Container>
          </Box>
        </Box>
      </main>
    </RequireAuth>
  );
}
