import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";

const links = [
  {
    title: "All",
    href: "/",
  },
  {
    title: "Active",
    href: "/active",
  },
  {
    title: "Completed",
    href: "/completed",
  },
];

export default function Nav() {
  return (
    <ul className="flex items-center justify-between gap-3">
      {links.map((link) => (
        <li key={link.title}>
          <NavLink
            to={link.href}
            className={({ isActive }) =>
              clsx(isActive && "border border-rose-400 px-2 py-1 rounded-md")
            }
          >
            {link.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
