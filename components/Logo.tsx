import Link from "next/link";

export default function Logo() {
  return (
    <div className="logo">
      <Link href="/" className="flex items-center">
        <span className="text p-2 m-0 rounded-l-lg border-r-0 border">
          Convert
        </span>
        <span className="colored bg-blue-800 text-white p-2 border border-l-0 rounded-r-lg ">
          Image
        </span>
      </Link>
      <style jsx>
        {`
          .logo:hover span.text {
            background-color: #1e40af;
            color: white;
          }
          .logo:hover span.colored {
            background-color: white;
            color: black;
          }
        `}
      </style>
    </div>
  );
}
