import React, { useState } from 'react'
import './style.css';
import Link from 'next/link';

const Header = () => {
  const [list, setList] = useState(false);
  const [comp, setComp] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    if(list){
      setList(false);
    }else if(!list){
      setList(true);
    }
  }

  const compClick = () => {
    if(comp){
      setComp(false);
    }else if(!comp){
      setComp(true);
    }
  }

  const menuClick = () => {
    setMenu(!menu);
  }

  return (
    <>
    <header>
      <div className="logo">
        <Link href="/">
          <img src="./logo.svg" alt="Logo" />
        </Link>
      </div>
      <img className='menuIcon' onClick={menuClick} src={menu ? './icon-close-menu.svg' : './icon-menu.svg'} alt="Menu Icon" />
      <nav className={menu ? 'open' : 'close'}>
        <div className="links">
          <div className='features-dropdown' onClick={handleClick}>
            <div className='dropdown'>
              <span>Features</span>
              { list ? <img src="./icon-arrow-up.svg" alt="arrow" /> : <img src="./icon-arrow-down.svg" alt="arrow" />}
            </div>
            { list ?
              <div className="feature-links">
              <Link href="/Todo">
                <img src="./icon-todo.svg" alt="todo icon" />
                Todo List
              </Link>
              <Link href="/Calender">
                <img src="./icon-calendar.svg" alt="calender icon" />
                Calender
              </Link>
              <Link href="/Reminder">
                <img src="./icon-reminders.svg" alt="reminder icon" />
                Reminder
              </Link>
              <Link href="/Planing">
                <img src="./icon-planning.svg" alt="planing icon" />
                Planing
              </Link>
            </div>
            : ""}
          </div>
          <div className='company-dropdown' onClick={compClick}>
            <div className="dropdown">
              <span>Company</span>
              { comp ? <img src="./icon-arrow-up.svg" alt="arrow" /> : <img src="./icon-arrow-down.svg" alt="arrow" />}
            </div>
            {
              comp ?
              <div className="company-links">
                <Link href="/History">History</Link>
                <Link href="/Team">Our Team</Link>
                <Link href="/Blog">Blog</Link>
              </div>
              :
              ""
            }
          </div>
          <Link href="/Careers">Careers</Link>
          <Link href="/About">About</Link>
        </div>
        <div className="authentication-btn">
          <button id="loginBtn">Login</button>
          <button id="registerBtn">Register</button>
        </div>
      </nav>
    </header>
    <div className={menu ? 'overlay open' : 'overlay'} onClick={menuClick}></div>
    </>
  )
}

export default Header
