import React from "react";

const ImageList = ({ images }) => {
  //   console.log(props.images);

  const newImages = images.map((image) => {
    return (
      <img src={image.urls.regular} key={image.id} alt={image.description} />
    );
  });

  return <div>{newImages}</div>;
};

export default ImageList;
