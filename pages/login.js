import React from "react";
import getValidationFieldProps from "utils/getValidationFieldProps";
import { useFormik } from "formik";
import Link from "next/link";
import PasswordInput from "components/PasswordInput/PasswordInput";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { usePostLoginUser } from "hook/api/useApiAuth";
import AuthLayout from "layout/AuthLayout";
import Image from "next/image";
import Cookies from "js-cookie";
//
const initialValues = {
  phonNo: "",
  password: "",
};
//
function LoginPage() {
  //
  const { push } = useRouter();
  //
  const postLoginUser = usePostLoginUser();
  //
  const handleSubmit = (values) => {
    postLoginUser.mutate(values, {
      onSuccess: (res) => {
        push("app/dashboard");
        Cookies.set("TOKEN", res.id);
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };
  //
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
  });
  //
  return (
    <Box borderRadius="8px" width="100%" maxWidth={400} overflow="hidden">
      <Box textAlign="center" mb={3}>
        <Image
          src="/img/logo.png"
          width={30}
          height={30}
          objectFit="cover"
          alt="logo"
        />
      </Box>
      <Box
        borderRadius="8px"
        backgroundColor="white"
        mx={2}
        p={5}
        component="form"
        onSubmit={formik.handleSubmit}
        textAlign="center"
      >
        <Typography fontSize="18px" fontWeight="bold" mb={1}>
          خوش آمدید
        </Typography>
        <Typography fontSize="12px" color="gray" fontWeight="bold" mb={2}>
          برای ورود به حساب خود، اطلاعات خود را وارد کنید
        </Typography>
        <TextField
          label="شماره تماس"
          {...formik.getFieldProps("phonNo")}
          {...getValidationFieldProps(formik, "phonNo")}
        />
        <PasswordInput
          label="رمز عبور"
          {...formik.getFieldProps("password")}
          {...getValidationFieldProps(formik, "password")}
        />

        <Button fullWidth type="submit" sx={{ mt: 2, fontWeight: "bold" }}>
          ورود
        </Button>
      </Box>
      <Box mt={3} sx={{ textAlign: "center" }}>
        <Typography color="gray" fontSize="12px">
          ثبت نام نکرده اید؟
          <Link href="/register" passHref>
            <Typography
              component="a"
              color="primary"
              fontSize={12}
              sx={{ cursor: "pointer" }}
            >
              کلیک کنید.
            </Typography>
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
LoginPage.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;
export default LoginPage;
