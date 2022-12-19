import React from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import TitleIcon from "@mui/icons-material/Title";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DescriptionIcon from "@mui/icons-material/Description";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import getValidationFieldProps from "utils/getValidationFieldProps";
import { useFormik } from "formik";
import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { usePostLoginUser } from "hook/api/useApiAuth";
//
const initialValues = {
  Price: "",
  Location: "",
  Image: "",
  Title: "",
  Description: "",
};
//
function AddNewAdvertise() {
  //
  const { push } = useRouter();
  //
  const postLoginUser = usePostLoginUser();
  //
  const handleSubmit = (values) => {
    postLoginUser.mutate(values, {
      onSuccess: () => {
        push("app/dashboard");
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
  return (
    <Box
      px={{ xs: 0, sm: 6, md: 10 }}
      borderRadius="8px"
      backgroundColor="white"
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <Stack direction={{ xs: "column", lg: "row" }} alignItems="center">
        <Stack direction="row" width={{ lg: 200 }} spacing={1}>
          <TitleIcon color="primary" fontSize="small" />
          <Typography>عنوان آگهی</Typography>
        </Stack>
        <TextField
          sx={{
            flexGrow: 1,
            maxWidth: 450,
          }}
          {...formik.getFieldProps("Title")}
          {...getValidationFieldProps(formik, "Title")}
        />
      </Stack>
      <Stack direction={{ xs: "column", lg: "row" }} alignItems="center">
        <Stack direction="row" width={{ lg: 200 }} spacing={1}>
          <LocalOfferIcon color="primary" fontSize="small" />
          <Typography>قیمت</Typography>
        </Stack>
        <TextField
          sx={{
            flexGrow: 1,
            maxWidth: 450,
          }}
          {...formik.getFieldProps("Price")}
          {...getValidationFieldProps(formik, "Price")}
        />
      </Stack>
      <Stack direction={{ xs: "column", lg: "row" }} alignItems="center">
        <Stack direction="row" width={{ lg: 200 }} spacing={1}>
          <LocationOnIcon color="primary" fontSize="small" />
          <Typography>منطقه</Typography>
        </Stack>
        <Select
          sx={{
            my: 1,
            flexGrow: 1,
            maxWidth: 450,
          }}
          {...formik.getFieldProps("Location")}
          {...getValidationFieldProps(formik, "Location")}
        >
          <MenuItem value={1}>شریعتی</MenuItem>
          <MenuItem value={2}>امیرکبیر</MenuItem>
        </Select>
      </Stack>
      <Stack direction={{ xs: "column", lg: "row" }} alignItems="center">
        <Stack direction="row" width={{ lg: 200 }} spacing={1}>
          <DescriptionIcon color="primary" fontSize="small" />
          <Typography>توضیحات</Typography>
        </Stack>
        <TextField
          sx={{
            flexGrow: 1,
            maxWidth: 450,
          }}
          multiline
          rows={5}
          {...formik.getFieldProps("Description")}
          {...getValidationFieldProps(formik, "Description")}
        />
      </Stack>
      <Stack direction={{ xs: "column", lg: "row" }} alignItems="center">
        <Stack direction="row" width={{ lg: 200 }} spacing={1}>
          <AddPhotoAlternateIcon color="primary" fontSize="small" />
          <Typography>تصاویر</Typography>
        </Stack>
        <Box
          my={1}
          width="100%"
          maxWidth="450px"
          height={200}
          flexGrow={1}
          borderRadius="8px"
          border="1px dashed #0005"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box textAlign="center">
            <FileUploadIcon fontSize="large" />
            <Typography>برای انتخاب فایل کلیک کنید</Typography>
          </Box>
        </Box>
      </Stack>
      <Stack direction={{ xs: "column", lg: "row" }} alignItems="center">
        <Box width={{ lg: 200 }}></Box>
        <Box flexGrow={1} width="100%" maxWidth="450px">
          <Button fullWidth>ثبت آگهی</Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default AddNewAdvertise;
