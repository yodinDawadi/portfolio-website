import { useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case 'homeRef':
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'aboutRef':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projectsRef':
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contactsRef':
        contactsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };
  return (
    <>
<Navbar scrollToSection={scrollToSection}/>
<Home refProp={homeRef}/>
<About refProp={aboutRef}/>
<Projects refProp={projectsRef}/>
<Contact refProp={contactsRef} />
<Footer/>
    </>
  )
}

export default App
