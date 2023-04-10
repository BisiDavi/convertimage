/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";

import useUploadImage from "@/hooks/useUploadImage";

export default function UploadImage() {
  const { files, isDragActive, getRootProps, getInputProps } = useUploadImage();

  const text = isDragActive
    ? "Drop the files here"
    : "Drag 'n' drop some files here, or click to select files";

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview()));
  }, []);

  return (
    <>
      <div
        className="border rounded-lg h-96 w-2/5 p-4 flex "
        {...getRootProps()}
      >
        <input
          {...getInputProps({
            "aria-label": "drag and drop zone",
          })}
        />
        <p className="mx-auto flex justify-center items-center cursor-pointer">
          {text}
        </p>
      </div>
      <div className="thumbs">
        {files.length > 0 &&
          files.map((file) => (
            <div className="thumb" key={file.name}>
              <img
                src={file.preview}
                onLoad={() => URL.revokeObjectURL(file.preview)}
                alt={file.name}
              />
            </div>
          ))}
      </div>
    </>
  );
}
