import React,{useRef} from 'react'
import Contact from './Contact'

  const Projects = ({ refProp }) => {
  return (
    <>
    <div ref={refProp} className="font-poppins w-screen h-96 flex items-center justify-center md:h-screen">
        <p className='text-stone-800 text-center text-3xl md:text-left md:text-5xl font-bold'>New projects comming soon...🤡</p>
    </div>
    <hr />
    </>
  )
}
export default Projects;
