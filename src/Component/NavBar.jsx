import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-600 py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Quiz App</h1>
        <ul className="flex gap-4">
          <li>
            <Link
              to="/create-questions"
              className="text-white hover:bg-blue-500 px-4 py-2 rounded-md transition"
            >
              Create Questions
            </Link>

            <Link
              to="/display-questions"
              className="text-white hover:bg-blue-500 px-4 py-2 rounded-md transition"
            >
              Display Questions
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
