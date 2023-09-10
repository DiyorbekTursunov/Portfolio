import React from 'react'

const NavModal = ({setisOpen , isOpen}) => {
    return (
        <div className='bg-[#6c469c] fixed w-full h-screen hidden max-md:block'>
            <div className='absolute right-7 top-14'>
                <nav>
                    <ul className='flex flex-col gap-[25px]'>
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
            </div>
            <button className='hidden max-md:block absolute right-6 top-6'  onClick={() => setisOpen(!isOpen)}>Menu</button>
        </div>
    )
}

export default NavModal