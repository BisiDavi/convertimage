/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useState } from "react";
import { useDropzone } from "react-dropzone";

import ImageContext from "@/context/imageContext";

export default function useUploadImage() {
  const [drag, setDrag] = useState(false);
  const { setImages } = useContext(ImageContext);

  function onDropHandler(acceptedFiles: any[]) {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const binaryStr = reader.result;
        console.log("binaryStr", binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
    setImages(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }

  const dropzone = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: useCallback(
      (acceptedFiles: any[]) => onDropHandler(acceptedFiles),
      []
    ),
    onDragOver: () => setDrag(true),
    onDragLeave: () => setDrag(false),
    onDropRejected: () => setDrag(false),
  });

  return {
    dropzone,
    drag,
  };
}
