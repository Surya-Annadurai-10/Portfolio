import React from 'react'

const SkillsCard = (props) => {
  return (
    <div className='bg-[#000000]   z-[5] relative border border-[#5c5c5c] text-white  flex items-center justify-center flex-col gap-5 w-[20vw] h-[50vh] rounded '>
        <h1 className="font-['milker']  absolute left-0 -z-[10] bottom-[85%] num text-[5vw]">{props.num}</h1>
        <div className=' grid place-items-center'>
            <img className='w-[70%]' src={props.img} alt="" />
        </div>
        <div>
            <h1 className='text-3xl font-bold'>{props.heading}</h1>
        </div>
    </div>
  )
}

export default SkillsCard