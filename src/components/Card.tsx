export default function Card(props){
    return(
<div id="card" className="bg-white/60 w-2xs h-3xs flex flex-col items-center justify-center rounded-2xl shadow-md">
                        <img className="h-[40%] rounded-t-2xl" src={props.image} alt="" />
                        <div className="h-[60%] p-5 space-y-1">
                            <p className="inline-block text-40 font-semibold tracking-widest text-[#00B5E2] ">
                                IDUSTRY
                            </p>
                            <h1 className="text-[#202636] font-semibold">Advanced Distribution Management Solutions </h1>
                            <p className="text-[#737B8F] text-2xs">Distribution management systems for the modern grid.</p>
                            <button
                                className="group inline-flex items-center gap-3  bg-white/5
                             py-2 text-base text-[#0052B4] font-semibold transition hover:bg-white/10"
                                type="button"
                            >Learn More
                                <span className="grid h-7 w-7 place-items-center rounded-full bg-sky-600/20 transition group-hover:translate-x-0.5">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
    )
}