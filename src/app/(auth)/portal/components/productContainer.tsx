"use client";
import { useProduct } from "@/lib/features/product/productSelectors";
import {
  fetchAllProduct,
  fetchProductsCategory,
} from "@/lib/features/product/productThunks";
import { useAppDispatch } from "@/lib/hook";
import { Product } from "@/lib/interfaces/product";
import FilterAddProduct from "@/app/(auth)/portal/components/filterAddProduct";
import { Grid, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "./productCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export function ProductContainer() {
  const { createProductSuccess, deleteProductSuccess } = useProduct();
  const dispatch = useAppDispatch();
  const { product, searchValue } = useProduct();
  const handleChangeFilter = (event: SelectChangeEvent) => {
    dispatch(fetchProductsCategory(event.target.value));
  };
  useEffect(() => {
    if (createProductSuccess === true) {
      toast.success("create product success");
    } else if (createProductSuccess === false) {
      toast.error("create product failed");
    }
    if (deleteProductSuccess === false) {
      toast.error("delete product failed");
      dispatch(fetchAllProduct());
    } else if (deleteProductSuccess === true) {
      toast.success("delete product success");
      dispatch(fetchAllProduct());
    }
    dispatch(fetchAllProduct());
  }, [dispatch, createProductSuccess, deleteProductSuccess]);
  return (
    <>
      <ToastContainer />
      <Grid container sx={{ px: 4 }}>
        <Grid item xs={12}>
          <FilterAddProduct handleChangeFilter={handleChangeFilter} />{" "}
        </Grid>
        {searchValue === "" && (
          <>
            {product?.map((row: Product) => (
              <ProductCard key={row.id} product={row} />
            ))}
          </>
        )}
        {searchValue !== "" && (
          <>
            {product?.filter((prod: Product) => prod.title.toLowerCase().includes(searchValue.toLowerCase())) 
              .map((row: Product) => (
                <ProductCard key={row.id} product={row} />
              ))}
          </>
        )}
      </Grid>
    </>
  );
}
