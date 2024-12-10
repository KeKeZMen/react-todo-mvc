import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <ul className="flex items-center justify-between gap-3">
      <li>
        <Link to="/">All</Link>
      </li>
      <li>
        <Link to="/active">Active</Link>
      </li>
      <li>
        <Link to="/completed">Completed</Link>
      </li>
    </ul>
  );
}
