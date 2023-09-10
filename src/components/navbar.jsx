import React, { useState } from 'react'
import NavModal from './navModal'

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false)
  return (
    <div className='pt-[51px] mb-[99px]'>
      {isOpen && <NavModal setisOpen={setisOpen} isOpen={isOpen}/>}
      <div className='flex items-center justify-between h-[72px] bg-[#232323] px-6'>
        <a href="/">
          <span className='text-[#8C61C0] text-[28px] font-bold hover:opacity-70 max-sm:text-[18px]'>Diyorbek Tursunov</span>
        </a>
        <div>
          <nav className='max-md:hidden'>
            <ul className='flex gap-[75px]'>
              <li>
                <a href="#" className='text-[16px] font-medium text-[#DADADA] uppercase hover:opacity-70'>My Projects</a>
              </li>
              <li>
                <a href="#" className='text-[16px] font-medium text-[#DADADA] uppercase hover:opacity-70'>About Me</a>
              </li>
              <li>
                <a href="#" className='text-[16px] font-medium text-[#DADADA] uppercase hover:opacity-70'>Cantact</a>
              </li>
            </ul>
          </nav>
          <button className='hidden max-md:block' onClick={() => setisOpen(!isOpen)}>Menu</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar