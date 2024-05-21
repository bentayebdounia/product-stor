"use client";
import { useProduct } from "@/lib/features/product/productSelectors";
import {
  Button,
  CardMedia,
  Container,
  FormControl,
  Grid,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import LocalSeeIcon from "@mui/icons-material/LocalSee";
import { useEffect, useState } from "react";
import {
  deleteProduct,
  fetchAllProductById,
  updateProduct,
} from "@/lib/features/product/productThunks";
import { useAppDispatch } from "@/lib/hook";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCategory } from "@/lib/features/category/categorySelectors";
import { fetchAllCategory } from "@/lib/features/category/categoryThunks";
import StarIcon from "@mui/icons-material/Star";
import Review from "./review";
import { dataReview } from "./dataReview";
export default function DetailProduct({ idProduct }: any) {
  const { currentProduct, updateProductSuccess, isLoading } = useProduct();
  const router = useRouter();
  const [edit, setEdit] = useState(false);
  const [titleProduct, setTitleProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [imageProduct, setImageProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const { category } = useCategory();
  const dispatch = useAppDispatch();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [open, setOpen] = useState(false);
  const id = open ? "simple-popover" : undefined;
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
  useEffect(() => {
    dispatch(fetchAllProductById(idProduct));
    if (edit) dispatch(fetchAllCategory());
    if (updateProductSuccess === false) {
      toast.error("update product failed");
    }
    if (updateProductSuccess === true) {
      toast.success("update product success");
      //router.back();
    }
  }, [dispatch, idProduct, router, updateProductSuccess, edit]);
  return (
    <>
      <ToastContainer />
      <Container>
        <Button
          variant="contained"
          sx={{
            px: 2,
            py: 0,
            mt: 3,
            mb: 2,
            backgroundColor: "#8e24aa",
            "&.MuiButtonBase-root:hover": {
              bgcolor: "#8e24aa",
            },
          }}
        >
          Action
          <Tooltip title="Open settings">
            <Typography
              onClick={(event) => handleOpenUserMenu(event)}
              sx={{ pt: 1 }}
            >
              <MoreVertIcon sx={{ color: "white" }} />
            </Typography>
          </Tooltip>
        </Button>
        <Menu
          sx={{ mt: "30px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem>
            <Button
              aria-describedby={id}
              onClick={() => {
                setEdit(!edit);
                handleCloseUserMenu();
              }}
            >
              <Grid item xs={2} mr={2}>
                <EditIcon sx={{ color: "black" }} />
              </Grid>
              <Grid
                item
                xs={10}
                fontWeight={600}
                color="black"
                textTransform={"initial"}
              >
                Edit
              </Grid>
            </Button>
          </MenuItem>

          <MenuItem>
            <Button
              onClick={() => {
                handleCloseUserMenu();
                dispatch(deleteProduct(`${idProduct}`));
                router.replace("/portal");
              }}
            >
              <Grid item xs={1} mr={2}>
                <DeleteIcon sx={{ color: "black" }} />
              </Grid>
              <Grid
                item
                xs={11}
                fontWeight={600}
                color="black"
                textTransform={"initial"}
              >
                Delete
              </Grid>
            </Button>
          </MenuItem>
        </Menu>
        {!isLoading && currentProduct !== undefined && (
          <>
            {edit && (
              <>
                <Button
                  variant="contained"
                  sx={{
                    ml: 2,
                    p: 0.5,
                    mt: 3,
                    mb: 2,
                    backgroundColor: "#af52bf",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "#af52bf",
                    },
                  }}
                  onClick={() => {
                    dispatch(
                      updateProduct({
                        id: currentProduct?.id,
                        data: {
                          title: titleProduct,
                          price: priceProduct,
                          description: descriptionProduct,
                          image: imageProduct,
                          category: "electronic",
                        },
                      })
                    );
                    setEdit(false);
                  }}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    mx: 2,
                    p: 0.5,
                    mt: 3,
                    mb: 2,
                    backgroundColor: "#d7a8df",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "#d7a8df",
                    },
                  }}
                  onClick={() => {
                    setEdit(false);
                  }}
                >
                  Cancel
                </Button>
              </>
            )}
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
              <Grid item xs={7}>
                {edit === false && (
                  <>
                    <Typography variant="h5" sx={{ fontWeight: "bold", py: 1 }}>
                      {currentProduct?.category}
                    </Typography>
                    <Typography sx={{ fontWeight: "bold", py: 1 }}>
                      {currentProduct?.title}
                    </Typography>
                    <Typography py={1} color="text.secondary">
                      {currentProduct?.price} $
                    </Typography>
                    <Typography
                      py={1}
                      fontWeight={"bold"}
                      color="text.secondary"
                    >
                      Description{" "}
                    </Typography>
                    <Typography p={1}>{currentProduct?.description}</Typography>
                    {[...Array(Math.round(currentProduct.rating.rate))].map(
                      (_, index) => (
                        <StarIcon sx={{ color: "yellow" }} key={index} />
                      )
                    )}
                  </>
                )}
                {edit && (
                  <>
                    <Grid item xs={12} marginLeft={4} marginTop={3}>
                      <Typography
                        variant="subtitle1"
                        color="secondary.700"
                        fontWeight={"bold"}
                      >
                        Category
                      </Typography>
                      <FormControl sx={{ width: "100%" }}>
                        <Select
                          sx={{
                            alignItems: "center",
                            height: 40,
                            width: "70%",
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
                            <Typography sx={{ color: "grey" }}>
                              Filter
                            </Typography>
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
                        defaultValue={currentProduct?.title}
                        onChange={handleTitleProductChange}
                        placeholder="add title of product"
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
                        defaultValue={currentProduct?.price}
                        onChange={handlePriceProductChange}
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
                        Image
                      </Typography>
                      <TextField
                        type="string"
                        defaultValue={currentProduct?.image}
                        onChange={handleImageProductChange}
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
                        Description
                      </Typography>
                      <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        defaultValue={currentProduct?.description}
                        onChange={handleDescriptionProductChange}
                        sx={{
                          border: "none",
                          "& fieldset": { border: "none" },
                          background: "rgba(239, 239, 239, 1)",
                          borderRadius: "5px",
                          width: "70%",
                        }}
                        size="small"
                      />
                    </Grid>
                  </>
                )}
              </Grid>

              <Grid
                item
                xs={5}
                display={"flex"}
                justifyContent={"end"}
                height={300}
              >
                {currentProduct?.image !== null &&
                currentProduct?.image !== undefined ? (
                  <CardMedia
                    sx={{ objectFit: "scale-down" }}
                    component="img"
                    height={"300"}
                    image={currentProduct.image}
                    alt=""
                  />
                ) : (
                  <LocalSeeIcon />
                )}
              </Grid>
            </Grid>
          </>
        )}
        {!edit && !isLoading && (
          <>
            <Typography variant="h5" pb={2} color="#8e24aa">
              Reviews{" "}
            </Typography>
            <Grid
              container
              spacing={1}
              display={"flex"}
              justifyContent={"space-around"}
              mb={3}
            >
              {dataReview.map((row) => (
                <Review key={row.id} data={row} />
              ))}
            </Grid>
          </>
        )}
      </Container>
    </>
  );
}
