"use client";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useAppDispatch } from "@/lib/hook";
import { logout } from "@/lib/features/authentication/authenticationThunks";
import { Box, MenuItem, Container, Button, Typography, Divider, Toolbar, Drawer } from "@mui/material";

export default function AppBar() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <>
      <Container maxWidth="lg">
      
        <Toolbar
          variant="regular"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            bgcolor:  "#af52b",
            backdropFilter: "blur(24px)",
            maxHeight: 40,
            borderRadius: '999px',
            border: "1px solid",
            borderColor: "divider",
            boxShadow: `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
               
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              ml: "-18px",
              px: 0,
            }}
          >
            <Typography  color="#8e24aa" sx={{fontWeight:"bold", fontSize:"20px"}}  >Product-Store</Typography>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <MenuItem
                onClick={() => scrollToSection("Product")}
                sx={{ py: "6px", px: 1, mx:2 }}
              >
                <Typography variant="body2" color="text.primary">
                  Product
                </Typography>
              </MenuItem>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 0.5,
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                bgcolor: "#8e24aa",
                color: "white",
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "#8e24aa",
                },
              }}
              variant="text"
              size="small"
              target="_blank"
              component="a"
              href="/"
              onClick={() => {
                dispatch(logout());
              }}
            >
              Logout
            </Button>
          </Box>
          <Box sx={{ display: { sm: "", md: "none" } }}>
            <Button
              variant="text"
              color="primary"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ minWidth: "30px", p: "4px" }}
            >
              <MenuIcon />
            </Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  minWidth: "60dvw",
                  p: 2,
                  backgroundColor: "background.paper",
                  flexGrow: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                    flexGrow: 1,
                  }}
                ></Box>
                <MenuItem onClick={() => scrollToSection("Product")}>
                  Product
                </MenuItem>

                <Divider />
                <MenuItem>
                  <Button
                    color="primary"
                    variant="contained"
                    component="a"
                    href="/"
                    target="_blank"
                    sx={{
                      width: "100%",
                      bgcolor: "#8e24aa",
                      "&.MuiButtonBase-root:hover": {
                        bgcolor: "#8e24aa",
                      },
                    }}
                    onClick={() => {
                      dispatch(logout());
                    }}
                  >
                    Logout
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </>
  );
}
