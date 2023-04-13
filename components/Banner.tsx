import TypewriterEffect from "@/components/TypewriterEffect";
import UploadImage from "@/components/UploadImage";

export default function Banner() {
  return (
    <section className="container px-6 lg:px-0 pt-2 lg:pt-8 flex lg:flex-row flex-col items-center justify-between">
      <TypewriterEffect />
      <UploadImage />
    </section>
  );
}
