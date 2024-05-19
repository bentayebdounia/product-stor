import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function ProductCard({ product }: any) {
  return (
    <Card sx={{ width: 200, height:300, m:2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100px"
          width="100px"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom sx={{fontSize:16}} component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.price} $
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{display:"flex", justifyContent:"end", alignContent:"end"}} >
        <Button size="small" sx={{color:"#af52b"}} >
          Detail
        </Button>
      </CardActions>
    </Card>
  );
}
