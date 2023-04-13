import Typewriter from "typewriter-effect";

export default function TypewriterEffect() {
  return (
    <div className="typewriter lg:w-1/2 w-full">
      <h4 className="lg:text-4xl text-xl mx-auto justify-center lg:justify-start lg:mx-0 text-blue-800 my-4 px-0 font-bold flex">
        <span className="mx-2">Convert Images to </span>
        <span className="text-orange-500">
          <Typewriter
            options={{
              strings: ["JPG", "WebP", "PNG", "SVG"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h4>
    </div>
  );
}
