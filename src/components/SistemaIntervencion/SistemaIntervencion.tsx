import { useEffect, useRef } from "react"
import "./SistemaIntervencion.css"

export default function SistemaIntervencion() {

    const sectionRef = useRef(null)

    useEffect(() => {

        const el = sectionRef.current
        if (!el) return

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("sistema-visible")
                } else {
                    entry.target.classList.remove("sistema-visible")
                }

            })

        }, { threshold: .2 })

        observer.observe(el)

        return () => observer.disconnect()

    }, [])

    return (

        <section id="sistema" ref={sectionRef} className="sistema">

            <div className="sistema-header">

                <div className="sistema-header-left">

                    <h2 className="sistema-title">
                        SISTEMA DE <span>INTERVENCIÓN</span>
                    </h2>

                    <p className="sistema-subtitle">
                        Operamos bajo un sistema riguroso de tres fases que garantiza el
                        retorno de inversión y la creación de activos permanentes.
                    </p>

                </div>

                <div className="sistema-factor">

                    <span className="factor-number">10x10</span>
                    <span className="factor-text">FACTOR SINERGIA</span>

                </div>

            </div>


            <div className="sistema-grid">

                {/* CARD 1 */}

                <div className="sistema-card card-green">

                    <div className="card-number">01</div>

                    <div className="card-icon">

                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="9" stroke="#1a5aff" strokeWidth="2" />
                            <circle cx="12" cy="12" r="5" stroke="#1a5aff" strokeWidth="2" />
                            <circle cx="12" cy="12" r="2" fill="#1a5aff" />
                        </svg>

                    </div>

                    <h3>Inteligencia de Mercado</h3>

                    <p>
                        Auditoría profunda y "Rayo X" empresarial para detectar fugas de
                        capital y oportunidades ocultas en tu ecosistema.
                    </p>

                </div>


                {/* CARD 2 */}

                <div className="sistema-card card-blue">

                    <div className="card-number">02</div>

                    <div className="card-icon">

                        <svg viewBox="0 0 24 24">
                            <path d="M12 4L4 8L12 12L20 8L12 4Z" stroke="#d6ff00" strokeWidth="2" />
                            <path d="M4 12L12 16L20 12" stroke="#d6ff00" strokeWidth="2" />
                            <path d="M4 16L12 20L20 16" stroke="#d6ff00" strokeWidth="2" />
                        </svg>

                    </div>

                    <h3>Arquitectura Estratégica</h3>

                    <p>
                        Rediseño del modelo de negocio, ingeniería de precios y desarrollo
                        de una ventaja competitiva irrefutable.
                    </p>

                </div>


                {/* CARD 3 */}

                <div className="sistema-card card-white">

                    <div className="card-number">03</div>

                    <div className="card-icon">

                        <svg viewBox="0 0 24 24">
                            <path d="M4 12C7 6 17 6 20 12C17 18 7 18 4 12Z" stroke="#fff" strokeWidth="2" />
                            <circle cx="12" cy="12" r="3" stroke="#fff" strokeWidth="2" />
                        </svg>

                    </div>

                    <h3>Expansión y Dominio</h3>

                    <p>
                        Ejecución de campañas de alto impacto, presencia digital disruptiva
                        y protocolos de servicio de élite.
                    </p>

                </div>

            </div>

        </section>

    )

}