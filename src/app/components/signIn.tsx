import * as React from "react";
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
import Image from "next/image";
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
  }, [error, router, access_token]);

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
          <Image
            src={"/product-store-icon.png"}
            width={50}
            height={50}
            alt=""
          />
          <Typography
            component="h1"
            variant="h4"
            pt={1}
            pb={3}
            sx={{
              paddingLeft: "10px",
              background: "linear-gradient(to left,#007baa , #8e24aa)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
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
           
          </Box>
        </Box>
      </Container>
    </>
  );
}
