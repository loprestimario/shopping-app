import React from 'react';

type Props = {
}

const NavBar: React.FC<Props> = ({ }) => {

  return (
      <>
        <div className="navbar">
          hello
        </div>
        <style jsx>{`
          .navbar {
            width: 100%;
            height: 80px;
            background-color: black;
            color: white;
          }
        `}</style>
      </>
  )
}

export default NavBar;