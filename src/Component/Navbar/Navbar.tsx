import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './Navbar.css'
import logo from '../../Assets/GPT-3.svg'


type NavbarProps = {
  menu: {
    id: number,
    title: string,
    href: string,
  }[]
}




const Navbar = ({ menu }: NavbarProps) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className="gpt3__navbar-links_container">
          {menu.map((item) => (
            <p key={item.id}><a href={item.href}>{item.title}</a></p>

          ))}
        </div>
      </div>

      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => { setToggleMenu(prev => !prev) }} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => { setToggleMenu(prev => !prev) }} />
        }

        {toggleMenu && (
          <div className='gpt3__navbar-bar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container'>
              {menu.map((item) => (
                <p key={item.id}><a href={item.href}>{item.title}</a></p>

              ))}
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>)}
      </div>
    </div>
  )
}

export default Navbar