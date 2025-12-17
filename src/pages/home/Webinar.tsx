import Image1 from "../../assets/seventh/Image.png";
import Image2 from "../../assets/seventh/image2.png";

export default function ResponsiveSection() {
  return (
    <div id="profesional" className="w-full min-h-screen sm:p-10 md:p-20 lg:p-24 xl:p-32 flex items-center justify-center">
      <div className="w-full flex flex-col md:flex-row overflow-hidden rounded-2xl">
        <div className="relative w-full md:w-1/2 flex gap-8">
          <img
            src={Image1}
            alt="Main"
            className="w-7/10 h-full object-cover rounded-2xl"
          />

          <img
            src={Image2}
            alt="Secondary"
            className="w-1/4 h-4/10 object-cover rounded-2xl"
          />

          <div className="absolute top-1/2 bottom-0 right-0 flex flex-col justify-end items-end w-full">
            <div className="bg-white/80 flex gap-4 p-4 w-7/10 rounded-2xl mb-4 backdrop-blur-2xl shadow-lg">
              <div className="bg-[#36BA6F] w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center shrink-0">
                <p className="text-white font-semibold">1</p>
              </div>
              <p className=" text-[#202636] md:text-xs lg:text-xl 2xl:text-2xl el:text-4xl">
                How this new asset mix and decentralization trend is changing the
                operation and maintenance of these assets
              </p>
            </div>

            <div className="bg-white/80 flex gap-4 p-4 w-7/10 rounded-2xl mb-4 backdrop-blur-2xl shadow-lg">
              <div className="bg-[#36BA6F] w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center shrink-0">
                <p className="text-white font-semibold">2</p>
              </div>
              <p className="text-[#202636] md:text-xs lg:text-xl 2xl:text-2xl el:text-4xl">
                Managing O&amp;M cost and maintaining other KPI’s while
                empowering the workforce.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8 md:p-12">
          <div className="w-2/3 flex flex-col gap-4 ">
            <p className="text-[#202636]  md:text-xl lg:text-3xl 2xl:text-6xl el:text-7xl font-normal">
              Power Magazine on-demand webinar with professionals
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

            <hr className="border-[#0A1254]/10 my-2 sm:my-3 md:my-4 pb-3" />

            <p className="text-[#737B8F] font-medium
           md:text-xs lg:text-2xl 2xl:text-4xl el:text-5xl max-w-full">
              Watch as industry expert John Korsedal, GE Digital, discusses the
              impact of decarbonization in the power generation industry and how
              these trends are driving a mix of more decentralized assets over
              large geographic areas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
