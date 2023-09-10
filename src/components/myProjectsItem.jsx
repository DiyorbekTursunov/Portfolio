import React from 'react'

const MyProjectsItem = ({img , name , link , link_Git_hub , description}) => {
    return (
        <div className='bg-[#232323] flex gap-[26px] justify-start max-md:flex-col relative'>
            <a target='_blank' href={link}>
                <img src={img} alt="Project img" className='lg:max-w-[412px] lg:h-[240px] md:h-[221.859px] md:max-w-[412px] max-md:w-full object-fill' title='Go to the web site' />
            </a>
            <div className='text-[#fff] py-5 text-[18px] flex flex-col max-md:px-4'>
                <h3 className='text-[22px] font-medium mb-6'>Name: {name}</h3>
                <a target='_blank' href={link} className='font-semibold text-[#6598ff]'>Link Web site</a>
                <a target='_blank' href={link_Git_hub} className='font-semibold text-[#6598ff]'>Link Git Hub</a>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default MyProjectsItem