import { useEffect } from "react"

export default function FluidBackground(){

  useEffect(()=>{

    const script=document.createElement("script")
    script.src="/fluid.js"   // ← SIN /public
    script.async=true

    document.body.appendChild(script)

  },[])

  return <canvas id="c"/>
}