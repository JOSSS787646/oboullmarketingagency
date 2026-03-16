import { useState, useEffect } from "react"
import "./Navbar.css"

export default function Navbar() {

    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 80)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    return (

        <header className={`nav ${scrolled ? "nav-visible" : ""}`}>

            <div className="nav-container">

                {/* LOGO */}

                <div className="nav-logo">

                    <a href="#hero">

                        <img
                            src="/LogoObom.png"
                            alt="Oboull"
                        />

                    </a>

                </div>


                {/* MENU */}

                <nav className={`nav-menu ${open ? "active" : ""}`}>

                    <a href="#sistema" onClick={() => setOpen(false)}>
                        SISTEMA DE INTERVENCIÓN
                    </a>

                    <a href="#areas" onClick={() => setOpen(false)}>
                        LA ARQUITECTURA DEL CRECIMIENTO
                    </a>

                    <a href="#team" onClick={() => setOpen(false)}>
                        OBOULL TEAM
                    </a>

                    <a href="#contacto" className="nav-cta" onClick={() => setOpen(false)}>
                        SOLICITAR INTERVENCIÓN
                    </a>

                </nav>


                {/* BURGER MENU */}

                <div
                    className={`nav-toggle ${open ? "active" : ""}`}
                    onClick={() => setOpen(!open)}
                >

                    <span></span>
                    <span></span>
                    <span></span>

                </div>

            </div>

        </header>

    )

}