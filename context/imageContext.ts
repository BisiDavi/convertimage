import { createContext } from "react";

type imageContextType = {
  images: any[];
  setImages: any;
};
const defaultImageContext: imageContextType = {
  images: [],
  setImages: () => {},
};

const ImageContext = createContext(defaultImageContext);
export default ImageContext;
