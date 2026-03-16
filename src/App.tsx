import './App.css'
import Intro from "./components/intro/Intro"
import Hero from "./components/hero/hero"
import SistemaIntervencion from "./components/SistemaIntervencion/SistemaIntervencion"
import ArquitecturaCrecimiento from "./components/ArquitecturaCrecimiento/ArquitecturaCrecimiento"
import TeamSection from "./components/TeamSection/TeamSection"
import SolicitarIntervencion from './components/SolicitarIntervencion/SolicitarIntervencion'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Hero />
      <Intro />
      <SistemaIntervencion />
      <ArquitecturaCrecimiento/>
      <TeamSection/>
      <SolicitarIntervencion/>
      <Footer/>
      <Navbar/>
    </>
  )

}

export default App