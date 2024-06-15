import React,{useState,useRef} from 'react'
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import menu from '../assets/menu-icon.svg'


  const Navbar = ({ scrollToSection}) => {
    const [popupHidden, setPopupHidden] = useState(false)
    const popupHandler = ()=>{
      setPopupHidden(!popupHidden)
    }
  return (
<>
{popupHidden && (<div className='font-poppins md:hidden bg-white z-30 h-screen flex items-center transform-center w-screen sticky top-0 flex-wrap'>
  <div className='w-screen h-12'>
    <button className=' h-10 w-10 text-2xl rounded-full ml-80' onClick={popupHandler}>x</button>
  </div>
  
<div className="font-poppins w-screen h-screen flex items-center transform-center">
      <ul className=' md:hidden flex items-center justify-center flex-wrap w-screen gap-5'>
        <li onClick={() => scrollToSection('homeRef')} className='w-screen text-center cursor-pointer text-xl font-medium text-stone-800 hover:text-blue-400'>Home</li>
        <li onClick={() => scrollToSection('aboutRef')} className='w-screen text-center cursor-pointer text-xl font-medium text-stone-800 hover:text-blue-400'>About</li>
        <li onClick={() => scrollToSection('projectsRef')} className='w-screen text-center cursor-pointer text-xl font-medium text-stone-800 hover:text-blue-400'>Projects</li>
        <li onClick={() => scrollToSection('contactsRef')} className='w-screen text-center cursor-pointer text-xl font-medium text-stone-800 hover:text-blue-400'>Contact</li>
      </ul>
    </div>
</div>)}

<div className="font-poppins w-screen shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white h-20 flex justify-center md:justify-around items-center sticky top-0 z-20">
    <p className=' w-full md:w-1/2 text-left text-xl md:text-3xl cursor-pointer font-bold ml-5 md:ml-10 text-stone-800'>yodin.dev</p>
    <div className=' ml-36 w-full  flex justify-end items-center md:hidden'>
    <button><img src={menu} alt="menu" height={20} width={20} onClick={popupHandler}/></button>
    </div>
    <div className="w-1/2">
      <ul className='hidden md:flex md:items-center md:justify-end md:gap-10 md:mr-10'>
        <li onClick={() => scrollToSection('homeRef')} className='cursor-pointer text-xl font-medium text-stone-800 hover:text-blue-400'>Home</li>
        <li onClick={() => scrollToSection('aboutRef')} className='cursor-pointer text-xl font-medium text-stone-800 hover:text-blue-400'>About</li>
        <li onClick={() => scrollToSection('projectsRef')} className='cursor-pointer text-xl font-medium text-stone-800 hover:text-blue-400'>Projects</li>
        <li onClick={() => scrollToSection('contactsRef')} className='cursor-pointer text-xl font-medium text-stone-800 hover:text-blue-400'>Contact</li>
      </ul>
    </div>
</div>
</>
  )
}
export default Navbar;
