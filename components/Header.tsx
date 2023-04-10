import Logo from "@/components/Logo";
import Nav from "@/components/Nav";

export default function Header() {
  return (
    <header className="py-6 border-b bg-gray-100">
      <div className="container flex justify-between items-center">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
