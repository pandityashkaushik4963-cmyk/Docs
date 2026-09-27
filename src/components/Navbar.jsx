import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="relative z-50">
      <nav className="flex justify-between items-center bg-blue-800 text-white py-1">
        <div className="logo ">
          <span className="font-bold text-xl mx-9 cursor-pointer">Todos</span>
        </div>
        <div className="flex gap-8 mx-9 ">
          <Link
            to="/"
            className="cursor-pointer border-2 border-blue-800 active:bg-blue-600 transition-all hover:border-white p-2"
          >
            Home
          </Link>
          <Link
            to="/YourTaskPage"
            className="cursor-pointer border-2 border-blue-800 active:bg-blue-600 transition-all hover:border-white p-2"
          >
            Your Tasks
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
