import { Link } from "react-router-dom";
import "./MenuOption.css";

type ColorClasses = {
  [color: string]: string;
};

const colorClasses: ColorClasses = {
  white: "border-white",
  green: "border-green-primary",
  blue: "border-blue-secondary",
};

function MenuOption({
  header = "Some Header",
  icon = "",
  color = "white",
  path = "/",
  size = "",
}: {
  header: string;
  icon: string;
  color: string;
  path?: string;
  size?: string;
}) {
  const colorClass: string = colorClasses[color] || "";
  return (
    <li>
      <Link
        to={path}
        className={`menu-option-wrapper ${size} ${colorClass} group cursor-pointer hover:-translate-y-6`}
      >
        <h2
          className={`text-center text-xl font-bold tracking-tight transition-opacity duration-500 group-hover:opacity-60`}
        >
          {header}
        </h2>
        <img
          className="h-48 w-48 transition-opacity duration-500 group-hover:opacity-60"
          src={icon}
        />
      </Link>
    </li>
  );
}

export default MenuOption;
