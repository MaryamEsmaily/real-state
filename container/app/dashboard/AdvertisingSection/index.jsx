import * as React from "react";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import { useGetGetAllposts } from "hook/api/useApiPost";

export default function AdvertisingSection() {
  //
  const {data} = useGetGetAllposts();
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
        {data?.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
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
                alt={item.Title}
                width={220}
                height={220}
                objectFit="cover"
                loading="lazy"
                style={{ borderRadius: "6px" }}
              />
              <Box textAlign="start" px={2}>
                <Typography fontSize="24px">{item.Title}</Typography>
                <Typography fontSize="16px">{item.Location}</Typography>
                <Typography fontSize="16px">{item.Price}</Typography>
                <Typography fontSize="14px">{item.Description}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const itemData = [];
