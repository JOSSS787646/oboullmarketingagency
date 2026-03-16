import { useEffect, useRef } from "react"

export default function FluidBackground(){

  const canvasRef = useRef(null)

  useEffect(()=>{

    const canvas = canvasRef.current
    const gl = canvas.getContext("webgl")

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const vertex = `
    attribute vec2 position;
    void main(){
      gl_Position = vec4(position,0.0,1.0);
    }
    `

    const fragment = `
    precision highp float;

    uniform float time;
    uniform vec2 resolution;

    float noise(vec2 p){
      return sin(p.x)*sin(p.y);
    }

    void main(){

      vec2 uv = gl_FragCoord.xy/resolution.xy;

      vec2 p = uv*3.0;

      float t = time*0.2;

      float n =
      noise(p+t)+
      noise(p*1.7-t)+
      noise(p*2.3+t);

      vec3 col = vec3(
        0.2 + 0.5*sin(n+time),
        0.4 + 0.5*sin(n+time*0.5),
        0.8 + 0.5*sin(n+time*0.2)
      );

      gl_FragColor = vec4(col,1.0);
    }
    `

    function createShader(type,source){
      const s = gl.createShader(type)
      gl.shaderSource(s,source)
      gl.compileShader(s)
      return s
    }

    const vs = createShader(gl.VERTEX_SHADER,vertex)
    const fs = createShader(gl.FRAGMENT_SHADER,fragment)

    const program = gl.createProgram()
    gl.attachShader(program,vs)
    gl.attachShader(program,fs)
    gl.linkProgram(program)

    gl.useProgram(program)

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER,buffer)

    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1,-1,
        1,-1,
        -1,1,
        1,1
      ]),
      gl.STATIC_DRAW
    )

    const pos = gl.getAttribLocation(program,"position")

    gl.enableVertexAttribArray(pos)

    gl.vertexAttribPointer(pos,2,gl.FLOAT,false,0,0)

    const timeLoc = gl.getUniformLocation(program,"time")
    const resLoc = gl.getUniformLocation(program,"resolution")

    function render(t){

      gl.uniform1f(timeLoc,t*0.001)
      gl.uniform2f(resLoc,canvas.width,canvas.height)

      gl.drawArrays(gl.TRIANGLE_STRIP,0,4)

      requestAnimationFrame(render)
    }

    requestAnimationFrame(render)

  },[])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:"absolute",
        inset:0,
        width:"100%",
        height:"100%",
        zIndex:-1
      }}
    />
  )
}