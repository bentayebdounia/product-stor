import { Avatar, Grid, Typography } from "@mui/material";

export default function Review({ data }: any) {
  return (
    <>
      <Grid
        item
        xs={3}
        container
        bgcolor={"#8e24aa3d"}
        borderRadius={"10px"}
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        ml={0.4}
        mb={1}
        padding={1}
      >
        <Grid item xs={2} display={"flex"} justifyContent={"start"}>
          <Avatar
            sx={{
              bgcolor: "#8e24aaa8",
              marginLeft: "15px",
              alignItems: "center",
            }}
          />
        </Grid>
        <Grid item xs={9}>
          <Typography sx={{ fontSize: "20px", display: "inline" }}>
            {" "}
            {data.name}
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
            }}
          >
            {data.review}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
