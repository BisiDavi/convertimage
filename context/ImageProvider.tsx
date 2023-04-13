import ImageContext from "@/context/imageContext";
import { useState } from "react";
import type { PropsWithChildren } from "react";

export default function ImageProvider({ children }: PropsWithChildren) {
  const [images, setImages] = useState([]);
  return (
    <ImageContext.Provider value={{ images, setImages }}>
      {children}
    </ImageContext.Provider>
  );
}
