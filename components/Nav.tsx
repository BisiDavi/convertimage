import Link from "next/link";
import { useRouter } from "next/router";

import navContent from "@/json/nav.json";

export default function Nav() {
  const router = useRouter();
  return (
    <nav>
      <ul className="flex space-x-6 p-0">
        {navContent.map((navItem) => {
          const activeLink =
            router.route === navItem.link ? "text-orange-300" : "";
          return (
            <li key={navItem.link}>
              <Link href="/" className={`relative ${activeLink}`}>
                {navItem.text}
                {navItem.text === "Video Editor" && (
                  <span className="absolute -right-16 -top-4 bg-orange-300 text-xs rounded-lg px-1 py-0.5">
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
