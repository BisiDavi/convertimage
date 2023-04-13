import Logo from "@/components/Logo";
import Nav from "@/components/Nav";

export default function Header() {
  return (
    <header className="py-4 border-b bg-gray-100 px-6 lg:px-0">
      <div className="container flex justify-between items-center">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
