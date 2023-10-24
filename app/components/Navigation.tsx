import { NavLink } from "@remix-run/react";

const navMap = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/uses", label: "Uses" },
];

type NavigationDict = {
  navDict: {
    path: string;
    label: string;
  };
};

const NavItem = ({ navDict }: NavigationDict) => {
  return (
    <NavLink
      to={navDict.path}
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "bg-violet-700" : ""
      }
    >
      {navDict.label}
    </NavLink>
  );
};

export default function Navigation() {
  return navMap.map((navItem, index) => {
    return <NavItem navDict={navItem} key={index} />;
  });
}
