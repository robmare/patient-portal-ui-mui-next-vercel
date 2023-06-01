import { Icon } from "@iconify/react";
import { LoadingButton } from "@mui/lab";
import { Box, Checkbox, FormControlLabel, IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import * as Yup from "yup";
import { langConfig } from '../translations/config';
import Link from './Link';
import SelectLanguage from './SelectLanguage';

let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

const LoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const tConfig = langConfig;
  const { t } = useTranslation();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      //.email("Provide a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  let profile: string = "";
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      if (values.email.toLowerCase() == "admin") {
        profile = "Admin";
      } else if (values.email == "administration") {
        profile = "Administration";
      } else if (values.email == "doctor") {
        profile = "Doctor";
      } else if (values.email == "patient") {
        profile = "Patient";
      } else {
        profile = "Patient";
      }
      setTimeout(() => {
        router.push({
          pathname: '/',
          query: { auth: profile },
        })
      }, 2000);
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box
          component={motion.div}
          animate={{
            transition: {
              staggerChildren: 0.55,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
          >
            <TextField
              fullWidth
              autoComplete="username"
              type="email"
              label="Email Address"
              {...getFieldProps("email")}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />

            <TextField
              fullWidth
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              label="Password"
              {...getFieldProps("password")}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <Icon icon="eva:eye-fill" />
                      ) : (
                        <Icon icon="eva:eye-off-fill" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ alignItems: "center", my: 2 }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    {...getFieldProps("remember")}
                    checked={values.remember}
                  />
                }
                label="Remember me"
              />

              <Link
                variant="subtitle2"
                href="#"
                underline="hover"
              >
                Forgot password?
              </Link>
            </Stack>

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              {isSubmitting ? t('PP_LOADING') : t('PP_SIGN_IN')}
            </LoadingButton>

            <Box style={{
              marginTop: '20px',
              minWidth: '100%',
              textAlign: 'center',
            }}>
              <SelectLanguage />
            </Box>
          </Box>
        </Box>
      </Form>
    </FormikProvider>
  );
};

export default LoginForm;
