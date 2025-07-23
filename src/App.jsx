import {
  LayoutGridIcon as LuLayoutGrid,
  PhoneIcon as LuPhone,
  MailIcon as LuMail,
  MapPinIcon as LuMapPin,

} from "lucide-react"
import { CiFacebook, CiTwitter, CiLinkedin, CiInstagram } from "react-icons/ci"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Mission from "./components/mission"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import About from "./components/About"

const App = () => {
  return (
    <>
      <Header />
      <Hero/>
      <Services/>
      <Mission/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
