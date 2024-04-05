import { useState } from 'react'
import './App.css'
import Navbar from './Header/Navbar/Navbar'
import Hero from './Header/Hero/Hero'
import Brands from './components/Brands/Brands'
import About from './components/About/About'
import Services from './components/Services/Services'
import Seo from './components/Seo/Seo'
import Team from './components/Team/Team'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  once: false,
});

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <Brands/>
    <About/>
    <Services/>
    <Seo/>
    <Team/>
     
    </>
  )
}

export default App
