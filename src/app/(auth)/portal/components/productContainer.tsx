"use client";
import { useProduct } from "@/lib/features/product/productSelectors";
import { fetchAllProduct } from "@/lib/features/product/productThunks";
import { useAppDispatch } from "@/lib/hook";
import { Product } from "@/lib/interfaces/product";
import SearchBar from "@/lib/styles/searchBar";
import { Grid, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "./productCard";

export function ProductContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();
  const {product} = useProduct()
  const handleChangeFilter = (event: SelectChangeEvent) => {
    // dispatch(updateFilterStatusAnalysis(event.target.value));
    // dispatch(
    //   fetchAllAnalyzes({
    //     pageSize: PAGE_SIZE,
    //     pageNumber: 0,
    //   })
    // );
  };
  useEffect(() => {
    dispatch(
      fetchAllProduct()
    );
    
  }, [dispatch]);
  return (
    <Grid container sx={{px:4}} >
      <Grid item xs={12}>
        <SearchBar
          setSearchTerm={setSearchTerm}
          handleChangeFilter={handleChangeFilter}
        />{" "}
      </Grid>
      {product?.map((row: Product) => (

      <ProductCard key={row.id} product={row} />))
        }
    </Grid>
  );
}
