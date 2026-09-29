const Background = () => {
  return (
    <>
      {/* RESPONSIVE: h-dvh so the layer matches the visible area on mobile browsers */}
      <div className="fixed z-[2] w-full h-dvh bg-[#0B0F19] overflow-hidden">
        
        <h1 className="text-[13vw] leading-none tracking-tighter absolute top-1/2 -translate-x-[50%] left-1/2  -translate-y-[50%] font-semibold text-slate-800/30 ">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
