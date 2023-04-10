import Typewriter from "typewriter-effect";

export default function TypewriterEffect() {
  return (
    <div className="typewriter w-1/2">
      <h4 className="text-4xl text-blue-800 my-4 px-0 font-bold flex">
        <span className="mx-2">Convert Images to </span>
        <span className="text-orange-500">
          <Typewriter
            options={{
              strings: ["JPG", "WebP", "PNG"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h4>
    </div>
  );
}
