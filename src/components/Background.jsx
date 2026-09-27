const Background = () => {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen ">
        <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 font-semibold">
          Documents
        </div>
        <h1 className="text-[13vw] leading-none tracking-tighter absolute top-1/2 -translate-x-[50%] left-1/2  -translate-y-[50%] font-semibold text-zinc-900 ">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
