"use client";
import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

export default function SearchBar({
  setSearchTerm,
  handleChangeFilter,
  filterStatus,
}: any) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Grid
      container
      direction="row"
      display={"flex"}
      justifyContent={"start"}
      sx={{ marginTop: "5px", marginBottom: "20px", px:7 }}
    >
      <Grid item xs={8}>
        <FormControl sx={{ width: "100%" }}>
          <TextField
            id="outlined-start-adornment"
            placeholder={"search"}
            size="small"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        
          
        
      </Grid>
      <Grid item xs={4} container direction="row" justifyContent="flex-end">
      <FormControl sx={{ minWidth: 100 }}>
            <Select
              sx={{
                alignItems: "center",
                height: 40,
                width: 170,
                backgroundColor: "white",
                borderColor: "white",
                color: "black",
              }}
              variant="outlined"
              id="status-select"
              value={filterStatus}
              onChange={handleChangeFilter}
              displayEmpty
            >
              <MenuItem value={""}>
                <Typography sx={{ color: "grey" }}>Filter</Typography>
              </MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            sx={{
              ml: 3,
              textTransform: "none",
              backgroundColor: "#8e24aa",
              color: "white",
              fontWeight: "bold",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "#8e24aa",
              },
            }}
            onClick={() => router.push(`${pathname}/new`)}
          >
          Add Product
          </Button>
      </Grid>
    </Grid>
  );
}
