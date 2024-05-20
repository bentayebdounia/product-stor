"use client";
import * as React from "react";
import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

export default function FilterAddProduct({
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
      
      <Grid item xs={12} container direction="row" justifyContent="flex-start">
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
