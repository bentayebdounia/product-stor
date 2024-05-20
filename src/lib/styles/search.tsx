import { InputBase, styled } from "@mui/material";
export const Search = styled("div")(({ theme }) => ({
    width: "60%",
    position: "relative",
    borderRadius: "50px",
    marginRight: "20%",
    backgroundColor: "rgba(240, 243, 244, 1)",
    "&:hover": {
      backgroundColor: "rgba(240, 243, 244, 1)",
    },
  
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
      borderRadius: "50px",
    },
  }));
  
  export const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "rgba(84, 94, 102, 1)",
  }));
  export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "rgba(84, 94, 102, 1)",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
  
      [theme.breakpoints.up("sm")]: {
        width: "40ch",
        "&:focus": {
          width: "40ch",
        },
      },
    },
  }));