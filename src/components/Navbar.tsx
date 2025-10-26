import Logo from "../assets/logo.svg"
import Icon_arrow from '../assets/Icon.svg'
export default function Navbar() {
    return (
        <nav className="flex gap justify-between items-center my-2 mx-10 text-amber-50">
            <img className="h-8" src={Logo} alt="" />
            <div className="flex gap-10">
                <a href="">Home</a>
                <a href="">Services</a>
                <a href="">Partners</a>
                <a href="">Innovation</a>
                <a href="">Support</a>
                <a href="">About Us</a>
            </div>
            <div className="flex justify-between items-center gap-2">
                <a href="">Contact Us</a>
                <img className ="h-5"src={Icon_arrow} alt="" />
            </div>
        </nav>
    )
}