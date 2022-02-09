import React from "react";

const MapContainer = () => {


  return (
    <>
      <div className="mapouter">
         <div className="gmap_canvas">
           <iframe width="100%" height="350"
             id="gmap_canvas"
             src="https://maps.google.com/maps?q=catania%20castello%20ursino&t=&z=13&ie=UTF8&iwloc=&output=embed"
             frameBorder="0"
             scrolling="no"
             loading="lazy"
           ></iframe>
          <a href="https://fmovies-online.net">fmovies</a>
          <br/>
          <a href="https://www.embedgooglemap.net"></a>
        </div>
      </div>
      <style jsx>{`
        .mapouter {
          position: relative;
          text-align: right;
          //height: 500px;
          width: 600px;
          margin-left: 50px;
        }
        .gmap_canvas {
          overflow: hidden;
          background: none !important;
          //height: 500px;
          //width: 600px;
        }
        .gmap_canvas a {
          display: none;
        }
        @media (max-width: 600px) {
          .mapouter {
          position: relative;
          margin: auto;
          text-align: right;
          height: 350px;
          width: 90vw;
        }
        .gmap_canvas {
          overflow: hidden;
          background: none !important;
          height: 350px;
          width: 90vw;
        }
        }
      `}</style>
    </>
  );

}

export default MapContainer;

