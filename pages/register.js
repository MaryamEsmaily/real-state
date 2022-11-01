import React from "react";
import getValidationFieldProps from "utils/getValidationFieldProps";
import { useFormik } from "formik";
import AuthLayout from "layout/AuthLayout";
import Link from "next/link";
import PasswordInput from "components/PasswordInput/PasswordInput";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";

//
const initialValues = {
  phoneNo: "",
  password: "",
  username: "",
};
//
function RegisterPage() {
  //
  const { push } = useRouter();
  //
  const handleSubmit = (values) => {
    push("login");
  };
  //
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
  });
  //
  return (
    <Box borderRadius="8px" width="100%" maxWidth={400} overflow="hidden">
      <Box
        borderRadius="8px"
        backgroundColor="white"
        mx={2}
        p={5}
        component="form"
        onSubmit={formik.handleSubmit}
        textAlign="center"
      >
        <Typography fontSize="18px" color="primary" fontWeight="bold" mb={1}>
          خوش آمدید
        </Typography>
        <Typography
          fontSize="12px"
          fontWeight="bold"
          color="secondary.main"
          mb={2}
        >
          برای ثبت نام، اطلاعات خواسته شده را وارد کنید
        </Typography>
        <TextField
          label="شماره تماس"
          {...formik.getFieldProps("phoneNo")}
          {...getValidationFieldProps(formik, "phoneNo")}
        />
        <PasswordInput
          label="نام کاربری"
          {...formik.getFieldProps("username")}
          {...getValidationFieldProps(formik, "username")}
        />
        <PasswordInput
          label="رمز عبور"
          {...formik.getFieldProps("password")}
          {...getValidationFieldProps(formik, "password")}
        />

        <Button
          type="submit"
          fullWidth
          sx={{ mt: 2, fontWeight: "bold" }}
          color="neutral"
        >
          ثبت نام
        </Button>
      </Box>
      <Box mt={3} sx={{ textAlign: "center" }}>
        <Typography color="secondary" fontSize="12px">
          قبلا ثبت نام کرده اید؟
          <Link href="/login" passHref>
            <Typography
              component="a"
              color="primary.dark"
              fontSize={12}
              sx={{ cursor: "pointer" }}
            >
              ورود
            </Typography>
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
RegisterPage.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;
export default RegisterPage;
