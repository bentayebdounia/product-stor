"use client";
import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AppBar } from "@/lib/styles/appBarPortal";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "@/lib/styles/search";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { logout } from "@/lib/features/authentication/authenticationThunks";
import { useAppDispatch } from "@/lib/hook";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { updateProductSearchValue } from "@/lib/features/product/productSlice";
import Image from "next/image";
function MenuUser(props: any) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton
          onClick={handleOpenUserMenu}
          sx={{
            p: 0,
            "&.MuiButtonBase-root:hover": {
              bgcolor: "white",
            },
          }}
        >
          <Avatar sx={{ bgcolor: "#8e24aaa8", marginLeft: "15px" }} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography
            textAlign="center"
            onClick={() => {
              dispatch(logout());
            }}
          >
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
export default function AppAppBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [oldSearchTerm, setOldSearchTerm] = useState("");
  const dispatch = useAppDispatch();
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm !== oldSearchTerm) {
        setOldSearchTerm(searchTerm);
        dispatch(updateProductSearchValue(searchTerm));
      }
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [dispatch, oldSearchTerm, searchTerm]);
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "rgba(255, 255, 255, 255)" }}
      >
        <Toolbar>
          {/* <Image src={icon} priority={false} width="30" height="30" alt=""  /> */}
          <Image
            src={"/product-store-icon.png"}
            width="30"
            height="30"
            alt=""
          />
          <Typography
            variant="h5"
            sx={{
              paddingLeft: "10px",
              background: "linear-gradient(to left, #007baa , #8e24aa)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Product Store
          </Typography>
          <Link
            href={"/portal"}
            style={{ textDecoration: "none", marginLeft: 10 }}
          >
            <Typography
              sx={{
                color: "black",
                fontSize: "16px",
              }}
            >
              Home
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }} />

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              placeholder="search"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <MenuUser />
        </Toolbar>
      </AppBar>
    </>
  );
}
