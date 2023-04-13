import { createContext } from "react";

const defaultImageContext = {
  image: [],
};

export const ImageContext = createContext(defaultImageContext);
