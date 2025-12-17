import Logo from "../assets/logo.svg"
import Icon_arrow from '../assets/Icon.svg'
import Menu from '../assets/Menu.svg'
export default function Navbar() {
    return (
        <nav className="relative text-amber-50 sm:px-10 md:px-20 lg:px-30 el:px-40">
            <div className="flex justify-between items-center 
                            py-7">
                <img className="h-8 2xl:h-12" src={Logo} alt="" />
                <div className="hidden gap-10 lg:flex">
                    <a className="hover:text-gray-400" href="#home">Home</a>
                    <a className="hover:text-gray-400" href="#services">Services</a>
                    <a className="hover:text-gray-400" href="#solution">Solution</a>
                    <a className="hover:text-gray-400" href="#benefits">Benefits</a>
                    <a className="hover:text-gray-400" href="#blog">Blog</a>
                    <a className="hover:text-gray-400" href="#profesional">Profesional</a>
                </div>
                <div className="hidden lg:flex justify-between items-center gap-2 ">
                    <a className="hover:text-gray-400" href="#contact">Contact Us</a>
                    <img className="h-5" src={Icon_arrow} alt="" />
                </div>
                <img className=" block lg:hidden cursor-pointer h-5 z-10" src={Menu} alt="" />
            </div>
            {/* ---------------------------------------- */}
            <div className="relative">

                <div className="hidden fixed w-full bg-white top-0 right-0 bottom-0 
                         text-black text-2xl space-y-3 justify-center items-center flex-col lg:hidden overflow-hidden transition-all">
                    <a className="hover:text-gray-400" href="">Home</a>
                    <a className="hover:text-gray-400" href="">Services</a>
                    <a className="hover:text-gray-400" href="">Partners</a>
                    <a className="hover:text-gray-400" href="">Innovation</a>
                    <a className="hover:text-gray-400" href="">Support</a>
                    <a className="hover:text-gray-400" href="#">About Us</a>
                </div>
            </div>


        </nav>
    )
}