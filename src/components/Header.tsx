import Navbar from "./Navbar";
import React from "react";
import video from '../assets/Video.png'
import banner from "../assets/banner.png"
<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;700&display=swap" rel="stylesheet"></link>

export default function Header() {
    // const [c, setc] = React.useState('red');
    //     React.useEffect(() => {
    //         setInterval(() => {
    //             setc(c+c)
    //         }, 1000)
    //     }, [c])
    return (
        <div className="w-full h-screen">
            <div className="relative bg-cover bg-center h-[95vh] bg-[#0052B4b] 
                            sm:p-10 md:p-20 lg:p-30 el:p-40 " style={{
                    backgroundImage: `url(${banner})`,
                }}>
                <div className="flex items-center h-1/2">
                    <div className="w-1/2 el:w-6/10  flex flex-col justify-center items-start pt-5">
                        <div className=" whitespace-normal leading-tight w-7/10">
                            <p className="text-[#FFD84D] text-[clamp(25px,2vw,30px)]">REWABLE ENERGY</p>
                            <h1 className="text-white text-[clamp(30px,3vw,80px)] font-bold ">
                                Digital in the Future of Energy
                            </h1>
                        </div>
                    </div>

                    <div className="w-1/2 flex flex-col justify-end items-center">
                        <div className="whitespace-normal leading-tight w-6/10 space-y-3">
                            <h1 className="text-white font-bold
                            text-[clamp(20px,2vw,40px)]">
                                Enable reliable, cost effective and dispatchable power
                            </h1>
                            <p className="text-white text-[clamp(15px,1.5vw,35px)]">
                                Sun Energy has accumulated more than 9 gigawatts of total global installed base and backlog for its inverter technology...
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-full min-h-[5vh] bg-gradient-to-b from-gray-300 to-white "></div>
            {/* --------------------------------------------Navbar---------------------------------------------------- */}
            <div className="absolute top-0 left-0 w-full">
                <Navbar />
            </div>
            {/* ------------------------------------------------------------------------------------------------------ */}

            <div className="absolute flex items-end bottom-5 h-6/10 w-full sm:px-10 md:px-20 lg:px-30 el:px-40">
                <div className="relative flex flex-col justify-center items-center p-5 bg-white/80 rounded-2xl backdrop-blur-lg border border-white/30 shadow-lg h-5/6 w-1/3 el:w-1/3 ">
                    <div className="max-w-[150px] el:max-w-[200px] h-1/2 text-center text-base font-semibold flex-1 flex items-center justify-center">
                        <div>
                            <h1 className="text-[#0052B4] text-5xl el:text-6xl">10M+</h1>
                            <p className="text-[#202636] el:text-2xl">Worldwide product sales per year</p>
                        </div>
                    </div>
                    <div className="h-1/2">
                        <img className="w-full h-full object-cover rounded-1xl" src={video} />
                    </div>
                </div>

                <div className="relative w-full h-30 mb-[5vh]">
                    <svg
                        className="w-full h-full"
                        viewBox="0 0 600 5"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#83E9FF" />
                                <stop offset="100%" stopColor="#A3EEFF" />
                            </linearGradient>
                        </defs>

                        <path
                            d="M0,0 L375,0 Q625,0 844,80 L1000,160 L0,160 Z"
                            fill="rgba(0,101,219,0.9)"
                            stroke="url(#strokeGradient)"
                            strokeWidth="0.1"
                        />
                    </svg>

                    <div className="absolute inset-0 flex items-center justify-start px-10">
                        <p className="text-white w-2/3 text-[clamp(15px,1.5vw,30px)]">
                            Reducing carbon and costs while providing sustainable, reliable, and affordable power
                        </p>
                    </div>
                </div>


            </div>
        </div>
    );
}