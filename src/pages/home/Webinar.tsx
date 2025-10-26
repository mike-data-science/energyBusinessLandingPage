import Image1 from "../../assets/seventh/Image.png";
import Image2 from "../../assets/seventh/image2.png";

export default function ResponsiveSection() {
    return (
        <div className="max-h-screen w-full sm:p-10 md:p-20 flex items-center justify-center">
            <div className="w-full max-w-7xl flex flex-col md:flex-row overflow-hidden rounded-2xl">
                <div className="relative h-[80vh] md:h-[80vh] w-1/2 flex gap-8">
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
                    {/* ------------------------------------------------------------------------- */}
                    <div className=" absolute flex flex-col justify-end items-end  h-[80vh] md:h-[80vh] ">
                        <div className="bg-white/80 flex justify-center gap-4 p-4 w-7/10 rounded-2xl mb-4 backdrop-blur-2xl shadow-lg">
                            <div className="bg-[#36BA6F] w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center shrink-0">
                                <p className="text-white font-semibold">1</p>
                            </div>

                            <p>How this new asset mix and decentralization trend is changing the operation and maintenance of these assets</p>
                        </div>

                        <div className="bg-white/80 flex justify-center gap-4 p-4 w-7/10 rounded-2xl mb-4 backdrop-blur-2xl shadow-lg">
                            <div className="bg-[#36BA6F] w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center shrink-0">
                                <p className="text-white font-semibold">2</p>
                            </div>
                            <p className="text-[#202636]">Managing O&M cost and maintaining other KPI’s while empowering the workforce.</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 w-1/2 bg-white flex items-center justify-center p-8 md:p-12">
                    <div className="max-w-md flex flex-col gap-4 w-8/10">
                        <p className="text-[#202636] text-3xl md:text-4xl font-medium">
                            Power Magazine on-demand webinar with professionals
                        </p>

                        <button
                            className="group inline-flex items-center gap-3 py-2 text-base text-[#0052B4] font-semibold transition" type="button"
                        >
                            Learn More
                            <span className="grid h-7 w-7 place-items-center rounded-full bg-sky-600/20 transition-transform group-hover:translate-x-0.5">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
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

                        <hr className="text-[#0A1254]/7" />

                        <p className="text-[#737B8F] font-medium">
                            Watch as industry expert John Korsedal, GE Digital, discusses the impact of decarbonization in the power generation industry and how these trends are driving a mix of more decentralized assets over large geographic areas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
