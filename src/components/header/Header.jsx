import React from 'react'
import Cta from './Cta'
import './header.css'
import me from '../../assets/me.JPG'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>

      <div className="container header_container">
 <h5>Hello I'm</h5>
 <h1>Valentine Eke</h1>
 <h5 className="text-light"> Product manager</h5>
 <Cta/>
<div className="me">
<img src={me} alt="me" />
<HeaderSocials/>


</div>
<a href="#contact" className="scroll_down">Scroll Down</a>

        
      </div>


    </header>


  )
}

export default Header