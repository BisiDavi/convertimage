export default function Nav() {
  return (
    <nav>
      <ul className="flex space-x-6 p-0">
        <li>Convert Image</li>
        <li>Image Editor</li>
        <li className="flex relative">
          Video Editor <span className="absolute  -right-16 -top-2 bg-orange-300 text-xs rounded-lg px-1 py-0">Coming Soon</span>
        </li>
      </ul>
    </nav>
  );
}
