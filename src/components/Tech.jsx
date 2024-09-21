import React from "react";
import {
  RiReactjsLine,
  RiJavascriptFill,
  RiNodejsFill,
  RiJavaFill,
} from "react-icons/ri";
import { BiLogoRedux, BiLogoGraphql, BiLogoMongodb } from "react-icons/bi";
import { motion } from "framer-motion";
function Tech() {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-10 text-center text-4xl">Technologies</h1>
      <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
        <motion.div variants={iconVariants(2.5)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavascriptFill className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div variants={iconVariants(2)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(5)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoRedux className="text-7xl text-purple-400" />
        </motion.div>
        <motion.div variants={iconVariants(3)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiNodejsFill className="text-7xl text-green-400" />
        </motion.div>
        <motion.div variants={iconVariants(6)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoGraphql className="text-7xl text-pink-400" />
        </motion.div>
        <motion.div variants={iconVariants(4)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoMongodb className="text-7xl text-green-400" />
        </motion.div>
        <motion.div variants={iconVariants(7.5)} initial='initial' animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavaFill className="text-7xl" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Tech;
