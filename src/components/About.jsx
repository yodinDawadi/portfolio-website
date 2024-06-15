import React,{useRef} from 'react'
import frontend from '../assets/frontend.jpg'

  const About = ({ refProp }) => {
  return (
    <>
    <div ref={refProp} className='font-poppins w-screen md:h-screen flex items-center justify-center'>
      <div className='bg-white w-full md:w-3/5 rounded-3xl flex flex-wrap h-1/2'>
      <div className='h-full w-full md:w-1/2'>
        <img className='rounded-3xl w-full md:w-96 md:h-96'  src={frontend} alt="frontend_image"/>
      </div>
        <div className=' h-full w-full text-center md:text-left md:w-1/2'>
        <p className='font-semibold text-blue-400 text-2xl mb-5'>About me</p>
        <p className='font-bold text-stone-800 text-2xl md:text-4xl mb-5'>Front-end Developer based in Jhapa, Nepal 📍</p>
        <p className='text-stone-600 text-sm md:text-base'>Hey, my name is Yodin, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.<br /><br />My main stack currently is React.js in combination with Tailwind CSS and JavaScript.</p>
        </div>
      </div>
    </div>
    <hr />
    </>
  )
}

export default About;
