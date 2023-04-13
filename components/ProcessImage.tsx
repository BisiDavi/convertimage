import { useContext } from "react";

import ImageContext from "@/context/imageContext";
import Progressbar from "@/components/Progressbar";

export default function ProcessImage() {
  const { images } = useContext(ImageContext);

  console.log("images", images);
  return (
    <>
      {images.length > 0 && (
        <section className="container py-4 bg-gray-100 px-4 rounded mt-2 mb-10">
          {images.map((imageItem) => (
            <Progressbar key={imageItem.id} item={imageItem} value={20} />
          ))}
        </section>
      )}
    </>
  );
}
