import React from "react";
import Link from "next/link";
const Navbar = () => {
  const links = [
    { href: "/client", label: "Client" },
    { href: "/about", label: "About" },
    { href: "/drinks", label: "Drinks" },
    { href: "/query", label: "Query" },
    { href: "/tasks", label: "Tasks" },
  ];
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {links.map((link) => {
            return (
              <li>
                <Link href={link.href}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
