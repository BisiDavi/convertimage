import Typewriter from "typewriter-effect";

export default function TypewriterEffect() {
  return (
    <div className="typewriter w-1/2">
      <h4 className="text-4xl text-blue-800 my-4 px-0 font-bold flex">
        <span className="mx-2">Convert Images to </span>
        <Typewriter
          options={{
            strings: ["JPG", "WEBP", "PNG"],
            autoStart: true,
            loop: true,
          }}
        />
      </h4>
    </div>
  );
}
