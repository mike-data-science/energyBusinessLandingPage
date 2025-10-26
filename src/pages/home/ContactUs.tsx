import image1 from '../../assets/eighth/image.png'
import image2 from '../../assets/eighth/image2.png'
import image3 from '../../assets/eighth/image3.png'
import image4 from '../../assets/eighth/image4.png'

export default function AboutUs() {
    return (
        <div className="relative h-[110vh] w-full sm:p-10 md:p-20 bg-white">
            <img src={image1} className='h-10/10 w-6/10' />
            {/* -------------------------------------------------------------------- */}
            <div className='absolute bottom-15 bg-[#001337]/60 flex flex-col rounded-r-2xl rounded-bl-2xl
             backdrop-blur-2xl gap-3 justify-center w-2/10 h-4/10 p-10'>
                <div className='flex items-center gap-3 '>
                    <img src={image2} alt="" className='w-8 h-8 shrink-0' />
                    <div>
                        <h1 className='text-white text-2xl font-semibold'>Albert Johns</h1>
                        <p className='text-white font-light'>albertjohns@gmail.com</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 '>
                    <img src={image3} alt="" className='w-8 h-8 shrink-0' />
                    <div>
                        <p className='text-white font-light'>+64 1233 4567 890</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 '>
                    <img src={image4} alt="" className='w-8 h-8 shrink-0' />
                    <div>
                        <p className='text-white font-light'>George Street Huntingdon, United Kingdom</p>
                    </div>
                </div>


            </div>
            <div className='absolute bottom-10 right-20 flex justify-end bg-white/80 backdrop-blur-2xl
             shadow-lg rounded-2xl p-10 w-5/12 h-7/10'>
                <div className='flex flex-col space-y-3'>
                    <h1 className='font-medium text-3xl'>Contact Us</h1>
                    <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.</p>
                    <div className='flex flex-col space-y-3'>
                        <div className='flex gap-5'>
                            <input type="Your Name" placeholder='Your Name' className='bg-white p-3  w-1/2 rounded-1xl'/>
                            <input type="email" placeholder='Your Email Adress' id="" className='bg-white p-3  w-1/2 rounded-sm'/>
                        </div>
                        <textarea name="" placeholder='Question' className='bg-white p-3 w-full h-[120px] rounded-2xl'></textarea>
                    </div>

                    <button
                        className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-base text-[#0052B4] font-semibold transition hover:bg-white/10"
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
        </div>
    )
}