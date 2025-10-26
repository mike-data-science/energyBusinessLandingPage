export default function About() {
    return (
        <div className="relative bg-white min-h-screen max-w-screen flex justify-around p-20 gap-10">
            <div className="min-h-4/6 min-w-2xs bg-[url('../src/assets/second/Image.jpg')] bg-center bg-cover rounded-2xl"></div>
            <div className="flex flex-col justify-around">
                <div className="">
                    <h1 className="text-4xl text-[#202636] max-w-[450px] font-semibold">Decarbonization is mission, critical for the planet</h1>
                    <button className="text-[#0052B4] my-5">Learn More</button>
                </div>
                <div className="flex justify-around gap-4">
                    <div className="min-h-[300px] min-w-[230px] bg-[url('../src/assets/second/man.jpg')] bg-center bg-cover rounded-3xl"></div>
                    <div className="flex flex-col justify-around">
                        <p className="text-[20px] text-[#737B8F]">The global energy landscape will change more in the next 10 years than in the previous hundred. As the world’s energy sector moves away from fossil fuels toward renewable energy sources, industrial companies are challenged with addressing this transition in transformative ways.</p>
                        <p className="text-[20px] text-[#737B8F]">Renewable Energy harnesses the earth’s most abundant resources – the strength of the wind, the heat of the sun, ,and the force of water; delivering green electrons to power the world’s biggest economies and the most remote communities.</p>
                    </div>
                </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------ */}
            <div className="absolute bg-[#000816]/62 min-w-[130px] min-h-[130px] left-80 bottom-40 rounded-2xl flex flex-col items-center justify-center p-3">
                <div className="w-13 h-13  bg-white rounded-full shadow-md ring-1 ring-white/30 mx-auto flex justify-center items-center">
                <img className="w-8 h-8" src="../src/assets/second/Ic_Water.png" alt="" />
                </div>
                <p className="text-white text-center mt-2 text-sm md:text-base">Hidro Power</p>
            </div>
        </div>
    )
}