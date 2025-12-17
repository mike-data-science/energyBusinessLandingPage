import FifthImage from "../../assets/fifth/Image.png";

export default function Partnering() {
  return (
    <div className="flex justify-center items-center w-full h-screen
    sm:p-10 md:p-20 lg:p-30 el:p-40">
      <div className="relative w-full">
        <img className="w-full h-auto drop-shadow-[0_40px_90px_rgba(2,132,199,0.45)]" src={FifthImage} alt="" />

        <div
          className="absolute bg-[#001337]/60 backdrop-blur-lg rounded-2xl p-6 sm:p-10 flex flex-col justify-between"
          style={{
            top: "5%",
            left: "5%",
            height: "70%",
            width: "40%"
          }}
        >
          <h1 className="text-white md:text-xs lg:text-xs xl:text-4xl 2xl:text-6xl el:text-8xl max-w-full">
            Partnering to drive digitization of the power sector
          </h1>
          <p className="text-white md:text-xs lg:text-base xl:text-xl 2xl:text-2xl el:text-4xl max-w-full">
            In partnership with some of the world’s largest utilities and energy producers, we’re helping to drive digitization. Model entire networks to help power utilities reduce costs.
          </p>
          <button
            className="group inline-flex items-center gap-3 w-fit rounded-full border border-white/10 bg-white px-3 py-2 text-base sm:text-base md:text-lg lg:text-xl text-[#0052B4] font-semibold transition hover:bg-white/10"
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
      </div>
    </div>
  );
}
