import image1 from "../../assets/eighth/image.png";
import image2 from "../../assets/eighth/image2.png";
import image3 from "../../assets/eighth/image3.png";
import image4 from "../../assets/eighth/image4.png";

export default function AboutUs() {
  return (
    <div id="contact" className="relative max-h-screen w-full sm:p-10 md:p-20 bg-white overflow-hidden">
      <img src={image1} className="h-full w-6/10 object-cover" />

      <div
        className="absolute bottom-[15%] bg-[#001337]/60 flex flex-col rounded-r-2xl rounded-bl-2xl
        backdrop-blur-2xl gap-4 justify-center w-2/10 h-4/10 p-6 md:p-8"
      >
        <div className="flex items-center gap-3">
          <img src={image2} className="w-6 h-6 md:w-8 md:h-8 shrink-0" />
          <div>
            <h1 className="text-white font-semibold md:text-xs lg:text-2xl 2xl:text-3xl el:text-4xl">
              Albert Johns
            </h1>
            <p className="text-white font-light md:text-[10px] lg:text-base 2xl:text-lg el:text-xl">
              albertjohns@gmail.com
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <img src={image3} className="w-6 h-6 md:w-8 md:h-8 shrink-0" />
          <p className="text-white font-light md:text-[10px] lg:text-base 2xl:text-lg el:text-xl">
            +64 1233 4567 890
          </p>
        </div>

        <div className="flex items-center gap-3">
          <img src={image4} className="w-6 h-6 md:w-8 md:h-8 shrink-0" />
          <p className="text-white font-light md:text-[10px] lg:text-base 2xl:text-lg el:text-xl">
            George Street Huntingdon, United Kingdom
          </p>
        </div>
      </div>

      <div
        className="absolute bottom-[10%] right-[5%] flex justify-end bg-white/80 backdrop-blur-2xl
        shadow-lg rounded-2xl p-6 md:p-10 w-5/12 h-7/10"
      >
        <div className="flex flex-col space-y-4 w-full">
          <h1 className="font-medium md:text-sm lg:text-2xl 2xl:text-4xl el:text-5xl">
            Contact Us
          </h1>

          <p className="md:text-xs lg:text-base 2xl:text-xl el:text-2xl text-[#202636]">
            The Big Oxmox advised her not to do so, because there were thousands of
            bad Commas, wild Question Marks and devious Semikoli.
          </p>

          <div className="flex flex-col space-y-3">
            <div className="flex gap-4">
              <input
                placeholder="Your Name"
                className="bg-white p-2 md:p-3 w-1/2 rounded-lg md:text-xs lg:text-base"
              />
              <input
                placeholder="Your Email Address"
                className="bg-white p-2 md:p-3 w-1/2 rounded-lg md:text-xs lg:text-base"
              />
            </div>

            <textarea
              placeholder="Question"
              className="bg-white p-3 w-full h-[120px] rounded-2xl md:text-xs lg:text-base"
            />
          </div>

          <button
            className="group inline-flex items-center gap-3 rounded-full bg-white/5 px-5 py-2
            md:text-xs lg:text-base el:text-lg text-[#0052B4] font-semibold transition"
            type="button"
          >
            Learn More
            <span className="grid h-7 w-7 place-items-center rounded-full bg-sky-600/20 transition group-hover:translate-x-0.5">
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
        </div>
      </div>
    </div>
  );
}
