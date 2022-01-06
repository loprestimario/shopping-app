import React from 'react';

type Props = {}

const HeroSection: React.FC<Props> = ({}) => {

  return (
    <>
      <div className='hero-container'>
        <video src='/videos/video-1.mov' autoPlay loop muted/>
      </div>
      <style jsx>{`
        video {
          object-fit: cover;
          width: 100%;
          height: 100%;
          position: fixed;
          z-index: -1;
        }
        .hero-container {
          /* background: url('/images/img-home.jpg') center center/cover no-repeat; */
          height: 100vh;
          width: 100%;
          box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
          object-fit: contain;
        }
        @media (max-width: 600px) {
        }
      `}</style>
    </>
  )
}

export default HeroSection;