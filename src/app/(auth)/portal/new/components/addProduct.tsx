"use client";
import {
  Button,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { createNewProduct } from "@/lib/features/product/productThunks";
import { useAppDispatch } from "@/lib/hook";
import { useRouter } from "next/navigation";
import { useCategory } from "@/lib/features/category/categorySelectors";
import { fetchAllCategory } from "@/lib/features/category/categoryThunks";

export default function AddProduct() {
  const router = useRouter();
  const [titleProduct, setTitleProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [imageProduct, setImageProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const { category } = useCategory();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllCategory());
  }, [dispatch]);

  const handleTitleProductChange = (event: any) => {
    setTitleProduct(event.target.value);
  };
  const handlePriceProductChange = (event: any) => {
    setPriceProduct(event.target.value);
  };
  const handleImageProductChange = (event: any) => {
    setImageProduct(event.target.value);
  };
  const handleDescriptionProductChange = (event: any) => {
    setDescriptionProduct(event.target.value);
  };
  const handleChangeProductCategory = (event: SelectChangeEvent) => {
    setProductCategory(event.target.value);
  };

  return (
    <>
      <Container>
        <Button
          variant="contained"
          sx={{
            p: 1,
            mt: 3,
            mb: 2,
            backgroundColor: "#af52bf",
            "&.MuiButtonBase-root:hover": {
              bgcolor: "#af52bf",
            },
          }}
          onClick={() => {
            dispatch(
              createNewProduct({
                title: titleProduct,
                price: priceProduct,
                description: descriptionProduct,
                image: imageProduct,
                category: productCategory,
              })
            );
            router.replace("/portal");
          }}
        >
          Save
        </Button>
        <Button
          variant="contained"
          sx={{
            mx: 2,
            p: 1,
            mt: 3,
            mb: 2,
            backgroundColor: "#d7a8df",
            "&.MuiButtonBase-root:hover": {
              bgcolor: "#d7a8df",
            },
          }}
          onClick={() => {
            setTitleProduct("");
            setPriceProduct("");
            setDescriptionProduct("");
            setProductCategory("")
          }}
        >
          Cancel
        </Button>

        <Grid
          container
          border={2}
          borderColor={"rgba(0, 0, 0, 0.25)"}
          borderRadius={"10px"}
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          marginBottom={3}
          padding={3}
        >
          <Grid item xs={12}>
            <Grid
              item
              xs={12}
              container
              direction="row"
              justifyContent="flex-start"
            >
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
                  value={productCategory}
                  onChange={handleChangeProductCategory}
                  displayEmpty
                >
                  <MenuItem value={""}>
                    <Typography sx={{ color: "grey" }}>Filter</Typography>
                  </MenuItem>
                  {category?.map((value: any, index: number) => (
                    <MenuItem key={index} value={value}>
                      {" "}
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} marginLeft={4} marginTop={3}>
              <Typography
                variant="subtitle1"
                color="secondary.700"
                fontWeight={"bold"}
              >
                Title
              </Typography>
              <TextField
                type="string"
                value={titleProduct}
                onChange={handleTitleProductChange}
                placeholder="Add title of product"
                sx={{
                  border: "none",
                  "& fieldset": { border: "none" },
                  background: "rgba(239, 239, 239, 1)",
                  borderRadius: "5px",
                  width: "70%",
                }}
                id="outlined-start-adornment"
                size="small"
              />
            </Grid>

            <Grid item xs={12} marginLeft={4} marginTop={3}>
              <Typography
                variant="subtitle1"
                color="secondary.700"
                fontWeight={"bold"}
              >
                Price
              </Typography>
              <TextField
                type="number"
                value={priceProduct}
                onChange={handlePriceProductChange}
                sx={{
                  border: "none",
                  "& fieldset": { border: "none" },
                  background: "rgba(239, 239, 239, 1)",
                  borderRadius: "5px",
                  width: "70%",
                }}
                id="outlined-start-adornment"
                placeholder="Add price of product"
                size="small"
              />
            </Grid>
            <Grid item xs={12} marginLeft={4} marginTop={3}>
              <Typography
                variant="subtitle1"
                color="secondary.700"
                fontWeight={"bold"}
              >
                Image
              </Typography>
              <TextField
                type="string"
                value={imageProduct}
                onChange={handleImageProductChange}
                sx={{
                  border: "none",
                  "& fieldset": { border: "none" },
                  background: "rgba(239, 239, 239, 1)",
                  borderRadius: "5px",
                  width: "70%",
                }}
                id="outlined-start-adornment"
                placeholder="Add a link of image product"
                size="small"
              />
            </Grid>
            <Grid item xs={12} marginLeft={4} marginTop={3}>
              <Typography
                variant="subtitle1"
                color="secondary.700"
                fontWeight={"bold"}
              >
                Description
              </Typography>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                value={descriptionProduct}
                onChange={handleDescriptionProductChange}
                sx={{
                  border: "none",
                  "& fieldset": { border: "none" },
                  background: "rgba(239, 239, 239, 1)",
                  borderRadius: "5px",
                  width: "70%",
                }}
                placeholder="Add a short description of product"
                size="small"
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
