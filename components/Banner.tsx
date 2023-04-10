import TypewriterEffect from "@/components/TypewriterEffect";
import UploadImage from "@/components/UploadImage";

export default function Banner() {
  return (
    <section className="container mt-60 h-52 flex items-center justify-between">
      <TypewriterEffect />
      <UploadImage />
    </section>
  );
}
