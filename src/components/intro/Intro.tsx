import "./intro.css"
import { useEffect, useRef } from "react"

export default function Intro() {

  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {

    const element = sectionRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          } else {
            entry.target.classList.remove("visible")
          }

        })

      },
      { threshold: 0.35 }
    )

    observer.observe(element)

    return () => observer.disconnect()

  }, [])

  return (

    <section className="intro">

      <div ref={sectionRef} className="intro__content">

        <h2 className="intro__title">
          EL ÉXITO NO ES FRUTO DE LA CASUALIDAD,
          <br />
          SINO DE LA ARQUITECTURA.
        </h2>

        <p className="intro__text">
          Mientras el mundo se conforma con publicar contenido,
          nosotros nos enfocamos en hackear la realidad comercial
          de nuestros aliados.
        </p>

      </div>

    </section>

  )

}