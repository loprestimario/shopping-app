import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRssSquare } from '@fortawesome/free-solid-svg-icons'

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
            <i className={click ? "fas fa-times" : "fas fa-bars"}/>
          </div>
          <ul className="nav-menu">
            <li>
              <Link href='/about' passHref>
                <a className={`nav-bar ${asPath === '/about' ? 'active' : ''}`}>About</a>
              </Link>
            </li>
            <li>
              <Link href='/portofolio'>
                <a className={`nav-bar ${asPath === '/portofolio' ? 'active' : ''}`}>Portofolio</a>
              </Link>
            </li>
            {/*<li>*/}
            {/*  <Link href='/blog'>*/}
            {/*    <a className={`nav-bar ${asPath === '/blog' ? 'active' : ''}`}>Blog</a>*/}
            {/*  </Link>*/}
            {/*</li>*/}
            <li>
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
        .nav-menu {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        li {
          list-style: none;
          padding: 0rem 2rem;
        }
        .active {
          color: blue;
        }
      `}</style>
    </>
  )
}

export default NavBar;