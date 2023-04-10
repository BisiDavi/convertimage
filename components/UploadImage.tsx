import useUploadImage from "@/hooks/useUploadImage";
import ImageThumbs from "@/components/ImageThumbs";

export default function UploadImage() {
  const { files, isDragActive, getRootProps, getInputProps } = useUploadImage();

  const text = isDragActive
    ? "Drop the files here"
    : "Drag 'n' drop some files here, or click to select files";

  return (
    <>
      <div
        className="border-4 transition duration-75 ease-in-out border-dotted rounded-lg h-96 w-2/5 p-4 flex "
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
      <ImageThumbs files={files} />
    </>
  );
}
