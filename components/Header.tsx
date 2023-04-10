import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className="py-6 fixed w-screen top-0 border-b bg-gray-100">
      <nav className="container flex justify-between">
        <Logo />
        <ul className="flex space-x-6 p-0">
          <li>JPG to PNG</li>
          <li>PNG to WEBP</li>
        </ul>
      </nav>
    </header>
  );
}
