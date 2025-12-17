import FigureCard from '../../components/FigureCard';
import Vector1 from '../../assets/forth/Energy.svg';
import Vector2 from '../../assets/forth/Thunderbolt.svg';
import Vector3 from '../../assets/forth/Icon.svg';
export default function Benefits() {
  return (
    <div id="benefits" className="relative flex justify-center items-center bg-white max-w-screen h-10/10">

      {/* LEFT IMAGE */}
      <div className="w-1/2 relative">
        <img
          className="bg-cover bg-center w-4/5 drop-shadow-[0_40px_90px_rgba(2,132,199,0.45)]"
          src="../src/assets/forth/Image.png"
          alt=""
        />

        <FigureCard
          top="0%"
          left="54.5%"
          bgColor="bg-white/80"
          iconBg="bg-[#0052B4]"
          iconSrc={Vector1}
          textColor="text-[#202636]"
          text="Sustainable Energy Transition"
          roundedClasses="rounded-l-3xl rounded-tr-2xl"
        />

        <FigureCard
          top="60%"
          left="75%"
          translateY="-50%"
          bgColor="bg-[#0065DB]/80"
          iconBg="bg-white"
          iconSrc={Vector2}
          textColor="text-white"
          text="Reliable Energy Transition"
          roundedClasses="rounded-r-3xl"
          height="h-[50%]"
          heightSm="sm:h-[40%]"
          textSize="text-lg"
        />

        <FigureCard
          bottom="-20%"
          left="54.5%"
          bgColor="bg-[#021D54]/90"
          iconBg="bg-white"
          iconSrc={Vector3}
          textColor="text-white"
          text="Affordable Energy Transition"
          roundedClasses="rounded-l-3xl rounded-br-2xl"
        />
      </div>


      <div className="w-full md:w-1/2 px-4 md:px-0">
        <div className="w-full md:w-2/3 flex flex-col sm:gap-2 lg:gap-4 mx-auto">

          <p className="inline-block border-l-4 border-emerald-400 pl-2 sm:pl-3 font-semibold tracking-widest text-emerald-300 
           md:text-xs lg:text-lg xl:text-xl 2xl:text-2xl el:text-4xl">
            BENEFITS</p>

          <p className="text-[#202636] font-semibold
    sm:text-xl md:text-xs lg:text-2xl 2xl:text-4xl el:text-6xl">
            Solving the energy transition trilemma
          </p>

          <button
            className="group inline-flex items-center gap-2 sm:gap-3 rounded-full border border-white/10 bg-white/5 px-3 text-[#0052B4] font-semibold transition hover:bg-white/10 
      sm:px-5 py-1.5 lg:py-2 sm:text-xs md:text-xs lg:text-xl xl:text-2xl 2xl:text-3xl el:text-4xl "
            type="button"
          >
            Learn More
            <span className="grid h-6 w-6 sm:h-7 sm:w-7 place-items-center rounded-full bg-sky-600/20 transition group-hover:translate-x-0.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

          <hr className="border-[#0A1254]/10 my-2 sm:my-3 md:my-4" />

          <p className="text-[#737B8F] font-semibold 
     sm:text-xs md:text-xs lg:text-2xl 2xl:text-3xl el:text-4xl max-w-full">
            Read Digital's new white paper on sustainability and profitability and
            understand how you can unlock balanced energy and business models while
            better managing asset risk and carbon emissions.
          </p>

        </div>
      </div>





    </div>

  )
}