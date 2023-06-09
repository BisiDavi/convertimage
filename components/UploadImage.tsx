import useUploadImage from "@/hooks/useUploadImage";
import UploadImageInput from "@/components/UploadImageInput";

export default function UploadImage() {
  const { dropzone, drag } = useUploadImage();

  const borderStyle = drag ? "border-blue-800" : "";

  return (
    <div className="flex flex-col lg:w-1/2 my-4 w-full">
      <div
        className={`border-4 ${borderStyle} transition duration-75 ease-in-out border-dotted h-60 lg:h-80 lg:w-4/5 mx-auto rounded-lg p-4`}
      >
        <UploadImageInput dropzone={dropzone} />
      </div>
    </div>
  );
}
