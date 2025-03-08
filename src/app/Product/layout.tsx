import React from "react";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto p-4 flex">
      <aside className="w-1/4 p-4 border-r">
        <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
        <ul>
          <li className="mb-2">
            <Link href="/" className="text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/link2" className="text-blue-500">
              Logout
            </Link>
          </li>
        </ul>
      </aside>
      <main className="w-3/4 p-4">
        <h1 className="text-3xl font-bold mb-4">Products</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
