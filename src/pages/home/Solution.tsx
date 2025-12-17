export default function Solution() {
    return (
        <div  id ="solution" className=" relative h-8/10 flex items-center justify-center
                        sm:p-10 md:p-20 lg:p-30 el:p-40">
            <div className=" relative h-full w-full space-y-10">
                <div className="flex flex-col h-6/10 space-y-5">
                    <p className="text-[clamp(15px,2vw,60px)] inline-block border-l-4 border-emerald-400 
                    pl-3 text-sm font-semibold tracking-widest text-emerald-300">OUR SOLUTION</p>
                    <p className="text-[clamp(15px,2.5vw,80px)] leading-tight max-w-4/10">
                        Powering A Sustainable and Profitable Energy Transition on Digital Solutions
                    </p>

                    <button
                        className="text-[clamp(15px,2vw,80px)] group inline-flex items-center gap-3 rounded-full  py-2 text-base text-[#0052B4] font-semibold
                                   transition hover:bg-white/10"
                        type="button"> Learn More
                        <span className="grid place-items-center rounded-full bg-white border transition group-hover:translate-x-0.5
                        sm:h-5 sm:w-5 md:h-7 md:w-7 lg:h-10 lg:w-10 el:w-14 el:h-14">
                            <svg className="md:h-5 md:w-5" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>
                </div>
                <div className="bg-[#0052B4] flex items-center rounded-2xl lg:rounded-4xl  h-4/10
                            sm:px-10 md:px-15 lg:px-20 el:px-30
                            sm:py-7 md:py-10 lg:py-15 el:py-20">
                    <p className="text-white text-[clamp(15px,1.5vw,40px)]  max-w-4/10">Decarbonization requires balance between legacy systems and emerging technologies. Between the environment and business economies.  </p>
                </div>
                {/* ---------------------------Absolute Container------------------------------- */}
                <div className="w-1/2 h-full absolute right-0 top-0 flex justify-center">

                    <div className="relative h-9/10">

                        {/* MAIN IMAGE */}
                        <img
                            className="h-9/10 drop-shadow-[0_40px_90px_rgba(2,132,199,0.45)]"
                            src="../src/assets/third/Image.png"
                            alt=""
                        />

                        {/* THUNDERBOLT – LEFT, HALF INSIDE IMAGE */}
                        <img
                            className="absolute top-1/2 -left-15 -translate-y-1/2
                 w-46 h-46"
                            src="../src/assets/second/Ic_Thunderbolt.png"
                            alt=""
                        />

                        {/* GRID CARD – RIGHT, HALF INSIDE IMAGE */}
                        <div
                            className="absolute top-1/2 -right-5 -translate-y-1/2
                 bg-white/80 backdrop-blur-lg
                 min-w-[130px] min-h-[140px]
                 rounded-2xl flex flex-col items-center justify-center
                 p-3 shadow-lg"
                        >
                            <div className="w-13 h-13 bg-[#0052B4] rounded-full shadow-md ring-1 ring-white/30 flex justify-center items-center">
                                <img
                                    className="w-8 h-8"
                                    src="../src/assets/second/Ic_grid.png"
                                    alt=""
                                />
                            </div>
                            <p className="text-[#202636] text-center mt-2 text-sm md:text-base">
                                Hidro Power
                            </p>
                        </div>
                        <div className="absolute top-10 -right-10 rotate-11 flex space-x-2.5">
                            <div className="h-30 w-4 el:h-40 rounded-full bg-emerald-400/90" />
                            <div className="h-24 w-3 el:h-34 rounded-full bg-sky-600/90" />
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}