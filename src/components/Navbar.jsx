
import { styles } from "../styles"
import { navLinks } from "../constants"
import { close, logo, menu } from "../assets"
import { Link } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {

    const [active, setActive] = useState("")
    const [toggle, setToggle] = useState(false)

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-black`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link to="/" className="flex items-center gap-2" onClick={() => { setActive(""); window.scrollTo(0, 0) }}>
                    <img src={logo} alt="logo" className="w-9 h-9 object-contain rounded-full" />
                    <p className="text-white text-[16px] font-bold cursor-pointer hidden sm:flex">Alessandro Baldassarre</p>
                </Link>

                {/* ~~~~ MOBILE MENU ~~~~~ */}
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => { setToggle(!toggle) }} />

                    <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className="list-none flex flex-col gap-4 justify-end items-start">
                            {navLinks.map((link) => (
                                <li key={link.id} className={`${active === link.title ? "text-orange-500" : "text-white"} font-poppins font-medium cursor-pointer text-[16px]`}
                                    onClick={() => { setActive(link.title); setToggle(!toggle) }}>
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ~~~~~~ MENU ~~~~~~~ */}
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li key={link.id} className={`${active === link.title ? "text-orange-500" : "text-white"} hover:text-orange-500 text-[18px] font-medium cursor-pointer`}
                            onClick={() => { setActive(link.title) }}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>

            </div>
        </nav>
    )
}

export default Navbar
