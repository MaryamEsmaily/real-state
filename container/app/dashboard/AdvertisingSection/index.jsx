import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Image from "next/image";

export default function AdvertisingSection() {
  return (
    <ImageList
      sx={{ width: "100%", height: "calc(100vh - 120px)" }}
      cols={3}
      gap={20}
      mx={5}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          sx={{ border: "1px solid gray", borderRadius: "10px", p: 2 }}
        >
          <Image
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
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
