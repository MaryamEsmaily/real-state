import * as React from "react";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import { useGetGetPost } from "hook/api/useApiPost";

export default function AdvertisingSection() {
  //
  const posts = useGetGetPost();
  //
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
        {itemData?.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
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

const itemData = [];
