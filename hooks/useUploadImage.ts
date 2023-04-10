import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function useUploadImage() {
  const [files, setFiles] = useState<any[]>([]);

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
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: useCallback(
      (acceptedFiles: any[]) => onDropHandler(acceptedFiles),
      []
    ),
  });

  return {
    getRootProps,
    getInputProps,
    isDragActive,
    files,
  };
}
