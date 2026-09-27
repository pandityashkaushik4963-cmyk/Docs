import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center py-4 relative z-50 px-4 ">
      <nav className="w-full max-w-3xl flex justify-between items-center rounded-2xl shadow-lg shadow-black/20 px-8 py-3  backdrop-blur-md border border-slate-800/50  bg-[#0B0F19]/80">
        <span className="font-bold text-xl tracking-wide cursor-pointer  text-cyan-400">
          Todos
        </span>
        <div className="flex gap-8">
          <Link
            to="/"
            className=" transition-colors duration-200 px-2 py-1 border-b-2 border-transparent hover:border-white text-slate-300 hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/YourTaskPage"
            className="transition-colors duration-200 px-2 py-1 border-b-2 border-transparent hover:border-white text-slate-300 hover:text-white "
          >
            Your Tasks
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;