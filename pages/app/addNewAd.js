import React from "react";
import AppLayout from "layout/AppLayout";
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import dynamic from "next/dynamic";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
//
const AddNewAdvertise = dynamic(() =>
  import("container/app/addNewAd/AddNewAdvertise")
);
//
function AddNewAd() {
  return (
    <Grid container p={{ xs: 2, lg: 0 }} spacing={4}>
      <Grid item xs={12}>
        <Stack direction="row" p={2}>
          <LibraryAddOutlinedIcon sx={{ mr: 1 }} />
          <Typography fontSize="20px">ثبت آگهی</Typography>
        </Stack>
        <Divider />
      </Grid>
      <Grid item xs={12} lg={7} order={{ xs: 2, lg: 1 }}>
        <AddNewAdvertise />
      </Grid>
      <Grid item xs={12} lg={4} order={{ xs: 1, lg: 2 }}>
        <Box
          width="100%"
          height="100%"
          borderRadius="8px"
          // border="1px solid #0003"
          bgcolor="#00aeff0f"
          textAlign="center"
          px={3}
          py={5}
        >
          <Stack direction="row" alignItems="center" justifyContent="center">
            <WarningRoundedIcon sx={{ mr: 1 }} color="warning" />
            <Typography fontSize="large">
              قبل از ثبت آگهی به نکات زیر توجه کنید.
            </Typography>
          </Stack>
          <List s sx={{ mt: 3 }}>
            {[
              {
                text: "با توجه به محتوای آگهی، عنوان مناسبی انتخاب کنید و از توضیحات اضافی در قسمت عنوان خودداری نمایید.",
              },
              {
                text: "قیمت را به تومان وارد نمایید",
              },
              {
                text: "دقت نمایید که منطقه را به درستی وارد کرده باشید، تا بتوانیم اطلاعات درست را در قسمت نمودار پیشبینی به شما ارائه دهیم.",
              },
              {
                text: "توضیحات مربوط به ابعاد، دسترسی ها و سایر اطلاعات مفید را در قسمت توضیحات وارد نمایید.",
              },
              {
                text: "بارگزاری تصویر، شانس دیده شدن آگهی شما را بالا میبرد.",
              },
              {
                text: "لطفا تصاویری که شامل تمامی ابعاد ملک شما می باشد را انتخاب کنید تا افراد بتوانند به درستی تصمیم بگیرند.",
              },
            ].map((warning, index) => (
              <ListItem key={index}>
                <ListItemText
                  sx={{
                    display: "list-item",
                    listStyleType: "disc",
                    m: 0.5,
                    fontSize: 20,
                    textAlign: "justify",
                  }}
                >
                  {warning.text}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Grid>
    </Grid>
  );
}

AddNewAd.getLayout = (page) => <AppLayout>{page}</AppLayout>;
export default AddNewAd;
