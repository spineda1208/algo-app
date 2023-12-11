import { HiMiniHome } from "react-icons/hi2";
import { Link } from "react-router-dom";

function HomeButton() {
  return (
    <Link to="/" className="group">
      <HiMiniHome className="h-10 w-10 transition-all duration-700 group-hover:-translate-y-1 group-hover:fill-dark-tertiary" />
    </Link>
  );
}

export default HomeButton;
