import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="border-2 rounded-l-lg  p-2">
      Convert<span className="bg-orange-700 text-white p-1 rounded-r-lg">Image</span>
    </Link>
  );
}
