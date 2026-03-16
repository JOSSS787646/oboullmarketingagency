import { useEffect, useRef, useState } from "react"
import "./SolicitarIntervencion.css"

export default function SolicitarIntervencion() {

    const sectionRef = useRef(null)

    const [nombre, setNombre] = useState("")
    const [empresa, setEmpresa] = useState("")
    const [facturacion, setFacturacion] = useState("")

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

        }, { threshold: 0.15 })

        observer.observe(el)

        return () => observer.disconnect()

    }, [])


    const enviarCorreo = () => {

        const destinatario = "oboullmarketingagency@gmail.com"

        const asunto = "Solicitud de Intervención"

        const cuerpo = `
Nombre: ${nombre}
Empresa / Web: ${empresa}
Facturación mensual: ${facturacion}
        `

        const mailto = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`

        window.location.href = mailto

    }

    return (

        <section id="contacto" ref={sectionRef} className="contact">

            <div className="contact-container">

                <div className="contact-left">

                    <h2 className="contact-title">
                        SOLICITAR
                        <span> INTERVENCIÓN.</span>
                    </h2>

                </div>

                <div className="contact-form">

                    <label>NOMBRE COMPLETO</label>
                    <input
                        placeholder="Ej. Carlos Mendoza"
                        onChange={(e) => setNombre(e.target.value)}
                    />

                    <label>EMPRESA / SITIO WEB</label>
                    <input
                        placeholder="www.tuempresa.com"
                        onChange={(e) => setEmpresa(e.target.value)}
                    />

                    <label>FACTURACIÓN MENSUAL</label>

                    <select onChange={(e) => setFacturacion(e.target.value)}>
                        <option>Seleccionar rango</option>
                        <option>$5k - $20k</option>
                        <option>$20k - $100k</option>
                        <option>$100k+</option>
                    </select>

                    <button
                        className="contact-button"
                        onClick={enviarCorreo}
                    >
                        Enviar Solicitud de Auditoría
                    </button>

                </div>

            </div>


            {/* LOGO EMPRESA */}

            <div className="contact-logo-container">

                <img
                    src="/Letra.png"
                    alt="Logo empresa"
                    className="contact-logo"
                />

            </div>

        </section>

    )

}