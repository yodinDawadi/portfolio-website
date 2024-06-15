import React,{useRef} from 'react'
import logo from '../assets/pp.jpg'
import logo1 from '../assets/html-css.svg'
import logo2 from '../assets/react-1.svg'
import logo3 from '../assets/js-ts.svg'
import logo4 from '../assets/tailwindcss.svg'
import logo5 from '../assets/bootstrap-icon.svg'
import logo6 from '../assets/git-icon.svg'


  const Home = ({ refProp }) => {
  return (
    <>
    <div ref={refProp} className="font-poppins w-screen flex items-center justify-center flex-wrap  text-stone-800 h-screen">
      <div className=' flex items-center w-full md:hidden md:w-1/3 justify-center'>
    <img className='rounded-full float h-52 w-52 md:h-80 md:w-80' src={logo} />
   </div>
      <div className=' w-full text-center md:text-left md:w-1/3 flex items-center h-48 md:h-96 flex-wrap'>
    <p className='text-4xl md:text-6xl font-bold w-full'>Front-End React Developer.👋</p>
    <p className='w-full text-sm md:text-xl'>Hi, I'm Yodin Dawadi. A passionate Front-end React Developer from Jhapa, Nepal. 📍</p>
     </div>
   <div className=' hidden md:flex items-center w-full md:w-1/3 justify-center'>
    <img className='rounded-full float h-40 w-40 md:h-80 md:w-80' src={logo} />
   </div>
<div className='flex items-center justify-center md:w-full  md:h-64 gap-1 md:gap-5 ml-5 md:ml-10 mt-10 md:mt-20'>
      <p className=' text-xl md:text-2xl font-semibold'>Tech Stack |</p>
      <img src={logo1} className='md:h-24 md:w-24 h-12 w-12' />
      <img src={logo3} className='md:h-24 md:w-24 h-12 w-12'  />
      <img src={logo2} className='rounded-md md:w-12 md:h-12 h-6 w-6' />
      <img src={logo4} className='rounded-md md:w-12 md:h-12 h-6 w-6' />
      <img src={logo5} className='rounded-md md:w-12 md:h-12 h-6 w-6' />
      <img src={logo6} className='rounded-md md:w-12 md:h-12 h-6 w-6' />
     </div>
    </div>
   <hr />
    </>
  )
}

export default Home;
