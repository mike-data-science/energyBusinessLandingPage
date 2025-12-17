export default function About() {
    return (
        <div id="services" className="relative bg-white h-8/10  flex justify-around 
                            sm:p-10 md:p-20 lg:p-30 el:p-40
                            sm:py-5 lg:py-10 el:py-15 ul:py-20 gap-10">
            <div className="relative min-h-4/6 w-3/10 bg-[url('../src/assets/second/Image.jpg')] bg-center bg-cover rounded-2xl flex items-center">
                <div
                    className="absolute bg-[#000816]/80 aspect-square
             md:w-40 lg:w-48 xl:w-56 -right-30 sm:bottom-30 bottom-50
             rounded-2xl
             flex flex-col items-center justify-center p-4"
                >
                    <div className="w-1/2 h-1/2 bg-white rounded-full shadow-md ring-1 ring-white/30 flex justify-center items-center">
                        <img
                            className="w-1/2 h-1/2"
                            src="../src/assets/second/Ic_Water.png"
                            alt=""/></div>

                    <p className="text-white text-center mt-3 text-sm md:text-base">Hidro Power</p>
                </div>

            </div>

            <div className="flex flex-col w-7/10 justify-between">
                <div className="">
                    <h1 className="text-[clamp(25px,4vw,80px)] text-[#202636] font-semibold leading-tight">
                        Decarbonization is mission<br />critical for the planet
                    </h1>

                    <div className="lg:flex items-center gap-3">
                        <a className="text-[#0052B4] text-[clamp(20px,1.5vw,40px)] font-semibold hover:text-gray-400" href="">Learn More</a>
                        <svg className="w-8 h-8 lg:h-10 el:w-10 text-[#0052B4]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </div>
                </div>
                <div className="h-2/3 flex justify-around gap-x-10 my-10">
                    <div className="w-4/10 bg-[url('../src/assets/second/man.jpg')] bg-center bg-cover rounded-3xl"></div>
                    <div className="w-6/10 flex flex-col justify-between">
                        <p className="text-[clamp(15px,1.5vw,60px)] text-[#737B8F]">The global energy landscape will change more in the next 10 years than in the previous hundred. As the world’s energy sector moves away from fossil fuels toward renewable energy sources, industrial companies are challenged with addressing this transition in transformative ways.</p>
                        <p className="text-[clamp(15px,1.5vw,60px)] text-[#737B8F]">Renewable Energy harnesses the earth’s most abundant resources – the strength of the wind, the heat of the sun, ,and the force of water; delivering green electrons to power the world’s biggest economies and the most remote communities.</p>
                    </div>
                </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------ */}

        </div>
    )
}