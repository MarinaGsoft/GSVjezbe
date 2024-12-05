import React, { FC, useState } from "react";

export const Image: FC = () => {
  // const fetchImages = async () => {

  //     const[images, setImages] = useState("");

  //     try {
  // const response = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=10");
  // const data = await response.json();
  // setImages(data)
  //     }
  // }

  const fetchImages = async () => {
    const [images, setImages] = useState("");

    const url = "https://jsonplaceholder.typicode.com/photos?_limit=10";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };
  return <div></div>;
};
