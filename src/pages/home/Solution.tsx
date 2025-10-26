export default function Solution() {
    return (
        <div className="relative flex flex-col justify-around bg-white min-h-screen max-w-screen p-20">
            <div className="flex flex-col ">
                <h1 className="text-[#36BA6F] text-2xl">Our solution</h1>
                <p className="inline-block border-l-4 border-emerald-400 pl-3 text-sm font-semibold tracking-widest text-emerald-300">
                    OUR SOLUTION
                </p>
                <p className="text-[#202636] text-4xl max-w-[450px]">Powering A Sustainable and Profitable Energy Transition on Digital Solutions</p>
                <button
                    className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-base text-[#0052B4] font-semibold
                    transition hover:bg-white/10"
                    type="button"
                >
                    Learn More
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-sky-600/20 transition group-hover:translate-x-0.5">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </button>
            </div>
            <div className="w-[100%] h-[200px] flex items-center pl-20 bg-[#0052B4]  rounded-2xl">
                <p className="text-white max-w-[300px]">Decarbonization requires balance between legacy systems and emerging technologies. Between the environment and business economies.  </p>
            </div>
            {/* ---------------------------Absolute Container------------------------------- */}
            <div className="absolute right-0 bottom-[50%] transform-[translateY(40%)]  flex justify-center">
                <img className="absolute inline-block right-120 bottom-10 z-1 w-46 h-46 " src="../src/assets/second/Ic_Thunderbolt.png" alt="" />
                <img className="max-h-[70%] max-w-[70%] drop-shadow-[0_40px_90px_rgba(2,132,199,0.45)]" src="../src/assets/third/Image.png" alt="" />
                <div className="absolute bg-white/80 backdrop-blur-lg
                min-w-[130px] min-h-[140px] right-25 bottom-20 rounded-2xl 
                flex flex-col items-center justify-center p-3">
                    <div className="w-13 h-13  bg-[#0052B4] rounded-full shadow-md ring-1 ring-white/30 mx-auto flex justify-center items-center">
                        <img className="w-8 h-8" src="../src/assets/second/Ic_grid.png" alt="" />
                    </div>
                    <p className="text-[#202636] text-center mt-2 text-sm md:text-base">Hidro Power</p>
                </div>
                <div className="absolute rotate-11 flex items-center bottom-60 space-x-2.5 right-15">
                    <div className="h-30 w-4 rounded-full bg-emerald-400/90" />
                    <div className="h-24 w-3 rounded-full bg-sky-600/90" />
                </div>

            </div>
        </div>

    )
}