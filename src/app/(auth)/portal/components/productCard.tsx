import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { usePathname } from "next/navigation";

export default function ProductCard({ product }: any) {
  const pathname = usePathname();
  return (
    <Card sx={{ width: 200, height: 300, m: 2 ,boxShadow:" 0px 2px 1px -1px #d7a8df, 0px 1px 1px 0px #d7a8df, 0px 1px 3px 0px #8e24aa" }}>
      <CardMedia
        component="img"
        height={100}
        width={100}
        image={product.image}
        alt=""
      />
      <CardContent sx={{ height: 150 }}>
        <Grid>
          <Grid item xs={12}>
            <Typography
              gutterBottom
              sx={{ fontSize: 16, fontWeight: "bold" }}
              component="div"
            >
              {product.category}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              gutterBottom
              sx={{
                fontSize: 16,
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
              }}
              component="div"
            >
              {product.title}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions sx={{ height: 50 }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="body2" px={1} color="text.secondary">
              {product.price} $
            </Typography>
          </Grid>
          <Grid item xs={12} >
            <Button 
              href={`${pathname}/${product.id}`}
              size="small"
              fullWidth
              sx={{
                bgcolor: "#8e24aa",
                color: "white",
                
                mb:1,
                fontWeight: "bold",
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "#8e24aa",
                },
              }}
              style={{ textDecoration: "none" }}
            >
              Detail
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
