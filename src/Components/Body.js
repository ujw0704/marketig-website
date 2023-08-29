import React from 'react';
import img1 from './img/pexels-giorgio-de-angelis-1413412.jpg';
import img2 from './img/pexels-nishant-aneja-2393835.jpg';
import img3 from './img/pexels-oliver-sjöström-1122410.jpg';

import img5 from './img/pexels-pixabay-67557.jpg';
import img6 from "./img/pexels-saad-khan-3687139.jpg"

import img7 from "./img/pexels-jody-parks-4668487.jpg"
import imp8 from "./img/pexels-pixabay-210095.jpg"


function Body() {
  return (
    <div>
      <section className="container">
        <h5 style={{ color: "#09876c" }}><b>lets Ride</b></h5>
        <div className="image-container">
          <img src={img1} alt="Image 1" />
          <img src={img2} alt="Image 2" />
          <img src={img3} alt="Image 3" />
          {/* <img src={img4} alt="Image 4" /> */}
          <img src={img5} alt="Image 5" />
          <img src ={img6} alt="Image 6"/>
          <img src ={img7} alt="Image 7" />
        </div>
      </section>
    </div>
  );
}

export default Body;
