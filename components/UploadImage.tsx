import useUploadImage from "@/hooks/useUploadImage";
import dynamic from "next/dynamic";

const ImageThumbs = dynamic(() => import("@/components/ImageThumbs"), {
  ssr: false,
});

export default function UploadImage() {
  const { files, isDragActive, getRootProps, getInputProps } = useUploadImage();

  const text = isDragActive
    ? "Drop the files here"
    : "Drag 'n' drop some files here, or click to select files";

  return (
    <div className="flex flex-col w-1/2">
      <div
        className="border-4 transition duration-75 ease-in-out border-dotted  h-96 w-4/5 mx-auto rounded-lg p-4 flex"
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
      {files.length > 0 && <ImageThumbs files={files} />}
    </div>
  );
}
