import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faRssSquare } from '@fortawesome/free-solid-svg-icons'

type Props = {}

const NavBar: React.FC<Props> = ({}) => {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const { asPath } = useRouter()

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link href='/'>
            <a className={`navbar-logo ${asPath === '/' ? 'active' : ''}`}>
              <span className="home-page">Web App</span>
              <span className="icon-container">
                  <FontAwesomeIcon icon={faRssSquare} size="1x"/>
                </span>
            </a>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FontAwesomeIcon icon={faTimes} size="1x"/> : <FontAwesomeIcon icon={faBars} size="1x"/> }
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li onClick={closeMobileMenu}>
              <Link href='/about' passHref>
                <a className={`nav-bar ${asPath === '/about' ? 'active' : ''}`}>About</a>
              </Link>
            </li>
            <li onClick={closeMobileMenu}>
              <Link href='/portofolio'>
                <a className={`nav-bar ${asPath === '/portofolio' ? 'active' : ''}`}>Portofolio</a>
              </Link>
            </li>
            {/*<li>*/}
            {/*  <Link href='/blog'>*/}
            {/*    <a className={`nav-bar ${asPath === '/blog' ? 'active' : ''}`}>Blog</a>*/}
            {/*  </Link>*/}
            {/*</li>*/}
            <li onClick={closeMobileMenu}>
              <Link href='/contact'>
                <a className={`nav-bar ${asPath === '/contact' ? 'active' : ''}`}>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <style jsx>{`
        .navbar {
          display: flex;
          width: 100%;
          height: 80px;
          background: linear-gradient(90deg, darkgrey 0%, lightgray 100%);
          margin: 0;
          font-size: 1.1rem;
          position: sticky;
          top: 0;
          z-index: 999;
        }
        .navbar-container {
          width: 100%;
          margin: 0 30px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .navbar-logo {
          display: flex;
          align-items: center;
        }
        .home-page {
          width: 90px;
        }
        .icon-container {
          width: 35px;
        }
        li {
          list-style: none;
          padding: 0rem 2rem;
        }
        .active {
          color: blue;
        }
        .menu-icon {
          width: 50px;
          //background-color: red;
        }
        .nav-menu {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 90vh;
          position: absolute;
          top: 80px;
          left: -100%;
          margin: 0;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .nav-menu.active {
          background: #242222;
          left: 0;
          opacity: 1;
          transition: all 0.3s ease;
          z-index: 1;
        }
        @media (min-width: 600px) {
          .menu-icon {
            display: none;
          }
          .nav-menu.active {
            background: unset;
          }
          .nav-menu {
            position: unset;
            background: unset;
            height: 80px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          }
          
        }
      `}</style>
    </>
  )
}

export default NavBar;