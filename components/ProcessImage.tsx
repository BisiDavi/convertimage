import { useContext } from "react";

import ImageContext from "@/context/imageContext";

export default function ProcessImage() {
  const { images } = useContext(ImageContext);

  console.log("images", images);
  return <section>
    
  </section>;
}
