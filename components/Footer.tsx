import React from "react";
import { faPhone, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FacebookLogo from "../public/icons/facebook.svg";
import InstagramLogo from "../public/icons/instagram.svg";

const Footer = () => {

  return (
    <>
      <div className="social-bar">
        <ul className="ul-social-bar">
          <li className="telephone-container">
            <a href="tel:+393407836169" target="">
              <span className="footer-icon"><FontAwesomeIcon icon={faPhone}/></span>
              CALL
            </a>
          </li>
          <li>
            <a href="mailto:Trinacria:alfiobluray@gmail.com" target="">
              <span className="footer-icon"><FontAwesomeIcon icon={faEnvelopeSquare}/></span>
              EMAIL
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/AlfioCataniaPhotographer/" target="">
              <span className="footer-icon"><FacebookLogo/></span>
              FACEBOOK
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/alfio_catania_fotografia/" target="_blank">
              <span className="footer-icon"><InstagramLogo/></span>
              INSTAGRAM
            </a>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .social-bar {
          font-family: ABeeZee, sans-serif;
          font-weight: 400;
          font-size: 10px;
          color: #887856;
          letter-spacing: 0em;
          background: linear-gradient(90deg, whitesmoke 0%, white 100%);
          bottom: 0;
          left: 0;
          box-shadow: 0 0 5px grey;
          display: flex;
          height: 80px;
          position: fixed;
          width: 100%;
        }
        .ul-social-bar {
          margin: 0;
          padding: 0;
          list-style: none;
          display: table;
          width: 100%;
        }
        li {
          padding: 1.08em;
          display: table-cell;
          vertical-align: middle;
          width: 25%;
          text-align: center;
          border-right: 1px solid transparent;
          letter-spacing: 0.1em;
        }
        li span {
          display: block;
          line-height: 1.2em;
          font-size: 1.2em;
        }
        a {
          text-decoration: none;
          color: #887856;
        }
        .footer-icon :global(svg) {
          fill: #887856;
          width: 1.2em;
          height: 1.2em;
          margin-bottom: 3px;
        }
        .telephone-container {
          display: none;
        }
        @media (max-width: 600px) {
          .telephone-container {
            display: table-cell;
          }
          .social-bar {
            height: 56px;
          }
        }
      `}</style>
    </>
  );

}

export default Footer;

