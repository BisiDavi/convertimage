import { useContext } from "react";

import ImageContext from "@/context/imageContext";
import Progressbar from "@/components/Progressbar";

export default function ProcessImage() {
  const { images } = useContext(ImageContext);

  console.log("images", images);
  return (
    <section className="container py-4">
      {images.map((imageItem) => (
        <Progressbar key={imageItem.id} name={imageItem.name} value={30} />
      ))}
    </section>
  );
}
