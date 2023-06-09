interface props {
  dropzone: any;
}

export default function UploadImageInput({ dropzone }: props) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = dropzone;

  const text = isDragActive
    ? "Drop the files here"
    : "Drag 'n' drop images (WebP, PNG, JPG) here, or click to select files";

  return (
    <div className="w-full h-full flex" {...getRootProps()}>
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
