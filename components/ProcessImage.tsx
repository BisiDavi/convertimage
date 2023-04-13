import { useContext } from "react";

import ImageContext from "@/context/imageContext";
import Progressbar from "@/components/Progressbar";

export default function ProcessImage() {
  const { images } = useContext(ImageContext);
  const options = ["png", "jpeg", "webp"];

  

  return (
    <>
      {images.length > 0 && (
        <section className="container py-4 bg-gray-100 px-4 rounded mt-2 mb-10">
          <div className="mode">
            <select className="px-2 py-1">
              <option>Select Mode</option>
              <option>Convert</option>
              <option>Optimize Size</option>
            </select>
          </div>
          {images.map((imageItem) => (
            <Progressbar
              key={imageItem.id}
              item={imageItem}
              value={20}
              options={options}
            />
          ))}
        </section>
      )}
    </>
  );
}
