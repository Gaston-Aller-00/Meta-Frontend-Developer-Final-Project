import React from 'react'
import logo from "../images/Logo .svg"
 const Nav = () => {
  return (
    <nav>
        <a href='/' ><img src={logo} /></a>

        {/* mobile nav */}

        <div>
            <div className='bar'> </div>
            <div className='bar'> </div>
            <div className='bar'> </div>
        </div>
    </nav>
  )
}

export default Nav