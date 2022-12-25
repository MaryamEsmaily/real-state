import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";

export default function AdvertisingSection() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - 100px)",
        overflow: "auto",
        p: 2,
      }}
    >
      <Grid container py={1}>
        {itemData?.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.img}>
            <Box
              textAlign="center"
              sx={{
                border: "1px solid gray",
                borderRadius: "10px",
                p: 2,
                m: 1,
              }}
            >
              <Image
                src={item.img}
                alt={item.title}
                width={220}
                height={220}
                objectFit="cover"
                loading="lazy"
                style={{ borderRadius: "6px" }}
              />
              <Box textAlign="start" px={2}>
                <Typography fontSize="24px">عنوان</Typography>
                <Typography fontSize="16px">منطقه</Typography>
                <Typography fontSize="16px">قیمت</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const itemData = [
  {
    img: "/img/image.jpeg",
    title: "Breakfast",
  },
  {
    img: "/img/image.jpeg",
    title: "Breakfast",
  },
  {
    img: "/img/image.jpeg",
    title: "Breakfast",
  },
  {
    img: "/img/image.jpeg",
    title: "Breakfast",
  },
  {
    img: "/img/image.jpeg",
    title: "Breakfast",
  },
  {
    img: "/img/image.jpeg",
    title: "Breakfast",
  },
  {
    img: "/img/image.jpeg",
    title: "Breakfast",
  },
];
