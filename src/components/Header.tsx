import Navbar from "./Navbar";
import React from "react";
import video from '../assets/Video.png'
import container from '../assets/Container.png'
<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;700&display=swap" rel="stylesheet"></link>

export default function Header() {
// const [c, setc] = React.useState('red');
//     React.useEffect(() => {
//         setInterval(() => {
//             setc(c+c)
//         }, 1000)
//     }, [c])
    return (
        <div className="w-full">
            <div className="relative flex justify-between items-start min-h-[90vh] sm:p-10 md:p-20 bg-[#0052B4] bg-cover bg-center">

                <div className="w-1/2 flex flex-col justify-center items-start pt-5">
                    <div className=" break-words whitespace-normal leading-tight w-7/10">
                        <p className="text-[#FFD84D] text-3xl">REWABLE ENERGY</p>
                        <h1 className="text-white text-6xl font-bold ">
                            Digital in the Future of Energy
                        </h1>
                    </div>
                </div>

                <div className="w-1/2 flex flex-col justify-center items-center p-10">
                    <div className="break-words whitespace-normal leading-tight w-6/10 space-y-3">
                        <h1 className="text-white text-2xl font-bold">
                            Enable reliable, cost effective and dispatchable power
                        </h1>
                        <p className="text-white text-1xl">
                            Sun Energy has accumulated more than 9 gigawatts of total global installed base and backlog for its inverter technology...
                        </p>
                    </div>
                </div>

            </div>
            <div className="w-full min-h-[10vh] bg-gradient-to-b from-blue-600 to-white shadow-[0_10px_300px_-600px_rgba(0,0,0,0.5)] drop-shadow-[0_60px_90px_rgba(9,132,199,0.45)]"></div>
            {/* ------------------------------------------------------------------------------------------------------ */}
            <div className="absolute top-0 left-0 w-full">
                    <Navbar />
                </div>
            <div className="absolute flex items-end bottom-[10px] sm:px-10 md:px-20 ">
                {/* First card */}
                <div className="relative flex flex-col justify-around items-center px-3
                    bg-white/80 w-[270px] h-[340px] rounded-2xl 
                    backdrop-blur-lg border border-white/30 shadow-lg">
                    <div className="max-w-[150px] text-center text-base font-semibold pt-5">
                        <h1 className="text-[#0052B4] text-5xl">10M+</h1>
                        <p className="text-[#202636]">Worldwide product sales per year</p>
                    </div>
                    <div className="max-h-[50%]">
                        <img className="w-full h-full object-cover rounded-1xl" src={video} />
                    </div>
                </div>
                {/* Second card, shifted left by 5px */}
                <div
                    className="relative mb-12 w-[700px] h-27 bg-cover flex items-center justify-center"
                    style={{ backgroundImage: `url(${container})` }}
                >
                    <p className="text-white text-xl w-[500px]">Reducing carbon and costs while providing sustainable, reliable, and affordable power</p>
                </div>

            </div>
        </div>
    );
}