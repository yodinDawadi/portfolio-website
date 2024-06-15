import React,{useRef} from 'react'
import envelope from '../assets/envelope.svg'
import location from '../assets/location.svg'

  const Contacts = ({ refProp }) => {
  return (
    <>
    <div ref={refProp} className=' font-poppins w-screen h-96 md:h-screen flex items-center justify-center'>
     <div className=' w-4/5 md:w-1/2 h-3/5 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex items-center justify-center flex-wrap rounded-3xl'>
     <p className=' text-xl md:text-2xl text-blue-400 w-full text-center'>Contact</p>
     <p className=' text-2xl md:text-3xl text-stone-800 font-bold w-full text-center'>Don't be shy! Hit me up! 👇</p>
     <div className='w-full'>
        <a className=' w-full gap-10 flex items-center justify-center mb-5' target='_blank' href="mailto:yodindawadi10@gmail.com">
        <img src={envelope} className='h-4 w-7 md:h-7 md:w-7' />
        <p className='md:text-base text-xs text-stone-600 hover:text-blue-400'>yodindawadi10@gmail.com</p>
        </a>
        
     </div>
     </div>
    </div>
    <hr />
    </>
  )
}
export default Contacts;
