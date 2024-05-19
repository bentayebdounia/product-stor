import * as React from "react";
import Avatar from "@mui/material/Avatar";
import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  Link,
} from "@mui/material";
import { useAppDispatch } from "@/lib/hook";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { userLogin } from "@/lib/features/authentication/authenticationThunks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthentication } from "@/lib/features/authentication/authenticationSelectors";
export default function SignIn() {
  const { access_token, error } = useAuthentication();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      userLogin({
        username: values.username,
        password: values.password,
      })
    );
  };
  useEffect(() => {
    if (access_token) {
      router.replace("/portal");
    } else if (error) {
      toast.error("failed_login", { position: "top-left" });
    }
  }, [error,router,access_token]);

  return (
    <>
      <ToastContainer />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: 2,
            borderColor: "rgba(239, 239, 239, 1)",
            borderRadius: "10px",
            p: 3,
          }}
        >
          
          <Typography component="h1" variant="h4" py={3}  >
            Product Store
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              name="username"
              type="username"
              onChange={handleChange}
              value={values.username}
              label="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
              value={values.password}
            />
            {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#8e24aa",
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "#8e24aa",
                },
              }}
            >
              LogIn
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
