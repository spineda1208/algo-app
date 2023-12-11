import { BsArrowLeftSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function BackArow({ path = "/" }: { path?: string }) {
  return (
    <Link to={path} className="group">
      <BsArrowLeftSquareFill className="h-10 w-10 opacity-95 transition-all duration-700 group-hover:-translate-y-1 group-hover:fill-dark-tertiary" />
    </Link>
  );
}

export default BackArow;
