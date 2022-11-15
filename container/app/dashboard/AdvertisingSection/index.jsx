import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Image from "next/image";
import { Box } from "@mui/material";

export default function AdvertisingSection() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - 120px)",
        overflow: "auto",
        p: 2,
        my: 2,
      }}
    >
      <ImageList cols={3} gap={10}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{ border: "1px solid gray", borderRadius: "10px", p: 2 }}
          >
            <Image
              src={item.img}
              alt={item.title}
              width={200}
              height={200}
              objectFit="cover"
              loading="lazy"
              style={{ borderRadius: "6px" }}
            />
            <ImageListItemBar title={item.title} position="below" />
          </ImageListItem>
        ))}
      </ImageList>
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
