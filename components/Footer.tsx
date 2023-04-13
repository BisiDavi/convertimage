import { useContext } from "react";

import ImageContext from "@/context/imageContext";

export default function Footer() {
  const { images } = useContext(ImageContext);

  const footerStyle = images.length > 0 ? "" : "fixed";

  return (
    <footer
      className={`bg-gray-200 ${footerStyle} w-screen bottom-0 text-black text-center py-4`}
    >
      Made with ❤️ by{" "}
      <a
        href="https://olubisi-david.vercel.app"
        target="_blank"
        className="font-bold text-blue-500 hover:text-red-500"
      >
        Dave
      </a>
    </footer>
  );
}
