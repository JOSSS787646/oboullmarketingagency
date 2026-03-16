import { useEffect, useRef } from "react"
import "./ArquitecturaCrecimiento.css"

export default function ArquitecturaCrecimiento() {

    const sectionRef = useRef(null)

    useEffect(() => {

        const el = sectionRef.current
        if (!el) return

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    // entra al viewport → anima
                    entry.target.classList.add("areas-visible")

                } else {

                    // sale del viewport → reinicia animación
                    entry.target.classList.remove("areas-visible")

                }

            })

        }, {
            threshold: 0.2
        })

        observer.observe(el)

        return () => observer.disconnect()

    }, [])


    return (
        <section id="areas" ref={sectionRef} className="areas">


            <div className="areas-header">

                <span className="areas-badge">
                    ÁREAS DE DOMINIO
                </span>

                <h2 className="section-title">
                    LA ARQUITECTURA DEL
                    <span> CRECIMIENTO.</span>
                </h2>

            </div>


            <div className="areas-grid">

                {/* CARD 1 */}

                <div className="area-card">

                    <div className="area-number">01</div>

                    <div className="area-icon">

                        <svg viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                            <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2" />
                        </svg>

                    </div>

                    <h3>SEO y Contenido</h3>

                    <p>Dominio orgánico y autoridad temática de marca.</p>

                </div>


                {/* CARD 2 */}

                <div className="area-card">

                    <div className="area-number">02</div>

                    <div className="area-icon">

                        <svg viewBox="0 0 24 24">
                            <rect x="3" y="4" width="18" height="6" stroke="currentColor" strokeWidth="2" />
                            <rect x="3" y="14" width="18" height="6" stroke="currentColor" strokeWidth="2" />
                        </svg>

                    </div>

                    <h3>Marketing Digital</h3>

                    <p>Ecosistemas digitales orientados a conversión.</p>

                </div>


                {/* CARD 3 */}

                <div className="area-card">

                    <div className="area-number">03</div>

                    <div className="area-icon">

                        <svg viewBox="0 0 24 24">
                            <path d="M4 12C7 6 17 6 20 12C17 18 7 18 4 12Z" stroke="currentColor" strokeWidth="2" />
                            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                        </svg>

                    </div>

                    <h3>Segmentación</h3>

                    <p>Precisión hiper-segmentada de audiencias.</p>

                </div>


                {/* CARD 4 */}

                <div className="area-card">

                    <div className="area-number">04</div>

                    <div className="area-icon">

                        <svg viewBox="0 0 24 24">
                            <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                            <path d="M4 21C4 16 20 16 20 21" stroke="currentColor" strokeWidth="2" />
                        </svg>

                    </div>

                    <h3>Redes y Publicidad</h3>

                    <p>Distribución de pauta y control de atención.</p>

                </div>


                {/* CARD 5 */}

                <div className="area-card highlight">

                    <div className="area-number">05</div>

                    <div className="area-icon">

                        <svg viewBox="0 0 24 24">
                            <path d="M3 12L12 4L21 12L12 20Z" stroke="currentColor" strokeWidth="2" />
                        </svg>

                    </div>

                    <h3>Branding y Diseño</h3>

                    <p>Ingeniería visual para posicionamiento premium.</p>

                </div>


                {/* CARD 6 */}

                <div className="area-card">

                    <div className="area-number">06</div>

                    <div className="area-icon">

                        <svg viewBox="0 0 24 24">
                            <line x1="4" y1="20" x2="4" y2="10" stroke="currentColor" strokeWidth="2" />
                            <line x1="12" y1="20" x2="12" y2="6" stroke="currentColor" strokeWidth="2" />
                            <line x1="20" y1="20" x2="20" y2="14" stroke="currentColor" strokeWidth="2" />
                        </svg>

                    </div>

                    <h3>Ingeniería de Precios</h3>

                    <p>Optimización de márgenes y percepción de valor.</p>

                </div>

            </div>

        </section>

    )

}