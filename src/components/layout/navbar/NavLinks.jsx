import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Membership", path: "/membership" },
    { name: "Trainers", path: "/trainers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <ul className="flex items-center gap-8 font-medium">
      {navItems.map((item) => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "text-emerald-500 font-semibold"
                : "hover:text-emerald-500 transition"
            }
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;