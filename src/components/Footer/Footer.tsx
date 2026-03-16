import { useEffect, useRef } from "react"
import "./Footer.css"

export default function Footer() {

    const footerRef = useRef<HTMLElement | null>(null)

    useEffect(() => {

        const el = footerRef.current
        if (!el) return

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("footer-visible")
                } else {
                    entry.target.classList.remove("footer-visible")
                }

            })

        }, { threshold: .15 })

        observer.observe(el)

        return () => observer.disconnect()

    }, [])

    return (

        <footer ref={footerRef} className="footer">

            <div className="footer-container">

                {/* LOGO + DESCRIPCION */}

                <div className="footer-brand">

                    <img
                        src="/LogoObom.png"
                        alt="Oboull"
                        className="footer-logo"
                    />

                    <p className="footer-description">
                        Arquitectura estratégica para dominar mercados mediante
                        el sistema Sinergia 10×10 y la creación de activos
                        empresariales sostenibles.
                    </p>

                </div>


                {/* CONTACTO */}

                <div className="footer-contact">

                    <h4>Contacto</h4>

                    <a href="mailto:oboullmarketingagency@gmail.com">

                        <span className="footer-icon">

                            <svg viewBox="0 0 24 24">
                                <path d="M4 4H20V20H4Z" stroke="currentColor" strokeWidth="2" />
                                <path d="M4 6L12 13L20 6" stroke="currentColor" strokeWidth="2" />
                            </svg>

                        </span>

                        <span>oboullmarketingagency@gmail.com</span>

                    </a>


                    <a
                        href="https://www.instagram.com/oboullmkt"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <span className="footer-icon">

                            <svg viewBox="0 0 24 24">
                                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
                                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                                <circle cx="17" cy="7" r="1.5" fill="currentColor" />
                            </svg>

                        </span>

                        <span>Instagram</span>

                    </a>


                    <a
                        href="https://wa.me/527731783806"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <span className="footer-icon">

                            <svg viewBox="0 0 24 24">
                                <path d="M21 11.5C21 16.7 16.9 21 11.5 21C9.7 21 8 20.5 6.5 19.6L3 21L4.4 17.6C3.5 16.1 3 14.4 3 12.5C3 7.3 7.1 3 12.5 3C17.9 3 21 7.3 21 11.5Z" stroke="currentColor" strokeWidth="2" />
                            </svg>

                        </span>

                        <span>+52 773 178 8306</span>

                    </a>


                    <a
                        href="https://oboullmarketingagency.wegic.net"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <span className="footer-icon">

                            <svg viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                                <path d="M3 12H21" stroke="currentColor" strokeWidth="2" />
                                <path d="M12 3C15 7 15 17 12 21C9 17 9 7 12 3Z" stroke="currentColor" strokeWidth="2" />
                            </svg>

                        </span>

                        <span>Sitio web</span>

                    </a>

                </div>


                {/* LEGAL */}

                <div className="footer-legal">

                    <h4>Legal</h4>

                    <a href="#">Privacidad</a>
                    <a href="#">Términos</a>

                </div>

            </div>


            <div className="footer-bottom">

                <span>
                    © {new Date().getFullYear()} Oboull. Todos los derechos reservados.
                </span>

            </div>

        </footer>

    )

}