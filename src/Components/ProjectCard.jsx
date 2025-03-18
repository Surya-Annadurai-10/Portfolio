
import React from 'react'

const ProjectCard = (props) => {
  return (
   <a href={props.hostLink}>
     <div className='min-w-[80%] projectCard absolute rounded-2xl min-h-[75%] '>
    <img className='w-full h-full rounded-2xl absolute z-1 ' src={props.img} alt="" />
    <div className='absolute rounded-2xl w-full h-full left-0 top-0 right-0 bg-linear-to-t from-black via-30% to-transparent z-2'></div>
    <div className='flex items-center justify-between w-full h-[30%] px-10 absolute bottom-0 z-5'>
      <h1 className='text-white projectname font-bold text-[5rem]'>{props.name}</h1>
      <div className='flex items-center  justify-center gap-4'>
       {
        props.tech.map((ele , i) =>{
            return <img className='w-[50px]' src={ele} alt={`${i}`}/>
        })
       }
      </div>
    </div>
</div>
   </a>
  )
}

export default ProjectCard