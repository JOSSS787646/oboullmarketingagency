(function(){

const canvas = document.getElementById("c")
const hero = document.getElementById("hero")

if(!canvas || !hero) return

canvas.width = hero.offsetWidth
canvas.height = hero.offsetHeight

const gl = canvas.getContext("webgl")

if(!gl) return

function shader(type,src){

const s = gl.createShader(type)
gl.shaderSource(s,src)
gl.compileShader(s)

if(!gl.getShaderParameter(s,gl.COMPILE_STATUS)){
console.error(gl.getShaderInfoLog(s))
return null
}

return s
}

function program(vs,fs){

const p = gl.createProgram()

gl.attachShader(p,shader(gl.VERTEX_SHADER,vs))
gl.attachShader(p,shader(gl.FRAGMENT_SHADER,fs))

gl.linkProgram(p)

return p
}

const vs = `
attribute vec2 position;
varying vec2 uv;

void main(){

uv = position*0.5+0.5;

gl_Position = vec4(position,0.,1.);

}
`

const fs = `
precision highp float;

varying vec2 uv;
uniform float time;

float noise(vec2 p){
return sin(p.x)*sin(p.y);
}

void main(){

vec2 p = uv*4.0;

float flow =
sin(p.x + time*0.4) +
sin(p.y*1.3 - time*0.3) +
sin((p.x+p.y)*0.6 + time*0.2);

flow *= 0.3;

vec3 blue = vec3(0.1,0.55,1.0);
vec3 yellow = vec3(1.0,0.85,0.2);
vec3 white = vec3(1.0);

vec3 color = mix(blue,yellow,uv.x + flow);

color = mix(color,white,flow*0.3);

gl_FragColor = vec4(color,1.0);

}
`

const prog = program(vs,fs)

gl.useProgram(prog)

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

const pos = gl.getAttribLocation(prog,"position")

gl.enableVertexAttribArray(pos)

gl.vertexAttribPointer(pos,2,gl.FLOAT,false,0,0)

const timeLoc = gl.getUniformLocation(prog,"time")

let last = 0
const FPS = 30

function render(t){

if(t-last < 1000/FPS){
requestAnimationFrame(render)
return
}

last = t

gl.viewport(0,0,canvas.width,canvas.height)

gl.uniform1f(timeLoc,t*0.001)

gl.drawArrays(gl.TRIANGLE_STRIP,0,4)

requestAnimationFrame(render)

}

requestAnimationFrame(render)

window.addEventListener("resize",()=>{

canvas.width = hero.offsetWidth
canvas.height = hero.offsetHeight

})

})()