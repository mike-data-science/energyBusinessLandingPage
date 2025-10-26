import Vector1 from '../../assets/forth/Energy.svg';
import Vector2 from '../../assets/forth/Thunderbolt.svg';
import Vector3 from '../../assets/forth/Icon.svg';
export default function Benefits() {
    return (
        <div className="relative flex justify-center items-center bg-white min-h-screen max-w-screen">
            <div className="w-1/2">
                <img className="bg-cover bg-center w-4/5 drop-shadow-[0_40px_90px_rgba(2,132,199,0.45)]" src="../src/assets/forth/Image.png" alt="" />
            </div>
            <div className="w-1/2">
                <div className="w-2/3 flex flex-col gap-4 mx-auto">
                    <p className="inline-block border-l-4 border-emerald-400 pl-3 text-40 font-semibold tracking-widest text-emerald-300">
                        BENEFITS
                    </p>
                    <p className="text-[#202636] text-4xl max-w-[450px]">Solving the energy transition trilemma</p>
                    <button
                        className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-base text-[#0052B4] font-semibold transition hover:bg-white/10"
                        type="button"
                    >Learn More
                        <span className="grid h-7 w-7 place-items-center rounded-full bg-sky-600/20 transition group-hover:translate-x-0.5">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>
                    <hr className='text-[#0A1254]/7' />
                    <p className="text-[#737B8F] font-semibold max-w-[350px]">Read Digital's new white paper on sustainability and profitability and understand how you can unlock balanced energy and business models while better managing asset risk and carbon emissions.</p>

                </div>
            </div>
            {/* -------------------------------------------- */}
            <div className="absolute bg-white/80 backdrop-blur-lg
                min-w-[140px] min-h-[170px] left-78 top-22.5
                flex flex-col items-start justify-center p-3 rounded-l-3xl rounded-tr-2xl gap-3 mx-auto pl-5">
                <div className="w-13 h-13  bg-[#0052B4] rounded-t-4xl rounded-br-4xl shadow-md ring-1 ring-white/30 flex justify-center items-center">
                    <img className="w-8 h-8 z-1" src={Vector1} alt="" />
                </div>
                <p className="text-[#202636] w-[150px] mt-2 text-3xl font-semibold md:text-base">Sustainable Energy Transition</p>
            </div>

            
            <div className="absolute bg-[#0065DB]/80 
                min-w-[140px] min-h-[170px] left-123.5 top-65
                flex flex-col items-start justify-center p-3 rounded-r-3xl gap-3 mx-auto pl-5">
                <div className="w-13 h-13  bg-white rounded-t-4xl rounded-br-4xl shadow-md ring-1 ring-white/30 flex justify-center items-center">
                    <img className="w-8 h-8" src={Vector2} alt="" />
                </div>
                <p className="text-white w-[150px] mt-2 text-3xl font-semibold md:text-base">Reliable Energy Transition</p>
            </div>
            

            <div className="absolute bg-[#021D54]/90 backdrop-blur-lg
                min-w-[140px] min-h-[170px] left-78 bottom-8.5
                flex flex-col items-start justify-center p-3 rounded-l-3xl rounded-br-2xl mx-auto pl-5">
                <div className="w-13 h-13  bg-white rounded-t-4xl rounded-br-4xl shadow-md ring-1 ring-white/30
                 flex justify-center items-center">
                    <img className="w-8 h-8" src={Vector3} alt="" />
                </div>
                <p className="text-white w-[150px] mt-2 text-3xl font-semibold md:text-base">Affordable Energy Transition</p>
            </div>
        </div>
    )
}