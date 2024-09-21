import React from 'react'
import {PROJECTS} from '../constants'
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-10 text-center text-4xl'>Projects</h1>
    <div>
        {
            PROJECTS.map((project,index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{x:-100, opacity:0}} transition={{duration:1}} className='w-full lg:w-1/4'>
                    <img src={project.image} width={150} height={150} className='mb-6 rounded' alt={project.title} />
                    </motion.div>
                    <motion.div whileInView={{opacity:1, x:0}} initial={{x:100, opacity:0}} transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
                <h6 className='mb-1 font-semibold' style={{cursor:'pointer'}} onClick={()=>window.open(project.url)}>
                    <span style={{display:'flex', alignItems:'center'}}>
                    {project.title} 
                <GoArrowUpRight  style={{marginTop:2, marginLeft:5}}/>
                </span>
                </h6>
                <p className='mb-4 text-neutral-400'>{project.description}</p>
                {
                    project.technologies.map((tech,index)=> (
                        <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>
                            {tech}
                        </span>
                    ))
                }
                    </motion.div>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default Projects