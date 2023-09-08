
import React, {useContext} from 'react';
import {context} from '../App'
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
function Body() {
  const {src, setSrc} = useContext(context)

  return (
    <div>
      <section className="container">
        <h5 style={{ color: "#09876c" }}><b>lets Ride</b></h5>
        <div className="image-container">
          {src.map((imageData, index) => (
            <div key={index}>
              {imageData.id} <Link to={`/dashboard/${imageData.id}`}>
                <img src={imageData.image} alt={`Image ${imageData.id}`} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Body;
