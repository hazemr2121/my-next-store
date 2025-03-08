import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-gray-400">
            About
          </Link>
        </li>
        <li>
          <Link href="/Product" className="text-white hover:text-gray-400">
            Products
          </Link>
        </li>
      </ul>
    </nav>
  );
}
