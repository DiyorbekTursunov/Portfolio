import React from 'react'
import GitHub from '../components/images/github.png'
import phone from '../components/images/phone.png'
import email from '../components/images/email.png'
const ContactMe = () => {
  return (
    <div className='pb-[133px]'>
      <h3 className='text-[#fff] text-[20px] font-medium mb-[34px]'>Contact me</h3>
      <div className='text-[#fff] text-[18px] flex flex-col gap-[45px] max-sm:gap-6 font-semibold px-[30px] py-[33px] rounded-lg bg-[#232323]'>
        <div className='flex max-sm:flex-col max-sm:items-center max-sm:gap-6 justify-between'>
          <div className='flex items-center max-sm: gap-4'>
            <img src={GitHub} alt="github logo" />
            <a href="https://github.com/DiyorbekTursunov" target='_blank'>Git hub</a>
          </div>
          <div className='flex items-center gap-4'>
            <img src={phone} alt="github logo" />
            <p >+998 90 120 9387</p>
          </div>
        </div>
        <div className='flex justify-between max-sm:flex-col max-sm:items-center max-sm:gap-3 hidden'>
          <div className='flex justify-center gap-4'>
            <img src={email} alt="github logo" />
            <a target='_blank' href="https://diyorbektursunov570@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe