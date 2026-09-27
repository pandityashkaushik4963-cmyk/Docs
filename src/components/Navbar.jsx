import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center py-4 relative z-50 px-4">
      <nav className="w-full max-w-3xl flex justify-between items-center rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-md shadow-lg shadow-black/20 px-8 py-3">
        <span className="font-bold text-xl text-white tracking-wide cursor-pointer">
          Todos
        </span>
        <div className="flex gap-8">
          <Link
            to="/"
            className="text-zinc-200 hover:text-white transition-colors duration-200 px-2 py-1 border-b-2 border-transparent hover:border-white"
          >
            Home
          </Link>
          <Link
            to="/YourTaskPage"
            className="text-zinc-200 hover:text-white transition-colors duration-200 px-2 py-1 border-b-2 border-transparent hover:border-white"
          >
            Your Tasks
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;