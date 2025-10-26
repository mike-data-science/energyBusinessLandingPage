import Navbar from "./Navbar";
import video from '../assets/Video.png'
import container from '../assets/Container.png'
<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;700&display=swap" rel="stylesheet"></link>

export default function Header() {
    return (
        <div className="relative w-full ">
            <div className="relative flex min-h-[90vh] bg-[#0052B4] shadow-lg ">
                <div className="absolute top-0 left-0 w-full">
                    <Navbar />
                </div>

                <div className="flex flex-col justify-center w-1/2 h-[60vh]">
                    <div className="max-w-[500px] break-words whitespace-normal leading-tight mx-auto ">
                        <p className="text-[#FFD84D] text-3xl">REWABLE ENERGY</p>
                        <h1 className="text-white text-6xl font-bold max-w-[500px]">
                            Digital in the Future of Energy
                        </h1>
                    </div>
                </div>

                <div className="flex flex-col justify-center w-1/2 h-[60vh]">
                    <div className="max-w-[400px] break-words whitespace-normal leading-tight mx-auto ">
                        <h1 className="text-white text-2xl font-bold">
                            Enable reliable, cost effective and dispatchable power
                        </h1>
                        <p className="text-[#FFD84D] text-1xl">
                            Sun Energy has accumulated more than 9 gigawatts of total global installed base and backlog for its inverter technology...
                        </p>
                    </div>
                </div>

            </div>
            <div className="absolute flex items-end bottom-[10px] ml-25">
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

            <div className="w-full min-h-[10vh] bg-gradient-to-b from-gray-500 to-white shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.5)]"></div>
        </div>
    );
}