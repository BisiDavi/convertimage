import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function UploadImage() {
  const [files, setFiles] = useState([])
  const onDrop = useCallback((acceptedFiles: any[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const binaryStr = reader.result;
        console.log("binaryStr", binaryStr);
      };
      reader.readAsArrayBuffer(file)
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const text = isDragActive
    ? "Drop the files here"
    : "Drag 'n' drop some files here, or click to select files";
  return (
    <div className="border rounded-lg h-96 w-2/5 p-4 flex " {...getRootProps()}>
      <input
        {...getInputProps({
          "aria-label": "drag and drop zone",
        })}
      />
      <p className="mx-auto flex justify-center items-center cursor-pointer">
        {text}
      </p>
    </div>
  );
}
