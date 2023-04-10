import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className="py-6 border-b">
      <nav className="container flex justify-between">
        <Logo />
        <ul className="flex space-x-6">
          <li>JPG to PNG</li>
          <li>PNG to WEBP</li>
        </ul>
      </nav>
    </header>
  );
}
