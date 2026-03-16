import { useEffect, useRef } from "react"
import "./SolicitarIntervencion.css"

export default function SolicitarIntervencion() {

    const sectionRef = useRef(null)

    useEffect(() => {

        const el = sectionRef.current
        if (!el) return

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("contact-visible")
                } else {
                    entry.target.classList.remove("contact-visible")
                }

            })

        }, {
            threshold: 0.15
        })

        observer.observe(el)

        return () => observer.disconnect()

    }, [])


    return (

        <section id="contacto" ref={sectionRef} className="contact">

            <div className="contact-container">

                {/* LEFT */}

                <div className="contact-left">

                    <h2 className="contact-title">
                        SOLICITAR
                        <span> INTERVENCIÓN.</span>
                    </h2>

                    <p className="contact-text">
                        No buscamos clientes, seleccionamos 10 socios estratégicos por ciclo.
                        Si estás listo para dejar de operar bajo suposiciones, hablemos.
                    </p>


                    <div className="contact-info">

                        <div>

                            <span className="contact-label">
                                DISPONIBILIDAD ACTUAL
                            </span>

                            <p className="contact-value">
                                2 Plazas / 10
                            </p>

                        </div>


                        <div>

                            <span className="contact-label">
                                EMAIL DIRECTO
                            </span>

                            <p className="contact-value">
                                oboullmarketingagency@gmail.com
                            </p>

                        </div>

                    </div>

                </div>



                {/* RIGHT FORM */}

                <div className="contact-form">

                    <label>NOMBRE COMPLETO</label>
                    <input placeholder="Ej. Carlos Mendoza" />

                    <label>EMPRESA / SITIO WEB</label>
                    <input placeholder="www.tuempresa.com" />

                    <label>FACTURACIÓN MENSUAL (APROX)</label>

                    <select>
                        <option>Seleccionar rango</option>
                        <option>$5k - $20k</option>
                        <option>$20k - $100k</option>
                        <option>$100k+</option>
                    </select>

                    <button className="contact-button">
                        Enviar Solicitud de Auditoría
                    </button>

                </div>

            </div>

        </section>

    )

}