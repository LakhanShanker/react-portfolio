import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { DiYii } from "react-icons/di";
import { FaXTwitter } from 'react-icons/fa6'
function Navbar() {

  return (
    <div className='flex items-center justify-between py-3'>
<div>
<DiYii size={36}/>
</div>
<div className='m-8 flex items-center justify-center gap-4 text-2xl'>
<FaLinkedin onClick={()=>window.open('https://www.linkedin.com/in/lakhan-shanker-79a8a0190/')}/>
<FaGithub onClick={()=>window.open('https://github.com/LakhanShanker')}/>
<FaXTwitter onClick={()=>window.open('https://x.com/LShanker67695')}/>
<FaInstagram onClick={()=>window.open('https://www.instagram.com/lakhanshanker/')}/>
</div>
    </div>
  )
}

export default Navbar