import { useEffect, useRef } from "react"
import "./TeamSection.css"

export default function TeamSection() {

    const sectionRef = useRef(null)

    useEffect(() => {

        const el = sectionRef.current
        if (!el) return

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("team-visible")
                } else {
                    entry.target.classList.remove("team-visible")
                }

            })

        }, {
            threshold: .15
        })

        observer.observe(el)

        return () => observer.disconnect()

    }, [])

    return (

        <section id="team" ref={sectionRef} className="team">

            <div className="team-header">

                <h2 className="section-title">
                    OBOULL <span>TEAM</span>
                </h2>

                <p className="team-subtitle">
                    El consejo de especialistas de alto rendimiento detrás de la Sinergia 10×10.
                </p>

            </div>


            <div className="team-grid">

                {/* PERSONA 1 */}

                <div className="team-card">

                    <img
                        src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                        alt="Valeria"
                    />

                    <div className="team-info">

                        <h3>Valeria S.</h3>

                        <span>
                            DIRECTORA DE INTELIGENCIA
                        </span>

                    </div>

                </div>


                {/* PERSONA 2 */}

                <div className="team-card">

                    <img
                        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36"
                        alt="Carlos"
                    />

                    <div className="team-info">

                        <h3>Carlos M.</h3>

                        <span>
                            ARQUITECTO ESTRATÉGICO
                        </span>

                    </div>

                </div>


                {/* PERSONA 3 */}

                <div className="team-card">

                    <img
                        src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c"
                        alt="David"
                    />

                    <div className="team-info">

                        <h3>David R.</h3>

                        <span>
                            ESPECIALISTA EN DATOS
                        </span>

                    </div>

                </div>


                {/* PERSONA 4 */}

                <div className="team-card">

                    <img
                        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce"
                        alt="Elena"
                    />

                    <div className="team-info">

                        <h3>Elena T.</h3>

                        <span>
                            HEAD DE EXPANSIÓN
                        </span>

                    </div>

                </div>

            </div>

        </section>

    )

}