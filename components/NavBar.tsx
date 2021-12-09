import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";

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
        <ul className="navbar-container">
          <li>
            <Link href='/'>
              <a className={`nav-bar ${asPath === '/' ? 'active' : ''}`}>Home</a>
            </Link>
          </li>
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
          <li>
            <Link href='/blog'>
              <a className={`nav-bar ${asPath === '/blog' ? 'active' : ''}`}>Blog</a>
            </Link>
          </li>
          <li>
            <Link href='/weddings'>
              <a className={`nav-bar ${asPath === '/weddings' ? 'active' : ''}`}>Weddings</a>
            </Link>
          </li>
        </ul>
      <style jsx>{`
        .navbar-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 80px;
          background-color: black;
          color: white;
          margin: 0;
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