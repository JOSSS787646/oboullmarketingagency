import { useEffect, useRef } from "react"
import "./hero.css"

export default function Hero() {

  const heroRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {

    const el = heroRef.current
    if (!el) return

    const observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("hero-visible")
        } else {
          entry.target.classList.remove("hero-visible")
        }

      })

    }, { threshold: 0.3 })

    observer.observe(el)

    return () => observer.disconnect()

  }, [])

  return (

    <section id="hero">

      {/* VIDEO BACKGROUND */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/Fondo32.mp4" type="video/mp4" />
      </video>

      <div className="hero-container">

        <div ref={heroRef} className="hero">

          <div className="badge">
            CÉLULA DE INTELIGENCIA ESTRATÉGICA
          </div>

          <h1>
            MODIFICAMOS LA
            <span className="outline">
              REALIDAD COMERCIAL.
            </span>
          </h1>

          <p className="subtitle">
            Dejamos de operar bajo suposiciones. Dominamos tu mercado a través
            de datos y nuestra metodología <strong>Sinergia 10×10</strong>.
          </p>

          <div className="btns">
            <a href="#sistema" className="btn-primary">
              Descubrir Sinergia
            </a>

            <a href="#contacto" className="btn-secondary">
              Postular mi empresa
            </a>

          </div>

        </div>

      </div>

      <div className="scroll-indicator">
        <span>SCROLL</span>
        <div className="scroll-line"></div>
      </div>

    </section>
  )
}