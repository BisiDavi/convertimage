import Link from "next/link";
import { useRouter } from "next/router";

import navContent from "@/json/nav.json";

export default function Nav() {
  const router = useRouter();
  return (
    <nav>
      <ul className="space-x-6 p-0 hidden lg:flex">
        {navContent.map((navItem) => {
          const activeLink =
            router.route === navItem.link ? "text-blue-800 font-bold" : "";
          return (
            <li key={navItem.link}>
              <Link href="/" className={`relative ${activeLink}`}>
                {navItem.text}
                {navItem.link === "/video-editor" && (
                  <span className="absolute text-white -right-16 -top-4 bg-blue-800 text-xs rounded-lg px-1 py-0.5">
                    Coming Soon
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
