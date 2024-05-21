import { Avatar, Grid, Typography } from "@mui/material";

export default function Review() {
  return (
    <>
      <Grid
        item
        xs={3}
        container
        bgcolor={"#d7a8df"}
        borderRadius={"10px"}
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        ml={0.4}
        mb={1}
        padding={1}
      >
        <Grid item xs={2} display={'flex'} justifyContent={'start'} >
          <Avatar sx={{ bgcolor: "#8e24aa", marginLeft: "15px", alignItems:'center' }} />
        </Grid>
        <Grid item xs={9}>
          <Typography sx={{ fontSize: "20px", display: "inline" }}>
            {" "}
            
            Name
          </Typography>
          <Typography sx={{ fontSize: "16px" }}>
            Review..............................
            ....................................
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
