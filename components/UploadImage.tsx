import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function UploadImage() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const text = isDragActive
    ? "Drop the files here"
    : "Drag 'n' drop some files here, or click to select files";
  return (
    <div className="border rounded-lg h-96 w-2/5 p-4 flex " {...getRootProps()}>
      <input {...getInputProps()} />
      <p className="text-center mx-auto flex justify-center items-center">{text}</p>
    </div>
  );
}
