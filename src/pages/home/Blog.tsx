import Image1 from "../../assets/sixth/image.png"
import Image2 from "../../assets/sixth/image2.png"
import Image3 from "../../assets/sixth/image3.png"
import Card from "../../components/Card"
export default function Blog() {
    return (
        <div id="blog" className="max-h-screen bg-white p-5 
        sm:px-10 md:px-20 lg:px-30 el:px-40 ">
            <div className="w-full h-full">
                <div className="p-5 flex flex-col gap-3">
                    <p className="inline-block border-l-4 border-emerald-400 pl-3 text-40 font-semibold tracking-widest text-emerald-300">
                        Our Blog
                    </p>

                    <div className="flex justify-between">
                        <p className="text-[#202636] text-4xl max-w-[450px]">Advancing the energy transition through innovation</p>
                        <button
                            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#0052B4]
                             px-4 py-2 h-1/2 text-base text-white transition hover:bg-white/10 hover:text-[#0052B4]"
                            type="button"
                        >Read More
                            <span className="grid h-5 w-5 place-items-center rounded-full bg-white transition group-hover:translate-x-0.5">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12h14M13 5l7 7-7 7" stroke="#0052B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>

                <div id="cards" className="flex justify-center items-center gap-5 w-full h-4/5 md:py-10 2xl:py-20 el:py-30">
                    <Card image={Image1}/>
                    <Card image={Image2}/>
                    <Card image={Image3}/>
                </div>
            </div>
        </div>
    )
}



