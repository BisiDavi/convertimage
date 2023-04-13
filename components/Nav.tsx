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
              <Link href={navItem.link} className={`relative ${activeLink}`}>
                {navItem.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
