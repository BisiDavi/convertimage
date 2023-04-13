import { useContext, useState } from "react";

import ImageContext from "@/context/imageContext";
import Progressbar from "@/components/Progressbar";

export default function ProcessImage() {
  const [mode, setMode] = useState("");
  const { images } = useContext(ImageContext);
  const options = ["png", "jpeg", "webp"];
  const modeOptions = [
    { text: "Select Mode" },
    { text: "Convert" },
    { text: "Optimize Size" },
  ];

  function onSelectModeHandler(e: any) {
    if (e.target.value !== "Select Mode") {
      setMode(e.target.value);
    }
  }

  return (
    <>
      {images.length > 0 && (
        <section className="container py-4 bg-gray-100 px-4 rounded mt-2 mb-10">
          <div className="mode">
            <select className="px-2 py-1" onChange={onSelectModeHandler}>
              {modeOptions.map((optn) => (
                <option key={optn.text} value={optn.text}>
                  {optn.text}
                </option>
              ))}
            </select>
          </div>
          {images.map((imageItem) => (
            <Progressbar
              key={imageItem.id}
              item={imageItem}
              value={20}
              options={options}
              mode={mode}
            />
          ))}
        </section>
      )}
    </>
  );
}
