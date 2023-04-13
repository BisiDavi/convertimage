import ImageProvider from "@/context/ImageProvider";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ImageProvider>
      <Component {...pageProps} />
    </ImageProvider>
  );
}
