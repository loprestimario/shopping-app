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
            <a className={`navbar-logo ${asPath === '/' ? 'active' : ''}`} onClick={closeMobileMenu}>
              <span className="home-page">Web App</span>
              <span className="icon-container">
                  <FontAwesomeIcon icon={faRssSquare} size="1x"/>
                </span>
            </a>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FontAwesomeIcon icon={faTimes} size="1x"/> : <FontAwesomeIcon icon={faBars} size="1x"/>}
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
        .nav-menu.active {
          background: unset;
        }
        .nav-menu {
          display: grid;
          grid-template-columns: repeat(4, auto);
          grid-gap: 10px;
          list-style: none;
          text-align: center;
          width: 60vw;
          justify-content: end;
          margin-right: 2rem;
        }
        .nav-bar {
          color: dimgray;
          display: flex;
          align-items: center;
          text-decoration: none;
          padding: 0.5rem 1rem;
          height: 100%;
        }
        .nav-bar.active {
          color: black;
        }
        .nav-bar:hover {
          box-shadow: 0 3px white;
          margin-bottom: -4px;
          color: white;
          transition: all 0.2s ease-out;
        }
        @media (max-width: 600px) {
          .menu-icon {
            width: 25px;
            //background-color: red;
          }
          .nav-menu {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding: 200px 0;
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
            background: lightgray;
            left: 0;
            opacity: 1;
            transition: all 0.3s ease;
            z-index: 1;
          }
          .nav-bar {
            text-align: center;
            padding: 2rem;
            width: 100%;
            display: table;
          }
          .nav-bar:hover {
            background-color: gainsboro;
            color: #242424;
            border-radius: 4px;
            box-shadow: unset;
            margin: unset;
          }
        }
      `}</style>
    </>
  )
}

export default NavBar;