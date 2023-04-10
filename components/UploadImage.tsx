import dynamic from "next/dynamic";

import useUploadImage from "@/hooks/useUploadImage";
import UploadImageInput from "@/components/UploadImageInput";

const ImageThumbs = dynamic(() => import("@/components/ImageThumbs"), {
  ssr: false,
});

export default function UploadImage() {
  const { files, dropzone } = useUploadImage();

  return (
    <div className="flex flex-col w-1/2">
      <div className="border-4 transition duration-75 ease-in-out border-dotted  h-96 w-4/5 mx-auto rounded-lg p-4">
        <UploadImageInput dropzone={dropzone} files={files} />
      </div>
      <ImageThumbs files={files} />
    </div>
  );
}
