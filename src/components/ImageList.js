import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = ({ images }) => {
  //   console.log(props.images);

  const newImages = images.map((image) => {
    return <ImageCard image={image} key={image.id} />;
  });

  return <div className="image-list">{newImages}</div>;
};

export default ImageList;
