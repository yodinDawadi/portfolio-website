import React from 'react'
import facebook from '../assets/facebook.svg'
import insta from '../assets/insta.svg'
import github from '../assets/github.svg'
export default function Footer() {
  return (
    <>
    <div className='font-poppins h-12 md:h-24 bg-black flex'>
        <div className='w-2/3 md:w-1/2 flex items-center justify-center'>
            <p className=' text-xs md:text-2xl text-white'>
      Copyright © 2024. All rights are reserved
      </p>
        </div>

        <div className='w-1/3 md:w-1/2 flex items-center justify-center gap-2 md:gap-10'>
            <a href="https://www.facebook.com/profile.php?id=61556957793988" target='_blank'><img src={facebook} className='md:h-9 md:w-9 h-4 w-4'/></a>
            <a href="https://www.instagram.com/dawadi.yodinn/" target='_blank'><img src={insta} className='md:h-9 md:w-9 h-4 w-4'/></a>
            <a href="https://github.com/yodinDawadi" target='_blank'><img src={github} className='md:h-9 md:w-9 h-4 w-4'/></a>
        </div>
      
    </div>
    </>
  )
}
