import { NavLink } from "react-router-dom";
import NavButton from "./NavButton";

const MobileMenu = ({ closeMenu }) => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Membership", path: "/membership" },
    { name: "Trainers", path: "/trainers" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login"},
    { name: "Register", path: "/register"},
  ];

  return (
    <div className="md:hidden bg-white border-t shadow-lg">

      <ul className="flex flex-col">

        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-6 py-4 border-b transition ${
                  isActive
                    ? "text-emerald-500 font-semibold bg-emerald-50"
                    : "hover:bg-gray-100"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}

      </ul>

      <div className="p-6">
        <NavButton />
      </div>

    </div>
  );
};

export default MobileMenu;