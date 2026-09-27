const LiquidButtonCopy = (props) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className="group relative px-15 py-4 active:scale-95 rounded-2xl border-2 border-slate-600 bg-blue-800 font-semibold text-xl overflow-hidden cursor-pointer"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-yellow-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
      <span className="relative z-10 block text-white group-hover:text-black transition-colors duration-200">
        {props.text}
      </span>
    </button>
  );
};

export default LiquidButtonCopy;