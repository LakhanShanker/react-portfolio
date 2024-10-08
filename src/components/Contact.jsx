import React from 'react'
import {CONTACT} from '../constants'
import { motion } from "framer-motion";
function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h1 className='my-10 text-center text-4xl'>Get in Touch</h1>
        <div className='text-center tracking-tighter'>
    <motion.p whileInView={{opacity:1, x:0}} initial={{x:-100, opacity:0}} transition={{duration:1}} className='my-4'>{CONTACT.address}</motion.p>
    <motion.p whileInView={{opacity:1, x:0}} initial={{x:100, opacity:0}} transition={{duration:1.5}} className='my-4'>{CONTACT.phoneNo}</motion.p>
    <a href='#'>{CONTACT.email}</a>
        </div>

    </div>
  )
}

export default Contact